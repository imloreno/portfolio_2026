import { education } from "./constants/about";
import { portfolioProfile, profileSettings } from "./constants/profile";

const base = profileSettings.siteUrl;
const personId = `${base}/#person`;
const websiteId = `${base}/#website`;

const sameAs = [profileSettings.linkedinUrl, profileSettings.githubUrl].flatMap(
  (value) => (typeof value === "string" ? [value] : []),
);

/**
 * Site-wide schema.org graph (Person + WebSite + ProfilePage).
 * Injected once in the root layout so every page shares one consistent entity.
 */
export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: portfolioProfile.name,
      givenName: "Lorenzo",
      familyName: "Arias",
      url: base,
      jobTitle: "Senior Full-Stack Engineer",
      description: profileSettings.description,
      email: `mailto:${profileSettings.email}`,
      image: {
        "@type": "ImageObject",
        url: `${base}${profileSettings.portraitUrl}`,
        width: 1400,
        height: 1400,
      },
      sameAs,
      knowsAbout: [
        "Full-stack engineering",
        "AI product engineering",
        "Large language models",
        "Node.js",
        "Python",
        "TypeScript",
        "React",
        "AWS",
        "Software architecture",
        "Production engineering",
      ],
      knowsLanguage: ["English", "Spanish"],
      worksFor: {
        "@type": "Organization",
        name: "Raintree",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: education.institution,
      },
      hasOccupation: {
        "@type": "Occupation",
        name: "Senior Full-Stack Engineer",
        occupationalCategory: "Software Engineering",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: portfolioProfile.location.city,
        addressCountry: "BO",
      },
      homeLocation: {
        "@type": "Place",
        name: `${portfolioProfile.location.city}, ${portfolioProfile.location.country}`,
      },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: base,
      name: portfolioProfile.name,
      inLanguage: "en",
      publisher: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      "@id": `${base}/#webpage`,
      url: base,
      name: "Lorenzo Arias — Senior Full-Stack Engineer | AI Product Engineering",
      isPartOf: { "@id": websiteId },
      about: { "@id": personId },
      mainEntity: { "@id": personId },
      inLanguage: "en",
    },
  ],
} as const;
