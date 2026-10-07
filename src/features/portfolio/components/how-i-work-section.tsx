import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { howIWork } from "../constants/work-process";

function WorkStepCard({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  return (
    <article className="relative px-[clamp(1rem,2vw,1.7rem)] pt-[1.4rem] first:pl-0 before:absolute before:top-[-0.33rem] before:left-0 before:size-[0.62rem] before:rounded-full before:border-2 before:border-mist before:bg-blue before:shadow-[0_0_0_1px_#1769f5] before:content-[''] not-first:before:left-[clamp(1rem,2vw,1.7rem)] max-mobile:min-h-[5.5rem] max-mobile:px-0 max-mobile:pt-0 max-mobile:pl-5 max-mobile:before:top-1 max-mobile:before:left-[-0.33rem]" data-reveal>
      <span className="block text-[0.8rem] font-extrabold tracking-[0.12em] text-blue-deep tabular-nums">
        {`0${index + 1}`}
      </span>
      <h3 className="mt-2.5 max-w-[17ch] text-[1.02rem] leading-[1.4] font-[780] tracking-[-0.02em] text-navy uppercase max-mobile:mt-1 max-mobile:max-w-none max-mobile:text-[0.9rem]">
        {title}
      </h3>
      <p className="mt-2 max-w-[34ch] text-[0.86rem] leading-[1.7] text-muted max-mobile:mt-1 max-mobile:max-w-[58ch] max-mobile:text-[0.82rem]">
        {description}
      </p>
    </article>
  );
}

export function HowIWorkSection() {
  return (
    <Section aria-labelledby="process-heading" tone="mist">
      <Container>
        <SectionHeading
          description="A pragmatic path from a real product need to production software that can keep improving."
          id="process-heading"
          label="How I work"
          title="Ownership from problem to production."
        />
        <div className="grid grid-cols-4 border-t border-[#cbd7e4] max-mobile:grid-cols-1 max-mobile:gap-5 max-mobile:border-t-0 max-mobile:border-l">
          {howIWork.map((step, index) => (
            <WorkStepCard {...step} index={index} key={step.title} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
