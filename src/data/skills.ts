import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Systems & cloud",
    summary:
      "Provisioning, policy, access, and recovery with a bias toward repeatable operations.",
    skills: [
      "AWS foundations",
      "Windows & Active Directory",
      "Linux",
      "Hyper-V",
      "Docker",
    ],
    proof:
      "Demonstrated in the Active Directory lab and current cloud systems coursework.",
  },
  {
    category: "Automation & data",
    summary:
      "Turning repetitive support work and operational data into dependable workflows.",
    skills: [
      "PowerShell",
      "Python",
      "SQL",
      "REST APIs",
      "Operational reporting",
    ],
    proof:
      "Applied in the helpdesk toolkit, lab provisioning scripts, and dashboard data model.",
  },
  {
    category: "Engineering practice",
    summary:
      "Building software that is testable, documented, reviewable, and safe to operate.",
    skills: [
      "TypeScript",
      "Next.js",
      "Automated testing",
      "GitHub Actions",
      "Technical documentation",
    ],
    proof:
      "Visible in public repositories with CI, tests, runbooks, and implementation notes.",
  },
];
