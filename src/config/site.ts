export const siteConfig = {
  name: "Samuel Abraham",
  role: "I.T Analyst",
  tagline: "Aspiring programmer and data enthusiast building real-world solutions.",
  location: "Oshawa, Ontario, Canada",
  email: "samuelabraham321@gmail.com",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://samuelabraham.dev",
  resumeUrl: "/resume.pdf",

  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ] as const,

  social: {
    github: "https://github.com/Shine0078",
    linkedin: "https://linkedin.com/in/samuelabraham-ops",
    twitter: "https://twitter.com/samuelabraham",
  },

  copyright: `© ${new Date().getFullYear()} Samuel Abraham. All rights reserved.`,
} as const;

export type SiteConfig = typeof siteConfig;
