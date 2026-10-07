import type { WorkStep } from "../types/content";

export const howIWork = [
  {
    title: "Understand the problem",
    description:
      "Start with the product and business problem—not the framework. Understand what we're solving, for whom, and what success looks like.",
  },
  {
    title: "Design deliberately",
    description:
      "Think through architecture, trade-offs, maintainability, and delivery before adding unnecessary complexity.",
  },
  {
    title: "Build and iterate",
    description:
      "Use modern engineering and AI-assisted workflows to move quickly while keeping code understandable and production-ready.",
  },
  {
    title: "Own the outcome",
    description:
      "Shipping isn't the end. Care about performance, production behavior, feedback, and what needs to improve next.",
  },
] as const satisfies readonly WorkStep[];
