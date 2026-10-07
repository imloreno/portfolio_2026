"use client";

import { useTheme } from "next-themes";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  // `resolvedTheme` is `undefined` until the client resolves the system
  // preference, so the server and first client render both show the moon icon.
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-full border border-border",
        "bg-card text-foreground transition-colors hover:bg-muted",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
        className,
      )}
    >
      <HiOutlineSun
        className={cn("size-5", isDark ? "block" : "hidden")}
        aria-hidden
      />
      <HiOutlineMoon
        className={cn("size-5", isDark ? "hidden" : "block")}
        aria-hidden
      />
    </button>
  );
}
