import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "eFootball League Dashboard",
    label: "Product engineering",
    problem:
      "A private league needed one trustworthy place for fixtures and standings without giving every participant edit access.",
    solution:
      "Built a Next.js dashboard with a read-only public view, session-gated administration, validated result entry, automatic round-robin fixtures, and an audit log.",
    outcomes: [
      "Live public demo",
      "Home-and-away fixtures generated automatically",
      "Recent 100 admin actions retained for review",
    ],
    tags: ["Next.js", "TypeScript", "Prisma", "Authentication"],
    liveUrl: "https://efootball-league-dashboard-mu.vercel.app",
    sourceUrl:
      "https://github.com/Shine0078/efootball-league-dashboard",
  },
  {
    title: "Active Directory Home Lab",
    label: "Infrastructure automation",
    problem:
      "Windows domain practice is difficult to repeat safely when provisioning, policy, recovery, and evidence are handled manually.",
    solution:
      "Documented and scripted a three-VM Hyper-V lab covering Server 2022, Windows 11 clients, role-based access, Group Policy, event forwarding, backup, and recovery.",
    outcomes: [
      "3 reproducible virtual machines",
      "8 documented Group Policies",
      "50 test accounts and 6 operations runbooks",
    ],
    tags: ["PowerShell", "Active Directory", "Hyper-V", "Pester"],
    sourceUrl: "https://github.com/Shine0078/Home-Lab",
  },
  {
    title: "IT Helpdesk Automation Toolkit",
    label: "Operations engineering",
    problem:
      "Common account and workstation tasks become slow, inconsistent, and difficult to audit when they rely on one-off manual commands.",
    solution:
      "Created focused PowerShell workflows for bulk provisioning, password operations, health checks, and software inventory with dry-run support and structured reports.",
    outcomes: [
      "4 repeatable support workflows",
      "CSV, JSON, and HTML reporting",
      "Pester-tested safety paths",
    ],
    tags: ["PowerShell", "Automation", "Reporting", "Testing"],
    sourceUrl:
      "https://github.com/Shine0078/IT-Helpdesk-Toolkit",
  },
];
