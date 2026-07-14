import { commercialPages } from "./commercial";
import { residentialPages } from "./residential";
import type { ServicePageData } from "./types";

const allPages: ServicePageData[] = [...residentialPages, ...commercialPages];

/** slug → page content. Adding an entry publishes /services/<slug>. */
export const servicePages: Record<string, ServicePageData> = Object.fromEntries(
  allPages.map((p) => [p.slug, p]),
);

export const servicePageSlugs = allPages.map((p) => p.slug);
