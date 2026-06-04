import { FadeIn } from "@/components/motion/fade-in";
import type { ExperienceEntry } from "@/content/experience";

type TimelineItemProps = {
  entry: ExperienceEntry;
  index: number;
};

export function TimelineItem({ entry, index }: TimelineItemProps) {
  return (
    <FadeIn delay={index * 0.08} className="relative pl-8">
      <span className="absolute left-0 top-2 size-2.5 rounded-full bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)]" />
      {index < 3 ? (
        <span className="absolute left-[4px] top-5 h-full w-px bg-border" />
      ) : null}
      <div className="rounded-xl border bg-card/50 p-5 transition-colors hover:bg-card">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-semibold">{entry.role}</h3>
          <span className="font-mono text-xs text-muted-foreground">
            {entry.period}
          </span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{entry.company}</p>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          {entry.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span className="text-gradient">—</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  );
}