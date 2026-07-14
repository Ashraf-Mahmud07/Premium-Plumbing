import type { MetadataRoute } from "next";
import { company } from "@/data/company";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = [
    "",
    "/plumbing-service-plans",
    "/emergency-plumbing",
    "/residential-plumbing/luxury-plumbing",
    "/about",
    "/gallery",
    "/contact",
  ];
  return routes.map((path) => ({
    url: `${company.siteUrl}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
