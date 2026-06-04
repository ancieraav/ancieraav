import { SectionShell } from "@/components/layout/section-shell";
import { SkillBar } from "@/components/portfolio/skill-bar";
import { FadeIn } from "@/components/motion/fade-in";
import { skillCategories } from "@/content/skills";
import { SECTION_IDS } from "@/lib/constants";

export function SkillsSection() {
  return (
    <SectionShell
      id={SECTION_IDS.skills}
      title="Skills"
      subtitle="Tools and stacks I use daily."
      className="bg-muted/30"
    >
      <div className="grid gap-10 sm:grid-cols-2">
        {skillCategories.map((cat, i) => (
          <FadeIn key={cat.id} delay={i * 0.05}>
            <div className="rounded-xl border bg-card p-6">
              <h3 className="font-semibold">{cat.title}</h3>
              <div className="mt-6 space-y-5">
                {cat.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}