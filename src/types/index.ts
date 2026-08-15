export interface Project {
  title: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  outcome: string;
  stack: string[];
  details: string[];
  liveUrl?: string;
  sourceUrl: string;
  detailsUrl?: string;
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
  skills: string[];
}

export interface Credential {
  title: string;
  issuer: string;
  kind: "Certification" | "Education";
  date: string;
  status: "Completed" | "In progress";
  description: string;
  link?: string;
}
