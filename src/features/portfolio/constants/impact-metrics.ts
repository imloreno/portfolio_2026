import type { ImpactMetric } from "../types/content";

export const impactMetrics: readonly ImpactMetric[] = [
  {
    value: "60%+",
    label: "application performance improvement",
    organization: "Raintree",
    countTarget: 60,
    countSuffix: "%+",
  },
  {
    value: "40%",
    label: "reporting performance improvement",
    organization: "NICE",
    countTarget: 40,
    countSuffix: "%",
  },
  {
    value: "30%+",
    label: "frontend performance improvement",
    organization: "NICE",
    countTarget: 30,
    countSuffix: "%+",
  },
  {
    value: "7 years",
    label: "professional experience",
    countTarget: 7,
    countSuffix: "+ years",
  },
];
