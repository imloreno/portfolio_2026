"use client";

import { useEffect } from "react";

const revealClasses = [
  "transition-[opacity,transform]",
  "duration-[560ms]",
  "ease-[cubic-bezier(0.16,1,0.3,1)]",
  "motion-reduce:transition-none",
];

export function useScrollReveal() {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") return;

    const frames = new Map<HTMLElement, number>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const element = entry.target as HTMLElement;
        element.classList.remove("opacity-0", "translate-y-4");
        element.classList.add("opacity-100", "translate-y-0");
        observer.unobserve(element);

        const target = Number(element.dataset.countTarget);
        if (!Number.isFinite(target) || target <= 0) continue;
        const suffix = element.dataset.countSuffix ?? "";
        const start = performance.now();
        let frame = 0;
        const tick = (now: number) => {
          frames.delete(element);
          const progress = Math.min((now - start) / 820, 1);
          element.textContent = `${Math.round(target * (1 - (1 - progress) ** 4))}${suffix}`;
          if (progress < 1) {
            frame = window.requestAnimationFrame(tick);
            frames.set(element, frame);
          }
        };
        frame = window.requestAnimationFrame(tick);
        frames.set(element, frame);
      }
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.18 });

    targets.forEach((element) => {
      element.classList.add(...revealClasses, "opacity-0", "translate-y-4");
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      frames.forEach((frame) => window.cancelAnimationFrame(frame));
      frames.clear();
    };
  }, []);
}
