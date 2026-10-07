import type { ExperienceRole } from "../types/content";

export const experience: readonly ExperienceRole[] = [
  {
    organization: "Raintree",
    title: "Senior AI Engineer",
    period: "May 2025–Present",
    location: "Arizona, US",
    highlights: [
      "Built serverless microservices and an AI chatbot that acts on orders in natural language.",
      "Migrated a legacy database and used spec-driven design.",
      "Improved application performance by more than 60%.",
    ],
    technologies: ["AI", "Python", "Node.js", "AWS", "React", "TypeScript"],
  },
  {
    organization: "NICE",
    title: "Senior Full-Stack Engineer",
    period: "June 2022–June 2024",
    location: "New Jersey, US",
    highlights: [
      "Built a reporting dashboard service and improved reporting performance by 40%.",
      "Modernized the frontend, improving frontend performance by more than 30%.",
      "Owned dashboard and reporting capabilities; supported production and on-call work, including LLM integration.",
    ],
    technologies: ["Python", "Node.js", "React", "Django", "AWS", "LLM"],
  },
  {
    organization: "COSMON",
    title: "Full-Stack Engineer",
    period: "June–November 2021",
    location: "Bolivia",
    highlights: [
      "Worked on core architecture and dynamic visualizations for a production web platform.",
      "Worked on system design and maintainable frontend architecture.",
    ],
    technologies: ["React", "TypeScript", "Redux", "Tailwind", "Java", "Python", "PostgreSQL"],
  },
  {
    organization: "Tucandera Tours",
    title: "Full-Stack Engineer",
    period: "February 2020–May 2021",
    location: "Bolivia",
    highlights: [
      "Transformed a static website into a Next.js platform with improved SEO and navigation.",
      "Built responsive customer-management interfaces and contributed system design.",
    ],
  },
  {
    organization: "Gourmand",
    title: "Full-Stack Engineer",
    period: "July–December 2019",
    location: "Bolivia",
    highlights: [
      "Built backend infrastructure and a responsive frontend for customer and company needs.",
      "Created a normalized MySQL database designed to support future growth.",
    ],
  },
];
