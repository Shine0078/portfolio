import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { generateMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geist = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist",
  weight: "100 900",
  display: "swap",
  fallback: ["Segoe UI", "system-ui", "Arial", "sans-serif"],
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
  fallback: ["Consolas", "monospace"],
});

export const metadata: Metadata = generateMetadata();

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#08080a" },
  ],
};

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
    "Technical Support",
    "Microsoft 365",
    "Active Directory",
    "PowerShell",
    "Computer Networking",
    "Windows Support",
    "Technical Documentation",
  ],
  sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
};

/**
 * Runs before first paint so a stored preference never flashes the wrong
 * scheme. With no stored value the document stays unset and the system
 * preference wins through `color-scheme: light dark`.
 */
const themeBoot = `
try {
  var t = localStorage.getItem("theme");
  if (t === "light" || t === "dark") document.documentElement.dataset.theme = t;
} catch (e) {}
`;

const behaviour = `
(function () {
  var root = document.documentElement;

  document.querySelectorAll("[data-theme-toggle]").forEach(function (button) {
    button.addEventListener("click", function () {
      var isDark = root.dataset.theme
        ? root.dataset.theme === "dark"
        : matchMedia("(prefers-color-scheme: dark)").matches;
      var next = isDark ? "light" : "dark";
      root.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  });

  document
    .getElementById("mobile-menu")
    ?.addEventListener("click", function (event) {
      if (event.target.closest("a")) this.hidePopover();
    });
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script dangerouslySetInnerHTML={{ __html: behaviour }} />
      </body>
    </html>
  );
}
