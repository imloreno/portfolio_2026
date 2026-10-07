import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { education } from "../constants/about";

export function EducationSection() {
  return (
    <Section aria-labelledby="education-heading" spacing="compact" tone="mist">
      <Container className="grid grid-cols-[minmax(145px,0.3fr)_minmax(0,0.7fr)] gap-[clamp(2rem,6vw,6rem)] max-mobile:block">
        <p className="flex items-center gap-[0.65rem] pt-1 text-[0.72rem] font-extrabold tracking-[0.12em] text-blue-deep uppercase before:h-0.5 before:w-[1.4rem] before:bg-current before:content-[''] max-mobile:mb-3 max-mobile:text-[0.68rem]">
          Learning
        </p>
        <div>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] leading-[1.15] font-[760] tracking-[-0.045em] text-navy max-mobile:text-[2rem]" id="education-heading">
            Always learning.
          </h2>
          <h3 className="mt-5 text-[1.05rem] font-[760] text-ink max-mobile:text-[0.98rem]">
            {education.degree} · {education.institution}
          </h3>
          <p className="mt-2 max-w-[68ch] text-[0.9rem] leading-[1.7] text-muted max-mobile:text-[0.83rem]">
            {education.continuingEducation} has been a major part of my career,
            including {education.certifications} and continued study across cloud
            architecture, AI, and modern software development.
          </p>
        </div>
      </Container>
    </Section>
  );
}
