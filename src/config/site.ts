import type { Metadata } from "next";

/**
 * Single source of truth for site-wide metadata and navigation.
 * Update these values when cloning the boilerplate for a new project.
 */
export const siteConfig = {
  name: "Temporal",
  title: "Temporal — Portfolio 2026",
  description:
    "A modern portfolio starter built with Next.js, Bun, Tailwind CSS and React Icons.",
  url: "https://example.com",
  nav: [
    { label: "Home", href: "/" },
    { label: "Work", href: "/#work" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ],
  links: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:hello@example.com",
  },
} as const;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};
