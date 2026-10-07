import { cn } from "@/utils/cn";

const variants = {
  technology:
    "rounded-full border-[#d7e1ed] bg-[#f8fafd] px-[0.65rem] py-[0.28rem] text-[#33475f]",
  capability:
    "rounded border-[#dce5ee] bg-[#fbfcfe] px-[0.65rem] py-[0.35rem] text-[#354960]",
} as const;

interface TagListProps {
  items: readonly string[];
  label: string;
  variant?: keyof typeof variants;
  className?: string;
}

export function TagList({
  items,
  label,
  variant = "technology",
  className,
}: TagListProps) {
  return (
    <ul
      aria-label={label}
      className={cn("mt-[1.35rem] flex list-none flex-wrap gap-[0.4rem] p-0", className)}
    >
      {items.map((item) => (
        <li
          className={cn(
            "border border-solid text-[0.72rem] leading-[1.45] font-[650]",
            variant === "capability" && "text-[0.75rem]",
            variants[variant],
          )}
          key={item}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
