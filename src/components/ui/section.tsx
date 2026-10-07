import type { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

const spacingVariants = {
  standard: "py-[clamp(5rem,9vw,8.5rem)] max-mobile:py-[4.8rem]",
  compact: "py-[clamp(3.75rem,6vw,5.5rem)]",
  none: "",
} as const;

const toneVariants = {
  white: "bg-white",
  mist: "bg-mist",
  pale: "bg-blue-pale",
  work: "bg-[#f5f8fc]",
  timeline: "bg-[#edf4fc]",
  remote: "bg-[#e9f2ff]",
  navy: "bg-navy text-white",
} as const;

interface SectionProps extends HTMLAttributes<HTMLElement> {
  tone?: keyof typeof toneVariants;
  spacing?: keyof typeof spacingVariants;
  labelledBy?: string;
}

export function Section({
  children,
  className,
  labelledBy,
  spacing = "standard",
  tone = "white",
  ...props
}: SectionProps) {
  return (
    <section
      aria-labelledby={labelledBy}
      className={cn(spacingVariants[spacing], toneVariants[tone], className)}
      {...props}
    >
      {children}
    </section>
  );
}
