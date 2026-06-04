"use client";

import Link from "next/link";
import { Send } from "lucide-react";
import { useState } from "react";

import { SectionShell } from "@/components/layout/section-shell";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/content/site";
import { SECTION_IDS } from "@/lib/constants";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name || "Guest"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <SectionShell
      id={SECTION_IDS.contact}
      title="Contact"
      subtitle="Say hello — I typically reply within 48 hours."
      className="bg-muted/30"
    >
      <div className="grid gap-12 lg:grid-cols-2">
        <FadeIn>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="mt-1.5"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="mt-1.5"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project..."
                className="mt-1.5"
                required
              />
            </div>
            <Button type="submit" variant="gradient" className="w-full sm:w-auto">
              <Send className="size-4" />
              Send via email
            </Button>
            <p className="text-xs text-muted-foreground">
              Opens your mail client — no server required (static-safe).
            </p>
          </form>
        </FadeIn>
        <FadeIn delay={0.1} className="space-y-6">
          <div>
            <p className="font-mono text-xs text-muted-foreground">Email</p>
            <Link
              href={`mailto:${siteConfig.email}`}
              className="mt-1 block text-lg hover:underline"
            >
              {siteConfig.email}
            </Link>
          </div>
          <div>
            <p className="font-mono text-xs text-muted-foreground">Telegram</p>
            <p className="mt-1 text-lg">{siteConfig.telegram}</p>
          </div>
          <div>
            <p className="font-mono text-xs text-muted-foreground">Location</p>
            <p className="mt-1 text-lg">{siteConfig.location}</p>
          </div>
        </FadeIn>
      </div>
    </SectionShell>
  );
}