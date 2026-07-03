import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Inter, JetBrains_Mono } from "next/font/google";
import { generateMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CommandPalette } from "@/components/CommandPalette";
import { BackToTop } from "@/components/BackToTop";
import "./globals.css";

const GSAPScrollAnimations = dynamic(
  () =>
    import("@/components/GSAPScrollAnimations").then(
      (m) => m.GSAPScrollAnimations
    ),
  { ssr: false }
);

const CursorGlow = dynamic(
  () =>
    import("@/components/CursorGlow").then(
      (m) => m.CursorGlow
    ),
  { ssr: false }
);

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = generateMetadata();

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  description: siteConfig.shortBio,
  email: `mailto:${siteConfig.email}`,
  url: siteConfig.siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Oshawa",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Durham College",
  },
  knowsAbout: [
    "Cloud Computing",
    "AWS",
    "Data Analysis",
    "SQL",
    "Python",
    "Java",
    "IT Operations",
  ],
  sameAs: [
    siteConfig.social.github,
    siteConfig.social.linkedin,
    siteConfig.social.twitter,
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark`}
    >
      <head>
        <meta name="theme-color" content="#0a0a0f" />
        <meta name="color-scheme" content="dark light" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <CursorGlow />
        <GSAPScrollAnimations />
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <CommandPalette />
        <BackToTop />
      </body>
    </html>
  );
}
