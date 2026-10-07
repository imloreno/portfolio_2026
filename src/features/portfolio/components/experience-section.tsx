import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience } from "../constants/experience";
import { ExperienceEntry } from "./experience-entry";

export function ExperienceSection() {
  return (
    <Section aria-labelledby="experience-heading" id="experience" tone="timeline">
      <Container>
        <SectionHeading
          description="I've worked across US and Latin American companies, building production systems from frontend experiences to backend architecture, cloud infrastructure, and AI-powered features."
          id="experience-heading"
          label="Experience"
          title="Building production software since 2019."
        />
        <ol
          aria-label="Professional experience, newest first"
          className="relative grid list-none gap-[1.05rem] p-0 before:absolute before:top-6 before:bottom-6 before:left-[11.1rem] before:w-px before:bg-[#bdcfe4] before:content-[''] max-tablet:before:left-[9.7rem] max-mobile:gap-2.5 max-mobile:before:top-3 max-mobile:before:bottom-4 max-mobile:before:left-1"
        >
          {experience.map((role, index) => (
            <ExperienceEntry
              featured={index < 2}
              key={`${role.organization}-${role.period}`}
              role={role}
            />
          ))}
        </ol>
      </Container>
    </Section>
  );
}
