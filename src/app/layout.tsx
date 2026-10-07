import type { Metadata } from "next";
import { contact } from "@/features/portfolio/constants/contact";
import { portfolioProfile, profileSettings } from "@/features/portfolio/constants/profile";
import "./globals.css";

const description =
  "Senior Full-Stack Engineer based in Bolivia, working remotely with US teams. Building scalable web platforms and AI-powered products with Node.js, Python, TypeScript, React, AWS and LLM technologies.";

export const metadata: Metadata = {
  metadataBase: new URL(profileSettings.siteUrl),
  title: "Lorenzo Arias — Senior Full-Stack Engineer | AI Product Engineering",
  description,
  applicationName: "Lorenzo Arias Portfolio",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Lorenzo Arias",
    title: "Lorenzo Arias — Senior Full-Stack Engineer | AI Product Engineering",
    description,
    images: [
      {
        url: profileSettings.portraitUrl,
        width: 1254,
        height: 1254,
        alt: "Lorenzo Arias, Senior Full-Stack Engineer based in Bolivia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lorenzo Arias — Senior Full-Stack Engineer | AI Product Engineering",
    description,
    images: [profileSettings.portraitUrl],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioProfile.name,
    url: profileSettings.siteUrl,
    jobTitle: "Senior Full-Stack Engineer",
    description,
    email: `mailto:${contact.email}`,
    image: `${profileSettings.siteUrl}${profileSettings.portraitUrl}`,
    sameAs: [profileSettings.linkedinUrl],
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
    homeLocation: {
      "@type": "Place",
      name: `${portfolioProfile.location.city}, ${portfolioProfile.location.country}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: portfolioProfile.location.city,
        addressCountry: "BO",
      },
    },
  };

  return (
    <html className="scroll-smooth scroll-pt-[5.5rem] motion-reduce:scroll-auto max-mobile:scroll-pt-[4.8rem]" lang="en">
      <body className="m-0 bg-white font-sans text-base leading-[1.65] text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
