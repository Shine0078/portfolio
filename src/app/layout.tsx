import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { generateMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import "./globals.css";

const geist = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  display: "swap",
  fallback: ["Consolas", "monospace"],
});

export const metadata: Metadata = generateMetadata();

export const viewport: Viewport = {
  themeColor: "#080d12",
  colorScheme: "dark",
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

const themeBootScript = `
try {
  const savedTheme = localStorage.getItem("portfolio-accent");
  if (savedTheme === "cyan" || savedTheme === "amber" || savedTheme === "violet") {
    document.documentElement.dataset.theme = savedTheme;
  }
} catch {}
`;

const interactionScript = `
(function () {
  const root = document.documentElement;
  const buttons = document.querySelectorAll("[data-theme-value]");
  const validThemes = ["cyan", "amber", "violet"];

  function applyTheme(theme, persist) {
    if (!validThemes.includes(theme)) return;
    root.dataset.theme = theme;
    buttons.forEach(function (button) {
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.themeValue === theme)
      );
    });
    if (persist) {
      try {
        localStorage.setItem("portfolio-accent", theme);
      } catch {}
    }
  }

  applyTheme(root.dataset.theme || "cyan", false);
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      applyTheme(button.dataset.themeValue, true);
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
      data-theme="cyan"
      className={`${geist.variable} ${geistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: interactionScript,
          }}
        />
      </body>
    </html>
  );
}
