/**
 * Every image on the site routes through this module so real job photos can be
 * swapped in one place. Local files live in /public/images with descriptive,
 * SEO-friendly names. Unsplash URLs are design-time placeholders — replace the
 * `src` with a real photo path when available (the intended photo is noted per entry).
 */
export type SiteImage = {
  src: string;
  alt: string;
};

export const logo: SiteImage = {
  // Intended real photo: the OX Plumbing wordmark (already real).
  src: "/images/ox-plumbing-logo.png",
  alt: "OX Plumbing",
};
export const logoSize = { width: 700, height: 97 };

export const heroTruck: SiteImage = {
  // PLACEHOLDER — intended real photo: OX service truck.
  src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1000&q=75",
  alt: "OX Plumbing service truck ready for a plumbing call in Mesa, Arizona",
};

export const erikFamily: SiteImage = {
  // Real photo from the live site: Erik & family cutout.
  src: "https://oxplumbing.com/assets/erik-family-new-BEdOFetg.png",
  alt: "Erik, owner of OX Plumbing, with his two sons",
};
export const erikFamilySize = { width: 528, height: 976 };

/** Home "Why choose OX" video stills (play-button overlays). */
export const whyVideos: Record<string, SiteImage> = {
  rooftop: {
    // PLACEHOLDER — intended real video still: Erik on the rooftop.
    src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=70",
    alt: "OX Plumbing technician working on a rooftop plumbing repair",
  },
  customerTruck: {
    // PLACEHOLDER — intended real video still: customer at the OX truck.
    src: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=900&q=70",
    alt: "Customer talking with an OX Plumbing technician at the service truck",
  },
  techTrucks: {
    // PLACEHOLDER — intended real video still: tech with the service trucks.
    src: "https://images.unsplash.com/photo-1613323593608-abc90fec84ff?w=900&q=70",
    alt: "OX Plumbing technician standing with the company service trucks",
  },
  blueprints: {
    // PLACEHOLDER — intended real video still: project blueprints.
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=70",
    alt: "Plumbing project blueprints laid out for a large installation",
  },
  community: {
    // PLACEHOLDER — intended real video still: community event aerial.
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=70",
    alt: "Aerial view of a Mesa community event supported by OX Plumbing",
  },
};

/** Service card images (home services grid). */
export const serviceImages: Record<string, SiteImage> = {
  emergency: {
    // Real job photo.
    src: "/images/emergency-plumbing-repair-mesa.webp",
    alt: "OX Plumbing emergency rooftop gas line repair in Mesa",
  },
  waterHeaters: {
    // Real job photo.
    src: "/images/tankless-water-heater-installation-mesa.webp",
    alt: "Tankless water heater installation with clean copper piping in Mesa",
  },
  waterTreatment: {
    // Real job photo.
    src: "/images/water-softener-installation-mesa.webp",
    alt: "Dual-tank water softener installation with copper loop",
  },
  drainCleaning: {
    // Real job photo.
    src: "/images/kitchen-drain-cleaning-mesa.webp",
    alt: "Kitchen drain cleaning and P-trap service under a sink",
  },
  sewerLine: {
    // Real job photo.
    src: "/images/sewer-line-replacement-mesa.webp",
    alt: "Underground sewer line replacement trench with new piping",
  },
  hydroJetting: {
    // Real job photo.
    src: "/images/hydro-jetting-service-mesa.jpg",
    alt: "Hydro jetting equipment clearing a blocked main line",
  },
  cameraInspections: {
    // Real job photo.
    src: "/images/sewer-camera-inspection-mesa.webp",
    alt: "HD sewer camera inspection monitor showing pipe diagnostics",
  },
  repipe: {
    // Real job photo.
    src: "/images/copper-repipe-installation-mesa.jpg",
    alt: "Whole-home copper repipe installation",
  },
  slabLeak: {
    // Real job photo.
    src: "/images/underground-slab-leak-repair-mesa.webp",
    alt: "Underground slab leak repair with exposed drain transition",
  },
  leakDetection: {
    // PLACEHOLDER — intended real photo: electronic leak detection job.
    src: "https://images.unsplash.com/photo-1542013936693-884638332954?w=700&q=70",
    alt: "Plumber performing electronic leak detection on a water line",
  },
};

/** Home "Real jobs" grid extras + gallery-only shots. */
export const jobImages: Record<string, SiteImage> = {
  ptrap: {
    // PLACEHOLDER — intended real photo: under-sink P-trap replacement.
    src: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=700&q=70",
    alt: "Under-sink P-trap replacement with new fittings",
  },
  gasHeaterAlcove: {
    // PLACEHOLDER — intended real photo: gas water heater in alcove.
    src: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=700&q=70",
    alt: "Gas water heater installed in an alcove with new connections",
  },
  showerRoughIn: {
    // PLACEHOLDER — intended real photo: shower rough-in remodel.
    src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=700&q=70",
    alt: "Shower valve rough-in during a bathroom remodel",
  },
  roSystem: {
    // PLACEHOLDER — intended real photo: RO filtration system install.
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=700&q=70",
    alt: "Reverse osmosis filtration system installed under a kitchen sink",
  },
  pressureRegulator: {
    // PLACEHOLDER — intended real photo: pressure regulator service.
    src: "https://images.unsplash.com/photo-1521207418485-99c705420785?w=700&q=70",
    alt: "Water pressure regulator valve replacement",
  },
  corrodedHeater: {
    // PLACEHOLDER — intended real photo: corroded tank before replacement.
    src: "https://images.unsplash.com/photo-1542013936693-884638332954?w=600&q=70",
    alt: "Corroded 15-year-old water heater tank before replacement",
  },
  cloggedPtrapBefore: {
    // PLACEHOLDER — intended real photo: grease-choked drain before jetting.
    src: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&q=70",
    alt: "Grease-clogged kitchen drain line before hydro jetting",
  },
};

/** Luxury Plumbing page. */
export const luxuryImages = {
  hero: {
    // PLACEHOLDER — intended real photo: a completed luxury bathroom install.
    src: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1000&q=75",
    alt: "Luxury bathroom with freestanding tub and premium fixtures",
  },
  fixtures: {
    // PLACEHOLDER — intended real photo: high-end fixture/faucet installation.
    src: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=900&q=70",
    alt: "Premium designer faucet and sink installation",
  },
} satisfies Record<string, SiteImage>;

/** About page collage. */
export const aboutImages = {
  team: {
    // PLACEHOLDER — intended real photo: Erik & the OX team.
    src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1000&q=75",
    alt: "Erik and the OX Plumbing team on a job site",
  },
  work1: {
    // Real job photo.
    src: "/images/tankless-water-heater-installation-mesa.webp",
    alt: "Tankless water heater installation by OX Plumbing",
  },
  work2: {
    // Real job photo.
    src: "/images/copper-repipe-installation-mesa.jpg",
    alt: "Copper repipe workmanship by OX Plumbing",
  },
  work3: {
    // PLACEHOLDER — intended real photo: OX service truck.
    src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=700&q=70",
    alt: "OX Plumbing service truck in Mesa, Arizona",
  },
} satisfies Record<string, SiteImage>;
