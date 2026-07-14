/**
 * Single source of truth for business facts — used by UI, metadata, and JSON-LD alike.
 * All values are verbatim from the design files.
 */
export const company = {
  name: "OX Plumbing",
  legalName: "OX Plumbing Services LLC",
  phoneDisplay: "(602) 905-3722",
  phoneHref: "tel:+16029053722",
  phoneE164: "+16029053722",
  email: "info@oxplumbingaz.com",
  license: "ROC #347174",
  address: {
    street: "1734 S 80th St",
    city: "Mesa",
    state: "AZ",
    zip: "85209",
    full: "1734 S 80th St, Mesa, AZ 85209",
  },
  // Approximate coordinates for 1734 S 80th St, Mesa, AZ 85209 (JSON-LD geo).
  geo: { latitude: 33.3846, longitude: -111.6871 },
  hours: {
    scheduled: "Mon–Sat · 7am–6pm",
    emergency: "24/7/365 — always open",
  },
  priceRange: "$$",
  /** Production origin — canonical URLs, sitemap, robots, and OG URLs derive from this. */
  siteUrl: "https://oxplumbing.com",
  footerBlurb:
    "Family-owned, licensed and bonded plumbing company serving Mesa and the entire East Valley of Arizona.",
  footerAreas:
    "Mesa · Gilbert · Chandler · Tempe · Scottsdale · Queen Creek · Apache Junction · Phoenix & the East Valley",
  wisetackNote: "Financing by Wisetack — soft-credit pre-qualification",
  copyright: "© 2026 OX Plumbing Services LLC. All Rights Reserved.",
} as const;
