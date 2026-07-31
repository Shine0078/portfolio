export const siteConfig = {
  name: "Samuel Abraham",
  role: "IT Support Technician",
  tagline:
    "I help people get back to work — diagnosing Windows, Microsoft 365, and network issues, then automating the fixes so they stay fixed.",
  shortBio:
    "IT support candidate with hands-on experience in Windows, Microsoft 365, Active Directory, networking, and PowerShell automation.",
  location: "Oshawa, Ontario",
  email: "samuelabraham321@gmail.com",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://shine0078.github.io/portfolio",
  resumeUrl: "/portfolio/resume.pdf",
  availability: "Open to IT Support and Help Desk roles",
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ] as const,
  social: {
    github: "https://github.com/Shine0078",
    linkedin: "https://linkedin.com/in/samuelabraham-ops",
  },
  copyright: "© 2026 Samuel Abraham",
} as const;

export type SiteConfig = typeof siteConfig;
