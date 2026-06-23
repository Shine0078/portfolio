export const siteConfig = {
  name: "Samuel Abraham",
  role: "IT Analyst & Cloud Technologist",
  tagline:
    "Bridging systems, data, and people — turning operational complexity into reliable, well-documented technology solutions.",
  shortBio:
    "IT Analyst focused on cloud infrastructure, data analysis, and process reliability, with a foundation in software development and a passion for clean, dependable systems.",
  location: "Oshawa, Ontario, Canada",
  email: "samuelabraham321@gmail.com",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://samuelabraham.dev",
  resumeUrl: "/resume.pdf",
  availability: "Open to IT Analyst & Cloud support opportunities",

  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
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
