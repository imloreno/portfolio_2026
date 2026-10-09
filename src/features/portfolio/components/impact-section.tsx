import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { impactMetrics } from "../constants/impact-metrics";

function ImpactMetric({
  value,
  label,
  organization,
  countTarget,
  countSuffix,
}: (typeof impactMetrics)[number]) {
  return (
    <article className="min-h-[190px] border-r border-white/15 px-[clamp(1rem,2vw,2rem)] pt-6 pb-[1.65rem] first:pl-0 last:border-r-0 max-tablet:nth-[2n]:border-r-0 max-tablet:nth-[-n+2]:border-b max-tablet:nth-[3]:pl-0 max-mobile:min-h-[142px] max-mobile:px-3 max-mobile:py-4 max-mobile:nth-[odd]:border-r max-mobile:nth-[even]:border-r-0 max-mobile:nth-[-n+2]:border-b max-mobile:nth-[odd]:pl-0 max-mobile:nth-[even]:pl-4" data-reveal>
      <span
        aria-label={value}
        className="block text-[clamp(2.6rem,5vw,4.75rem)] leading-[1.05] font-[760] tracking-[-0.07em] text-white tabular-nums max-mobile:text-[clamp(2.35rem,10vw,3.4rem)]"
        data-count-suffix={countSuffix}
        data-count-target={countTarget}
        data-reveal
      >
        {value}
      </span>
      <span className="mt-3 block max-w-[22ch] text-[0.91rem] leading-[1.55] text-ice max-mobile:mt-2 max-mobile:text-[0.79rem]">
        {label}
      </span>
      {organization ? (
        <span className="mt-2 block text-[0.75rem] font-[720] tracking-[0.06em] text-ice-dim uppercase max-mobile:text-[0.65rem]">
          {organization}
        </span>
      ) : null}
    </article>
  );
}

export function ImpactSection() {
  return (
    <section
      aria-labelledby="impact-heading"
      className="relative overflow-hidden bg-navy py-[clamp(5rem,9vw,8.5rem)] text-white max-mobile:py-[4.8rem] after:pointer-events-none after:absolute after:top-0 after:right-[max(0px,calc((100vw-1280px)/2))] after:h-full after:w-px after:bg-white/5 after:content-['']"
      id="impact"
    >
      <Container>
        <SectionHeading
          className="[&_h2]:max-w-[13ch]"
          description="I focus on improvements users and businesses can actually feel—from faster applications to more maintainable systems and AI-enabled workflows."
          id="impact-heading"
          label="Impact"
          title="Engineering that produces measurable results."
          tone="light"
        />
        <div className="grid grid-cols-4 border-y border-white/20 max-tablet:grid-cols-2">
          {impactMetrics.map((metric) => (
            <ImpactMetric {...metric} key={metric.label} />
          ))}
        </div>
      </Container>
    </section>
  );
}
