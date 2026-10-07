import type { CapabilityGroup } from "../types/content";

export const capabilityGroups = [
  {
    title: "AI Product Engineering",
    description: "Build AI capabilities into real products—not isolated demos.",
    technologies: [
      "LLM integration", "RAG", "AI agents", "MCP",
      "AI-assisted development", "Spec-driven development",
    ],
  },
  {
    title: "Backend & Architecture",
    description: "Design APIs, services, and data systems that can evolve with the product.",
    technologies: [
      "Node.js", "Python", "Django", "TypeScript", "AWS", "Serverless",
      "Microservices", "PostgreSQL", "DynamoDB", "MongoDB",
    ],
  },
  {
    title: "Modern Frontend",
    description:
      "Build responsive, maintainable product interfaces with strong performance and usability.",
    technologies: [
      "React", "Next.js", "TypeScript", "Redux", "Tailwind", "Material UI",
      "Testing", "Micro-frontends",
    ],
  },
  {
    title: "Production Engineering",
    description:
      "Work beyond feature development: performance, migrations, debugging, production support, and technical modernization.",
    technologies: [
      "Performance optimization", "System design", "Database migrations",
      "On-call", "Testing", "Architecture",
    ],
  },
] as const satisfies readonly CapabilityGroup[];
