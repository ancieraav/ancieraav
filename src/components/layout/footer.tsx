import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t py-12">
      <Container className="space-y-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Built with Next.js · Static export · shadcn/ui
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {siteConfig.socials.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
        <Separator />
        <p className="text-center text-xs text-muted-foreground sm:text-left">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}