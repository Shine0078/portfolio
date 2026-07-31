import type { Credential } from "@/types";

export const certifications: Credential[] = [
  {
    title: "CompTIA A+",
    issuer: "CompTIA",
    kind: "Certification",
    date: "In progress",
    status: "In progress",
    description:
      "Studying hardware, Windows, networking, security, mobile devices, and support troubleshooting. Not yet certified.",
    link: "https://www.comptia.org/en-us/certifications/a/",
  },
  {
    title: "Cloud and Information Technology Systems",
    issuer: "Durham College",
    kind: "Education",
    date: "Expected 2026",
    status: "In progress",
    description:
      "Cloud architecture, DevOps, security, virtualization, and IT project management.",
    link: "https://durhamcollege.ca/programs/cloud-and-information-technology-systems",
  },
  {
    title: "Computer Programming & Analysis",
    issuer: "Durham College",
    kind: "Education",
    date: "2025",
    status: "Completed",
    description:
      "Three-year advanced diploma covering software development, databases, testing, and data analysis.",
    link: "https://durhamcollege.ca",
  },
];
