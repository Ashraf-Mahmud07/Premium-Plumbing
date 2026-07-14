import { areaServed } from "@/data/areas";
import { company } from "@/data/company";
import type { Faq } from "@/data/faqs";
import type { ResidentialPlan, SpecialtyPlan } from "@/data/plans";

/** Stable @id for the Plumber entity so Service pages can reference it. */
export const plumberId = `${company.siteUrl}/#plumber`;

type JsonLdObject = Record<string, unknown>;

/** Plumber (LocalBusiness subtype) — rendered on the home page. */
export function plumberSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": plumberId,
    name: company.name,
    legalName: company.legalName,
    description: `Family-owned, licensed and bonded plumbing company serving Mesa and the entire East Valley of Arizona. Licensed & Insured · ${company.license}.`,
    url: company.siteUrl,
    telephone: company.phoneE164,
    email: company.email,
    image: `${company.siteUrl}/images/ox-plumbing-logo.png`,
    logo: `${company.siteUrl}/images/ox-plumbing-logo.png`,
    priceRange: company.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.state,
      postalCode: company.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: company.geo.latitude,
      longitude: company.geo.longitude,
    },
    areaServed: areaServed.map((city) => ({ "@type": "City", name: city })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "18:00",
        description: "Scheduled service",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
        description: "24/7 emergency service",
      },
    ],
  };
}

/** FAQPage with the exact question/answer copy from src/data/faqs.ts. */
export function faqSchema(faqs: Faq[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Service schema for the emergency plumbing page. */
export function emergencyServiceSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Emergency plumbing",
    name: "24/7 Emergency Plumbing",
    description:
      "24/7/365 emergency plumbing with real-person dispatch and a 60-minute response window across Mesa and the East Valley of Arizona.",
    provider: { "@id": plumberId },
    areaServed: areaServed.map((city) => ({ "@type": "City", name: city })),
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: {
        "@type": "ContactPoint",
        telephone: company.phoneE164,
        contactType: "emergency",
        availableLanguage: "English",
      },
    },
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  };
}

/** Service schema with Offer entries for the OX Shield plan tiers. */
export function plansServiceSchema(
  residential: ResidentialPlan[],
  specialty: SpecialtyPlan[],
): JsonLdObject {
  const offers = [...residential, ...specialty].map((plan) => ({
    "@type": "Offer",
    name: plan.name,
    price: plan.priceNumber,
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: plan.priceNumber,
      priceCurrency: "USD",
      unitText: "month",
    },
    description: plan.features.join("; "),
  }));
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Plumbing maintenance plan",
    name: "OX Shield Protection Plans",
    description:
      "Preventative plumbing maintenance memberships with priority scheduling, waived emergency fees, and member repair pricing. No long-term contracts — cancel anytime.",
    provider: { "@id": plumberId },
    areaServed: areaServed.map((city) => ({ "@type": "City", name: city })),
    offers,
  };
}

/** BreadcrumbList for all non-home pages. */
export function breadcrumbSchema(pageName: string, path: string): JsonLdObject {
  return breadcrumbTrailSchema([{ name: pageName, path }]);
}

/** BreadcrumbList for nested pages (Home is prepended automatically). */
export function breadcrumbTrailSchema(trail: { name: string; path: string }[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: company.siteUrl },
      ...trail.map((t, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: t.name,
        item: `${company.siteUrl}${t.path}`,
      })),
    ],
  };
}

/** Service schema for the luxury plumbing page. */
export function luxuryServiceSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Luxury plumbing",
    name: "Luxury Plumbing Services",
    description:
      "High-end residential plumbing: premium fixture and faucet installation from international brands (Duravit, Geberit, Grohe, Toto, Franke, Hansgrohe, Cocoon) and American-made brands, plus leak detection systems like WaterCop and FloLogic.",
    provider: { "@id": plumberId },
  };
}
