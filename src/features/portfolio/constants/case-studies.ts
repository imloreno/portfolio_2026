import type { CaseStudy } from "../types/content";

export const caseStudies = [
  {
    id: "ai-powered-order-assistant",
    title: "AI-Powered Order Assistant",
    organization: "Raintree",
    category: "AI / Full-Stack / AWS",
    description:
      "Designed and implemented an AI chatbot from scratch so users can interact with orders through natural language.",
    challenge: "Integrate conversational order workflows with the existing app.",
    role: {
      title: "Senior AI Engineer",
      responsibilities: ["Architecture", "Backend", "AI integration", "Product implementation"],
    },
    work: [
      "Implemented natural-language order actions with LLM and RAG integration.",
      "Built Python and Node.js services using AWS serverless infrastructure.",
      "Worked with DynamoDB and PostgreSQL, integrating the workflow with the React and TypeScript app.",
    ],
    impact: "Shipped a production AI workflow and broader modernization.",
    stack: [
      "Python", "Node.js", "AWS", "Lambda", "DynamoDB", "PostgreSQL",
      "React", "TypeScript", "RAG", "LLMs",
    ],
  },
  {
    id: "high-performance-reporting-platform",
    title: "High-Performance Reporting Platform",
    organization: "NICE",
    category: "Full-Stack / Performance / Product Ownership",
    description:
      "Owned dashboard and reporting capabilities across frontend modernization, performance, and production support.",
    challenge: "Improve reporting and frontend performance without disrupting production.",
    role: {
      title: "Senior Full-Stack Engineer",
      responsibilities: [
        "Dashboard and reporting capability ownership", "Frontend modernization",
        "Performance optimization", "Production support",
      ],
    },
    work: [
      "Owned dashboard and reporting service capabilities.",
      "Optimized report performance and modernized the React frontend.",
      "Supported production through on-call work and integrated LLM capabilities.",
    ],
    impact: "Reporting performance improved by 40%; frontend performance improved by more than 30%.",
    stack: [
      "Python", "Node.js", "React", "TypeScript", "Django", "AWS",
      "MongoDB", "PostgreSQL", "LLM",
    ],
  },
  {
    id: "data-driven-web-platform",
    title: "Data-Driven Web Platform",
    organization: "COSMON",
    category: "Architecture / Full-Stack",
    description:
      "Developed core architecture and dynamic visualizations for a production web platform.",
    challenge: "Design a production web platform with dynamic data visualizations.",
    role: {
      title: "Full-Stack Engineer",
      responsibilities: ["Architecture", "Full-stack engineering"],
    },
    work: [
      "Worked on system design and core architecture for a production web platform.",
      "Built dynamic visualizations and maintainable frontend architecture.",
    ],
    impact: null,
    stack: ["React", "TypeScript", "Redux", "Tailwind", "Java", "Python", "PostgreSQL"],
  },
] as const satisfies readonly CaseStudy[];
