export const SECTION_IDS = {
  hero: "hero",
  about: "about",
  projects: "projects",
  skills: "skills",
  experience: "experience",
  contact: "contact",
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

export const SITE_URL = "https://ancieraav.dev";