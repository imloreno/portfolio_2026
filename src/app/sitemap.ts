import type { MetadataRoute } from "next";
import { profileSettings } from "@/features/portfolio/constants/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: profileSettings.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
