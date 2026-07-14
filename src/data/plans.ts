/** Plans hero trust items — copy verbatim from ServicePlans.html. */
export const plansTrustItems = [
  "24/7 Emergency Service",
  "Licensed & Insured — ROC #347174",
  "Cancel anytime",
  "Transferable with home sale",
];

export type PlanTeaser = {
  name: string;
  price: string;
  desc: string;
  badge: string;
  dark: boolean;
};

/** Home page plans teaser — copy verbatim from index.html. */
export const planTeasers: PlanTeaser[] = [
  {
    name: "OX SHIELD PROTECTION",
    price: "$14.99",
    desc: "Annual inspection, water heater flush, 10% repair discount, priority scheduling, no emergency fees.",
    badge: "",
    dark: false,
  },
  {
    name: "OX SHIELD PLUS",
    price: "$24.99",
    desc: "Everything in Protection plus 12% discount, $100 loyalty credit, toilet rebuild, and kitchen drain clearing.",
    badge: "MOST POPULAR",
    dark: true,
  },
  {
    name: "OX SHIELD PREMIUM",
    price: "$59.99",
    desc: "Two visits a year, 15% discount, hydro jetting, camera inspection, extended warranty, and more.",
    badge: "BEST VALUE",
    dark: false,
  },
];

export type ResidentialPlan = {
  name: string;
  badge: string;
  price: string;
  /** Numeric monthly price for JSON-LD Offer entries. */
  priceNumber: number;
  visits: string;
  discount: string;
  value: string;
  dark: boolean;
  features: string[];
};

/** Residential plans — copy verbatim from ServicePlans.html. */
export const residentialPlans: ResidentialPlan[] = [
  {
    name: "OX SHIELD PROTECTION",
    badge: "STARTER",
    price: "$14.99",
    priceNumber: 14.99,
    visits: "1 visit/year",
    discount: "10%",
    value: "$400",
    dark: false,
    features: [
      "Annual plumbing inspection with written report",
      "Water heater flush with anode rod check (1x/year)",
      "10% discount on repair labor and parts",
      "Priority scheduling — including emergencies",
      "No emergency fees (save $99+ per visit)",
    ],
  },
  {
    name: "OX SHIELD PLUS",
    badge: "MOST POPULAR",
    price: "$24.99",
    priceNumber: 24.99,
    visits: "1 visit/year",
    discount: "12%",
    value: "$800",
    dark: true,
    features: [
      "Everything in Protection",
      "12% discount on repair labor and parts",
      "$100 loyalty credit (with $500 minimum purchase)",
      "Toilet rebuild (1x/year)",
      "Kitchen drain clearing — cable-and-clear (1x/year)",
    ],
  },
  {
    name: "OX SHIELD PREMIUM",
    badge: "BEST VALUE",
    price: "$59.99",
    priceNumber: 59.99,
    visits: "2 visits/year",
    discount: "15%",
    value: "$1000",
    dark: false,
    features: [
      "Plumbing inspections and water heater flush (2x/year)",
      "15% discount + $200 loyalty credit + extended warranty",
      "Hydro jetting, camera inspection & cable-and-clear (1x/year)",
      "Toilet rebuild + whole-home drain treatment (1x/year)",
      "Water softener salt (4 bags/year) & same-day scheduling",
    ],
  },
];

export type SpecialtyPlan = {
  name: string;
  badge: string;
  price: string;
  priceNumber: number;
  visits: string;
  discount: string;
  value: string;
  tagline: string;
  features: string[];
};

/** Specialty & commercial plans — copy verbatim from ServicePlans.html. */
export const specialtyPlans: SpecialtyPlan[] = [
  {
    name: "OX SHIELD WATERCARE",
    badge: "SPECIALTY",
    price: "$24.99",
    priceNumber: 24.99,
    visits: "4 visits/year",
    discount: "10%",
    value: "$500",
    tagline:
      "For maintaining your water heater, water softener, or RO filter system — not general plumbing.",
    features: [
      "Water heater flush with anode rod check (2x/year)",
      "Water softener maintenance with brine tank cleaning (4x/year)",
      "2 bags of softener salt included per visit",
      "Reverse osmosis filter change (2x/year)",
      "10% discount on water system and plumbing repairs",
    ],
  },
  {
    name: "OX SHIELD COMMERCIAL",
    badge: "BUSINESS",
    price: "$79.99",
    priceNumber: 79.99,
    visits: "4 visits/year",
    discount: "15%",
    value: "$2000+",
    tagline:
      "Designed for restaurants, salons, offices, and multi-unit buildings. Prevent clogs and keep your business running.",
    features: [
      "Quarterly hydro jetting — every 90 days",
      "Main line jetting included where access is available",
      "Same-day scheduling — highest priority",
      "15% discount on repair labor and parts",
      "No emergency or dispatch fees (save $99+ per visit)",
    ],
  },
];

export type SavingsPoint = { title: string; body: string };

/** "Why it pays off" bullets — copy verbatim from ServicePlans.html. */
export const savings: SavingsPoint[] = [
  {
    title: "Catch failures early",
    body: "Annual inspections spot failing supply lines, valves, and heaters before they flood your home.",
  },
  {
    title: "Skip every emergency fee",
    body: "After-hours, weekend, and holiday fees are waived for members — $99+ saved per visit.",
  },
  {
    title: "Member pricing on every repair",
    body: "10–15% off labor and parts, any repair, all year long.",
  },
  {
    title: "A longer-lasting water heater",
    body: "Regular flushes extend heater life and keep efficiency up — often years of extra service.",
  },
];

export type CompareRow = { label: string; without: string; withPlan: string };

/** "A typical year, compared" table — copy verbatim from ServicePlans.html. */
export const compareRows: CompareRow[] = [
  { label: "Plumbing inspection", without: "$189", withPlan: "Included" },
  { label: "Water heater flush", without: "$149", withPlan: "Included" },
  { label: "One after-hours emergency fee", without: "$99+", withPlan: "Waived" },
  { label: "A $1,200 repair", without: "$1,200", withPlan: "$1,056" },
  { label: "OX Shield Plus (12 months)", without: "—", withPlan: "$300" },
];

export const compareTotals = { without: "$1,637+", withPlan: "$1,356" };
