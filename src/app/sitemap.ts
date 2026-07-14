import type { MetadataRoute } from "next";
import { company } from "@/data/company";
import { servicePageSlugs } from "@/data/service-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = [
    "",
    "/plumbing-service-plans",
    "/services/emergency-plumbing",
    "/services/luxury-plumbing",
    ...servicePageSlugs.map((slug) => `/services/${slug}`),
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
