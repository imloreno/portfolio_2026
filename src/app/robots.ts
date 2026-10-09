import type { MetadataRoute } from "next";
import { profileSettings } from "@/features/portfolio/constants/profile";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${profileSettings.siteUrl}/sitemap.xml`,
    host: profileSettings.siteUrl,
  };
}
