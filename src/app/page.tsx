import Link from "next/link";
import {
  FiArrowRight,
  FiCode,
  FiLayers,
  FiZap,
} from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";
import {
  SiBun,
  SiFramer,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FadeIn } from "@/components/fade-in";

const stack = [
  { label: "Next.js", Icon: SiNextdotjs },
  { label: "Bun", Icon: SiBun },
  { label: "React", Icon: SiReact },
  { label: "TypeScript", Icon: SiTypescript },
  { label: "Tailwind CSS", Icon: SiTailwindcss },
  { label: "Motion", Icon: SiFramer },
] as const;

const features = [
  {
    title: "App Router & RSC",
    description:
      "Server Components by default, with clear client boundaries for interactive pieces.",
    Icon: FiLayers,
  },
  {
    title: "Type-safe utilities",
    description:
      "A `cn()` helper combining clsx and tailwind-merge keeps conditional classes predictable.",
    Icon: FiCode,
  },
  {
    title: "Motion included",
    description:
      "Reusable entrance animations that automatically respect reduced-motion preferences.",
    Icon: FiZap,
  },
] as const;

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,color-mix(in_oklch,var(--color-primary)_18%,transparent),transparent)]"
        />
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
          <FadeIn>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <HiOutlineSparkles className="size-4 text-primary" aria-hidden />
              Next.js 16 · Bun · Tailwind v4
            </span>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
              A clean starting point for your{" "}
              <span className="text-primary">portfolio</span>.
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
              Everything wired up and ready to customize: dark mode, accessible
              components, icons, animations and a sensible project structure.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#work"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                View work
                <FiArrowRight aria-hidden />
              </Link>
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-card px-6 text-sm font-medium transition-colors hover:bg-muted"
              >
                Read the docs
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <ul className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-muted-foreground">
              {stack.map(({ label, Icon }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  <Icon className="size-5 transition-colors hover:text-primary" aria-hidden />
                  {label}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section id="work" className="mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, Icon }, index) => (
            <FadeIn key={title} delay={index * 0.05}>
              <article className="h-full rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-muted text-primary">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h2 className="mt-4 font-semibold">{title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="border-t border-border/60 bg-muted/40"
      >
        <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-card p-8 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Ready to make it yours?
                </h2>
                <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                  Edit the site config, swap the theme tokens, and start building.
                  Delete what you don&apos;t need — nothing here is load-bearing.
                </p>
              </div>
              <Link
                href="#contact"
                className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Get in touch
                <FiArrowRight aria-hidden />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
