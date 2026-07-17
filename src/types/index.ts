export interface Project {
  title: string;
  label: string;
  problem: string;
  solution: string;
  outcomes: string[];
  tags: string[];
  liveUrl?: string;
  sourceUrl: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  bullets: string[];
}

export interface SkillCategory {
  category: string;
  summary: string;
  skills: string[];
  proof: string;
}

export interface Credential {
  title: string;
  issuer: string;
  date: string;
  status: "Completed" | "In progress" | "Preparing";
  description: string;
  link?: string;
}
