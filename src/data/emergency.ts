/** All copy on this page is verbatim from EmergencyPlumbing.html. */

export const trustItems = [
  "24/7/365 Availability",
  "Real-Person Dispatch",
  "Upfront Flat-Rate Pricing",
  "Licensed & Insured — ROC #347174",
];

export type HeroCard = { title: string; body: string };

export const heroCards: HeroCard[] = [
  { title: "24/7/365", body: "Nights, weekends & holidays included" },
  { title: "95%", body: "Of emergencies fixed on the first visit" },
  { title: "Real people", body: "You talk to OX — never a call center" },
  { title: "Upfront price", body: "Flat-rate quote before any work begins" },
];

export type Emergency = { title: string; body: string };

export const emergencies: Emergency[] = [
  {
    title: "Burst Pipes",
    body: "We locate the break fast, stop the water loss, and repair or replace the damaged line.",
  },
  {
    title: "Sewer Backups",
    body: "Blockages cleared, flow restored, and the cause of recurring backups addressed — hydro jetting onsite.",
  },
  {
    title: "Water Leaks",
    body: "Active leaks found with electronic detection and stopped before damage spreads.",
  },
  {
    title: "Slab Leaks",
    body: "Emergency detection and isolation to protect your foundation — without needless demolition.",
  },
  {
    title: "Gas Line Issues",
    body: "An urgent hazard. We respond fast, evaluate the situation, and perform safe repairs.",
  },
  {
    title: "Toilet Overflows",
    body: "Stopped at the source, contamination contained, and proper drainage restored.",
  },
  {
    title: "Water Heater Failures",
    body: "Tank, tankless, gas or electric — emergency repair and same-day replacement.",
  },
  {
    title: "Clogged Drains",
    body: "Sinks, tubs, and main lines cleared fast — with cable or hydro jetting as needed.",
  },
];

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "<60 min", label: "Typical emergency response window" },
  { value: "#2", label: "Water damage: most common home insurance claim" },
  { value: "1 in 60", label: "Homes file a water leak claim every year" },
];

export type EmergencyStep = { n: string; time: string; title: string; body: string };

export const processSteps: EmergencyStep[] = [
  {
    n: "1",
    time: "Minute 0",
    title: "You call, we answer",
    body: "A real OX team member picks up, walks you through immediate steps like shutting off water, and dispatches a plumber.",
  },
  {
    n: "2",
    time: "Within 60 min",
    title: "We arrive ready",
    body: "A licensed plumber arrives in a fully stocked truck — capable of repairing 95% of emergencies on the first visit.",
  },
  {
    n: "3",
    time: "On arrival",
    title: "Upfront flat-rate quote",
    body: "We assess the emergency, explain what’s wrong, and give you the exact price before any work begins.",
  },
  {
    n: "4",
    time: "Same visit",
    title: "Fixed on the spot",
    body: "We stop the damage, make the repair, and leave your space clean. The $99 service fee is credited toward the repair.",
  },
];

export const signs = [
  "Active water leaks or flooding inside your home",
  "Sewage smells, backups, or overflowing drains",
  "No hot water or a leaking water heater",
  "Toilet overflowing and won’t stop",
  "Suspected gas leak or gas line issue",
  "Major water pressure loss across the home",
];
