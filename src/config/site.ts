export const siteConfig = {
  name: "Samuel Abraham",
  role: "IT Analyst & Cloud Technologist",
  tagline:
    "IT analyst turning operational complexity into reliable cloud and data systems.",
  shortBio:
    "IT analyst building practical automation, documented infrastructure, and dependable data workflows.",
  location: "Oshawa, Ontario, Canada",
  email: "samuelabraham321@gmail.com",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://shine0078.github.io/portfolio",
  resumeUrl: "/portfolio/resume.pdf",
  availability: "Open to IT analyst and cloud support roles",
  navLinks: [
    { label: "Work", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Credentials", href: "#credentials" },
    { label: "Contact", href: "#contact" },
  ] as const,
  social: {
    github: "https://github.com/Shine0078",
    linkedin: "https://linkedin.com/in/samuelabraham-ops",
  },
  copyright: "© 2026 Samuel Abraham.",
} as const;

export type SiteConfig = typeof siteConfig;
