import type { Certification } from "@/types";

// Add the Certification interface to types/index.ts

export const certifications: Certification[] = [
  {
    title: "Diploma of Education — Computer Programming & Analysis",
    issuer: "Durham College",
    date: "2025",
    description:
      "Three-year advanced diploma covering Python, Java, JavaScript, MySQL, PHP, CSS, software development, database management, and data analysis.",
    link: "https://durhamcollege.ca",
  },
  {
    title: "Cloud and Information Technology Systems (In Progress)",
    issuer: "Durham College",
    date: "2026",
    description:
      "Ontario College Diploma preparing for AWS Cloud Technologies certifications. Covers cloud architecture, DevOps, security, virtualization, and IT project management.",
    link: "https://durhamcollege.ca/programs/cloud-and-information-technology-systems",
  },
  {
    title: "AWS Cloud Practitioner (In View)",
    issuer: "Amazon Web Services",
    date: "2026",
    description:
      "Foundational certification validating cloud knowledge including AWS services, security, architecture, pricing, and support. Currently preparing for the exam.",
    link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
  },
];
