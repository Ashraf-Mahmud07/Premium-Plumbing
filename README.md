# OX Plumbing — Next.js 15 Site

Production port of the OX Plumbing HTML design (six pages) to Next.js 15 (App Router,
TypeScript strict, Tailwind CSS v4, `src/` directory). All copy is verbatim from the
design files; all six routes are fully statically generated.

## Commands

```bash
npm install
npm run dev     # dev server
npm run build   # static production build (all pages prerendered)
npm run start   # serve the production build
npm run lint    # ESLint (clean)
```

## Routes

| Route | Source design file |
|---|---|
| `/` | index.html |
| `/plumbing-service-plans` | ServicePlans.html |
| `/services/emergency-plumbing` | EmergencyPlumbing.html |
| `/about` | About.html |
| `/gallery` | Gallery.dc.html |
| `/contact` | Contact.html |

All service pages (including the bespoke `/services/emergency-plumbing` and
`/services/luxury-plumbing`) live under `/services/`. The old paths
`/emergency-plumbing` and `/residential-plumbing/luxury-plumbing` permanently
redirect there (`next.config.ts`). Trailing slashes are disabled so every URL
resolves one way.

## How to swap in real photos

**Every image on the site routes through [`src/data/images.ts`](src/data/images.ts).**
Entries marked `// PLACEHOLDER` are Unsplash stand-ins from the design; each has a
comment describing the intended real photo (e.g. "OX service truck", "Erik & the OX
team", video stills for the five "Why choose OX" tiles).

To swap one in:

1. Drop the real photo into `public/images/` with a descriptive kebab-case filename —
   good filenames are an SEO signal (e.g. `water-heater-installation-mesa.webp`,
   not `IMG_4021.webp`).
2. In `src/data/images.ts`, change that entry's `src` to `/images/<your-file>` and
   update the `alt` to describe what's actually shown.
3. Done — every page that uses the image picks it up. No component changes needed.

Once all Unsplash placeholders are replaced, you can remove the
`images.unsplash.com` entry from `remotePatterns` in `next.config.ts`.

Real job photos already in `public/images/` (renamed from `uploads/`): emergency gas
line repair, tankless water heater, water softener, drain cleaning, sewer line, hydro
jetting, camera inspection, copper repipe, slab leak repair, and the logo.

## How to connect the form backend

Both forms (home "Request service" and the contact page) POST JSON to
[`src/app/api/contact/route.ts`](src/app/api/contact/route.ts), which is currently a
stub (`console.log` + 200). Payload shape:

```ts
{ name, phone, address, method: "Call" | "Text" | "Email", message, source: "home" | "contact" }
```

Replace the `TODO` in that route handler with your real integration — an email
service (Resend/SendGrid), a CRM webhook, or the dispatch system. Client-side
validation (all fields required) and the success state already work; the form shows
the design's success card regardless of network outcome, so add error handling there
if the backend should be authoritative.

## Business facts in one place

Phone, email, address, license (ROC #347174), hours, geo, and the production origin
live in [`src/data/company.ts`](src/data/company.ts) and feed the UI, metadata, and
JSON-LD alike. **Set `siteUrl` to the real production origin before deploying** — it
drives canonicals, OG URLs, the sitemap, and robots.txt.

## SEO inventory

- **Metadata** — `metadataBase` in the root layout; unique title, ~155-char
  description, canonical, OpenGraph (title/description/url/siteName/locale/type/image)
  and Twitter card per page via [`src/lib/metadata.ts`](src/lib/metadata.ts).
  `themeColor` is ink `#0B0D10`.
- **OG image** — branded (logo on ink with the accent bar), generated at build time by
  [`src/app/opengraph-image.tsx`](src/app/opengraph-image.tsx) and referenced on every page.
- **JSON-LD** (typed builders in [`src/lib/schema.ts`](src/lib/schema.ts)):
  - `/` — `Plumber` (name, telephone, address, geo, openingHoursSpecification,
    areaServed, logo, priceRange, license in description) + `FAQPage`
  - `/plumbing-service-plans` — `Service` with `Offer` entries for all five plan
    tiers + `FAQPage` + `BreadcrumbList`
  - `/emergency-plumbing` — `Service` (emergency channel, 24/7 hours) + `FAQPage`
    + `BreadcrumbList`
  - `/about` — `BreadcrumbList`
  - `/gallery` — `BreadcrumbList`
  - `/contact` — `FAQPage` + `BreadcrumbList`
  - No fabricated fields: no aggregate ratings or review markup, since the design
    data doesn't include structured review records.
- **Crawling** — `/sitemap.xml` (all six routes, lastModified) and `/robots.txt`
  (allow all, disallow `/api/`, sitemap reference) via `src/app/sitemap.ts` and
  `src/app/robots.ts`.
- **Content** — semantic landmarks, exactly one `h1` per page, no skipped heading
  levels, descriptive alt text on every image. FAQ answers are always present in the
  server-rendered HTML (accordions hide them with the `hidden` attribute, they are
  not conditionally mounted).
- **Performance** — every route is static in the build output; all images use
  `next/image` inside fixed-aspect containers (zero CLS); the hero LCP image is the
  only `priority` image per page; fonts load via `next/font` with `display: swap`;
  animations (pulse-ring, blink, hover lifts) are disabled under
  `prefers-reduced-motion`.

## Service pages (`/services/<slug>`)

All 19 residential and commercial service pages are generated from a single
template ([`src/components/ServicePage.tsx`](src/components/ServicePage.tsx))
and a typed content registry ([`src/data/service-pages/`](src/data/service-pages/)):
`residential.ts` (10 pages) and `commercial.ts` (9 pages). Each entry contains
hero, overview, why-choose-us, benefits, common problems, process, why-it-matters,
experience, features, FAQs, related services, and CTA copy — edit content there,
never in components. Adding an entry to the registry publishes a new page,
statically generated with metadata, Service + FAQPage + BreadcrumbList JSON-LD,
and a sitemap entry, automatically. Content substance was adapted from the
reference site (joecoleplumbing.com) and rewritten for the OX brand and the
Mesa / East Valley service area.

## Architecture notes

- **Data layer** — all content arrays from the design's `renderVals()` live in typed
  modules under `src/data/` (`services`, `plans`, `faqs`, `reviews`, `areas`,
  `images`, `company`, plus per-page `home`/`emergency`/`about`/`gallery`/`contact`).
- **Server-first** — pages are Server Components; `"use client"` only where state
  exists: header (mega-menu + mobile drawer), FAQ accordions, gallery filter +
  lightbox, and the forms.
- **Design tokens** — extracted into the Tailwind v4 theme in
  `src/app/globals.css` (`@theme`): ink, paper, accent scale, text scale, etc.
- **Nav menus** — per a post-port request, the header's single Services mega-menu
  was replaced with two dropdowns, **Residential Plumbing** and **Commercial
  Plumbing**, each with its submenu items. The menu structure lives in
  `navMenus` in [`src/data/services.ts`](src/data/services.ts); most items point
  to `/#services` or `/contact` until dedicated service pages exist — update the
  hrefs there. The mobile drawer shows both groups under labeled headings.
- No libraries were added beyond the stack (Next 15, React 19, Tailwind v4).
