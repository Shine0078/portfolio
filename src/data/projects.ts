import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "FINVERSE",
    category: "AI-powered personal finance platform",
    summary:
      "A privacy-first, offline-capable personal finance app — automatic bank sync, budgets, insights, cash-flow forecasting, and a 0–1000 health score — shipped to Android, iOS, and the web as an installable PWA.",
    problem:
      "Personal finance tools either read your banking credentials or keep your data in a black box. Neither is acceptable for money data.",
    solution:
      "Built a pure-domain engine (NestJS + PostgreSQL with row-level security) behind a Flutter client, with Plaid Link handling bank auth in a hosted flow so credentials never reach the app.",
    outcome:
      "564 passing API tests, 93 Flutter tests, a release-signed Android APK, and an installable PWA — all distributed at zero cost via GitHub Releases and GitHub Pages.",
    stack: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Flutter",
      "Dart",
      "Plaid",
      "Stripe",
      "Docker",
    ],
    details: [
      "Domain logic is pure functions over plain data — no framework, no database, no I/O (ADR-0002).",
      "PostgreSQL row-level security isolates users behind a restricted role that cannot bypass policies (ADR-0006).",
      "Plaid access tokens are AES-256-GCM encrypted at rest and never returned to the client.",
      "Argon2id hashing, rotating refresh tokens, TOTP two-factor, passkeys, and on-device receipt OCR.",
      "Release APK and web bundle are verified to contain no secrets before publishing.",
    ],
    liveUrl: "https://shine0078.github.io/starter/app/",
    sourceUrl: "https://github.com/Shine0078/starter",
    detailsUrl: "/portfolio/projects/finverse",
  },
  {
    title: "eFootball League Dashboard",
    category: "Full-stack web application",
    summary:
      "A live league dashboard that keeps standings public while restricting result changes to authenticated administrators.",
    problem:
      "A private league had no single reliable source for fixtures, scores, and standings.",
    solution:
      "Built read-only public views, session-guarded admin routes, validated score entry, and an audit trail.",
    outcome:
      "Generates home-and-away fixtures automatically, refreshes public data every eight seconds, and retains the last 100 admin actions.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma",
      "Turso/LibSQL",
      "iron-session",
    ],
    details: [
      "Server-side API routes verify the administrator session before every write.",
      "Score validation rejects negative and non-integer values before standings are recalculated.",
      "A database uniqueness rule prevents duplicate home-and-away fixtures.",
      "Safe reseeding adds missing fixtures without deleting completed results.",
    ],
    liveUrl: "https://efootball-league-dashboard-mu.vercel.app",
    sourceUrl: "https://github.com/Shine0078/efootball-league-dashboard",
  },
  {
    title: "Active Directory Home Lab",
    category: "Windows infrastructure",
    summary:
      "A scripted, reproducible Windows domain lab for practising identity, policy, monitoring, backup, and recovery.",
    problem:
      "Manual lab setup made domain troubleshooting slow to repeat and hard to validate.",
    solution:
      "Automated a Server 2022 domain controller and two Windows 11 clients on Hyper-V from scratch.",
    outcome:
      "Provisions 50 test accounts, eight Group Policies, seven delegated security groups, and six written runbooks.",
    stack: [
      "PowerShell",
      "Active Directory",
      "DNS",
      "DHCP",
      "Group Policy",
      "Hyper-V",
      "Pester",
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
    category: "Support automation",
    summary:
      "Common account and workstation checks turned into repeatable PowerShell workflows with safe defaults and audit output.",
    problem:
      "One-off console work made routine support tasks slow, inconsistent, and hard to audit.",
    solution:
      "Automated bulk user creation, password resets, system health checks, and software inventory.",
    outcome:
      "Four focused workflows with dry-run support, per-item error isolation, and timestamped reports.",
    stack: [
      "PowerShell 5.1/7",
      "Active Directory RSAT",
      "CIM/WinRM",
      "Pester",
      "CSV/JSON",
    ],
    details: [
      "SupportsShouldProcess and confirmation settings reduce accidental changes.",
      "Passwords are accepted as secure strings and production configuration stays untracked.",
      "Pester checks syntax, required documentation headers, and accidental secret exposure.",
    ],
    sourceUrl: "https://github.com/Shine0078/IT-Helpdesk-Toolkit",
  },
];
