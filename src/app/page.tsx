import { AboutSection } from "@/components/sections/about-section";
import { BlogPreviewSection } from "@/components/sections/blog-preview-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <BlogPreviewSection />
      <ContactSection />
    </>
  );
}