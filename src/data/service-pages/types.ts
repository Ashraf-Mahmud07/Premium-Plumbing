import type { Faq } from "@/data/faqs";
import type { SiteImage } from "@/data/images";

export type ServiceStat = { value: string; label: string };

export type ServiceProblem = { title: string; desc: string };

export type ServiceStep = { title: string; body: string };

export type RelatedService = { label: string; desc: string; href: string };

/**
 * Content model for a service page. Pages are rendered by
 * src/components/ServicePage.tsx via the /services/[slug] route — adding an
 * entry to the registry (src/data/service-pages/index.ts) publishes a page.
 */
export type ServicePageData = {
  slug: string;
  category: "Residential Plumbing" | "Commercial Plumbing";
  /** ~50–60 char SEO title. */
  metaTitle: string;
  /** ~150–160 char SEO description. */
  metaDescription: string;
  /** schema.org Service.serviceType */
  serviceType: string;
  hero: {
    /** Two lines of the h1; the accent period is added by the template. */
    titleLines: [string, string];
    subtitle: string;
    /** Floating card over the hero image. */
    card: { title: string; note: string };
    image: SiteImage;
  };
  overview: { eyebrow: string; title: string; paragraphs: string[] };
  whyChooseUs: { title: string; cards: { title: string; desc: string }[] };
  benefits: { title: string; intro: string; items: string[] };
  problems: { title: string; intro: string; items: ServiceProblem[] };
  process: { title: string; steps: ServiceStep[] };
  whyMatters: { title: string; paragraphs: string[] };
  experience: { title: string; paragraphs: string[]; stats: ServiceStat[] };
  features: { title: string; intro: string; items: string[] };
  faqs: Faq[];
  related: RelatedService[];
  cta: { title: string; copy: string };
};
