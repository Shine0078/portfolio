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
    evidence:
      "Built a three-VM domain lab with 50 test accounts, eight Group Policies, and documented recovery procedures.",
  },
  {
    category: "Networking",
    skills: [
      "TCP/IP",
      "DNS & DHCP",
      "Subnetting",
      "Connectivity troubleshooting",
      "Virtual network configuration",
    ],
    evidence:
      "Configured and troubleshot domain and client connectivity in Hyper-V and cloud systems coursework.",
  },
  {
    category: "Support workflow & tools",
    skills: [
      "Microsoft 365",
      "Account provisioning",
      "Issue triage & escalation",
      "Software inventory",
      "Knowledge base runbooks",
    ],
    evidence:
      "Created four repeatable helpdesk workflows with dry-run safety and structured support reports.",
  },
  {
    category: "Scripting & automation",
    skills: [
      "PowerShell",
      "Python",
      "Pester testing",
      "CSV & JSON reporting",
      "REST APIs",
    ],
    evidence:
      "Automated provisioning, password operations, health checks, and inventory collection.",
  },
];
