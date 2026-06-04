import Link from "next/link";
import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/motion/fade-in";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/content/site";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: `Blog — ${siteConfig.name}`,
  description: "Articles on design systems, static sites, and developer experience.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-24 pb-20">
      <Container>
        <FadeIn>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Blog
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight">Writing</h1>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Thoughts on building fast, polished software.
          </p>
        </FadeIn>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {posts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.05}>
              <Link href={`/blog/${post.slug}/`}>
                <Card className="h-full transition-all hover:-translate-y-1 hover:glow-border">
                  <CardHeader>
                    <p className="font-mono text-xs text-muted-foreground">
                      {post.date} · {post.readingTime}
                    </p>
                    <CardTitle>{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>
        <Link
          href="/"
          className="mt-12 inline-block text-sm text-muted-foreground hover:text-foreground"
        >
          ← Back home
        </Link>
      </Container>
    </div>
  );
}