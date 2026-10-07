import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

const variants = {
  value: "mb-[0.85rem] size-[2.65rem] rounded-lg bg-[#eaf2ff] text-blue-deep [&_svg]:size-[1.3rem]",
  expertise:
    "size-[2.65rem] rounded-[0.45rem] border border-[#d5e2f1] bg-[#f3f7fc] text-blue-deep [&_svg]:size-5",
  flow: "size-8 rounded-[0.35rem] bg-blue-deep text-white [&_svg]:size-[1.05rem]",
} as const;

interface IconTileProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: keyof typeof variants;
  children: ReactNode;
}

export function IconTile({
  children,
  className,
  variant = "value",
  ...props
}: IconTileProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-grid shrink-0 place-items-center [&_svg]:stroke-[1.7]",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
