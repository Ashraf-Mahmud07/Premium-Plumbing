import { jobImages, serviceImages, type SiteImage } from "./images";

/** All copy on this page is verbatim from Gallery.dc.html. */

export const galleryCategories = [
  "All",
  "Water Heaters",
  "Slab Leaks",
  "Drains & Sewer",
  "Water Treatment",
  "Repairs & Repipe",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryItem = {
  title: string;
  cat: Exclude<GalleryCategory, "All">;
  /** CSS aspect-ratio, e.g. "4/5" — preserved per item from the design. */
  ratio: string;
  image: SiteImage;
};

export const galleryItems: GalleryItem[] = [
  {
    title: "Tankless water heater install",
    cat: "Water Heaters",
    ratio: "4/5",
    image: serviceImages.waterHeaters,
  },
  {
    title: "Copper pipe installation",
    cat: "Repairs & Repipe",
    ratio: "4/3",
    image: serviceImages.repipe,
  },
  {
    title: "Underslab drain reroute",
    cat: "Slab Leaks",
    ratio: "1/1",
    image: serviceImages.slabLeak,
  },
  {
    title: "Dual-tank water softener",
    cat: "Water Treatment",
    ratio: "4/5",
    image: serviceImages.waterTreatment,
  },
  {
    title: "Sewer camera inspection",
    cat: "Drains & Sewer",
    ratio: "4/3",
    image: serviceImages.cameraInspections,
  },
  {
    title: "Gas water heater in alcove",
    cat: "Water Heaters",
    ratio: "3/4",
    image: jobImages.gasHeaterAlcove,
  },
  {
    title: "Shower rough-in remodel",
    cat: "Repairs & Repipe",
    ratio: "1/1",
    image: jobImages.showerRoughIn,
  },
  {
    title: "Kitchen drain P-trap rebuild",
    cat: "Drains & Sewer",
    ratio: "4/3",
    image: serviceImages.drainCleaning,
  },
  {
    title: "Full DWV system layout",
    cat: "Slab Leaks",
    ratio: "4/5",
    image: serviceImages.sewerLine,
  },
  {
    title: "RO filtration system",
    cat: "Water Treatment",
    ratio: "4/3",
    image: jobImages.roSystem,
  },
  {
    title: "Pressure regulator service",
    cat: "Repairs & Repipe",
    ratio: "1/1",
    image: jobImages.pressureRegulator,
  },
  {
    title: "Water heater connections",
    cat: "Water Heaters",
    ratio: "4/3",
    image: serviceImages.hydroJetting,
  },
];

export type BeforeAfterPair = {
  before: SiteImage;
  after: SiteImage;
  title: string;
  body: string;
};

export const beforeAfterPairs: BeforeAfterPair[] = [
  {
    before: jobImages.corrodedHeater,
    after: serviceImages.waterHeaters,
    title: "Corroded water heater → clean tankless upgrade",
    body: "Failing 15-year tank replaced with a wall-mounted tankless unit — new venting, gas, and water lines, all to code.",
  },
  {
    before: serviceImages.slabLeak,
    after: serviceImages.repipe,
    title: "Slab leak → rerouted and restored",
    body: "Hidden underslab leak located electronically, rerouted with minimal demolition, and the home restored.",
  },
  {
    before: jobImages.cloggedPtrapBefore,
    after: serviceImages.hydroJetting,
    title: "Recurring clog → hydro-jetted main line",
    body: "Grease-choked main line jetted clean and camera-verified — no more monthly backups.",
  },
];
