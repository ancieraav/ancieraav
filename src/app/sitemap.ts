import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/site";
import { getAllSlugs } from "@/lib/posts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const blogPosts = getAllSlugs().map((slug) => ({
    url: `${base}/blog/${slug}/`,
    lastModified: new Date(),
  }));

  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/blog/`, lastModified: new Date() },
    ...blogPosts,
  ];
}