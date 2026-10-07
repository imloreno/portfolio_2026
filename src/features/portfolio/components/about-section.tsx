import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { about } from "../constants/about";

function EngineeringLoop() {
  return (
    <aside
      aria-label="Engineering approach"
      className="relative flex min-h-[395px] flex-col justify-between overflow-hidden bg-navy p-[clamp(1.5rem,3vw,2.5rem)] text-white after:pointer-events-none after:absolute after:right-[-3.8rem] after:bottom-[-5.2rem] after:size-64 after:rounded-full after:border after:border-white/15 after:shadow-[0_0_0_2.2rem_rgb(255_255_255_/_3%),0_0_0_4.4rem_rgb(255_255_255_/_2%)] after:content-[''] max-mobile:min-h-[300px] max-mobile:p-5"
      data-reveal
    >
      <p className="relative z-10 text-[0.73rem] font-extrabold tracking-[0.13em] text-[#a7c8f4] uppercase">
        A practical engineering loop
      </p>
      <div aria-hidden="true" className="relative z-10 my-8 grid gap-2">
        <span className="w-fit max-w-full border-b border-white/20 py-2 text-[clamp(1.4rem,3vw,2.15rem)] leading-[1.2] font-[720] tracking-[-0.045em] max-mobile:text-[1.55rem]">
          Understand the problem
        </span>
        <span className="w-fit max-w-full border-b border-white/20 py-2 pl-5 text-[clamp(1.4rem,3vw,2.15rem)] leading-[1.2] font-[720] tracking-[-0.045em] text-[#dbe8f8] max-mobile:text-[1.55rem]">
          Design &amp; build
        </span>
        <span className="w-fit max-w-full border-b border-white/20 py-2 pl-10 text-[clamp(1.4rem,3vw,2.15rem)] leading-[1.2] font-[720] tracking-[-0.045em] text-[#9fc5ff] max-mobile:text-[1.55rem]">
          Ship. Learn. Improve.
        </span>
      </div>
      <p className="relative z-10 text-[0.88rem] text-[#d3dfed]">
        Product context first. Reliable software in production.
      </p>
    </aside>
  );
}

export function AboutSection() {
  return (
    <Section aria-labelledby="about-heading" id="about">
      <Container className="grid grid-cols-[minmax(0,1.15fr)_minmax(270px,0.85fr)] items-stretch gap-[clamp(2.5rem,7vw,7rem)] max-tablet:grid-cols-[minmax(0,1fr)_minmax(235px,0.72fr)] max-tablet:gap-10 max-mobile:grid-cols-1 max-mobile:gap-8">
        <div>
          <SectionHeading
            className="mb-6 max-mobile:mb-4"
            id="about-heading"
            label="About"
            layout="stacked"
            title="Engineer, product thinker, lifelong learner."
          />
          <div className="grid max-w-[68ch] gap-4">
            {about.paragraphs.map((paragraph) => (
              <p className="text-[0.98rem] leading-[1.85] text-[#485a70] max-mobile:text-[0.9rem]" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <EngineeringLoop />
      </Container>
    </Section>
  );
}
