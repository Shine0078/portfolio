import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Operating systems & identity",
    skills: [
      "Windows 10/11",
      "Windows Server 2022",
      "Active Directory",
      "Group Policy",
      "Linux fundamentals",
    ],
  },
  {
    category: "Networking",
    skills: [
      "TCP/IP",
      "DNS & DHCP",
      "Subnetting",
      "Connectivity troubleshooting",
      "Virtual networking",
    ],
  },
  {
    category: "Support tools & workflow",
    skills: [
      "Microsoft 365",
      "Account provisioning",
      "Triage & escalation",
      "Software inventory",
      "Runbooks & documentation",
    ],
  },
  {
    category: "Scripting & automation",
    skills: ["PowerShell", "Python", "Pester", "CSV & JSON reporting", "REST APIs"],
  },
];
