"use client";

import {
  type CSSProperties,
  type PointerEvent,
  type WheelEvent,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { FiMaximize2, FiMinus, FiPlus, FiX } from "react-icons/fi";
import { Icon } from "@/components/ui/icon-tile";
import { Modal } from "@/components/ui/modal";
import { cn } from "@/utils/cn";

const DEFAULT_HEIGHT = "clamp(320px, 56vh, 560px)";

function useMermaidSvg(chart: string) {
  const reactId = useId();
  const [svg, setSvg] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function draw() {
      try {
        const mermaid = (await import("mermaid")).default;
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "strict",
          suppressErrorRendering: true,
          theme: "default",
          themeVariables: {
            fontFamily: '"Manrope", "Avenir Next", Avenir, sans-serif',
          },
        });
        const renderId = `mermaid-${reactId.replace(/[^a-zA-Z0-9]/g, "")}`;
        const { svg: output } = await mermaid.render(renderId, chart);
        if (!cancelled) setSvg(output);
      } catch {
        if (!cancelled) setFailed(true);
      }
    }

    draw();
    return () => {
      cancelled = true;
    };
  }, [chart, reactId]);

  return { svg, failed };
}

function useDragScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, x: 0, y: 0, left: 0, top: 0 });

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || event.button !== 0 || event.pointerType === "touch") return;
    drag.current = {
      active: true,
      x: event.clientX,
      y: event.clientY,
      left: el.scrollLeft,
      top: el.scrollTop,
    };
    el.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || !drag.current.active) return;
    el.scrollLeft = drag.current.left - (event.clientX - drag.current.x);
  };

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    drag.current.active = false;
    if (el.hasPointerCapture(event.pointerId)) el.releasePointerCapture(event.pointerId);
  };

  return {
    ref,
    onPointerDown,
    onPointerMove,
    onPointerUp: endDrag,
    onPointerCancel: endDrag,
  };
}

function DiagramSurface({
  svg,
  failed,
  label,
  className,
  style,
}: {
  svg: string | null;
  failed: boolean;
  label: string;
  className?: string;
  style?: CSSProperties;
}) {
  const { ref, ...handlers } = useDragScroll();

  return (
    <div
      {...handlers}
      ref={ref}
      aria-label={label}
      className={cn(
        "flex min-w-0 cursor-grab touch-pan-x touch-pan-y select-none items-start overflow-auto bg-white active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        className,
      )}
      role="img"
      style={style}
      tabIndex={0}
    >
      {svg ? (
        <div
          aria-hidden="true"
          className="w-max [&_svg]:h-auto [&_svg]:min-w-[520px] [&_svg]:max-w-none"
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      ) : (
        <p className="m-auto text-xs text-muted">
          {failed ? "Diagram unavailable." : "Rendering diagram…"}
        </p>
      )}
    </div>
  );
}

const MIN_ZOOM = 0.15;
const MAX_ZOOM = 3;

