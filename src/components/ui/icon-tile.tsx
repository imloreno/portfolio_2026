import type { HTMLAttributes, ReactNode } from "react";
import type { IconType } from "react-icons";
import { cn } from "@/utils/cn";

const variants = {
  value: "mb-[0.85rem] size-[2.65rem] rounded-lg bg-blue-pale text-blue-deep [&_svg]:size-[1.3rem]",
  expertise:
    "size-[2.65rem] rounded-[0.45rem] border border-line bg-surface-deep text-blue-deep [&_svg]:size-5",
  flow: "size-8 rounded-[0.35rem] bg-blue-deep text-white [&_svg]:size-[1.05rem]",
} as const;
const iconSizes = {
  xs: "size-3.5",
  sm: "size-4",
  md: "size-5",
  lg: "size-[1.3rem]",
} as const;
const iconTones = {
  current: "",
  deep: "text-blue-deep",
  white: "text-white",
  muted: "text-muted",
} as const;
interface IconProps {
  icon: IconType;
  size?: keyof typeof iconSizes;
  tone?: keyof typeof iconTones;
  className?: string;
}
export function Icon({ icon: Glyph, size, tone = "current", className }: IconProps) {
  return (
    <Glyph
      aria-hidden="true"
      className={cn(size ? iconSizes[size] : undefined, iconTones[tone], "shrink-0", className)}
    />
  );
}

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
