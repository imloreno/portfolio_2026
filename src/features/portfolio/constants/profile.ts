import type { PortfolioProfile } from "../types/content";

export const portfolioProfile = {
  name: "Lorenzo Arias",
  title: "Senior Full-Stack Engineer | AI Product Engineering",
  positioning:
    "I take product problems from architecture through full-stack implementation, deployment, and production improvement. AI and LLM integration complements strong software engineering fundamentals.",
  location: { city: "Santa Cruz", country: "Bolivia", timeZone: "UTC-4" },
  experience: `7 years`,
  languages: [
    { name: "English", proficiency: "C1" },
    { name: "Spanish", proficiency: "Native" },
  ],
  availability: "Open to US-remote roles",
} as const satisfies PortfolioProfile;

export const remoteWorkFacts = {
  location: "Santa Cruz, Bolivia",
  timeZone: "UTC-4",
  availability: "Open to US-remote roles",
  timezoneOverlap: "Strong US time-zone overlap",
  usCompanyExperience: "Experience with US-based companies",
  distributedTeams: "Remote collaboration experience",
  english: "C1",
  spanish: "Native",
  languages: portfolioProfile.languages,
} as const;

// Single source of truth for the canonical site URL. Override at build time with
// NEXT_PUBLIC_SITE_URL (e.g. the Cloudflare Workers URL) when the custom domain
// is not yet attached. Trailing slashes are stripped.
const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://imloreno.com"
).replace(/\/+$/, "");

export const profileSettings = {
  siteUrl,
  name: "Lorenzo Arias",
  title: "Senior Full-Stack Engineer | AI Product Engineering",
  description:
    "Senior Full-Stack Engineer based in Bolivia, working remotely with US teams. Building scalable web platforms and AI-powered products with Node.js, Python, TypeScript, React, AWS and LLM technologies.",
  portraitUrl: "/lorenzo.webp",
  email: "work@imloreno.com",
  linkedinUrl: "https://linkedin.com/in/soylorenzo",
  githubUrl: null,
  resumePdfUrl: null,
} as const;
