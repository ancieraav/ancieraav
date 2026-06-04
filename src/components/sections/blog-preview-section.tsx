import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionShell } from "@/components/layout/section-shell";
import { FadeIn } from "@/components/motion/fade-in";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllPosts } from "@/lib/posts";

export function BlogPreviewSection() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <SectionShell
      id="blog-preview"
      title="Writing"
      subtitle="Notes on DX, design systems, and static-first apps."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <FadeIn key={post.slug} delay={i * 0.06}>
            <Link href={`/blog/${post.slug}/`}>
              <Card className="h-full transition-all hover:-translate-y-1 hover:glow-border">
                <CardHeader>
                  <p className="font-mono text-xs text-muted-foreground">
                    {post.date} · {post.readingTime}
                  </p>
                  <CardTitle className="text-lg leading-snug">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </FadeIn>
        ))}
      </div>
      <div className="mt-10">
        <Link
          href="/blog/"
          className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
        >
          View all posts
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </SectionShell>
  );
}