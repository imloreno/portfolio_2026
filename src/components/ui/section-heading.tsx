import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  id: string;
  label: string;
  title: string;
  description?: ReactNode;
  tone?: "default" | "light";
  layout?: "split" | "stacked";
  className?: string;
}

export function SectionHeading({
  id,
  label,
  title,
  description,
  tone = "default",
  layout = "split",
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "mb-[clamp(2.5rem,5vw,4.5rem)] max-mobile:mb-9",
        layout === "split"
          ? "grid grid-cols-[minmax(145px,0.3fr)_minmax(0,0.7fr)] items-start gap-x-[clamp(2rem,6vw,6rem)] max-mobile:block"
          : "block",
        className,
      )}
    >
      <p
        className={cn(
          "mb-0 flex items-center gap-[0.65rem] pt-[0.7rem] text-[0.72rem] font-extrabold leading-[1.5] tracking-[0.12em] uppercase before:h-0.5 before:w-[1.4rem] before:shrink-0 before:bg-current before:content-[''] max-mobile:mb-3 max-mobile:pt-0 max-mobile:text-[0.68rem]",
          tone === "light" ? "text-[#8bb9ff]" : "text-blue-deep",
          layout === "stacked" && "mb-4 pt-0 max-mobile:mb-3",
        )}
      >
        {label}
      </p>
      <div className={layout === "split" ? "max-w-4xl" : undefined}>
        <h2
          className={cn(
            "m-0 max-w-[16ch] text-[clamp(2.3rem,4.2vw,4rem)] font-[770] leading-[1.08] tracking-[-0.052em] text-balance max-mobile:text-[clamp(2.15rem,9vw,3.2rem)] max-mobile:leading-[1.07]",
            tone === "light" ? "text-white" : "text-ink",
            layout === "stacked" && "max-w-[13ch]",
          )}
          id={id}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "mt-[1.05rem] max-w-[66ch] text-[1.02rem] leading-[1.8] text-muted max-mobile:mt-[0.85rem] max-mobile:text-[0.93rem]",
              tone === "light" && "text-[#c1d0e2]",
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
}
