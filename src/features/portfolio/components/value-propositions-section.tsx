import { FiGlobe, FiLayers, FiTarget, FiZap } from "react-icons/fi";
import type { IconType } from "react-icons";
import type { HTMLAttributes } from "react";
import { Container } from "@/components/ui/container";
import { IconTile } from "@/components/ui/icon-tile";
import { valuePropositions } from "../constants/value-propositions";
import { cn } from "@/utils/cn";

const icons: readonly IconType[] = [FiTarget, FiLayers, FiZap, FiGlobe];

function ValueCard({
  title,
  description,
  Icon,
  className,
}: {
  title: string;
  description: string;
  Icon: IconType;
} & Pick<HTMLAttributes<HTMLElement>, "className">) {
  return (
    <article className={cn("min-h-[198px] border-r border-line pt-[2rem] px-[1.6rem] pb-[1.9rem] max-wide:px-[1.2rem] max-tablet:nth-[2n]:border-r-0 max-tablet:nth-[-n+2]:border-b max-mobile:min-h-0 max-mobile:px-[0.95rem] max-mobile:pt-[1.3rem] max-mobile:pb-[1.35rem]", className)} data-reveal>
      <IconTile className="mb-3.5 max-mobile:mb-2.5 max-mobile:size-[2.2rem] [&_svg]:max-mobile:size-[1.1rem]" variant="value">
        <Icon />
      </IconTile>
      <h2 className="text-[1.05rem] leading-[1.35] font-[780] tracking-[-0.025em] text-ink max-mobile:text-[0.91rem]">
        {title}
      </h2>
      <p className="mt-2 text-[0.88rem] leading-[1.65] text-muted max-mobile:mt-1 max-mobile:text-[0.78rem] max-mobile:leading-[1.55]">
        {description}
      </p>
    </article>
  );
}

export function ValuePropositionsSection() {
  return (
    <section
      aria-labelledby="value-propositions-heading"
      className="relative z-[3] bg-white pb-[clamp(4.75rem,8vw,7.5rem)] max-mobile:pb-16"
      id="why"
    >
      <h2 className="sr-only" id="value-propositions-heading">
        Why teams hire Lorenzo
      </h2>
      <Container>
        <div className="-mt-8 grid grid-cols-4 border border-line bg-white shadow-[0_16px_36px_rgb(14_39_71_/_9%)] max-tablet:grid-cols-2 max-mobile:-mt-[0.4rem] max-mobile:shadow-[0_12px_25px_rgb(14_39_71_/_8%)]">
          {valuePropositions.map((item, index) => (
            <ValueCard
              {...item}
              className={index === 3 ? "border-r-0" : undefined}
              Icon={icons[index]}
              key={item.title}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
