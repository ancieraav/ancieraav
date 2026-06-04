import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";

type SectionShellProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionShell({
  id,
  title,
  subtitle,
  children,
  className,
}: SectionShellProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-20 sm:py-28", className)}>
      <Container>
        <FadeIn className="mb-12 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {id}
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-3 text-muted-foreground">{subtitle}</p>
          ) : null}
        </FadeIn>
        {children}
      </Container>
    </section>
  );
}