import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { insights } from "@/content/insights";
import { blogCategories } from "@/content/blog-taxonomy";
import { getIndexableTags } from "@/lib/blog/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUpdatedAt = new Date(siteConfig.updatedAt);
  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/audit", priority: 0.95 },
    { path: "/about", priority: 0.85 },
    { path: "/contact", priority: 0.8 },
    { path: "/blog", priority: 0.7 },
    { path: "/privacy-policy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route.path}`,
      lastModified: siteUpdatedAt,
      changeFrequency: "weekly" as const,
      priority: route.priority,
    })),
    ...insights.map((insight) => ({
      url: `${siteConfig.url}/blog/${insight.slug}`,
      lastModified: new Date(insight.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...blogCategories.map((category) => ({
      url: `${siteConfig.url}/blog/category/${category.slug}`,
      lastModified: siteUpdatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    ...getIndexableTags().map((tag) => ({
      url: `${siteConfig.url}/blog/tag/${tag.slug}`,
      lastModified: siteUpdatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.4,
    })),
  ];
}
