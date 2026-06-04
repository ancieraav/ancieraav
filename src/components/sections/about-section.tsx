import { SectionShell } from "@/components/layout/section-shell";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/content/site";
import { SECTION_IDS } from "@/lib/constants";

export function AboutSection() {
  const { about, avatarInitials } = siteConfig;

  return (
    <SectionShell
      id={SECTION_IDS.about}
      title="About"
      subtitle="Engineer, builder, and DX advocate."
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
        <FadeIn>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div
            className="flex aspect-square items-center justify-center rounded-2xl border bg-gradient-to-br from-[var(--gradient-start)]/10 to-[var(--gradient-end)]/10 text-5xl font-semibold tracking-tight"
            aria-hidden
          >
            {avatarInitials}
          </div>
        </FadeIn>
      </div>
      <Stagger className="mt-12 grid gap-4 sm:grid-cols-3">
        {about.highlights.map((h) => (
          <StaggerItem key={h.label}>
            <Card className="py-4">
              <CardContent>
                <p className="font-mono text-xs text-muted-foreground">
                  {h.label}
                </p>
                <p className="mt-1 text-xl font-semibold">{h.value}</p>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </SectionShell>
  );
}