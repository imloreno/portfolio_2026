import { FiActivity, FiCode, FiCpu, FiServer } from "react-icons/fi";
import type { IconType } from "react-icons";
import { Container } from "@/components/ui/container";
import { Icon, IconTile } from "@/components/ui/icon-tile";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { TagList } from "@/components/ui/tag-list";
import { capabilityGroups } from "../constants/capabilities";

const icons: readonly IconType[] = [FiCpu, FiServer, FiCode, FiActivity];

function CapabilityCard({
  title,
  description,
  technologies,
  Glyph,
}: {
  title: string;
  description: string;
  technologies: readonly string[];
  Glyph: IconType;
}) {
  return (
    <article className="min-h-[245px] border-r border-b border-line p-[clamp(1.5rem,3vw,2.5rem)] max-mobile:min-h-0 max-mobile:p-5" data-reveal>
      <div className="flex items-start gap-4">
        <IconTile variant="expertise"><Icon icon={Glyph} size="md" /></IconTile>
        <div>
          <h3 className="mt-px text-[1.18rem] leading-[1.35] font-[780] tracking-[-0.03em] text-navy max-mobile:text-[1.05rem]">
            {title}
          </h3>
          <p className="mt-1 max-w-[53ch] text-[0.87rem] leading-[1.65] text-muted max-mobile:text-[0.82rem]">
            {description}
          </p>
        </div>
      </div>
      <TagList
        className="mt-[1.15rem] gap-2 max-mobile:mt-3 max-mobile:gap-1.5"
        items={technologies}
        label={`${title} capabilities`}
        variant="capability"
      />
    </article>
  );
}

export function ExpertiseSection() {
  return (
    <Section aria-labelledby="expertise-heading" id="expertise">
      <Container>
        <SectionHeading
          description="A product team gets engineering ownership across the stack—with AI as a practical capability, not a substitute for strong fundamentals."
          id="expertise-heading"
          label="Expertise"
          title="What I bring to a product team."
        />
        <div className="grid grid-cols-2 border-t border-l border-line max-mobile:grid-cols-1">
          {capabilityGroups.map((group, index) => (
            <CapabilityCard {...group} Glyph={icons[index]} key={group.title} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
