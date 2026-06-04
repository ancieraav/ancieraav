"use client";

import Link from "next/link";
import { Command } from "lucide-react";

import { Container } from "@/components/layout/container";
import { CommandPalette } from "@/components/layout/command-palette";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-40 w-full border-b border-border/60",
          "bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/50",
        )}
      >
        <Container className="flex h-14 items-center justify-between">
          <Link
            href="/"
            className="font-mono text-sm font-medium tracking-tight hover:opacity-80"
          >
            {siteConfig.name.split(" ")[0]}
            <span className="text-muted-foreground">.</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              className="hidden gap-1.5 font-mono text-xs text-muted-foreground sm:flex"
              onClick={() =>
                document.dispatchEvent(
                  new KeyboardEvent("keydown", { key: "k", metaKey: true }),
                )
              }
            >
              <Command className="size-3" />
              <span>⌘K</span>
            </Button>
            <ThemeToggle />
          </div>
        </Container>
      </header>
      <CommandPalette />
    </>
  );
}