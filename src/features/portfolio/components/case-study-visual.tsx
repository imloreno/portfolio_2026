import { MermaidDiagram } from "./mermaid-diagram";

const ORDER_ASSISTANT_FLOW = `flowchart TD
    U["User / Doctor"] --> C["coms_module<br/>Receive, parse and normalize input"]
    C --> M["matter_module<br/>LLM orchestration and intent detection"]
    M <--> D["decision_system<br/>Conversation state and task context"]
    M --> V{"Intent clear and<br/>required data available?"}
    V -- "No" --> R["Request clarification"]
    R --> C
    V -- "Yes" --> T["tools_module<br/>Validate and execute tool calls"]
    T --> A["Authorization and policy checks"]
    A --> RG["RAG module<br/>Clinical knowledge and prior notes"]
    A --> DB[("AuroraDB<br/>Application and workflow data")]
    A --> API["Medical platform API<br/>Patient records and appointments"]
    RG --> O["Tool results"]
    DB --> O
    API --> O
    O --> M
    M --> C
    C --> U
    A -. "Denied / error" .-> E["Controlled error handling"]
    E --> M
    classDef main fill:#0c2a50,stroke:#1769f5,color:#ffffff
    classDef data fill:#eaf3ff,stroke:#1769f5,color:#071b36
    classDef control fill:#e9f1f9,stroke:#0754ce,color:#071b36
    classDef neutral fill:#f8fafd,stroke:#dbe3ec,color:#0a1728
    class C,M,T main
    class RG,DB,API data
    class D,V,A,E control
    class U,R,O neutral`;

function OrderAssistantVisual() {
  return (
    <div className="grid min-w-0 grid-cols-[minmax(0,1fr)] gap-4">
      <p className="text-[0.75rem] font-extrabold tracking-[0.12em] text-navy uppercase">
        Order assistant · architecture flow
      </p>
      <MermaidDiagram
        chart={ORDER_ASSISTANT_FLOW}
        label="Order assistant architecture flow from user input through LLM orchestration, tool calls, and connected medical services"
      />
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
      className={`relative grid min-h-[480px] min-w-0 grid-cols-[minmax(0,1fr)] content-center overflow-hidden p-[clamp(1.5rem,4vw,3.7rem)] max-wide:min-h-[430px] max-wide:p-7 max-tablet:min-h-[340px] max-mobile:order-1 max-mobile:min-h-[260px] max-mobile:p-5 ${reporting ? "bg-navy-raised text-white" : "bg-blue-pale"}`}
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
