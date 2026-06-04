import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

function getMdxFiles(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"));
}

export function getAllPosts(): BlogPostMeta[] {
  return getMdxFiles()
    .map((filename) => {
      const slug = filename.replace(/\.mdx?$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
      const { data } = matter(raw);
      return {
        slug,
        title: String(data.title ?? slug),
        excerpt: String(data.excerpt ?? ""),
        date: String(data.date ?? ""),
        readingTime: String(data.readingTime ?? "5 min"),
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`);
  const mdPath = path.join(BLOG_DIR, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath)
    ? mdxPath
    : fs.existsSync(mdPath)
      ? mdPath
      : null;

  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: String(data.title ?? slug),
    excerpt: String(data.excerpt ?? ""),
    date: String(data.date ?? ""),
    readingTime: String(data.readingTime ?? "5 min"),
    content,
  };
}

export function getAllSlugs(): string[] {
  return getMdxFiles().map((f) => f.replace(/\.mdx?$/, ""));
}