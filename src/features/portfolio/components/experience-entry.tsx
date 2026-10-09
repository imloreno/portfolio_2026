import { TagList } from "@/components/ui/tag-list";
import type { ExperienceRole } from "../types/content";

export function ExperienceEntry({ role, featured }: { role: ExperienceRole; featured: boolean }) {
  return (
    <li className="relative grid grid-cols-[10.2rem_minmax(0,1fr)] gap-8 before:absolute before:top-[1.6rem] before:left-[10.78rem] before:size-[0.65rem] before:rounded-full before:border-2 before:border-mist before:bg-blue before:shadow-[0_0_0_1px_var(--color-blue)] before:content-[''] max-tablet:grid-cols-[8.8rem_minmax(0,1fr)] max-tablet:gap-7 max-tablet:before:left-[9.38rem] max-mobile:block max-mobile:pl-5 max-mobile:before:top-3 max-mobile:before:left-[-0.05rem]" data-reveal>
      <time className="pt-[1.35rem] text-right text-[0.78rem] leading-[1.5] font-[750] text-muted tabular-nums max-mobile:pt-0.5 max-mobile:text-left max-mobile:text-[0.7rem]">
        {role.period}
      </time>
      <article className={featured
        ? "min-w-0 border border-line bg-white px-[1.8rem] py-[1.55rem] shadow-[0_8px_18px_rgb(18_43_72_/_4%)] max-mobile:mt-2 max-mobile:p-[0.95rem] max-mobile:shadow-[0_6px_14px_rgb(18_43_72_/_4%)]"
        : "min-w-0 border-b border-line px-[1.45rem] py-[1.2rem] max-mobile:mt-2 max-mobile:border-x-0 max-mobile:border-t-0 max-mobile:px-0 max-mobile:pt-[0.85rem] max-mobile:pb-4"}>
        <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 max-mobile:items-start">
          <div>
            <h3 className="text-[1.2rem] leading-[1.35] font-[780] tracking-[-0.03em] text-navy max-mobile:text-[1.08rem]">
              {role.organization}
            </h3>
            <p className="mt-1 text-[0.91rem] font-bold text-ink-soft">{role.title}</p>
          </div>
          <span className="text-[0.78rem] font-[650] text-muted max-mobile:text-[0.7rem]">
            {role.location}
          </span>
        </header>
        <ul className="mt-3 grid list-disc gap-1 pl-[1.1rem] text-[0.88rem] leading-[1.6] text-muted marker:text-blue-deep max-mobile:mt-2 max-mobile:gap-1 max-mobile:text-[0.8rem]">
          {role.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
        </ul>
        {role.technologies ? (
          <TagList
            className="mt-4"
            items={role.technologies}
            label={`${role.organization} technologies`}
          />
        ) : null}
      </article>
    </li>
  );
}
