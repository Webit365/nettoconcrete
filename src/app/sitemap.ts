import type { MetadataRoute } from "next";
import { baseUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/residential", "/commercial", "/agricultural", "/our-work", "/contact"];
  const now = new Date();
  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
