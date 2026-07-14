/** All copy on this page is verbatim from About.html. */

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "10+", label: "Years serving Mesa & the East Valley" },
  { value: "25+", label: "Years of combined plumbing experience" },
  { value: "350+", label: "Verified five-star Google reviews" },
  { value: "20", label: "East Valley cities served" },
];

export type Value = { n: string; title: string; body: string };

export const values: Value[] = [
  {
    n: "01",
    title: "Honest communication",
    body: "Straight answers, clear options, and flat-rate pricing before any work begins. No upsells, no surprises.",
  },
  {
    n: "02",
    title: "Done once, done right",
    body: "We find the real cause and make repairs built to hold up — so you’re not calling us back next week.",
  },
  {
    n: "03",
    title: "Respect for your home",
    body: "Clean workmanship, shoe covers, drop cloths, and a spotless workspace when we leave.",
  },
  {
    n: "04",
    title: "There when it counts",
    body: "24/7 emergency response with real-person dispatch. Nights, weekends, and holidays included.",
  },
];

export type TimelineEntry = { year: string; title: string; body: string };

export const timeline: TimelineEntry[] = [
  {
    year: "2015",
    title: "The first decade of craft",
    body: "Erik builds his trade in Mesa — years of residential and commercial plumbing work, learning to fix it once and fix it right.",
  },
  {
    year: "2021",
    title: "OX Plumbing is born",
    body: "Family-owned and owner-operated from day one, with a single fully stocked truck and a promise: answer every call like it’s family.",
  },
  {
    year: "2023",
    title: "24/7 emergency dispatch",
    body: "The 60-minute response guarantee launches, backed by real-person dispatch and trucks that fix 95% of emergencies on the first visit.",
  },
  {
    year: "2024",
    title: "OX Shield protection plans",
    body: "Five membership tiers bring preventative maintenance, priority scheduling, and member pricing to East Valley homes and businesses.",
  },
  {
    year: "Today",
    title: "350+ five-star reviews and counting",
    body: "Serving 20 East Valley cities with the same care, urgency, and professionalism on every job.",
  },
];

export type Cert = { title: string; body: string };

export const certs: Cert[] = [
  {
    title: "Licensed, bonded & insured",
    body: "Arizona ROC #347174 — fully licensed for residential and commercial plumbing.",
  },
  {
    title: "BBB accredited",
    body: "Accredited business with the Better Business Bureau.",
  },
  {
    title: "5.0 on Google & Yelp",
    body: "350+ verified reviews across Google and Yelp.",
  },
  {
    title: "Background-checked technicians",
    body: "Every plumber who enters your home is vetted, trained, and uniformed.",
  },
  {
    title: "Wisetack financing partner",
    body: "Flexible financing with soft-credit pre-qualification.",
  },
];
