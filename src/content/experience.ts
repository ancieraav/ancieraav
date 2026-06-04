export type ExperienceEntry = {
  id: string;
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "senior-fe",
    role: "Senior Frontend Engineer",
    company: "Nova Labs",
    period: "2023 — Present",
    bullets: [
      "Led design system adoption across 3 product squads, cutting UI inconsistency bugs by 40%.",
      "Shipped Next.js 15 migration with zero downtime and improved LCP by 28%.",
      "Mentored 4 engineers on performance profiling and component architecture.",
    ],
  },
  {
    id: "fullstack",
    role: "Full-Stack Developer",
    company: "Pixel & Code Studio",
    period: "2021 — 2023",
    bullets: [
      "Built client dashboards and mobile apps from discovery to App Store release.",
      "Introduced pnpm monorepos and shared UI packages for faster delivery.",
      "Integrated payment and auth flows (Stripe, Firebase, Supabase).",
    ],
  },
  {
    id: "mobile",
    role: "Mobile Developer",
    company: "Startup Garage",
    period: "2020 — 2021",
    bullets: [
      "Delivered React Native MVP in 8 weeks with offline-first data layer.",
      "Set up EAS builds and OTA updates for rapid iteration.",
    ],
  },
  {
    id: "junior",
    role: "Junior Web Developer",
    company: "Digital Craft Agency",
    period: "2019 — 2020",
    bullets: [
      "Maintained marketing sites and internal tools with React and WordPress headless.",
      "First production Next.js app — foundation for full-stack career.",
    ],
  },
];