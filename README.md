# Temporal — Portfolio 2026

A modern portfolio boilerplate built with **Next.js 16**, **Bun**, **Tailwind CSS v4**,
**React Icons**, **Motion**, and **next-themes**.

## Tech stack

| Concern       | Choice                                   |
| ------------- | ---------------------------------------- |
| Framework     | Next.js 16 (App Router, Turbopack)       |
| Runtime / PM  | Bun                                      |
| Language      | TypeScript (strict)                      |
| Styling       | Tailwind CSS v4 (`@tailwindcss/turbopack`) |
| Icons         | React Icons                              |
| Animation     | Motion (`motion/react`)                  |
| Theming       | next-themes (class-based dark mode)      |
| Linting       | ESLint 9 (flat config)                   |

## Getting started

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command           | Description                     |
| ----------------- | ------------------------------- |
| `bun dev`         | Start the dev server (Turbopack) |
| `bun build`       | Production build                |
| `bun start`       | Run the production server       |
| `bun lint`        | ESLint                          |
| `bun run typecheck` | TypeScript type check          |

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout: fonts, metadata, providers, header/footer
│   ├── page.tsx          # Landing page
│   ├── globals.css       # Tailwind import + design tokens
│   ├── error.tsx         # Error boundary
│   ├── not-found.tsx     # 404 page
│   ├── robots.ts         # Generated robots.txt
│   └── sitemap.ts        # Generated sitemap.xml
├── components/
│   ├── site-header.tsx   # Sticky header + nav
│   ├── site-footer.tsx   # Footer + social links
│   ├── theme-provider.tsx# next-themes provider
│   ├── theme-toggle.tsx  # Light/dark toggle
│   └── fade-in.tsx       # Reusable reduced-motion-aware animation
├── config/
│   └── site.ts           # Site metadata, nav and links
└── lib/
    └── utils.ts          # `cn()` class-name helper
```

## Customizing

- **Brand, nav, links & SEO** — edit `src/config/site.ts`.
- **Colors & tokens** — edit the CSS variables in `src/app/globals.css`.
  They are exposed to Tailwind via the `@theme inline` block
  (`bg-primary`, `text-muted-foreground`, `border-border`, …).
- **Theme** — `next-themes` defaults to the system preference; change the
  defaults in `src/components/theme-provider.tsx`.

## Environment variables

Copy `.env.example` to `.env.local` and adjust as needed:

```bash
cp .env.example .env.local
```

Only variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.
