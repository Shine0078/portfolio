export interface Project {
  title: string;
  label: string;
  summary: string;
  highlights: {
    label: "Problem" | "Solution" | "Stack" | "Outcome";
    value: string;
  }[];
  details: string[];
  featured?: boolean;
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
  skills: string[];
  evidence: string;
}

export interface Credential {
  title: string;
  issuer: string;
  kind: "Certification" | "Education";
  date: string;
  status: "Completed" | "In progress";
  description: string;
  link?: string;
  featured?: boolean;
}
