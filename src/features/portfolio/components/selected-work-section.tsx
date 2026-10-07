import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { caseStudies } from "../constants/case-studies";
import { CaseStudyCard } from "./case-study-card";

export function SelectedWorkSection() {
  return (
    <Section aria-labelledby="work-heading" id="work" tone="work">
      <Container>
        <SectionHeading
          description="A selection of product challenges across AI, full-stack engineering, performance, architecture, and product ownership."
          id="work-heading"
          label="Selected work"
          title="Systems built to solve real product problems."
        />
        <div className="grid gap-[clamp(1.5rem,3.3vw,3rem)] max-mobile:gap-5">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={study.id}
              reverse={index % 2 === 1}
              study={study}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
