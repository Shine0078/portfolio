import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python" },
      { name: "Java" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "PHP" },
      { name: "SQL" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML/CSS" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    category: "Backend & Database",
    skills: [
      { name: "Node.js" },
      { name: "MySQL" },
      { name: "PostgreSQL" },
      { name: "REST APIs" },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS" },
      { name: "Docker" },
      { name: "Cloud Computing" },
      { name: "Git" },
    ],
  },
  {
    category: "Data & Analytics",
    skills: [
      { name: "Data Analysis" },
      { name: "Data Presentation" },
      { name: "Blockchain" },
      { name: "Software Testing" },
    ],
  },
  {
    category: "Tools & Methods",
    skills: [
      { name: "Problem Solving" },
      { name: "Team Collaboration" },
      { name: "Agile" },
      { name: "Figma" },
    ],
  },
];
