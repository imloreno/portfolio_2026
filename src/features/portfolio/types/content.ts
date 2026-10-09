export interface PortfolioLanguage {
  name: string;
  proficiency: string;
}

export interface PortfolioProfile {
  name: string;
  title: string;
  positioning: string;
  location: { city: string; country: string; timeZone: string };
  experience: string;
  languages: readonly PortfolioLanguage[];
  availability: string;
}

export interface ValueProposition {
  title: string;
  description: string;
}

export interface ImpactMetric {
  value: string;
  label: string;
  organization?: string;
  countTarget?: number;
  countSuffix?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  organization: string;
  category: string;
  description: string;
  challenge: string;
  role: { title: string; responsibilities: readonly string[] };
  work: readonly string[];
  impact: string | null;
  stack: readonly string[];
}

export interface ExperienceRole {
  organization: string;
  title: string;
  period: string;
  startDate?: string;
  location: string;
  highlights: readonly string[];
  technologies?: readonly string[];
}

export interface CapabilityGroup {
  title: string;
  description: string;
  technologies: readonly string[];
}

export interface WorkStep {
  title: string;
  description: string;
}
