export type SkillLevel = "beginner" | "intermediate" | "advanced" | "expert";

export type Skill = {
  name: string;
  level: SkillLevel;
  progress: number;
};

export type SkillCategory = {
  id: string;
  title: string;
  skills: Skill[];
};

const levelProgress: Record<SkillLevel, number> = {
  beginner: 25,
  intermediate: 50,
  advanced: 75,
  expert: 95,
};

export function getSkillProgress(level: SkillLevel): number {
  return levelProgress[level];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "TypeScript", level: "expert", progress: 95 },
      { name: "React / Next.js", level: "expert", progress: 95 },
      { name: "Tailwind CSS", level: "advanced", progress: 85 },
      { name: "Framer Motion", level: "advanced", progress: 80 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "Node.js", level: "advanced", progress: 85 },
      { name: "PostgreSQL", level: "advanced", progress: 80 },
      { name: "REST / GraphQL", level: "advanced", progress: 82 },
      { name: "Redis", level: "intermediate", progress: 65 },
    ],
  },
  {
    id: "mobile",
    title: "Mobile",
    skills: [
      { name: "React Native", level: "advanced", progress: 88 },
      { name: "Expo", level: "advanced", progress: 85 },
      { name: "iOS / Android deploy", level: "intermediate", progress: 70 },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    skills: [
      { name: "Vercel / Cloudflare", level: "advanced", progress: 85 },
      { name: "Docker", level: "intermediate", progress: 68 },
      { name: "CI/CD", level: "advanced", progress: 82 },
    ],
  },
  {
    id: "ai",
    title: "AI",
    skills: [
      { name: "LLM APIs", level: "advanced", progress: 80 },
      { name: "Prompt engineering", level: "advanced", progress: 78 },
      { name: "RAG pipelines", level: "intermediate", progress: 62 },
    ],
  },
];