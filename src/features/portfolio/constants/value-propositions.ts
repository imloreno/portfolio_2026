import type { ValueProposition } from "../types/content";

export const valuePropositions = [
  {
    title: "Product-Focused",
    description:
      "Think beyond tickets—connecting engineering decisions to user needs, product goals, and measurable business outcomes.",
  },
  {
    title: "End-to-End Ownership",
    description:
      "From architecture and APIs to frontend, infrastructure, AI integration, deployment, and production support.",
  },
  {
    title: "AI-Accelerated Engineering",
    description:
      "Combine senior engineering fundamentals with modern AI-assisted workflows to prototype, build, and iterate faster.",
  },
  {
    title: "Built for Remote Collaboration",
    description:
      "Based in UTC−4 with strong US working-hour overlap and professional English for distributed collaboration.",
  },
] as const satisfies readonly ValueProposition[];
