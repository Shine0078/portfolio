import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "TaskFlow",
    description:
      "A real-time project management dashboard with drag-and-drop Kanban boards, team collaboration, and automated sprint tracking built for distributed teams.",
    image: "/images/projects/taskflow.jpg",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "WebSocket"],
    liveUrl: "https://taskflow-demo.vercel.app",
    githubUrl: "https://github.com/alexmorgan/taskflow",
  },
  {
    title: "PulseAPI",
    description:
      "High-throughput REST and GraphQL API gateway with rate limiting, caching, and observability. Handles 10k+ requests/second in production.",
    image: "/images/projects/pulseapi.jpg",
    tags: ["Go", "Redis", "Docker", "GraphQL"],
    liveUrl: "https://pulseapi.dev",
    githubUrl: "https://github.com/alexmorgan/pulseapi",
  },
  {
    title: "Reflect",
    description:
      "A privacy-first journaling app with end-to-end encryption, mood tracking, and AI-powered insights. Featured on Product Hunt with 500+ upvotes.",
    image: "/images/projects/reflect.jpg",
    tags: ["React Native", "Node.js", "MongoDB", "TensorFlow"],
    liveUrl: "https://reflect.app",
    githubUrl: "https://github.com/alexmorgan/reflect",
  },
];
