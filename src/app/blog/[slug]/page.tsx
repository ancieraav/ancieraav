import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MarkdownContent } from "@/components/blog/markdown-content";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/motion/fade-in";
import { siteConfig } from "@/content/site";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} — ${siteConfig.name}`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="pt-24 pb-20">
      <Container className="max-w-3xl">
        <FadeIn>
          <Link
            href="/blog/"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            ← All posts
          </Link>
          <p className="mt-8 font-mono text-xs text-muted-foreground">
            {post.date} · {post.readingTime}
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight">
            {post.title}
          </h1>
        </FadeIn>
        <FadeIn delay={0.1} className="mt-10">
          <MarkdownContent content={post.content} />
        </FadeIn>
      </Container>
    </div>
  );
}