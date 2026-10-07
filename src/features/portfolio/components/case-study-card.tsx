import type { ReactNode } from "react";
import { TagList } from "@/components/ui/tag-list";
import { CaseStudyVisual } from "./case-study-visual";
import type { CaseStudy } from "../types/content";

function CaseDetail({
  title,
  children,
  variant = "default",
}: {
  title: string;
  children: ReactNode;
  variant?: "default" | "impact";
}) {
  return (
    <div className={`mt-5 ${variant === "impact" ? "mt-6 border-t border-line pt-4" : ""}`}>
      <h4 className="text-[0.77rem] leading-[1.5] font-extrabold tracking-[0.09em] text-navy uppercase">
        {title}
      </h4>
      <div className={`mt-1 text-[0.9rem] leading-[1.65] text-muted ${variant === "impact" ? "font-[650] text-ink-soft" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export function CaseStudyCard({ study, reverse }: { study: CaseStudy; reverse: boolean }) {
  return (
    <article className="grid grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] overflow-hidden border border-[#dce4ed] bg-white shadow-[0_14px_30px_rgb(17_42_72_/_5%)] max-tablet:grid-cols-1" data-reveal>
      <div className={`flex min-w-0 flex-col p-[clamp(1.6rem,3.5vw,3.2rem)] max-wide:p-7 max-tablet:p-7 max-mobile:px-5 max-mobile:pt-5 max-mobile:pb-6 ${reverse ? "tablet:order-2" : ""}`}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.73rem] leading-[1.5] font-extrabold tracking-[0.08em] text-blue-deep uppercase max-mobile:text-[0.64rem]">
          <span>{study.organization}</span>
          <span className="flex items-center gap-3 before:size-1 before:rounded-full before:bg-blue before:content-['']">
            {study.category}
          </span>
        </div>
        <h3 className="mt-3 max-w-[18ch] text-[clamp(1.6rem,2.4vw,2.35rem)] leading-[1.12] font-[760] tracking-[-0.045em] text-ink text-balance max-mobile:text-[1.65rem]">
          {study.title}
        </h3>
        <p className="mt-3 max-w-[62ch] text-[0.98rem] leading-[1.75] text-[#485a70] max-mobile:text-[0.89rem]">
          {study.description}
        </p>
        <CaseDetail title="Challenge">{study.challenge}</CaseDetail>
        <CaseDetail title={`My role · ${study.role.title}`}>
          {study.role.responsibilities.join(" · ")}
        </CaseDetail>
        <CaseDetail title="What I worked on">
          <ul className="mt-1 grid list-disc grid-cols-2 gap-x-5 gap-y-2 pl-4 marker:text-blue max-mobile:grid-cols-1 max-mobile:gap-y-1">
            {study.work.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </CaseDetail>
        <CaseDetail title={study.impact ? "Impact" : "Documented scope"} variant="impact">
          {study.impact ?? "System design and dynamic visualization; no business outcome is claimed."}
        </CaseDetail>
        <TagList className="mt-5" items={study.stack} label={`${study.title} technologies`} />
      </div>
      <div className={reverse ? "tablet:order-1" : ""}>
        <CaseStudyVisual studyId={study.id} />
      </div>
    </article>
  );
}