function DiagramViewer({
  svg,
  failed,
  label,
  onClose,
}: {
  svg: string | null;
  failed: boolean;
  label: string;
  onClose: () => void;
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const svgHostRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, x: 0, y: 0, left: 0, top: 0 });
  const [diagramSize, setDiagramSize] = useState({ width: 0, height: 0 });
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });
  const [zoomOverride, setZoomOverride] = useState<number | null>(null);
  const fitZoom = diagramSize.width && viewportSize.width
    ? Math.min(1, Math.max(MIN_ZOOM, (viewportSize.width - 64) / diagramSize.width))
    : 1;
  const zoom = zoomOverride ?? fitZoom;

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const observer = new ResizeObserver(([entry]) => {
      setViewportSize({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      });
    });
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const renderedSvg = svgHostRef.current?.querySelector("svg");
    if (!renderedSvg) return;

    const viewBox = renderedSvg.viewBox.baseVal;
    const width = viewBox.width || Number.parseFloat(renderedSvg.getAttribute("width") ?? "");
    const height = viewBox.height || Number.parseFloat(renderedSvg.getAttribute("height") ?? "");
    if (!width || !height) return;

    renderedSvg.style.maxWidth = "none";
    renderedSvg.style.width = "100%";
    renderedSvg.style.height = "100%";
    setDiagramSize({ width, height });
  }, [svg]);

  const scaledWidth = diagramSize.width * zoom;
  const scaledHeight = diagramSize.height * zoom;
  const canvasStyle: CSSProperties = {
    width: Math.max(viewportSize.width, scaledWidth),
    height: Math.max(viewportSize.height, scaledHeight),
  };
  const svgStyle: CSSProperties = {
    width: scaledWidth || undefined,
    height: scaledHeight || undefined,
  };

  const centerViewport = () => {
    requestAnimationFrame(() => {
      const viewport = viewportRef.current;
      if (!viewport) return;
      viewport.scrollLeft = Math.max(0, (viewport.scrollWidth - viewport.clientWidth) / 2);
      viewport.scrollTop = Math.max(0, (viewport.scrollHeight - viewport.clientHeight) / 2);
    });
  };

  const changeZoom = (nextZoom: number) => {
    setZoomOverride(Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, nextZoom)));
    centerViewport();
  };

  const fitDiagram = () => {
    setZoomOverride(null);
    viewportRef.current?.scrollTo({ left: 0, top: 0 });
  };

  const onWheel = (event: WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    changeZoom(zoom * Math.exp(-event.deltaY * 0.001));
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;
    if (!viewport || event.button !== 0 || event.pointerType === "touch") return;
    drag.current = {
      active: true,
      x: event.clientX,
      y: event.clientY,
      left: viewport.scrollLeft,
      top: viewport.scrollTop,
    };
    viewport.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;
    if (!viewport || !drag.current.active) return;
    viewport.scrollLeft = drag.current.left - (event.clientX - drag.current.x);
    viewport.scrollTop = drag.current.top - (event.clientY - drag.current.y);
  };

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    drag.current.active = false;
    if (viewport.hasPointerCapture(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <>
      <div className="flex min-h-14 items-center justify-between gap-3 border-b border-navy/10 bg-white/45 px-4 py-2.5 backdrop-blur-xl max-mobile:min-h-12 max-mobile:px-3">
        <span className="min-w-0 truncate text-xs font-bold tracking-[0.03em] text-navy">
          Diagram viewer
        </span>
        <div aria-label="Diagram zoom controls" className="flex shrink-0 items-center gap-1.5" role="toolbar">
          <button
            aria-label="Zoom out"
            className="inline-grid size-9 place-items-center rounded-[0.35rem] border border-line bg-white/70 text-navy transition-colors hover:bg-white hover:text-blue-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:cursor-not-allowed disabled:opacity-40"
            onClick={() => changeZoom(zoom / 1.2)}
            disabled={zoom <= MIN_ZOOM}
            type="button"
          >
            <Icon icon={FiMinus} size="sm" />
          </button>
          <span aria-live="polite" className="w-12 text-center text-[0.72rem] font-semibold tabular-nums text-muted">
            {Math.round(zoom * 100)}%
          </span>
          <button
            aria-label="Zoom in"
            className="inline-grid size-9 place-items-center rounded-[0.35rem] border border-line bg-white/70 text-navy transition-colors hover:bg-white hover:text-blue-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:cursor-not-allowed disabled:opacity-40"
            onClick={() => changeZoom(zoom * 1.2)}
            disabled={zoom >= MAX_ZOOM}
            type="button"
          >
            <Icon icon={FiPlus} size="sm" />
          </button>
          <button
            aria-label="Fit diagram to viewer"
            className="ml-1 rounded-[0.35rem] border border-line bg-white/70 px-2.5 py-2 text-[0.72rem] font-bold text-navy transition-colors hover:bg-white hover:text-blue-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:cursor-not-allowed disabled:opacity-40"
            onClick={fitDiagram}
            disabled={!diagramSize.width || !viewportSize.width}
            type="button"
          >
            Fit
          </button>
          <button
            aria-label="Close full screen diagram"
            className="ml-1 inline-grid size-9 place-items-center rounded-[0.35rem] border border-line bg-white/80 text-navy shadow-sm transition-colors hover:bg-white hover:text-blue-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            onClick={onClose}
            type="button"
          >
            <Icon icon={FiX} size="md" />
          </button>
        </div>
      </div>

      <div
        ref={viewportRef}
        aria-label={label}
        className="min-h-0 min-w-0 flex-1 cursor-grab touch-pan-x touch-pan-y select-none overflow-auto overscroll-contain bg-white/20 active:cursor-grabbing [scrollbar-width:thin] [scrollbar-color:var(--color-ice-dim)_transparent]"
        onPointerCancel={endDrag}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onWheel={onWheel}
        role="img"
        tabIndex={0}
      >
        {svg ? (
          <div className="grid place-items-center" style={canvasStyle}>
            <div
              aria-hidden="true"
              className="[&_svg]:block [&_svg]:max-w-none"
              ref={svgHostRef}
              style={svgStyle}
              dangerouslySetInnerHTML={{ __html: svg }}
            />
          </div>
        ) : (
          <p className="grid h-full place-items-center text-sm text-muted">
            {failed ? "Diagram unavailable." : "Rendering diagram…"}
          </p>
        )}
      </div>
    </>
  );
}

export function MermaidDiagram({
  chart,
  label,
  height = DEFAULT_HEIGHT,
}: {
  chart: string;
  label: string;
  height?: string;
}) {
  const { svg, failed } = useMermaidSvg(chart);
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <div className="relative">
        <DiagramSurface
          className="rounded-[0.35rem] border border-line p-4 max-mobile:p-3"
          failed={failed}
          label={label}
          style={{ height }}
          svg={svg}
        />
        <button
          aria-label="Open diagram full screen"
          className="absolute top-2 right-2 inline-grid size-8 place-items-center rounded-[0.35rem] border border-line bg-white/90 text-navy shadow-sm backdrop-blur transition-colors hover:bg-white hover:text-blue-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
          onClick={() => setOpen(true)}
          ref={triggerRef}
          type="button"
        >
          <Icon icon={FiMaximize2} size="sm" />
        </button>
      </div>

      <Modal
        className="h-[min(92dvh,1000px)] w-[min(96vw,1440px)]"
        label={label}
        onClose={() => setOpen(false)}
        open={open}
      >
        <DiagramViewer
          failed={failed}
          label={label}
          onClose={() => setOpen(false)}
          svg={svg}
        />
      </Modal>
    </>
  );
}
