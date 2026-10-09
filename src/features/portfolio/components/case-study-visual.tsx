import { Icon } from "@/components/ui/icon-tile";
import {
  FiArrowRight,
  FiCpu,
  FiDatabase,
  FiMessageSquare,
} from "react-icons/fi";

function FlowNode({ title, detail, icon }: { title: string; detail: string; icon: "message" | "cpu" | "data" }) {
  const Glyph = icon === "message" ? FiMessageSquare : icon === "cpu" ? FiCpu : FiDatabase;

  return (
    <div className="grid min-h-[118px] content-center gap-2.5 border border-line bg-white/85 p-4 max-wide:min-h-[108px] max-wide:px-2 max-wide:py-3 max-mobile:min-h-[95px] max-mobile:gap-2 max-mobile:px-1.5 max-mobile:py-2">
      <span className="inline-grid size-8 place-items-center rounded-[0.35rem] bg-blue-deep text-white max-mobile:size-[1.65rem]">
        <Icon icon={Glyph} className="size-[1.05rem] max-mobile:size-4" />
      </span>
      <strong className="text-[0.77rem] leading-[1.3] text-navy max-mobile:text-[0.64rem]">
        {title}
      </strong>
      <span className="text-[0.68rem] leading-[1.4] text-muted max-mobile:text-[0.58rem]">
        {detail}
      </span>
    </div>
  );
}

function OrderAssistantVisual() {
  return (
    <div className="grid gap-4" role="img" aria-label="Illustrative flow from a natural-language request through an AI layer to an order action">
      <p className="text-[0.75rem] font-extrabold tracking-[0.12em] text-navy uppercase">
        Order assistant · system flow
      </p>
      <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 max-wide:gap-1 max-mobile:gap-1">
        <FlowNode detail="Order intent" icon="message" title="Natural language" />
        <Icon icon={FiArrowRight} tone="deep" className="size-4 max-mobile:size-3" />
        <FlowNode detail="LLM · RAG" icon="cpu" title="AI layer" />
        <Icon icon={FiArrowRight} tone="deep" className="size-4 max-mobile:size-3" />
        <FlowNode detail="Connected services" icon="data" title="Order action" />
      </div>
    </div>
  );
}

function ReportingVisual() {
  return (
    <div
      className="grid gap-[1.15rem] text-white"
      role="img"
      aria-label="Verified NICE reporting performance improvement of 40 percent and frontend performance improvement of more than 30 percent"
    >
      <p className="text-[0.74rem] font-extrabold tracking-[0.12em] text-ice uppercase">
        NICE · verified performance
      </p>
      <div className="grid grid-cols-2 border-y border-white/25">
        <div className="py-6 pr-4">
          <strong className="block text-[clamp(2.8rem,5vw,4.4rem)] leading-[1.05] font-[770] tracking-[-0.07em] tabular-nums max-mobile:text-[2.7rem]">
            40%
          </strong>
          <span className="mt-2 block text-[0.83rem] leading-[1.5] text-ice max-mobile:text-[0.72rem]">
            Reporting performance improvement
          </span>
        </div>
        <div className="border-l border-white/25 py-6 pl-5">
          <strong className="block text-[clamp(2.8rem,5vw,4.4rem)] leading-[1.05] font-[770] tracking-[-0.07em] tabular-nums max-mobile:text-[2.7rem]">
            30%+
          </strong>
          <span className="mt-2 block text-[0.83rem] leading-[1.5] text-ice max-mobile:text-[0.72rem]">
            Frontend performance improvement
          </span>
        </div>
      </div>
    </div>
  );
}

function PlatformVisual() {
  return (
    <div className="grid content-center gap-5" role="img" aria-label="Illustrative dynamic data visualization representing COSMON project scope">
      <p className="text-[0.75rem] font-extrabold tracking-[0.12em] text-navy uppercase">
        Dynamic data visualization
      </p>
      <div className="border border-line bg-white shadow-[0_12px_28px_rgb(20_58_100_/_8%)]">
        <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3 text-[0.72rem] font-bold text-ink-soft">
          <span>Platform view · illustrative</span>
          <span aria-hidden="true" className="flex gap-1">
            <i className="size-1.5 rounded-full bg-ice-dim" />
            <i className="size-1.5 rounded-full bg-ice-dim" />
            <i className="size-1.5 rounded-full bg-ice-dim" />
          </span>
        </div>
        <svg aria-hidden="true" className="block h-auto w-full p-4" viewBox="0 0 480 200" fill="none" focusable="false">
          <path d="M18 20H462M18 66H462M18 112H462M18 158H462" className="stroke-line" />
          <path d="M18 18V166M106 18V166M194 18V166M282 18V166M370 18V166M462 18V166" className="stroke-line" />
          <path d="M20 138C61 134 69 78 111 91S170 143 203 119s38-77 78-62 44 78 78 60 54-67 104-60" className="stroke-blue" strokeWidth="4" strokeLinecap="round" />
          <path d="M20 151C58 143 75 126 111 131s56-28 91-22 55 31 88 17 49-30 82-25 54 23 88 12" className="stroke-ice-dim" strokeWidth="3" strokeLinecap="round" />
          <circle cx="111" cy="91" r="5" className="fill-white stroke-blue" strokeWidth="3" />
          <circle cx="282" cy="57" r="5" className="fill-white stroke-blue" strokeWidth="3" />
          <circle cx="454" cy="58" r="5" className="fill-white stroke-blue" strokeWidth="3" />
        </svg>
      </div>
    </div>
  );
}

export function CaseStudyVisual({ studyId }: { studyId: string }) {
  const reporting = studyId === "high-performance-reporting-platform";
  const content = studyId === "ai-powered-order-assistant"
    ? <OrderAssistantVisual />
    : reporting ? <ReportingVisual /> : <PlatformVisual />;

  return (
    <div
      className={`relative grid min-h-[480px] content-center overflow-hidden p-[clamp(1.5rem,4vw,3.7rem)] max-wide:min-h-[430px] max-wide:p-7 max-tablet:min-h-[340px] max-mobile:order-1 max-mobile:min-h-[260px] max-mobile:p-5 ${reporting ? "bg-navy-raised text-white" : "bg-blue-pale"}`}
    >
      {content}
      <p className={`mt-6 self-end text-[0.72rem] leading-[1.5] font-semibold text-muted max-mobile:mt-4 max-mobile:text-[0.66rem] ${reporting ? "text-ice" : ""}`}>
        {reporting
          ? "Outcomes documented in the supplied résumé."
          : studyId === "ai-powered-order-assistant"
            ? "Illustrative system flow—not a client product screenshot."
            : "Illustrative representation—not a client screenshot or project result."}
      </p>
    </div>
  );
}
