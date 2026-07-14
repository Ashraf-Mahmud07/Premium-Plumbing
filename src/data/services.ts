import { serviceImages, type SiteImage } from "./images";

export type Service = {
  label: string;
  desc: string;
  image: SiteImage;
  href: string;
};

/** Home services grid (10 cards) — copy verbatim from index.html. */
export const services: Service[] = [
  {
    label: "Emergency Plumbing",
    desc: "24/7 response — 60 minutes or less",
    image: serviceImages.emergency,
    href: "/services/emergency-plumbing",
  },
  {
    label: "Water Heaters",
    desc: "Tank & tankless repair, install, replacement",
    image: serviceImages.waterHeaters,
    href: "/#services",
  },
  {
    label: "Water Treatment",
    desc: "Softeners, filtration & RO systems",
    image: serviceImages.waterTreatment,
    href: "/#services",
  },
  {
    label: "Drain Cleaning",
    desc: "Fast clearing for sinks, tubs & main lines",
    image: serviceImages.drainCleaning,
    href: "/#services",
  },
  {
    label: "Sewer Line",
    desc: "Repair, replacement & trenchless options",
    image: serviceImages.sewerLine,
    href: "/#services",
  },
  {
    label: "Hydro Jetting",
    desc: "High-pressure clearing for stubborn blockages",
    image: serviceImages.hydroJetting,
    href: "/#services",
  },
  {
    label: "Camera Inspections",
    desc: "HD diagnostics — see exactly what’s wrong",
    image: serviceImages.cameraInspections,
    href: "/#services",
  },
  {
    label: "Repipe",
    desc: "Whole-home PEX & copper repiping",
    image: serviceImages.repipe,
    href: "/#services",
  },
  {
    label: "Slab Leak Repair",
    desc: "Non-invasive detection & precise repair",
    image: serviceImages.slabLeak,
    href: "/#services",
  },
  {
    label: "Leak Detection & Repair",
    desc: "Electronic locating — no guesswork",
    image: serviceImages.leakDetection,
    href: "/#services",
  },
];

export type NavMenuItem = {
  label: string;
  /** Short one-line description shown under the label in the dropdown. */
  desc: string;
  href: string;
};

export type NavMenu = {
  label: string;
  items: NavMenuItem[];
};

/**
 * Header nav dropdown menus (Residential / Commercial with their submenus).
 * Most items point to the home services section or the contact page until
 * dedicated service pages exist — update the hrefs here when they do.
 */
export const navMenus: NavMenu[] = [
  {
    label: "Services",
    items: [
      { label: "Luxury Plumbing", desc: "High-end fixtures & finishes", href: "/services/luxury-plumbing" },
      { label: "Water Heaters", desc: "Tank & tankless", href: "/services/water-heaters" },
      { label: "Water Treatment", desc: "Softeners & RO", href: "/services/water-treatment" },
      { label: "Drain Issues", desc: "Sinks to main lines", href: "/services/drain-issues" },
      { label: "Hydro Jetting", desc: "High-pressure clearing", href: "/services/hydro-jetting" },
      { label: "Fixture Repairs & Installation", desc: "Faucets, toilets & more", href: "/services/fixture-repair-installation" },
      { label: "Sewer Camera Inspection", desc: "HD pipe diagnostics", href: "/services/sewer-camera-inspection" },
      { label: "Leak Detection & Repair", desc: "Electronic locating", href: "/services/leak-detection-repair" },
      { label: "Repipes", desc: "Whole-home PEX & copper", href: "/services/repipes" },
      { label: "Gas Systems & Piping", desc: "Safe installs & repairs", href: "/services/gas-systems-piping" },
      { label: "Slab Leak Detection & Repair", desc: "Non-invasive detection", href: "/services/slab-leak-detection-repair" },
      { label: "24/7 Emergency Plumbing", desc: "24/7 · 60-min response", href: "/services/emergency-plumbing" },
      { label: "Backflow Testing & Installation", desc: "Certified testing", href: "/services/backflow-testing-installation" },
      { label: "Commercial Sewer & Drains", desc: "Clog-free operations", href: "/services/commercial-sewer-drains" },
      { label: "Commercial Hydro Jetting", desc: "Quarterly jetting", href: "/services/commercial-hydro-jetting" },
      { label: "Commercial Pump & Control Service", desc: "Pumps & controls", href: "/services/commercial-pump-control-service" },
      { label: "Commercial Sewer Camera Inspection", desc: "HD diagnostics", href: "/services/commercial-sewer-camera-inspection" },
      { label: "Commercial Emergency Service", desc: "24/7 dispatch", href: "/services/commercial-emergency-service" },
      { label: "Commercial Fixture Installation & Repair", desc: "Business-grade fixtures", href: "/services/commercial-fixture-installation-repair" },
      { label: "Commercial Leak Detection & Repair", desc: "Fast electronic locating", href: "/services/commercial-leak-detection-repair" },
      { label: "Commercial Pipe Replacement & Repair", desc: "Minimal downtime", href: "/services/commercial-pipe-replacement-repair" },
    ],
  },
];
