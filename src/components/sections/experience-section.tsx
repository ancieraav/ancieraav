import { SectionShell } from "@/components/layout/section-shell";
import { TimelineItem } from "@/components/portfolio/timeline-item";
import { experience } from "@/content/experience";
import { SECTION_IDS } from "@/lib/constants";

export function ExperienceSection() {
  return (
    <SectionShell
      id={SECTION_IDS.experience}
      title="Experience"
      subtitle="Roles and impact along the way."
    >
      <div className="space-y-8">
        {experience.map((entry, index) => (
          <TimelineItem key={entry.id} entry={entry} index={index} />
        ))}
      </div>
    </SectionShell>
  );
}