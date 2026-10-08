import type { ValueProposition } from "../types/content";

export const valuePropositions = [
  {
    title: "Product-Focused",
    description:
      "Think beyond tickets—connecting engineering decisions to user needs, product goals, and measurable business outcomes.",
  },
  {
    title: "Senior Talent at 20% of US Cost",
    description:
      "Same level of expertise, but at a fraction of the cost. Leverage the power of the US market without the overhead.",

  },
  {
    title: "AI-Accelerated Engineering",
    description:
      "Combine senior engineering fundamentals with modern AI-assisted workflows to prototype, build, and iterate faster.",
  },
  {
    title: "End-to-End Ownership",
    description:
      "From architecture and APIs to frontend, infrastructure, AI integration, deployment, and production support.",
  },
] as const satisfies readonly ValueProposition[];
