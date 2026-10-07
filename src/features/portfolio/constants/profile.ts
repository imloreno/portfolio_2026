import type { PortfolioProfile } from "../types/content";

export const portfolioProfile = {
  name: "Lorenzo Arias",
  title: "Senior Full-Stack Engineer | AI Product Engineering",
  positioning:
    "I take product problems from architecture through full-stack implementation, deployment, and production improvement. AI and LLM integration complements strong software engineering fundamentals.",
  location: { city: "Santa Cruz", country: "Bolivia", timeZone: "UTC−4" },
  experience: "6+ years",
  languages: [
    { name: "English", proficiency: "C1" },
    { name: "Spanish", proficiency: "Native" },
  ],
  availability: "Open to US-remote roles",
} as const satisfies PortfolioProfile;

export const remoteWorkFacts = {
  location: "Santa Cruz, Bolivia",
  timeZone: "UTC−4",
  availability: "Open to US-remote roles",
  timezoneOverlap: "Strong US time-zone overlap",
  usCompanyExperience: "Experience with US-based companies",
  distributedTeams: "Remote collaboration experience",
  english: "C1",
  spanish: "Native",
  languages: portfolioProfile.languages,
} as const;

export const profileSettings = {
  siteUrl: "https://imloreno.com",
  name: "Lorenzo Arias",
  title: "Senior Full-Stack Engineer | AI Product Engineering",
  description:
    "Lorenzo Arias is a Senior Full-Stack Engineer focused on AI Product Engineering, based in Santa Cruz, Bolivia and open to US-remote roles.",
  portraitUrl: "/profile_shirt.png",
  email: "work@imloreno.com",
  linkedinUrl: "https://linkedin.com/in/soylorenzo",
  githubUrl: null,
  resumePdfUrl: null,
} as const;
