export type Review = {
  quote: string;
  initials: string;
  name: string;
  meta: string;
};

/** Home page reviews — copy verbatim from index.html. */
export const homeReviews: Review[] = [
  {
    quote:
      "Burst pipe at 11pm — they answered on the first ring and had a tech here within the hour. Upfront price, fixed that night. Can’t recommend enough.",
    initials: "MR",
    name: "Michael R.",
    meta: "Mesa · Emergency repair",
  },
  {
    quote:
      "Erik and his team replaced our water heater same-day. Clean work, fair price, and they walked us through everything before starting.",
    initials: "SD",
    name: "Sandra D.",
    meta: "Gilbert · Water heater",
  },
  {
    quote:
      "Third plumber we called about a recurring drain issue — first one to find the actual cause. It hasn’t come back since. Worth every penny.",
    initials: "JT",
    name: "James T.",
    meta: "Chandler · Drain cleaning",
  },
];

/** Emergency page reviews — copy verbatim from EmergencyPlumbing.html. */
export const emergencyReviews: Review[] = [
  {
    quote:
      "Water heater burst on a Sunday night. They answered on the first ring and were here in 40 minutes. Damage stopped, replaced next morning.",
    initials: "KL",
    name: "Karen L.",
    meta: "Mesa · Water heater emergency",
  },
  {
    quote:
      "Sewage backing up into the shower at midnight. OX had it cleared and jetted before 2am. Professional and genuinely kind about the whole mess.",
    initials: "DP",
    name: "David P.",
    meta: "Tempe · Sewer backup",
  },
  {
    quote:
      "Slab leak flooding the hallway. They isolated it within the hour and saved us thousands in flooring. Upfront price, zero pressure.",
    initials: "AG",
    name: "Ana G.",
    meta: "Gilbert · Slab leak",
  },
];

export type ReviewBadge = { name: string; note: string };

/** Final CTA review badges — copy verbatim from index.html. */
export const reviewBadges: ReviewBadge[] = [
  { name: "Google", note: "5.0 · 350+ reviews" },
  { name: "BBB", note: "Accredited business" },
  { name: "Yelp", note: "5-star rated" },
];
