export type ProjectCategory = "web" | "mobile" | "ai" | "all";

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  featured: boolean;
  year: string;
  category: Exclude<ProjectCategory, "all">;
};

export const projects: Project[] = [
  {
    id: "flux-ui",
    title: "Flux UI Lab",
    description:
      "Experimental interface that rewrites its own layout from natural-language instructions — a playground for generative UI patterns.",
    tags: ["Next.js", "TypeScript", "AI"],
    href: "https://github.com/example/flux-ui",
    featured: true,
    year: "2025",
    category: "ai",
  },
  {
    id: "nexus-dash",
    title: "Nexus Dashboard",
    description:
      "Real-time analytics dashboard with edge-cached charts, role-based views, and a component library shared across products.",
    tags: ["Next.js", "Tailwind", "Vercel"],
    href: "https://github.com/example/nexus-dash",
    featured: true,
    year: "2025",
    category: "web",
  },
  {
    id: "pulse-mobile",
    title: "Pulse Mobile",
    description:
      "Health-tracking app with offline-first sync, push notifications, and biometric-friendly onboarding flows.",
    tags: ["React Native", "Supabase"],
    href: "https://github.com/example/pulse",
    featured: true,
    year: "2024",
    category: "mobile",
  },
  {
    id: "teachkit",
    title: "TeachKit AI",
    description:
      "Tool for educators to generate lesson plans, worksheets, and assessments aligned to curriculum standards.",
    tags: ["Gemini API", "Next.js"],
    href: "https://github.com/example/teachkit",
    featured: false,
    year: "2024",
    category: "ai",
  },
  {
    id: "ship-cli",
    title: "Ship CLI",
    description:
      "Developer CLI that scaffolds monorepos, runs checks, and publishes with one command — built for team velocity.",
    tags: ["Node.js", "TypeScript"],
    href: "https://github.com/example/ship-cli",
    featured: false,
    year: "2023",
    category: "web",
  },
  {
    id: "weather-insights",
    title: "Weather Insights",
    description:
      "End-to-end data pipeline: cleaning, clustering, and business recommendations from raw meteorological datasets.",
    tags: ["Python", "Pandas", "ML"],
    href: "https://github.com/example/weather",
    featured: false,
    year: "2023",
    category: "ai",
  },
];

export const projectFilters: { label: string; value: ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "mobile" },
  { label: "AI", value: "ai" },
];