# portfolio-2026

Personal portfolio for **Lorenzo Arias** — Senior Full-Stack Engineer / AI Product Engineering.

**Live:** https://imloreno.com

A single-page, statically prerendered site deployed to **Cloudflare Workers** with
[vinext](https://vinext.dev) (Next.js on Vite).

## Stack

- Next.js 16 (App Router) + React 19
- Tailwind CSS v4
- vinext + `@cloudflare/vite-plugin` (Workers Static Assets)
- Bun

## Development

```bash
bun install
bun dev              # Next.js dev server -> http://localhost:3000
bun run dev:vinext   # vinext/Vite dev server -> http://localhost:3001
```

## Scripts

| Command | Description |
| --- | --- |
| `bun dev` | Next.js dev server |
| `bun run dev:vinext` | vinext (Vite) dev server |
| `bun run build:vinext` | Build the Cloudflare output (`.cloudflare/`) |
| `bun run deploy:vinext` | Build **and** deploy the Worker to Cloudflare |
| `bun lint` | ESLint |
| `bun run typecheck` | TypeScript (`next typegen` + `tsc`) |

## Deploy

```bash
bun run deploy:vinext
```

- **Worker name:** `portfolio-2026` — set in `cloudflare.config.ts`.
- **Domain:** `imloreno.com` (apex). `www` is intentionally *not* attached (see Gotchas).
- **Auth (one-time):** `bunx cf auth login`, or set `CLOUDFLARE_API_TOKEN`.

> The `[vinext] failed to initialize the configured image optimizer` line during
> prerender is expected — there is no `IMAGES` binding locally; images are
> optimized at runtime.

## Environment variables (build-time)

Every value below is **public** (it ends up in the served HTML) and is read at
**build time**, so it must be a plain **Variable — not a Secret** — and it must
live in the **Build** settings, never the Worker's runtime variables.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin (defaults to `https://imloreno.com`) |
| `GOOGLE_SITE_VERIFICATION` | Google Search Console meta tag (or use DNS TXT) |
| `BING_SITE_VERIFICATION` | Bing Webmaster meta tag (or use DNS CNAME) |
| `NEXT_PUBLIC_CF_BEACON_TOKEN` | Cloudflare Web Analytics beacon |

**Where to set them**

- **Local deploy:** `.env.local` (git-ignored), then `bun run deploy:vinext`.
- **Git / Cloudflare Workers Builds:** Workers & Pages → project →
  **Settings → Build → Build variables**, then trigger a new build.

Adding them as **runtime** variables does nothing here — the values are baked
into the prerendered HTML during the build.

## SEO

Implemented: canonical, OpenGraph/Twitter card (`/og.jpg`), `robots.txt`,
`sitemap.xml`, web manifest + icons, `theme-color`, and a
`Person` + `WebSite` + `ProfilePage` JSON-LD graph (`src/features/portfolio/structured-data.ts`).
Google Search Console is verified via DNS TXT.

## Gotchas

- **Deploy through one pipeline only.** Use either this local `deploy:vinext` or
  the Git integration — not both. An older OpenNext Worker named
  `portfolio-temporal-2026` must not be reconnected.
- **Renaming the Worker creates a new Worker.** The old one keeps its URL until
  deleted.
- **`www.imloreno.com` is not served** (it returns 522). Add a Cloudflare
  Redirect Rule `www.imloreno.com/* → https://imloreno.com/$1` (301) to fix it.
- Custom domains must be an active zone on the Cloudflare account.
