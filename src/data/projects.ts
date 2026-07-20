import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "eFootball League Dashboard",
    label: "Flagship · Full-stack application",
    summary:
      "Built a live league dashboard that keeps standings public while restricting result changes to authenticated administrators.",
    highlights: [
      {
        label: "Problem",
        value:
          "A private league needed one reliable source for fixtures, scores, and standings.",
      },
      {
        label: "Solution",
        value:
          "Added read-only public views, guarded admin routes, validated score entry, and an audit trail.",
      },
      {
        label: "Stack",
        value:
          "Next.js 15, React 19, TypeScript, Tailwind, Prisma, Turso/LibSQL, and iron-session.",
      },
      {
        label: "Outcome",
        value:
          "Generates home-and-away fixtures, refreshes public data every eight seconds, and retains the latest 100 admin actions.",
      },
    ],
    details: [
      "Server-side API routes verify the administrator session before every write.",
      "Score validation rejects negative and non-integer values before standings are recalculated.",
      "A database uniqueness rule prevents duplicate home-and-away fixtures.",
      "Safe reseeding adds missing fixtures without deleting completed results.",
    ],
    featured: true,
    liveUrl: "https://efootball-league-dashboard-mu.vercel.app",
    sourceUrl:
      "https://github.com/Shine0078/efootball-league-dashboard",
  },
  {
    title: "Active Directory Home Lab",
    label: "Selected · Infrastructure automation",
    summary:
      "Scripted a reproducible Windows domain lab for identity, policy, monitoring, backup, and recovery practice.",
    highlights: [
      {
        label: "Problem",
        value:
          "Manual lab setup made domain troubleshooting difficult to repeat and validate.",
      },
      {
        label: "Solution",
        value:
          "Automated a Server 2022 domain controller and two Windows 11 clients on Hyper-V.",
      },
      {
        label: "Stack",
        value:
          "PowerShell, Active Directory, DNS, DHCP, Group Policy, Hyper-V, and Pester.",
      },
      {
        label: "Outcome",
        value:
          "Created 50 test accounts, eight Group Policies, seven delegated security groups, and six runbooks.",
      },
    ],
    details: [
      "Includes STIG/CIS-inspired hardening, Windows Event Forwarding, and alert tasks.",
      "Backup and restore scripts are paired with documented recovery objectives.",
      "CI runs PSScriptAnalyzer and Pester against the PowerShell modules.",
    ],
    sourceUrl: "https://github.com/Shine0078/Home-Lab",
  },
  {
    title: "IT Helpdesk Automation Toolkit",
    label: "Selected · Support automation",
    summary:
      "Turned common account and workstation checks into repeatable PowerShell workflows with safe defaults and audit output.",
    highlights: [
      {
        label: "Problem",
        value:
          "One-off console work made routine support tasks slow, inconsistent, and difficult to audit.",
      },
      {
        label: "Solution",
        value:
          "Automated bulk users, password resets, system health checks, and software inventory.",
      },
      {
        label: "Stack",
        value:
          "PowerShell 5.1/7, Active Directory RSAT, CIM/WinRM, Pester, CSV, JSON, and HTML.",
      },
      {
        label: "Outcome",
        value:
          "Delivered four focused workflows with dry-run support, per-item error isolation, and timestamped reports.",
      },
    ],
    details: [
      "SupportsShouldProcess and confirmation settings reduce accidental changes.",
      "Passwords are accepted as secure strings and production configuration remains untracked.",
      "Pester checks syntax, required documentation headers, and accidental secret exposure.",
    ],
    sourceUrl:
      "https://github.com/Shine0078/IT-Helpdesk-Toolkit",
  },
];
