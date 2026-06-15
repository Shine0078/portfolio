export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
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
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  link?: string;
}

export interface Post {
  _id: string;
  _raw: {
    sourceFilePath: string;
    sourceFileDir: string;
    flattenedPath: string;
  };
  type: "Post";
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: string;
  slug: string;
  body: {
    code: string;
    raw: string;
  };
}
