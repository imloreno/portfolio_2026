import {
  FiArrowRight,
  FiCpu,
  FiDatabase,
  FiMessageSquare,
} from "react-icons/fi";

function FlowNode({ title, detail, icon }: { title: string; detail: string; icon: "message" | "cpu" | "data" }) {
  const Icon = icon === "message" ? FiMessageSquare : icon === "cpu" ? FiCpu : FiDatabase;

  return (
    <div className="grid min-h-[118px] content-center gap-2.5 border border-[#c6d9f0] bg-white/85 p-4 max-wide:min-h-[108px] max-wide:px-2 max-wide:py-3 max-mobile:min-h-[95px] max-mobile:gap-2 max-mobile:px-1.5 max-mobile:py-2">
      <span className="inline-grid size-8 place-items-center rounded-[0.35rem] bg-blue-deep text-white max-mobile:size-[1.65rem]">
        <Icon className="size-[1.05rem] max-mobile:size-4" />
      </span>
      <strong className="text-[0.77rem] leading-[1.3] text-navy max-mobile:text-[0.64rem]">
        {title}
      </strong>
      <span className="text-[0.68rem] leading-[1.4] text-[#53677e] max-mobile:text-[0.58rem]">
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
        <FiArrowRight className="size-4 text-blue-deep max-mobile:size-3" />
        <FlowNode detail="LLM · RAG" icon="cpu" title="AI layer" />
        <FiArrowRight className="size-4 text-blue-deep max-mobile:size-3" />
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
      <p className="text-[0.74rem] font-extrabold tracking-[0.12em] text-[#dbeaff] uppercase">
        NICE · verified performance
      </p>
      <div className="grid grid-cols-2 border-y border-white/25">
        <div className="py-6 pr-4">
          <strong className="block text-[clamp(2.8rem,5vw,4.4rem)] leading-[1.05] font-[770] tracking-[-0.07em] tabular-nums max-mobile:text-[2.7rem]">
            40%
          </strong>
          <span className="mt-2 block text-[0.83rem] leading-[1.5] text-[#d1e0f2] max-mobile:text-[0.72rem]">
            Reporting performance improvement
          </span>
        </div>
        <div className="border-l border-white/25 py-6 pl-5">
          <strong className="block text-[clamp(2.8rem,5vw,4.4rem)] leading-[1.05] font-[770] tracking-[-0.07em] tabular-nums max-mobile:text-[2.7rem]">
            30%+
          </strong>
          <span className="mt-2 block text-[0.83rem] leading-[1.5] text-[#d1e0f2] max-mobile:text-[0.72rem]">
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
      <div className="border border-[#c7d9ef] bg-white shadow-[0_12px_28px_rgb(20_58_100_/_8%)]">
        <div className="flex items-center justify-between gap-4 border-b border-[#dce7f3] px-4 py-3 text-[0.72rem] font-bold text-[#27415f]">
          <span>Platform view · illustrative</span>
          <span aria-hidden="true" className="flex gap-1">
            <i className="size-1.5 rounded-full bg-[#9bb9dc]" />
            <i className="size-1.5 rounded-full bg-[#9bb9dc]" />
            <i className="size-1.5 rounded-full bg-[#9bb9dc]" />
          </span>
        </div>
        <svg aria-hidden="true" className="block h-auto w-full p-4" viewBox="0 0 480 200" fill="none" focusable="false">
          <path d="M18 20H462M18 66H462M18 112H462M18 158H462" stroke="#DCE7F3" />
          <path d="M18 18V166M106 18V166M194 18V166M282 18V166M370 18V166M462 18V166" stroke="#E8EEF5" />
          <path d="M20 138C61 134 69 78 111 91S170 143 203 119s38-77 78-62 44 78 78 60 54-67 104-60" stroke="#1769F5" strokeWidth="4" strokeLinecap="round" />
          <path d="M20 151C58 143 75 126 111 131s56-28 91-22 55 31 88 17 49-30 82-25 54 23 88 12" stroke="#7499C4" strokeWidth="3" strokeLinecap="round" />
          <circle cx="111" cy="91" r="5" fill="#fff" stroke="#1769F5" strokeWidth="3" />
          <circle cx="282" cy="57" r="5" fill="#fff" stroke="#1769F5" strokeWidth="3" />
          <circle cx="454" cy="58" r="5" fill="#fff" stroke="#1769F5" strokeWidth="3" />
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
      className={`relative grid min-h-[480px] content-center overflow-hidden p-[clamp(1.5rem,4vw,3.7rem)] max-wide:min-h-[430px] max-wide:p-7 max-tablet:min-h-[340px] max-mobile:order-1 max-mobile:min-h-[260px] max-mobile:p-5 ${reporting ? "bg-[#0b2c53] text-white" : "bg-[#e9f2ff]"}`}
    >
      {content}
      <p className={`mt-6 self-end text-[0.72rem] leading-[1.5] font-semibold text-[#52677f] max-mobile:mt-4 max-mobile:text-[0.66rem] ${reporting ? "text-[#c4d4e8]" : ""}`}>
        {reporting
          ? "Outcomes documented in the supplied résumé."
          : studyId === "ai-powered-order-assistant"
            ? "Illustrative system flow—not a client product screenshot."
            : "Illustrative representation—not a client screenshot or project result."}
      </p>
    </div>
  );
}
