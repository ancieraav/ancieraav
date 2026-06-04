import { SECTION_IDS } from "@/lib/constants";

export const siteConfig = {
  name: "Alex Rivera",
  title: "Alex Rivera — Software Engineer",
  description:
    "Full-stack engineer building fast, polished web and mobile products. Focused on DX, design systems, and shipping.",
  url: "https://ancieraav.dev",
  email: "hello@alexrivera.dev",
  telegram: "@alexrivera",
  location: "Jakarta, Indonesia",
  status: "Open to opportunities",
  avatarInitials: "AR",
  socials: [
    { label: "GitHub", href: "https://github.com/ancieraav" },
    { label: "LinkedIn", href: "https://linkedin.com/in/alexrivera" },
    { label: "X", href: "https://x.com/alexrivera" },
  ],
  nav: [
    { label: "About", href: `#${SECTION_IDS.about}` },
    { label: "Projects", href: `#${SECTION_IDS.projects}` },
    { label: "Skills", href: `#${SECTION_IDS.skills}` },
    { label: "Experience", href: `#${SECTION_IDS.experience}` },
    { label: "Blog", href: "/blog/" },
    { label: "Contact", href: `#${SECTION_IDS.contact}` },
  ],
  hero: {
    headline: "Building products that feel",
    headlineAccent: "effortless.",
    subheadline:
      "I ship full-stack apps with Next.js and React Native — obsessed with developer experience, crisp UI, and fast iteration.",
    primaryCta: { label: "View work", href: `#${SECTION_IDS.projects}` },
    secondaryCta: { label: "Get in touch", href: `#${SECTION_IDS.contact}` },
  },
  about: {
    paragraphs: [
      "I'm a software engineer with 5+ years shipping web and mobile products. I move fast, adapt faster, and care deeply about how things feel — not just how they work.",
      "My stack centers on TypeScript, Next.js, React Native, and cloud-native backends. I've led features end-to-end: from design systems to deployment pipelines.",
      "When I'm not coding, I write about AI and developer tools — bridging what ships in production with what teams actually need.",
    ],
    highlights: [
      { label: "Experience", value: "5+ years" },
      { label: "Focus", value: "Web & Mobile" },
      { label: "Location", value: "Jakarta, ID" },
    ],
  },
} as const;