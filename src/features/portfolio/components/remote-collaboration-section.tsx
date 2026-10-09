import { FiCheckCircle } from "react-icons/fi";
import { Icon } from "@/components/ui/icon-tile";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { remoteWorkFacts } from "../constants/profile";

const facts = [
  { value: remoteWorkFacts.timeZone, detail: remoteWorkFacts.timezoneOverlap },
  { value: `English ${remoteWorkFacts.english}`, detail: "Professional proficiency · native Spanish" },
  { value: "US experience", detail: remoteWorkFacts.usCompanyExperience },
] as const;

export function RemoteCollaborationSection() {
  return (
    <Section aria-labelledby="remote-heading" id="collaboration" tone="remote">
      <Container>
        <div className="mb-13 grid grid-cols-[minmax(0,1fr)_minmax(280px,0.75fr)] items-end gap-[clamp(2rem,7vw,7rem)] max-tablet:grid-cols-[minmax(0,1fr)_minmax(230px,0.8fr)] max-tablet:gap-10 max-mobile:mb-8 max-mobile:block">
          <header>
            <p className="mb-4 flex items-center gap-[0.65rem] text-[0.72rem] leading-[1.5] font-extrabold tracking-[0.12em] text-blue-deep uppercase before:h-0.5 before:w-[1.4rem] before:bg-current before:content-[''] max-mobile:mb-3 max-mobile:text-[0.68rem]">
              Remote collaboration
            </p>
            <h2 className="max-w-[12ch] text-[clamp(2.3rem,4.2vw,4rem)] leading-[1.08] font-[770] tracking-[-0.052em] text-ink text-balance max-mobile:text-[clamp(2.15rem,9vw,3.2rem)] max-mobile:leading-[1.07]" id="remote-heading">
              Based in LATAM. Built to work with US teams.
            </h2>
          </header>
          <p className="max-w-[57ch] text-[0.98rem] leading-[1.8] text-muted max-mobile:mt-4 max-mobile:text-[0.9rem]">
            I&apos;m based in {remoteWorkFacts.location} ({remoteWorkFacts.timeZone}),
            giving me substantial working-hour overlap with teams across the United
            States. I&apos;ve already worked with US-based companies and am comfortable
            collaborating in distributed environments where clear communication,
            ownership, and autonomy matter.
          </p>
        </div>
        <div className="grid grid-cols-3 border-y border-line max-mobile:grid-cols-1">
          {facts.map((fact, index) => (
            <div
              className={`min-h-[150px] border-r border-line px-[clamp(1rem,2vw,2rem)] py-6 first:pl-0 last:border-r-0 max-mobile:min-h-0 max-mobile:border-r-0 max-mobile:border-b max-mobile:px-0 max-mobile:py-4 max-mobile:last:border-b-0 ${index === 0 ? "max-mobile:pt-4" : ""}`}
              data-reveal
              key={fact.value}
            >
              <strong className="block text-[clamp(1.65rem,3vw,2.5rem)] leading-[1.2] font-[780] tracking-[-0.055em] text-navy max-mobile:text-[1.65rem]">
                {fact.value}
              </strong>
              <span className="mt-2 block text-[0.85rem] leading-[1.5] text-muted max-mobile:text-[0.81rem]">
                {fact.detail}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-6 flex max-w-[78ch] items-start gap-3 text-[0.9rem] leading-[1.7] text-muted max-mobile:text-[0.82rem]">
          <Icon icon={FiCheckCircle} size="md" tone="deep" className="mt-0.5" />
          <span>{remoteWorkFacts.availability}. {remoteWorkFacts.distributedTeams}.</span>
        </p>
      </Container>
    </Section>
  );
}
