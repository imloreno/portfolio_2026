import type { Metadata, Viewport } from "next";
import { profileSettings } from "@/features/portfolio/constants/profile";
import { structuredData } from "@/features/portfolio/structured-data";
import "./globals.css";

const title = "Lorenzo Arias — Senior Full-Stack Engineer | AI Product Engineering";
const ogAlt = "Lorenzo Arias, Senior Full-Stack Engineer focused on AI Product Engineering";

export const metadata: Metadata = {
  metadataBase: new URL(profileSettings.siteUrl),
  title: {
    default: title,
    template: "%s | Lorenzo Arias",
  },
  description: profileSettings.description,
  applicationName: "Lorenzo Arias Portfolio",
  authors: [{ name: profileSettings.name, url: profileSettings.siteUrl }],
  creator: profileSettings.name,
  publisher: profileSettings.name,
  category: "technology",
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Lorenzo Arias",
    statusBarStyle: "default",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Lorenzo Arias",
    locale: "en_US",
    title,
    description: profileSettings.description,
    images: [{ url: "/og.webp", width: 1200, height: 630, alt: ogAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profileSettings.description,
    images: [{ url: "/og.webp", alt: ogAlt }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071b36",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html className="scroll-smooth scroll-pt-[5.5rem] motion-reduce:scroll-auto max-mobile:scroll-pt-[4.8rem]" lang="en">
      <link
        as="font"
        crossOrigin="anonymous"
        href="/fonts/manrope-latin.woff2"
        rel="preload"
        type="font/woff2"
      />
      <body className="m-0 bg-white font-sans text-base leading-[1.65] text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
