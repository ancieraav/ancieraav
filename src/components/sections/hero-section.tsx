"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site";
import { SECTION_IDS } from "@/lib/constants";

export function HeroSection() {
  const { hero } = siteConfig;

  return (
    <section
      id={SECTION_IDS.hero}
      className="relative flex min-h-[90vh] items-center overflow-hidden pt-14"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-dot opacity-30" />
      <motion.div
        className="pointer-events-none absolute -top-32 left-1/2 size-[480px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--gradient-end) 25%, transparent), transparent 70%)",
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <Container className="relative z-10 py-24">
        <Badge variant="gradient" className="mb-6 font-mono">
          {siteConfig.status}
        </Badge>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
          {hero.headline}{" "}
          <span className="text-gradient">{hero.headlineAccent}</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
          {hero.subheadline}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button variant="gradient" size="lg" asChild>
            <Link href={hero.primaryCta.href}>
              {hero.primaryCta.label}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
          </Button>
        </div>
        <p className="mt-12 font-mono text-xs text-muted-foreground">
          Press{" "}
          <kbd className="rounded border bg-muted px-1.5 py-0.5">⌘</kbd>{" "}
          <kbd className="rounded border bg-muted px-1.5 py-0.5">K</kbd> to
          navigate
        </p>
      </Container>
    </section>
  );
}