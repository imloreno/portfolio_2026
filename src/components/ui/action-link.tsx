import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

const variants = {
  primary:
    "bg-blue-deep text-white shadow-[0_8px_18px_rgb(14_73_165_/_16%)] hover:-translate-y-0.5 hover:bg-blue-dark hover:shadow-[0_12px_25px_rgb(14_73_165_/_23%)]",
  secondary:
    "border-line bg-white/70 text-navy hover:-translate-y-0.5 hover:border-ice-dim hover:bg-white",
  nav: "min-h-[2.7rem] rounded-[0.3rem] bg-blue px-3 text-[0.82rem] font-semibold text-white hover:-translate-y-px hover:bg-blue-bright sm:px-4",
  contactPrimary:
    "bg-blue text-white hover:-translate-y-0.5 hover:bg-blue-bright",
  contactSecondary:
    "border-white/35 bg-transparent text-white hover:-translate-y-0.5 hover:border-white hover:bg-white/10",
} as const;

type ActionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: keyof typeof variants;
};

export function ActionLink({
  children,
  className,
  variant = "primary",
  ...props
}: ActionLinkProps) {
  return (
    <a
      className={cn(
        "inline-flex min-h-[3.25rem] items-center justify-center gap-[0.6rem] rounded-[0.35rem] border px-[1.2rem] py-[0.8rem] text-[0.92rem] leading-[1.2] font-[750] no-underline transition-[transform,background,border-color,color,box-shadow] duration-200 hover:no-underline focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-1 focus-visible:outline-focus motion-reduce:transition-none max-mobile:min-h-[3.05rem] max-mobile:px-[0.92rem] max-mobile:text-[0.84rem]",
        variant === "secondary" || variant === "contactSecondary"
          ? "border-solid"
          : "border-transparent",
        variant === "nav" && "gap-1 px-2 py-0 text-xs sm:gap-2 sm:px-4 sm:text-sm",
        (variant === "contactPrimary" || variant === "contactSecondary") &&
          "shadow-none",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
