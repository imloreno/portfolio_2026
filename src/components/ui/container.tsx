import type { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export function Container({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mx-auto w-[calc(100%_-_clamp(1.25rem,5vw,5rem)_-_clamp(1.25rem,5vw,5rem))] max-w-[1280px] max-wide:w-[calc(100%_-_clamp(1.25rem,4vw,3.5rem)_-_clamp(1.25rem,4vw,3.5rem))] max-mobile:w-[calc(100%_-_2.5rem)]",
        className,
      )}
      {...props}
    />
  );
}
