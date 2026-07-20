export const siteConfig = {
  name: "Samuel Abraham",
  role: "User Support Technician / IT Support",
  tagline:
    "I resolve user issues, document fixes, and automate repeatable support work.",
  shortBio:
    "User support candidate with hands-on Windows, Microsoft 365, Active Directory, networking, and PowerShell experience.",
  location: "Oshawa, Ontario, Canada",
  email: "samuelabraham321@gmail.com",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://shine0078.github.io/portfolio",
  resumeUrl: "/portfolio/resume.pdf",
  availability: "Open to User Support Technician and IT Support roles",
  navLinks: [
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
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
