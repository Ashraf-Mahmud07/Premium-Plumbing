import { jobImages, luxuryImages, serviceImages } from "@/data/images";
import type { ServicePageData } from "./types";

/**
 * Residential service pages. Content substance is adapted from the reference
 * site and rewritten in the OX Plumbing voice for Mesa & the East Valley.
 */

export const waterHeaters: ServicePageData = {
  slug: "water-heaters",
  category: "Residential Plumbing",
  metaTitle: "Water Heater Repair & Installation in Mesa, AZ | OX Plumbing",
  metaDescription:
    "Tank and tankless water heater repair, replacement, and installation in Mesa and the East Valley. Same-day service, upfront flat-rate pricing, licensed ROC #347174.",
  serviceType: "Water heater repair and installation",
  hero: {
    titleLines: ["Water heater repair", "& installation in Mesa"],
    subtitle:
      "No hot water, a leaking tank, or a heater past its prime — we repair, replace, and install tank and tankless systems the same day, with a flat-rate price before any work begins.",
    card: { title: "Same-day swaps", note: "Tank & tankless · gas & electric" },
    image: serviceImages.waterHeaters,
  },
  overview: {
    eyebrow: "Hot water, handled",
    title: "Full-service water heater care for East Valley homes.",
    paragraphs: [
      "Your water heater works harder in Arizona than almost anywhere else — hard water scales up tanks, sediment settles fast, and a unit that quits on a summer weekend never picks a convenient moment. OX Plumbing repairs, replaces, maintains, and installs water heaters across Mesa, Gilbert, Chandler, and the East Valley, so hot showers come back the same day you call.",
      "We service gas and electric systems from every major brand, and we're straight with you about the repair-or-replace question: if a fix will genuinely carry your unit for years, we say so. If you're pouring money into a tank at the end of its life, we'll show you the numbers and let you decide — no pressure, no upsell.",
      "Thinking about going tankless? We install wall-mounted, on-demand systems that free up storage space, deliver endless hot water, and typically outlast a traditional tank by a decade.",
    ],
  },
  whyChooseUs: {
    title: "Why Mesa homeowners call OX for hot water.",
    cards: [
      {
        title: "Honest diagnostics",
        desc: "We test the element, thermostat, anode rod, and connections before we talk price — you get a real diagnosis, not a guess and a quote.",
      },
      {
        title: "Stocked for same-day",
        desc: "Our trucks carry common tanks, parts, and fittings, so most repairs and many full replacements happen on the first visit.",
      },
      {
        title: "Built for hard water",
        desc: "We size, flush, and protect heaters for Arizona's mineral-heavy water — the number one killer of East Valley water heaters.",
      },
    ],
  },
  benefits: {
    title: "What professional service saves you.",
    intro:
      "A well-maintained water heater costs less to run, lasts years longer, and never surprises you with a flooded garage. Here's what you get when a licensed pro handles it:",
    items: [
      "Problems caught early, before they become leaks",
      "Years of extra service life from your existing unit",
      "Lower energy bills from a clean, efficient tank",
      "Reliable hot water restored the same day",
      "Reduced risk of tank failure and water damage",
      "No panic-priced emergency replacement later",
    ],
  },
  problems: {
    title: "Sound familiar? We fix all of it.",
    intro:
      "These are the calls we take every week across the East Valley. If any of them sound like your house, we can usually have it sorted today.",
    items: [
      {
        title: "No hot water",
        desc: "Failed elements, tripped breakers, pilot and ignition problems — diagnosed and repaired on the spot.",
      },
      {
        title: "Leaking tank",
        desc: "Water around the base means act now. We stop the leak and tell you honestly whether the tank is done.",
      },
      {
        title: "Rusty or discolored water",
        desc: "Usually a failing anode rod or corrosion inside the tank — we'll trace it and fix the source.",
      },
      {
        title: "Banging & rumbling noises",
        desc: "Sediment buildup baking on the burner. A professional flush quiets it and restores efficiency.",
      },
      {
        title: "Hot water runs out fast",
        desc: "Sediment, a failed element, or an undersized tank — we find the cause and right-size the fix.",
      },
      {
        title: "Rising energy bills",
        desc: "An aging, scaled-up heater burns money every day. We'll show you the efficiency math before you spend a dime.",
      },
    ],
  },
  process: {
    title: "From cold shower to fixed.",
    steps: [
      {
        title: "Call — we answer immediately",
        body: "Describe what's happening and get a same-day appointment. No hot water is an emergency at our shop, not a next-week booking.",
      },
      {
        title: "Inspect & quote upfront",
        body: "We test the whole system, explain what failed and why, and give you a flat-rate price — repair and replacement options side by side.",
      },
      {
        title: "Fix, test, and clean up",
        body: "Repair or full install completed, temperature and pressure verified, old equipment hauled away, and your space left spotless.",
      },
    ],
  },
  whyMatters: {
    title: "Why waiting on a water heater costs more.",
    paragraphs: [
      "A struggling water heater rarely fails gracefully. Small symptoms — a longer wait for hot water, a faint rumble, a damp spot near the base — escalate into a burst tank, and a burst tank means water damage, an emergency replacement at emergency prices, and days of disruption.",
      "Handled early, the same problems are routine: a flush, an element, an anode rod. That's the difference between a scheduled visit and a 2am phone call — and it's why we tell every customer that the cheapest water heater repair is the one you don't postpone.",
    ],
  },
  experience: {
    title: "Water heater specialists, not generalists.",
    paragraphs: [
      "Our team has installed and serviced hundreds of tank and tankless systems across the East Valley — in garages, alcoves, closets, and attics, gas and electric, every major brand.",
      "Every install is done to code with new supply lines, proper venting, and a full safety test before we leave. It's the OX Shield maintenance-plan work we're known for, applied to the hardest-working appliance in your home.",
    ],
    stats: [
      { value: "25+", label: "Years of combined experience" },
      { value: "<60", label: "Minute emergency response" },
      { value: "350+", label: "Five-star Google reviews" },
      { value: "100%", label: "Upfront flat-rate pricing" },
    ],
  },
  features: {
    title: "Water heater services we provide.",
    intro: "One team for everything your hot water system needs, from a quick fix to a full upgrade.",
    items: [
      "Water heater repair — gas & electric",
      "Tank water heater replacement & installation",
      "Tankless water heater installation & upgrades",
      "Annual flush with anode rod check",
      "Tankless descaling service",
      "Thermostat, element & valve replacement",
      "Emergency shut-off & leak response, 24/7",
      "Code-compliant venting, gas & water connections",
    ],
  },
  faqs: [
    {
      q: "How do I know if my water heater needs repair or replacement?",
      a: "As a rule of thumb: a tank over 10 years old that needs frequent repairs is usually worth replacing, while younger units with a single failed part are worth fixing. We test your system, show you what we find, and price both options so you can decide with real numbers.",
    },
    {
      q: "How long do water heaters last?",
      a: "Traditional tank water heaters typically last 8–12 years — often less in the East Valley because hard water accelerates sediment buildup. Tankless systems last 15–20 years or more with an annual descaling service.",
    },
    {
      q: "Is a tankless water heater worth it in Arizona?",
      a: "For many homes, yes. Tankless units deliver endless on-demand hot water, cut standby energy loss, and free up garage or closet space. Because our hard water scales heat exchangers faster, we pair every tankless install with a maintenance schedule that protects the investment.",
    },
    {
      q: "Why does my hot water run out so quickly?",
      a: "The usual culprits are sediment eating your tank's capacity, a failed heating element, a thermostat problem, or a tank that's simply undersized for your household. We diagnose the actual cause before recommending anything.",
    },
    {
      q: "Can I install a water heater myself?",
      a: "We don't recommend it. Installation involves gas or high-amperage electrical connections, venting, expansion control, and permit requirements. A code-compliant professional install protects your warranty, your insurance coverage, and your family.",
    },
  ],
  related: [
    {
      label: "Water Treatment",
      desc: "Softeners and filtration that stop hard water from destroying your next heater.",
      href: "/services/water-treatment",
    },
    {
      label: "Leak Detection & Repair",
      desc: "Electronic locating for hidden leaks — no guesswork, no needless drywall.",
      href: "/services/leak-detection-repair",
    },
    {
      label: "24/7 Emergency Plumbing",
      desc: "Burst tank at midnight? We dispatch within 60 minutes, day or night.",
      href: "/services/emergency-plumbing",
    },
  ],
  cta: {
    title: "Ready for reliable hot water?",
    copy: "Same-day water heater service across Mesa and the East Valley. Call now — we answer immediately.",
  },
};

export const waterTreatment: ServicePageData = {
  slug: "water-treatment",
  category: "Residential Plumbing",
  metaTitle: "Water Softeners & Treatment in Mesa, AZ | OX Plumbing",
  metaDescription:
    "Water softener, filtration, and reverse osmosis installation in Mesa and the East Valley. Beat Arizona hard water with honest advice and flat-rate pricing.",
  serviceType: "Water treatment and softener installation",
  hero: {
    titleLines: ["Water treatment", "built for Arizona water"],
    subtitle:
      "Mesa has some of the hardest water in the country. We install and service softeners, whole-home filtration, and reverse osmosis systems that protect your pipes, appliances, and family — with upfront pricing and honest sizing advice.",
    card: { title: "Softer water", note: "Softeners · filtration · RO systems" },
    image: serviceImages.waterTreatment,
  },
  overview: {
    eyebrow: "Cleaner, safer, better-tasting",
    title: "Water treatment for East Valley homes.",
    paragraphs: [
      "If you've noticed white scale on your faucets, spots on your dishes, dry skin after showers, or a water heater that never seems to last, you've met East Valley hard water. The mineral content here is among the highest in the nation, and it quietly shortens the life of everything water touches in your home.",
      "OX Plumbing installs and services water softeners, whole-home filtration systems, and under-sink reverse osmosis units across Mesa, Gilbert, Chandler, and the surrounding cities. We size every system to your actual household — water usage, plumbing layout, and budget — instead of selling whatever's on the truck.",
      "The result: cleaner, safer, better-tasting water at every tap, appliances that last years longer, and plumbing that stays scale-free.",
    ],
  },
  whyChooseUs: {
    title: "Why homeowners trust OX with their water.",
    cards: [
      {
        title: "Sized to your home",
        desc: "We test your water and size softeners and filters to your household's real usage — no overselling, no undersized systems that fail early.",
      },
      {
        title: "Clean, code-right installs",
        desc: "Proper loops, bypass valves, and drainage — tidy copper work you'll be happy to show off, done right the first time.",
      },
      {
        title: "Service after the sale",
        desc: "Brine tank cleaning, salt delivery, filter changes, and RO membrane service — our WaterCare plan keeps your system honest year after year.",
      },
    ],
  },
  benefits: {
    title: "What treated water does for your home.",
    intro:
      "A properly installed softener or filtration system pays for itself quietly, every single day:",
    items: [
      "Water heaters and appliances that last years longer",
      "No more scale on fixtures, glass, and tile",
      "Softer skin and hair, brighter laundry",
      "Better-tasting drinking water from every tap",
      "Lower energy bills from scale-free heating",
      "Protection for your whole plumbing system",
    ],
  },
  problems: {
    title: "Signs your water is working against you.",
    intro: "Any of these at your house? Your water is telling you something — and we can fix it.",
    items: [
      {
        title: "Scale on fixtures",
        desc: "White crust on faucets and showerheads means minerals are building up inside your pipes too.",
      },
      {
        title: "Spotty dishes & glassware",
        desc: "Hard water leaves mineral spots no detergent can prevent. A softener ends it for good.",
      },
      {
        title: "Dry skin & dull laundry",
        desc: "Minerals strip moisture and trap detergent in fabric. Soft water fixes both overnight.",
      },
      {
        title: "Bad-tasting tap water",
        desc: "Chlorine, minerals, and contaminants — a filtration or RO system delivers clean water you'll actually drink.",
      },
      {
        title: "Appliances dying young",
        desc: "Water heaters, dishwashers, and washers fail early on hard water. Treatment protects the investment.",
      },
      {
        title: "Softener not working",
        desc: "Existing system stopped softening? We repair, rebuild, or replace every major brand.",
      },
    ],
  },
  process: {
    title: "From hard water to solved.",
    steps: [
      {
        title: "Test & assess",
        body: "We test your water hardness, review your plumbing layout, and talk through what you actually want to fix.",
      },
      {
        title: "Recommend & quote",
        body: "You get right-sized options with flat-rate pricing — softener, filtration, RO, or a combination — explained in plain English.",
      },
      {
        title: "Install & dial in",
        body: "Clean installation with proper bypass and drainage, system programmed to your usage, and a walkthrough so you know exactly how it works.",
      },
    ],
  },
  whyMatters: {
    title: "Hard water is a slow leak in your budget.",
    paragraphs: [
      "Every year on untreated East Valley water, scale narrows your pipes, coats your water heater's elements, and grinds down every appliance with a water line. You pay for it in energy bills, early replacements, and repairs that didn't have to happen.",
      "Treatment flips the math: one properly sized system protects tens of thousands of dollars of plumbing and appliances — and you feel the difference at every shower and every glass of water in between.",
    ],
  },
  experience: {
    title: "Local water, local expertise.",
    paragraphs: [
      "We've installed softener loops, dual-tank systems, and RO units in hundreds of East Valley homes — we know this water because we work in it every day.",
      "Our OX Shield WaterCare plan handles the maintenance most homeowners forget: brine tank cleaning, softener salt, and RO filter changes on a schedule, so your system keeps performing like day one.",
    ],
    stats: [
      { value: "25+", label: "Years of combined experience" },
      { value: "4x", label: "WaterCare visits per year available" },
      { value: "350+", label: "Five-star Google reviews" },
      { value: "100%", label: "Upfront flat-rate pricing" },
    ],
  },
  features: {
    title: "Water treatment services we provide.",
    intro: "Everything between the meter and your tap, installed and maintained by one team.",
    items: [
      "Water softener installation & replacement",
      "Softener loop installation with clean copper work",
      "Whole-home filtration systems",
      "Under-sink reverse osmosis (RO) systems",
      "Softener repair for all major brands",
      "Brine tank cleaning & softener salt service",
      "RO filter & membrane changes",
      "Water hardness testing & honest sizing advice",
    ],
  },
  faqs: [
    {
      q: "How hard is the water in Mesa?",
      a: "Very — the East Valley consistently measures among the hardest municipal water in the country, often 15–25 grains per gallon. That's why scale shows up on fixtures within weeks and water heaters here fail years earlier than the national average.",
    },
    {
      q: "What's the difference between a softener and a filtration system?",
      a: "A softener removes hardness minerals (calcium and magnesium) to protect pipes and appliances. Filtration targets taste, odor, chlorine, and contaminants. Reverse osmosis polishes drinking water at a single tap. Many homes benefit from a softener plus RO — we'll tell you honestly what yours needs.",
    },
    {
      q: "How long does a water softener last?",
      a: "A quality softener that's properly sized and maintained typically lasts 10–15 years. Undersized or neglected units fail much sooner — which is why we size to your real usage and offer scheduled maintenance through our WaterCare plan.",
    },
    {
      q: "Do you service softeners you didn't install?",
      a: "Yes. We repair and maintain every major brand — and if a unit isn't worth fixing, we'll say so and show you the replacement math before you spend anything.",
    },
  ],
  related: [
    {
      label: "Water Heaters",
      desc: "Hard water kills heaters early — repair, replacement, and tankless upgrades.",
      href: "/services/water-heaters",
    },
    {
      label: "Repipes",
      desc: "Scale-choked or aging pipes replaced with whole-home PEX and copper.",
      href: "/services/repipes",
    },
    {
      label: "Fixture Repair & Installation",
      desc: "Scale-damaged faucets and fixtures repaired or upgraded.",
      href: "/services/fixture-repair-installation",
    },
  ],
  cta: {
    title: "Ready for better water?",
    copy: "Softer water, cleaner taste, longer-lasting appliances. Call now — we answer immediately.",
  },
};

export const drainIssues: ServicePageData = {
  slug: "drain-issues",
  category: "Residential Plumbing",
  metaTitle: "Drain Cleaning & Repair in Mesa, AZ | OX Plumbing",
  metaDescription:
    "Clogged sink, slow shower, or backed-up main line? Fast drain cleaning and repair across Mesa and the East Valley with upfront flat-rate pricing. Call 24/7.",
  serviceType: "Drain cleaning and repair",
  hero: {
    titleLines: ["Drain problems cleared", "fast — and for good"],
    subtitle:
      "Slow sinks, gurgling tubs, backed-up main lines — we clear the clog fast, then find out why it happened so it doesn't come back next month. Same-day service across the East Valley.",
    card: { title: "Cleared today", note: "Sinks · tubs · main lines · 24/7" },
    image: serviceImages.drainCleaning,
  },
  overview: {
    eyebrow: "Flow restored",
    title: "Drain cleaning that fixes the cause, not just the clog.",
    paragraphs: [
      "Anyone can rent a snake and punch a hole through a clog. The reason drain problems keep coming back is that the real cause — grease buildup, root intrusion, a bellied line, scale — never gets addressed. At OX Plumbing, we clear the blockage and then diagnose why it formed, so you stop paying for the same fix twice.",
      "From a slow bathroom sink to a whole-house sewage backup, our trucks arrive stocked with professional cable machines, hydro jetting equipment, and inspection cameras. Most drain calls in Mesa, Gilbert, Chandler, and Tempe are cleared on the first visit — with a flat-rate price you approve before we start.",
      "Recurring backup at the worst possible time? We answer 24/7 and dispatch within 60 minutes for emergencies.",
    ],
  },
  whyChooseUs: {
    title: "Why the East Valley calls OX for drains.",
    cards: [
      {
        title: "Cause-first diagnosis",
        desc: "We don't just clear the clog — we find out what caused it, with camera verification on stubborn or recurring lines.",
      },
      {
        title: "The right tool, on the truck",
        desc: "Cable machines for routine clogs, hydro jetting for grease and roots, cameras for proof — no second trips, no guesswork.",
      },
      {
        title: "Honest recommendations",
        desc: "If a $150 clearing fixes it, that's what we'll tell you. If your line has a real problem, we'll show you the camera footage.",
      },
    ],
  },
  benefits: {
    title: "What professional drain service gets you.",
    intro:
      "The difference between a quick punch-through and a professional clearing shows up over the following months:",
    items: [
      "Full-bore flow restored, not a temporary channel",
      "The root cause identified — grease, roots, scale, or slope",
      "Camera-verified results on problem lines",
      "No harsh chemicals eating your pipes",
      "Fewer repeat clogs and emergency backups",
      "A clear picture of your line's actual health",
    ],
  },
  problems: {
    title: "Drain trouble we clear every day.",
    intro: "If it drains slow, smells wrong, or comes back up — call. We've seen it all and cleared it all.",
    items: [
      {
        title: "Kitchen sink clogs",
        desc: "Grease and food waste choke kitchen lines slowly, then all at once. We cable or jet them clean.",
      },
      {
        title: "Slow tubs & showers",
        desc: "Hair and soap scum buildup cleared properly — flow like the day the house was built.",
      },
      {
        title: "Main line backups",
        desc: "Sewage backing up into tubs or floor drains is an emergency. We respond 24/7 and clear it fast.",
      },
      {
        title: "Gurgling & bad odors",
        desc: "Air in the line and sewer gas mean a developing blockage or venting issue — catch it before it backs up.",
      },
      {
        title: "Recurring clogs",
        desc: "The same drain, every few months? There's a cause — and a camera inspection will find it.",
      },
      {
        title: "Toilet stoppages",
        desc: "Overflowing or slow-flushing toilets cleared at the source, with drainage properly restored.",
      },
    ],
  },
  process: {
    title: "How we clear it.",
    steps: [
      {
        title: "Call — same-day dispatch",
        body: "Describe the symptom and we'll send a licensed plumber with the right equipment, usually the same day.",
      },
      {
        title: "Clear & verify",
        body: "Flat-rate quote first, then we clear the line with cable or hydro jetting and verify full flow before we call it done.",
      },
      {
        title: "Find the cause",
        body: "For recurring or stubborn clogs, a camera inspection shows exactly what's in your line — and what it'll take to fix it permanently.",
      },
    ],
  },
  whyMatters: {
    title: "A slow drain is an early warning.",
    paragraphs: [
      "Drains rarely fail without notice. A slow sink, an occasional gurgle, a smell you can't place — these are the early symptoms of a blockage that will eventually stop your household cold, often on a weekend with a house full of guests.",
      "Worse, a fully blocked main line doesn't just inconvenience you — it backs sewage up into your home, and that turns a service call into a remediation project. Clearing a developing clog early is one of the cheapest calls you'll ever make to a plumber.",
    ],
  },
  experience: {
    title: "Thousands of East Valley drains cleared.",
    paragraphs: [
      "Our team clears drains across Mesa and the East Valley every single day — kitchen lines, laundry lines, and full main-line backups at midnight.",
      "We know the local quirks: orangeburg and clay laterals in older Mesa neighborhoods, root-hungry desert landscaping, and the grease patterns that choke kitchen lines. That's why our fixes last.",
    ],
    stats: [
      { value: "95%", label: "Cleared on the first visit" },
      { value: "<60", label: "Minute emergency response" },
      { value: "24/7", label: "Backup & overflow response" },
      { value: "100%", label: "Upfront flat-rate pricing" },
    ],
  },
  features: {
    title: "Drain services we provide.",
    intro: "Every drain in the house, from a single slow sink to the main sewer line.",
    items: [
      "Kitchen & bathroom sink clearing",
      "Tub, shower & floor drain cleaning",
      "Main sewer line clearing — cable & hydro jetting",
      "Toilet stoppage clearing",
      "Camera inspection of problem lines",
      "Whole-home drain treatment",
      "Emergency backup response, 24/7",
      "Preventative kitchen drain clearing (OX Shield members)",
    ],
  },
  faqs: [
    {
      q: "Why does my drain keep clogging in the same spot?",
      a: "Recurring clogs almost always have a physical cause: grease buildup narrowing the pipe, roots entering at a joint, scale, or a sagging section where waste settles. A camera inspection finds the cause, and then we can fix it permanently instead of clearing it over and over.",
    },
    {
      q: "Are chemical drain cleaners safe to use?",
      a: "We recommend against them. Caustic cleaners rarely clear a real blockage, they corrode pipes over time, and they make the line hazardous for whoever eventually has to open it. Mechanical clearing is safer and actually works.",
    },
    {
      q: "When is a clogged drain an emergency?",
      a: "If sewage is backing up into tubs, showers, or floor drains, or more than one fixture is affected, call immediately — that's a main line blockage and it gets worse fast. We answer 24/7 and dispatch within 60 minutes.",
    },
    {
      q: "What does drain cleaning cost?",
      a: "You get a flat-rate price before any work begins, based on the drain and the equipment needed. No hourly meter, no surprises — and the $99 service call fee is credited toward the work when you proceed.",
    },
  ],
  related: [
    {
      label: "Hydro Jetting",
      desc: "High-pressure water clears grease and roots that cables can't touch.",
      href: "/services/hydro-jetting",
    },
    {
      label: "Sewer Camera Inspection",
      desc: "See exactly what's in your line before spending a dollar on repairs.",
      href: "/services/sewer-camera-inspection",
    },
    {
      label: "24/7 Emergency Plumbing",
      desc: "Sewage backing up right now? We dispatch within 60 minutes.",
      href: "/services/emergency-plumbing",
    },
  ],
  cta: {
    title: "Drain acting up?",
    copy: "Cleared today with upfront pricing — and fixed so it stays cleared. Call now, we answer immediately.",
  },
};

export const hydroJetting: ServicePageData = {
  slug: "hydro-jetting",
  category: "Residential Plumbing",
  metaTitle: "Hydro Jetting Services in Mesa, AZ | OX Plumbing",
  metaDescription:
    "High-pressure hydro jetting scours grease, roots, and scale out of drain and sewer lines in Mesa and the East Valley. Camera-verified results, flat-rate pricing.",
  serviceType: "Hydro jetting",
  hero: {
    titleLines: ["Hydro jetting that", "scours pipes clean"],
    subtitle:
      "When cables punch holes but the clogs keep coming back, hydro jetting scours the entire pipe wall clean — grease, roots, sludge, and scale — and we verify the result on camera.",
    card: { title: "4,000 PSI", note: "Wall-to-wall clean · camera-verified" },
    image: serviceImages.hydroJetting,
  },
  overview: {
    eyebrow: "The deep clean",
    title: "High-pressure jetting for lines that keep clogging.",
    paragraphs: [
      "A drain cable clears a path through a blockage — hydro jetting removes the blockage entirely. Using precisely controlled high-pressure water, jetting scours years of grease, sludge, mineral scale, and invading roots off the full circumference of the pipe, restoring it to nearly original capacity.",
      "It's the difference between mowing a weed and pulling it out by the root. For East Valley homes with recurring kitchen-line clogs, root intrusion, or older sewer laterals that have never been properly cleaned, jetting is the fix that finally sticks.",
      "Every OX jetting service starts with an assessment — and on stubborn lines we run a camera afterward so you can see the clean pipe for yourself.",
    ],
  },
  whyChooseUs: {
    title: "Why choose OX for hydro jetting.",
    cards: [
      {
        title: "Assess before we blast",
        desc: "Jetting is powerful — we confirm your line's condition and material first, so fragile or damaged pipe gets the right treatment instead.",
      },
      {
        title: "Camera-verified results",
        desc: "On problem lines we show you the before and after. You see the clean pipe wall, not just a working drain.",
      },
      {
        title: "Onsite for emergencies",
        desc: "Our jetters ride along on emergency sewer calls — backups get cleared and cleaned in the same visit, day or night.",
      },
    ],
  },
  benefits: {
    title: "Why jetting beats snaking for serious buildup.",
    intro:
      "For chronic and heavy blockages, high-pressure water does what no cable can:",
    items: [
      "Removes grease and sludge from the entire pipe wall",
      "Cuts through invading roots, not just past them",
      "Restores close-to-original pipe capacity",
      "No chemicals — just water at precise pressure",
      "Results last months to years, not weeks",
      "Safe for properly assessed lines of every material",
    ],
  },
  problems: {
    title: "Problems hydro jetting solves for good.",
    intro: "These are the lines where a cable is a Band-Aid and jetting is the cure.",
    items: [
      {
        title: "Grease-choked kitchen lines",
        desc: "Years of cooking grease coat the pipe until no cable can help. Jetting strips it back to bare pipe.",
      },
      {
        title: "Root intrusion",
        desc: "Desert-landscaping roots find every joint. Jetting cuts them out cleanly — and a camera confirms it.",
      },
      {
        title: "Recurring main line backups",
        desc: "If your sewer needs clearing every few months, the line is dirty, not unlucky. One jetting resets the clock.",
      },
      {
        title: "Sludge & scale buildup",
        desc: "Decades of mineral scale narrow older lines. High-pressure water restores the flow path.",
      },
      {
        title: "Pre-repair cleaning",
        desc: "Before lining or spot repairs, jetting preps the pipe so the fix bonds and lasts.",
      },
      {
        title: "Commercial-grade messes",
        desc: "Restaurant-level grease at home? Heavy-use kitchens get the same equipment we run on commercial lines.",
      },
    ],
  },
  process: {
    title: "How a jetting visit works.",
    steps: [
      {
        title: "Inspect & confirm",
        body: "We assess the line — often with a camera — to confirm jetting is the right call and set the correct pressure for your pipe.",
      },
      {
        title: "Jet the line clean",
        body: "The jetter's nozzle pulls itself through the line, scouring the walls in every direction while flushing debris out to the main.",
      },
      {
        title: "Verify & advise",
        body: "We confirm full flow — on camera for problem lines — and tell you honestly how the pipe looks and when, if ever, it'll need attention again.",
      },
    ],
  },
  whyMatters: {
    title: "Stop paying for the same clog twice.",
    paragraphs: [
      "If your drain gets snaked every few months, you're not buying repairs — you're renting flow. The buildup that causes the clog is still lining the pipe, and it regrows from day one.",
      "Hydro jetting resets the pipe itself. For a modest premium over yet another cable call, you get a line that's actually clean — which is why it's often the cheapest option measured over a year instead of a visit.",
    ],
  },
  experience: {
    title: "Jetting expertise, residential and commercial.",
    paragraphs: [
      "OX crews run hydro jetting equipment daily — on home kitchen lines, main sewer laterals, and the quarterly commercial jetting routes we service for East Valley restaurants and businesses.",
      "That commercial discipline shows up in your driveway: correct pressures, the right nozzles, and honest calls about when jetting is — and isn't — the answer.",
    ],
    stats: [
      { value: "4,000", label: "PSI professional equipment" },
      { value: "95%", label: "Of emergencies fixed first visit" },
      { value: "24/7", label: "Emergency jetting availability" },
      { value: "100%", label: "Upfront flat-rate pricing" },
    ],
  },
  features: {
    title: "Hydro jetting services we provide.",
    intro: "Professional-grade equipment, matched to the line and the problem.",
    items: [
      "Kitchen & laundry line jetting",
      "Main sewer line jetting",
      "Root cutting & removal",
      "Grease & sludge removal",
      "Scale & mineral deposit clearing",
      "Pre-repair and pre-lining pipe prep",
      "Camera verification before & after",
      "Annual jetting for OX Shield Premium members",
    ],
  },
  faqs: [
    {
      q: "Is hydro jetting safe for my pipes?",
      a: "Yes — when the line is assessed first. We confirm the pipe's material and condition before jetting and match the pressure accordingly. On fragile or damaged pipe we'll tell you straight and recommend the repair that actually fits.",
    },
    {
      q: "Hydro jetting vs. snaking — which do I need?",
      a: "A cable is right for simple, first-time clogs. Jetting is right when clogs recur, when grease or roots are involved, or when the line has never been deep-cleaned. If a $150 cable clearing will genuinely fix it, that's what we'll recommend.",
    },
    {
      q: "How long do hydro jetting results last?",
      a: "A jetted line typically stays clear for years under normal use, versus weeks or months for a cabled line with heavy buildup. Restaurants and heavy-use kitchens benefit from scheduled jetting — that's exactly what our commercial plans provide.",
    },
    {
      q: "Can jetting remove tree roots?",
      a: "Yes. Root-cutting nozzles slice intruding roots out of the line, and the camera shows you the cleared joints. If roots return through a broken joint, we'll show you that too — and price the permanent repair honestly.",
    },
  ],
  related: [
    {
      label: "Drain Issues",
      desc: "Everyday clogs and slow drains cleared fast with flat-rate pricing.",
      href: "/services/drain-issues",
    },
    {
      label: "Sewer Camera Inspection",
      desc: "See the inside of your line before and after — no guesswork.",
      href: "/services/sewer-camera-inspection",
    },
    {
      label: "Commercial Hydro Jetting",
      desc: "Quarterly jetting programs that keep businesses clog-free.",
      href: "/services/commercial-hydro-jetting",
    },
  ],
  cta: {
    title: "Ready to end the clog cycle?",
    copy: "One deep clean beats a dozen quick fixes. Call now for camera-verified hydro jetting — we answer immediately.",
  },
};

export const fixtureRepairInstallation: ServicePageData = {
  slug: "fixture-repair-installation",
  category: "Residential Plumbing",
  metaTitle: "Fixture Repair & Installation in Mesa, AZ | OX Plumbing",
  metaDescription:
    "Faucets, toilets, sinks, showers, and valves repaired or installed in Mesa and the East Valley. Clean workmanship, upfront pricing, done right the first time.",
  serviceType: "Plumbing fixture repair and installation",
  hero: {
    titleLines: ["Fixture repair &", "installation done right"],
    subtitle:
      "Dripping faucets, running toilets, tired shower valves, or a full fixture upgrade — we repair and install kitchen and bathroom fixtures with clean workmanship and a price you approve first.",
    card: { title: "Every fixture", note: "Kitchen · bath · valves · upgrades" },
    image: luxuryImages.fixtures,
  },
  overview: {
    eyebrow: "The details that make the home",
    title: "Kitchen and bathroom fixtures, repaired or upgraded.",
    paragraphs: [
      "Fixtures are where you actually touch your plumbing every day — and where drips, wobbles, and worn-out valves quietly waste water and patience. OX Plumbing repairs and installs faucets, sinks, toilets, showers, tubs, garbage disposals, and shut-off valves across Mesa and the East Valley.",
      "A dripping faucet wastes thousands of gallons a year; a running toilet wastes far more. We fix the small annoyances properly, and when you're upgrading, we install everything from builder-grade replacements to the premium designer fixtures we handle on our luxury projects.",
      "Every install is clean, level, sealed, and tested — with shut-off valves checked so the next repair is a five-minute job instead of a flood.",
    ],
  },
  whyChooseUs: {
    title: "Why homeowners trust OX with their fixtures.",
    cards: [
      {
        title: "Repair-first honesty",
        desc: "If a cartridge or flapper fixes it, that's the quote you get. We only recommend replacement when repair stops making sense.",
      },
      {
        title: "Clean, finished work",
        desc: "Straight, sealed, caulked, and wiped down — drop cloths on the floor and nothing left behind but a working fixture.",
      },
      {
        title: "Premium-brand experience",
        desc: "From everyday brands to Kohler, Grohe, Toto, and Newport Brass — we install high-end fixtures to spec, without drama.",
      },
    ],
  },
  benefits: {
    title: "What professional fixture work saves you.",
    intro:
      "Fixtures look simple until the supply line lets go. A licensed install protects more than the fixture:",
    items: [
      "No slow leaks rotting cabinets and flooring",
      "Water bills cut by ending drips and running toilets",
      "Manufacturer warranties kept valid",
      "Correct valves and supply lines behind every fixture",
      "Fixtures sealed and mounted to last",
      "One visit — stocked trucks handle most jobs same-day",
    ],
  },
  problems: {
    title: "Fixture problems we fix every day.",
    intro: "Small annoyances, big water bills, or upgrade projects — it all gets the same careful work.",
    items: [
      {
        title: "Dripping faucets",
        desc: "Worn cartridges and seats replaced properly — the drip stops and stays stopped.",
      },
      {
        title: "Running toilets",
        desc: "Flappers, fill valves, and full rebuilds. OX Shield Plus members get a toilet rebuild included yearly.",
      },
      {
        title: "Low water pressure at fixtures",
        desc: "Clogged aerators, failing cartridges, or valve problems — we trace it to the cause.",
      },
      {
        title: "Leaking under the sink",
        desc: "P-traps, supply lines, and disposal connections resealed or replaced before the cabinet pays the price.",
      },
      {
        title: "Worn-out shower valves",
        desc: "Temperature swings and stiff handles fixed with cartridge service or full valve replacement.",
      },
      {
        title: "Upgrade installs",
        desc: "New faucets, sinks, toilets, and shower systems installed clean and to spec — including premium brands.",
      },
    ],
  },
  process: {
    title: "Fixed or installed in three steps.",
    steps: [
      {
        title: "Tell us what's needed",
        body: "Repair, replacement, or an upgrade you've already purchased — describe it and we'll arrive prepared.",
      },
      {
        title: "Flat-rate quote first",
        body: "We inspect, explain your options — repair vs. replace, good-better-best — and price the work before starting.",
      },
      {
        title: "Install, seal & test",
        body: "Careful installation, connections tested under pressure, area cleaned, and old fixtures hauled away.",
      },
    ],
  },
  whyMatters: {
    title: "Small fixtures, big consequences.",
    paragraphs: [
      "The most expensive plumbing failures we see rarely start big. A supply line that was never replaced, a toilet that ran for months, an under-sink drip behind boxes of cleaning supplies — by the time they're noticed, there's damaged cabinetry, warped flooring, or mold.",
      "Professional fixture work is cheap insurance: correct parts, fresh supply lines, working shut-offs, and sealed connections mean the fixtures you use fifty times a day never become the story you tell your insurance adjuster.",
    ],
  },
  experience: {
    title: "Craftsmanship at every price point.",
    paragraphs: [
      "From quick cartridge swaps to complete luxury bathroom fixture packages, OX plumbers do fixture work daily across Mesa and the East Valley.",
      "It's the same standard our reviews mention by name: clean work, clear communication, and repairs that are built to hold up — not a call-back a week later.",
    ],
    stats: [
      { value: "1,500+", label: "East Valley homes served" },
      { value: "25+", label: "Years of combined experience" },
      { value: "350+", label: "Five-star Google reviews" },
      { value: "100%", label: "Upfront flat-rate pricing" },
    ],
  },
  features: {
    title: "Fixture services we provide.",
    intro: "Kitchen, bathroom, laundry — if water runs through it, we repair and install it.",
    items: [
      "Faucet repair & installation — kitchen and bath",
      "Toilet repair, rebuild & replacement",
      "Sink & garbage disposal installation",
      "Shower & tub valve service and replacement",
      "Showerhead & trim upgrades",
      "Supply line & shut-off valve replacement",
      "Premium & designer fixture installation",
      "Hose bib & outdoor faucet service",
    ],
  },
  faqs: [
    {
      q: "Should I repair or replace my faucet?",
      a: "If the body and finish are in good shape, a cartridge repair is usually the smart money. If the fixture is corroded, discontinued, or you're chasing repeated leaks, replacement wins. We quote both honestly and let you choose.",
    },
    {
      q: "Can you install a fixture I bought myself?",
      a: "Absolutely. Bring us the faucet, toilet, or shower system you love and we'll install it to spec, with new supply lines and proper sealing — and we'll tell you upfront if there's a fit or quality issue before it goes in the wall.",
    },
    {
      q: "How much water does a dripping faucet actually waste?",
      a: "A faucet dripping once per second wastes roughly 3,000 gallons a year — and a silently running toilet can waste many times that. The repair usually pays for itself on the next water bill.",
    },
    {
      q: "Do you install high-end and designer fixtures?",
      a: "Yes — premium fixture installation is a specialty. We regularly install Kohler, Grohe, Hansgrohe, Toto, Newport Brass, and similar brands on our luxury plumbing projects, with the care those products deserve.",
    },
  ],
  related: [
    {
      label: "Luxury Plumbing",
      desc: "Premium fixtures and finishes from the world's best brands.",
      href: "/services/luxury-plumbing",
    },
    {
      label: "Leak Detection & Repair",
      desc: "Hidden leaks found electronically before they do real damage.",
      href: "/services/leak-detection-repair",
    },
    {
      label: "Water Treatment",
      desc: "Soft water that stops scale from eating your new fixtures.",
      href: "/services/water-treatment",
    },
  ],
  cta: {
    title: "Fixture on the fritz — or ready for an upgrade?",
    copy: "Clean, careful fixture work with upfront pricing across the East Valley. Call now — we answer immediately.",
  },
};

export const sewerCameraInspection: ServicePageData = {
  slug: "sewer-camera-inspection",
  category: "Residential Plumbing",
  metaTitle: "Sewer Camera Inspection in Mesa, AZ | OX Plumbing",
  metaDescription:
    "HD sewer camera inspections in Mesa and the East Valley show exactly what's in your line — roots, breaks, bellies — before you spend a dollar on repairs.",
  serviceType: "Sewer camera inspection",
  hero: {
    titleLines: ["See inside your sewer", "before you spend a dime"],
    subtitle:
      "An HD camera travels your sewer line and shows you exactly what's down there — roots, cracks, bellies, buildup — with locations marked to the foot. No guesswork, no exploratory digging.",
    card: { title: "HD diagnostics", note: "Recorded · located · explained" },
    image: serviceImages.cameraInspections,
  },
  overview: {
    eyebrow: "Proof, not guesses",
    title: "HD camera inspections that end sewer guesswork.",
    paragraphs: [
      "When a sewer line has problems, the worst way to find them is to start digging. A camera inspection sends a high-definition, self-leveling camera through your line and shows everything on a monitor in real time — root intrusion, cracks, offsets, bellies, grease, scale — with a locator marking the exact spot and depth from the surface.",
      "OX Plumbing runs camera inspections across Mesa and the East Valley for recurring clogs, slow whole-house drainage, pre-purchase home checks, and post-repair verification. You watch with us, you get the findings explained in plain English, and you keep the recording.",
      "It's the difference between a contractor saying \"trust me\" and showing you the pipe.",
    ],
  },
  whyChooseUs: {
    title: "Why get your inspection from OX.",
    cards: [
      {
        title: "You see what we see",
        desc: "We walk you through the footage live and hand over the recording — your line, your evidence, your decision.",
      },
      {
        title: "Located to the foot",
        desc: "Problems are marked at the surface with exact depth, so any repair is a precise excavation, not an exploratory one.",
      },
      {
        title: "No manufactured findings",
        desc: "If your line is healthy, that's the report. We diagnose with cameras precisely so nobody has to take anyone's word for anything.",
      },
    ],
  },
  benefits: {
    title: "What a camera inspection saves you.",
    intro:
      "An hour with a camera routinely saves East Valley homeowners thousands in misdirected repairs:",
    items: [
      "The real cause of recurring clogs, on video",
      "Exact location and depth — no exploratory digging",
      "Repair quotes based on evidence, not worst cases",
      "Leverage in home purchases and insurance claims",
      "Verification that completed repairs were done right",
      "A baseline record of your line's condition",
    ],
  },
  problems: {
    title: "When you need eyes in the line.",
    intro: "These situations are exactly what sewer cameras were built for.",
    items: [
      {
        title: "Recurring backups",
        desc: "The same clog every few months has a physical cause. The camera finds it the first time.",
      },
      {
        title: "Whole-house slow drains",
        desc: "When every fixture drains slowly, the main line is suspect — we confirm before anyone digs.",
      },
      {
        title: "Buying a home",
        desc: "A pre-purchase sewer scope is the cheapest insurance in real estate. Know before you close.",
      },
      {
        title: "Suspected root intrusion",
        desc: "Desert trees find sewer joints. The camera shows how far they're in and what it takes to fix.",
      },
      {
        title: "Sewage odors",
        desc: "Persistent smells suggest a cracked or separated line — we locate the breach precisely.",
      },
      {
        title: "After a repair",
        desc: "Verify the work you paid for. A post-repair scope confirms the line is actually fixed.",
      },
    ],
  },
  process: {
    title: "How an inspection works.",
    steps: [
      {
        title: "Access & scope",
        body: "We access the line through a cleanout, feed the HD camera through, and inspect the full run to the city main.",
      },
      {
        title: "Watch & locate",
        body: "You see the live feed with us. Any problem gets marked at the surface with its exact depth and distance.",
      },
      {
        title: "Plain-English report",
        body: "We explain what we found, what it means, and what it costs to fix — with the footage as your record either way.",
      },
    ],
  },
  whyMatters: {
    title: "Sewer repairs should never start with a guess.",
    paragraphs: [
      "Sewer work is priced by the foot and by the depth. Without a camera, contractors have to assume the worst — and homeowners pay for that assumption in oversized excavations and padded bids.",
      "With footage and a located problem, you're quoting a specific fix at a specific spot. It keeps everyone honest, including us — which is exactly why we put a camera in the line before recommending anything expensive.",
    ],
  },
  experience: {
    title: "Diagnostics is how we built our name.",
    paragraphs: [
      "\"Third plumber we called — first one to find the actual cause.\" That's a real OX review, and camera diagnostics is usually the reason.",
      "We scope lines across Mesa, Gilbert, Chandler, and Tempe daily — older clay laterals, root-prone yards, and new builds alike — and we've seen every failure mode this valley's soil can produce.",
    ],
    stats: [
      { value: "HD", label: "Self-leveling camera systems" },
      { value: "±1ft", label: "Surface locating accuracy" },
      { value: "350+", label: "Five-star Google reviews" },
      { value: "100%", label: "Footage provided to you" },
    ],
  },
  features: {
    title: "Camera inspection services we provide.",
    intro: "Every scope includes live viewing, locating, and a straight explanation.",
    items: [
      "Main sewer line camera inspection",
      "Branch & kitchen line scoping",
      "Pre-purchase home sewer inspections",
      "Root intrusion assessment",
      "Break, offset & belly locating with depth",
      "Post-repair verification scopes",
      "Recorded footage provided to you",
      "Annual inspection for OX Shield Premium members",
    ],
  },
  faqs: [
    {
      q: "Do I really need a camera inspection before a sewer repair?",
      a: "If someone quotes you a sewer repair without camera footage, get a second opinion. The camera tells you what's wrong, where, and how deep — which is the difference between a targeted fix and an open-ended excavation.",
    },
    {
      q: "Should I scope the sewer before buying a house?",
      a: "Always — especially on homes older than 20 years. A sewer replacement can cost more than a roof, and a standard home inspection never looks inside the line. A pre-purchase scope takes about an hour and can save you from a five-figure surprise.",
    },
    {
      q: "Can the camera find the exact spot of the problem?",
      a: "Yes. A transmitter in the camera head lets us mark the problem's location at the surface and measure its depth, typically within a foot. Repairs become precise digs instead of trenches.",
    },
    {
      q: "Do I get a copy of the footage?",
      a: "Yes — the recording is yours, along with our findings in plain English. It's useful for insurance, real-estate negotiations, or simply comparing bids.",
    },
  ],
  related: [
    {
      label: "Drain Issues",
      desc: "Clogs cleared fast — and diagnosed so they stop coming back.",
      href: "/services/drain-issues",
    },
    {
      label: "Hydro Jetting",
      desc: "Camera confirms the buildup; jetting scours it out for good.",
      href: "/services/hydro-jetting",
    },
    {
      label: "Repipes",
      desc: "When the camera shows a line beyond saving, we replace it right.",
      href: "/services/repipes",
    },
  ],
  cta: {
    title: "Want to know what's really in your line?",
    copy: "HD camera inspections with located, recorded, plain-English results. Call now — we answer immediately.",
  },
};

export const leakDetectionRepair: ServicePageData = {
  slug: "leak-detection-repair",
  category: "Residential Plumbing",
  metaTitle: "Leak Detection & Repair in Mesa, AZ | OX Plumbing",
  metaDescription:
    "Hidden water leaks found electronically and repaired with minimal disruption in Mesa and the East Valley. Stop the damage — and the water bill. Call 24/7.",
  serviceType: "Leak detection and repair",
  hero: {
    titleLines: ["Hidden leaks found —", "without tearing up your home"],
    subtitle:
      "A mystery water bill, a warm spot on the floor, the sound of running water at 2am — we locate hidden leaks electronically, pinpoint them without guesswork, and repair them with minimal disruption.",
    card: { title: "Pinpoint accuracy", note: "Electronic & acoustic locating" },
    image: serviceImages.leakDetection,
  },
  overview: {
    eyebrow: "No guesswork",
    title: "Electronic leak detection that protects your home.",
    paragraphs: [
      "Water leaks are at their most expensive when you can't see them. Behind walls, under slabs, or along yard lines, a hidden leak runs 24 hours a day — soaking framing, feeding mold, undermining foundations, and inflating your water bill until something finally shows.",
      "OX Plumbing uses acoustic listening equipment, pressure testing, and electronic line locating to find leaks precisely — through concrete, tile, and drywall — before we open anything. Then we repair the leak through the smallest access possible, instead of hunting for it with a jackhammer.",
      "Active leak spreading right now? That's an emergency at our shop: we answer 24/7 and dispatch within 60 minutes across the East Valley.",
    ],
  },
  whyChooseUs: {
    title: "Why the East Valley calls OX for leaks.",
    cards: [
      {
        title: "Locate first, open second",
        desc: "Electronic detection pinpoints the leak before any demolition — one clean access instead of exploratory holes.",
      },
      {
        title: "Hundreds of leaks found",
        desc: "Slab leaks, wall leaks, yard line breaks — we've located and repaired them across every kind of East Valley home.",
      },
      {
        title: "Damage-first thinking",
        desc: "We stop the water, then fix the pipe. Protecting your home from further damage always comes before paperwork.",
      },
    ],
  },
  benefits: {
    title: "What professional detection saves you.",
    intro:
      "Compared to searching by demolition — or waiting for the leak to reveal itself — precision detection means:",
    items: [
      "The leak found in hours, not weeks of damage",
      "One small, targeted repair access",
      "Your water bill back to normal immediately",
      "Mold and structural damage stopped early",
      "Documentation your insurance company respects",
      "A repair matched to the pipe, not the panic",
    ],
  },
  problems: {
    title: "Signs you've got a hidden leak.",
    intro: "Any one of these deserves a call. Two or more means call today.",
    items: [
      {
        title: "Unexplained high water bills",
        desc: "A jump with no change in habits is the classic hidden-leak signature — we'll confirm it fast.",
      },
      {
        title: "Sound of running water",
        desc: "Water hissing or running when everything's off means a pressurized line is leaking somewhere.",
      },
      {
        title: "Warm spots on floors",
        desc: "A hot-water slab leak warms the concrete above it — a telltale sign we can trace precisely.",
      },
      {
        title: "Damp walls or ceilings",
        desc: "Stains, bubbling paint, or soft drywall mean the leak has been running for a while. Don't wait.",
      },
      {
        title: "Musty smells & mold",
        desc: "Mold needs moisture — persistent odors often lead us straight to a concealed leak.",
      },
      {
        title: "Meter that never stops",
        desc: "If the meter spins with every fixture off, water is going somewhere. We'll find out where.",
      },
    ],
  },
  process: {
    title: "How we find and fix it.",
    steps: [
      {
        title: "Confirm & isolate",
        body: "Pressure testing confirms a leak exists and isolates which system it's on — hot, cold, or irrigation.",
      },
      {
        title: "Pinpoint electronically",
        body: "Acoustic and electronic equipment locates the leak through concrete, tile, or drywall — marked before anything is opened.",
      },
      {
        title: "Repair with minimal disruption",
        body: "The smallest effective access, a lasting repair — repair, reroute, or replacement — priced flat-rate before we start.",
      },
    ],
  },
  whyMatters: {
    title: "Every day a leak runs, the bill grows twice.",
    paragraphs: [
      "A hidden leak charges you two ways: the water you're paying for on every bill, and the damage accumulating in materials that weren't built to be wet. Drywall, flooring, framing, and foundations all have a point of no return — and mold remediation costs more than almost any plumbing repair.",
      "Found early, most leaks are a modest, targeted fix. Found late, they're a construction project. The gap between those outcomes is usually just the decision to make the call.",
    ],
  },
  experience: {
    title: "The leak specialists neighbors recommend.",
    paragraphs: [
      "We've located hundreds of hidden leaks across the East Valley — under slabs, inside walls, and along yard lines — without unnecessary demolition.",
      "It's precision work with expensive consequences for guessing wrong, and it's exactly the kind of diagnose-first plumbing OX was built on.",
    ],
    stats: [
      { value: "100s", label: "Of leaks located & repaired" },
      { value: "<60", label: "Minute emergency response" },
      { value: "24/7", label: "Active-leak availability" },
      { value: "100%", label: "Upfront flat-rate pricing" },
    ],
  },
  features: {
    title: "Leak services we provide.",
    intro: "From confirming a suspicion to completing the repair — one team, no hand-offs.",
    items: [
      "Electronic & acoustic leak detection",
      "Pressure testing & meter isolation",
      "Slab leak locating & repair",
      "In-wall & ceiling leak repair",
      "Underground yard & service line repair",
      "Hot water line reroutes",
      "Emergency leak response, 24/7",
      "Insurance-ready documentation",
    ],
  },
  faqs: [
    {
      q: "How do you find a leak without opening walls?",
      a: "Pressurized water escaping a pipe makes a distinct sound. Acoustic sensors amplify it through concrete and drywall while electronic locating traces the exact line path — so we mark the leak's position before making a single opening.",
    },
    {
      q: "How do I check if I have a hidden leak?",
      a: "Turn off every fixture and look at your water meter. If the dial or leak indicator is still moving after 15 minutes, water is flowing somewhere it shouldn't be. That test plus a jump in your bill is enough reason to call.",
    },
    {
      q: "Will insurance cover the leak damage?",
      a: "Policies commonly cover sudden water damage, while the plumbing repair itself and long-term seepage vary by policy. We document the leak's location, cause, and repair thoroughly so your claim starts on solid footing.",
    },
    {
      q: "Is a hidden leak an emergency?",
      a: "An active leak you can hear or see spreading is — every hour adds damage. Shut off your main water valve and call; we answer 24/7 and dispatch within 60 minutes across the East Valley.",
    },
  ],
  related: [
    {
      label: "Slab Leak Detection & Repair",
      desc: "Under-slab leaks located and fixed without needless demolition.",
      href: "/services/slab-leak-detection-repair",
    },
    {
      label: "Repipes",
      desc: "When pipes leak repeatedly, whole-home repiping ends the cycle.",
      href: "/services/repipes",
    },
    {
      label: "24/7 Emergency Plumbing",
      desc: "Active leak right now? We dispatch within 60 minutes.",
      href: "/services/emergency-plumbing",
    },
  ],
  cta: {
    title: "Suspect a leak?",
    copy: "Found electronically, repaired with minimal disruption — before the damage spreads. Call now, we answer immediately.",
  },
};

export const repipes: ServicePageData = {
  slug: "repipes",
  category: "Residential Plumbing",
  metaTitle: "Whole-Home Repipes in Mesa, AZ | PEX & Copper | OX Plumbing",
  metaDescription:
    "Whole-home repiping in PEX and copper for aging, leaking, or corroded pipes in Mesa and the East Valley. Organized crews, clear pricing, minimal disruption.",
  serviceType: "Whole-home repiping",
  hero: {
    titleLines: ["Whole-home repipes", "that end the leak cycle"],
    subtitle:
      "If your home's pipes are aging, corroded, or leaking on repeat, a whole-home repipe in PEX or copper replaces the problem instead of patching it — with organized crews and a schedule you can live with.",
    card: { title: "PEX & copper", note: "Whole-home · organized · to code" },
    image: serviceImages.repipe,
  },
  overview: {
    eyebrow: "A fresh start for your plumbing",
    title: "Reliable repiping for aging East Valley homes.",
    paragraphs: [
      "Pipes don't last forever. Polybutylene from the 80s and 90s, corroding galvanized steel, and copper pitted by decades of hard Arizona water all reach a point where the next leak isn't a possibility — it's a schedule. When repairs become a subscription, repiping is the honest recommendation.",
      "OX Plumbing repipes homes across Mesa and the East Valley in PEX and copper. Our crews work room by room from a clear plan: water stays on each night wherever possible, drywall openings are kept small and mapped, and every line is pressure-tested before we close anything.",
      "The result is a new plumbing system with decades of life, better pressure, clean water, and insurance-friendly documentation — done once and done right.",
    ],
  },
  whyChooseUs: {
    title: "Why homeowners choose OX for repipes.",
    cards: [
      {
        title: "Blueprint-driven crews",
        desc: "Organized staging, a room-by-room plan, and a communicated schedule — big projects are where our professionalism shows.",
      },
      {
        title: "Your home protected",
        desc: "Floors covered, furniture protected, openings minimized and documented — respectful crews who treat your house like ours.",
      },
      {
        title: "Materials matched to you",
        desc: "PEX for flexibility and value, copper for tradition and longevity — we explain the trade-offs and price both honestly.",
      },
    ],
  },
  benefits: {
    title: "What a repipe gives you.",
    intro:
      "One project replaces decades of accumulating problems with decades of quiet reliability:",
    items: [
      "An end to recurring leaks and patch repairs",
      "Strong, even water pressure at every fixture",
      "Clean water with no rust or metallic taste",
      "Modern shut-off valves throughout the home",
      "Lower insurance risk from failure-prone piping",
      "Decades of service life, warrantied in writing",
    ],
  },
  problems: {
    title: "Signs your home needs a repipe.",
    intro: "One of these is a repair. Several of them is a pattern — and a conversation worth having.",
    items: [
      {
        title: "Repeated pinhole leaks",
        desc: "Copper pitted by hard water fails in one spot after another. Patching chases the symptom.",
      },
      {
        title: "Polybutylene or galvanized pipe",
        desc: "Failure-prone materials from past decades — insurers know it, and so do home inspectors.",
      },
      {
        title: "Rusty or metallic water",
        desc: "Corroding pipes shed into your water. Filtration masks it; repiping removes it.",
      },
      {
        title: "Falling water pressure",
        desc: "Corrosion narrows pipes from the inside for years before fixtures slow to a trickle.",
      },
      {
        title: "Slab leak history",
        desc: "After multiple under-slab failures, rerouting into a repipe often beats fixing leaks one at a time.",
      },
      {
        title: "Renovating anyway?",
        desc: "Walls open during a remodel make it the perfect, cheapest moment to repipe.",
      },
    ],
  },
  process: {
    title: "How a repipe actually goes.",
    steps: [
      {
        title: "Assess & plan",
        body: "We inspect your existing system, walk the routing, and give you a fixed price with a clear schedule — usually just a few days.",
      },
      {
        title: "Repipe room by room",
        body: "Protected work areas, small mapped openings, and water restored each evening wherever possible.",
      },
      {
        title: "Test, close & document",
        body: "Every line pressure-tested, openings ready for finish, and your new system documented for warranty and insurance.",
      },
    ],
  },
  whyMatters: {
    title: "Patching failing pipe is renting time.",
    paragraphs: [
      "Once pipe starts failing from age or corrosion, every repair buys months, not years — and each leak rolls the dice on flooring, drywall, and everything the water finds first. Meanwhile insurers increasingly surcharge or decline homes with known failure-prone piping.",
      "A repipe converts an unpredictable stream of emergencies into one planned project with a fixed cost and a decades-long payoff. For homes with the symptoms, it's not the expensive option — it's the cheaper one measured over five years.",
    ],
  },
  experience: {
    title: "Built for big projects.",
    paragraphs: [
      "Whole-home repipes are OX signature work: blueprint-driven planning, organized staging, and crews who keep you informed from first protection sheet to final pressure test.",
      "We've repiped single-story ranches, two-story family homes, and everything between across Mesa, Gilbert, Chandler, and Tempe — in both PEX and copper.",
    ],
    stats: [
      { value: "2-5", label: "Days for most whole-home repipes" },
      { value: "100%", label: "Lines pressure-tested" },
      { value: "25+", label: "Years of combined experience" },
      { value: "0", label: "Surprise charges — fixed pricing" },
    ],
  },
  features: {
    title: "Repipe services we provide.",
    intro: "Complete replacement, partial reroutes, and everything the project touches.",
    items: [
      "Whole-home PEX repiping",
      "Whole-home copper repiping",
      "Polybutylene & galvanized pipe replacement",
      "Slab leak reroutes overhead",
      "New shut-off valves at every fixture",
      "Water heater connections & upgrades during repipe",
      "Pressure testing & inspection coordination",
      "Documentation for warranty & insurance",
    ],
  },
  faqs: [
    {
      q: "PEX or copper — which should I choose?",
      a: "PEX is flexible, freeze-tolerant, quiet, and costs less to install; modern PEX systems are excellent and carry long warranties. Copper is time-proven and rigid but costs more and — in our hard water — can pit over decades. We install both and will price both for your home without steering.",
    },
    {
      q: "How long does a whole-home repipe take?",
      a: "Most East Valley homes take two to five days depending on size and stories. We plan the work so water is restored each evening wherever possible — you live at home throughout.",
    },
    {
      q: "Will you have to open all my walls?",
      a: "No. We make small, strategic openings at fixture locations and routing points, map every one, and keep them ready for clean drywall patching. It's surgical, not demolition.",
    },
    {
      q: "How do I know I need a repipe and not just repairs?",
      a: "Frequency is the tell. One leak is a repair; the third leak in two years on aging pipe is a pattern that only trends one direction. We'll inspect, show you the pipe condition, and give you honest math on repair-vs-repipe.",
    },
  ],
  related: [
    {
      label: "Leak Detection & Repair",
      desc: "Pinpoint the current leak — and learn what shape your pipes are in.",
      href: "/services/leak-detection-repair",
    },
    {
      label: "Slab Leak Detection & Repair",
      desc: "Under-slab problems solved by repair, reroute, or repipe.",
      href: "/services/slab-leak-detection-repair",
    },
    {
      label: "Water Treatment",
      desc: "Protect your new pipes from the hard water that ate the old ones.",
      href: "/services/water-treatment",
    },
  ],
  cta: {
    title: "Tired of fixing the same pipes?",
    copy: "One organized project, decades of reliability. Call for an honest repipe assessment — we answer immediately.",
  },
};

export const gasSystemsPiping: ServicePageData = {
  slug: "gas-systems-piping",
  category: "Residential Plumbing",
  metaTitle: "Gas Line Installation & Repair in Mesa, AZ | OX Plumbing",
  metaDescription:
    "Licensed gas line installation, repair, and leak response in Mesa and the East Valley. Safe, code-compliant work for appliances, BBQs, and fire features.",
  serviceType: "Gas line installation and repair",
  hero: {
    titleLines: ["Gas lines installed", "& repaired — safely"],
    subtitle:
      "Gas work has no margin for error. Our licensed plumbers install, repair, and test gas piping for ranges, dryers, water heaters, BBQs, and fire features — to code, pressure-tested, every time.",
    card: { title: "Safety first", note: "Licensed · tested · to code" },
    image: serviceImages.emergency,
  },
  overview: {
    eyebrow: "Zero-compromise work",
    title: "Safe, code-compliant gas piping for your home.",
    paragraphs: [
      "Gas piping is the one part of your home's plumbing where \"good enough\" doesn't exist. Every connection, every material choice, and every test either meets code or endangers the household. OX Plumbing's licensed plumbers install, extend, repair, and pressure-test gas systems across Mesa and the East Valley with exactly that mindset.",
      "Adding a gas range or dryer? Running a line to a new BBQ island, fire pit, or patio heater? Converting a water heater to gas? We route the line properly, size it for the appliance load, and test the entire system before it ever carries fuel.",
      "And if you smell gas right now: leave the area, then call. Suspected leaks are emergencies — we respond fast, evaluate the situation, and perform safe repairs.",
    ],
  },
  whyChooseUs: {
    title: "Why trust OX with gas work.",
    cards: [
      {
        title: "Licensed & accountable",
        desc: "Gas work performed by licensed plumbers under ROC #347174 — permitted, inspected, and documented properly.",
      },
      {
        title: "Tested before it's live",
        desc: "Every system is pressure-tested and leak-checked before gas flows. No exceptions, no shortcuts.",
      },
      {
        title: "Emergency-ready",
        desc: "Suspected leaks jump our queue. We respond fast, make it safe, and then make it right.",
      },
    ],
  },
  benefits: {
    title: "What professional gas work protects.",
    intro: "The stakes are exactly why this is licensed work. Done right, you get:",
    items: [
      "A family and home protected from leak hazards",
      "Appliances fed at the correct pressure and volume",
      "Permits, inspections, and code compliance handled",
      "Insurance coverage kept valid by documented work",
      "Outdoor living upgrades done safely — BBQs, fire pits",
      "A tested, tagged system you never have to wonder about",
    ],
  },
  problems: {
    title: "Gas work we handle.",
    intro: "From urgent hazards to weekend-upgrade wish lists — all of it licensed, all of it tested.",
    items: [
      {
        title: "Suspected gas leaks",
        desc: "The smell of rotten eggs is an urgent hazard. Leave the area and call — we respond fast and repair safely.",
      },
      {
        title: "New appliance lines",
        desc: "Ranges, ovens, dryers, and gas water heaters connected with properly sized, tested piping.",
      },
      {
        title: "BBQ & outdoor kitchens",
        desc: "Permanent gas lines to grills, fire pits, and patio heaters — no more tank swaps mid-cookout.",
      },
      {
        title: "Rooftop & exposed line repair",
        desc: "Weathered rooftop connections and aging exposed piping repaired and protected — a job from our own gallery.",
      },
      {
        title: "Aging or corroded piping",
        desc: "Older black-iron systems inspected, repaired, or replaced before corrosion becomes a leak.",
      },
      {
        title: "Pressure & appliance problems",
        desc: "Appliances starving for gas usually mean undersized or obstructed lines — we diagnose and correct it.",
      },
    ],
  },
  process: {
    title: "How gas jobs run at OX.",
    steps: [
      {
        title: "Assess & design",
        body: "We size the line for the appliance load, plan a code-compliant route, and quote the work flat-rate — permits included where required.",
      },
      {
        title: "Install or repair",
        body: "Correct materials, proper supports and protection, and clean workmanship whether the line runs through an attic, a wall, or a patio.",
      },
      {
        title: "Test & verify",
        body: "Full pressure test and leak check before gas flows, appliance connections verified, and documentation left in your hand.",
      },
    ],
  },
  whyMatters: {
    title: "Gas mistakes don't give second chances.",
    paragraphs: [
      "An improperly joined fitting or an unpermitted line can sit quietly for years before it becomes a headline. Gas leaks risk fire, explosion, and carbon monoxide exposure — and unlicensed work voids insurance precisely when you'd need it most.",
      "That's why every OX gas job is licensed, permitted where required, and pressure-tested before it carries fuel. The peace of mind isn't a slogan; it's the test result.",
    ],
  },
  experience: {
    title: "Trusted with the highest-stakes work.",
    paragraphs: [
      "From emergency rooftop gas line repairs to complete outdoor kitchen installations, East Valley homeowners trust OX with the work where cutting corners isn't an option.",
      "Our licensed plumbers carry the testing equipment on every truck and treat every connection like their own family lives behind it — because the standard shouldn't change when the customer isn't watching.",
    ],
    stats: [
      { value: "100%", label: "Systems pressure-tested" },
      { value: "24/7", label: "Gas emergency response" },
      { value: "ROC", label: "#347174 licensed & insured" },
      { value: "25+", label: "Years of combined experience" },
    ],
  },
  features: {
    title: "Gas services we provide.",
    intro: "Installation, repair, and testing — indoors and out.",
    items: [
      "Gas leak detection & emergency repair",
      "New gas line installation & extensions",
      "Appliance hookups — ranges, dryers, water heaters",
      "BBQ, fire pit & patio heater lines",
      "Rooftop & exposed line repair",
      "Aging pipe replacement & re-routing",
      "Pressure testing & leak checks",
      "Permits & inspection coordination",
    ],
  },
  faqs: [
    {
      q: "What should I do if I smell gas?",
      a: "Leave the area immediately — don't flip switches, light flames, or start vehicles nearby. From a safe distance, call your gas utility's emergency line and then call us. We treat suspected leaks as emergencies and respond fast.",
    },
    {
      q: "Can you run a gas line to my BBQ or fire pit?",
      a: "Yes — outdoor gas lines are one of our most popular upgrades. We trench or route the line properly, size it for the appliance, install a shut-off at the connection, and pressure-test the whole run before first use.",
    },
    {
      q: "Do gas lines require permits?",
      a: "New lines and significant modifications typically do, and inspection requirements vary by city. We handle the permit and inspection process as part of the job — it protects your safety and your insurance.",
    },
    {
      q: "How do I know if my old gas piping is safe?",
      a: "Age, visible corrosion, and appliance performance are the clues — but the real answer is a pressure test. If you're unsure about an older system, we'll test it and give you a straight assessment.",
    },
  ],
  related: [
    {
      label: "Water Heaters",
      desc: "Gas water heater installation with properly sized supply lines.",
      href: "/services/water-heaters",
    },
    {
      label: "24/7 Emergency Plumbing",
      desc: "Suspected leak? We respond fast, day or night.",
      href: "/services/emergency-plumbing",
    },
    {
      label: "Fixture Repair & Installation",
      desc: "Appliance connections and fixture work done to the same standard.",
      href: "/services/fixture-repair-installation",
    },
  ],
  cta: {
    title: "Gas work on your list?",
    copy: "Licensed, tested, code-compliant gas piping across the East Valley. Call now — we answer immediately.",
  },
};

export const slabLeakDetectionRepair: ServicePageData = {
  slug: "slab-leak-detection-repair",
  category: "Residential Plumbing",
  metaTitle: "Slab Leak Detection & Repair in Mesa, AZ | OX Plumbing",
  metaDescription:
    "Slab leaks located electronically and repaired without needless demolition in Mesa and the East Valley. Protect your foundation — 24/7 emergency response.",
  serviceType: "Slab leak detection and repair",
  hero: {
    titleLines: ["Slab leaks found &", "fixed — not excavated"],
    subtitle:
      "A leak under your foundation doesn't have to mean a jackhammered living room. We locate slab leaks electronically to within inches, then repair, reroute, or replace with the least demolition possible.",
    card: { title: "Non-invasive", note: "Located to inches · foundation-safe" },
    image: serviceImages.slabLeak,
  },
  overview: {
    eyebrow: "Foundation-level protection",
    title: "Precision slab leak repair for East Valley homes.",
    paragraphs: [
      "Most East Valley homes are built on concrete slabs with water lines running beneath them — and when one of those lines fails, the leak works around the clock against your foundation, your flooring, and your water bill. The old approach was to break concrete until you found it. Ours is to find it first.",
      "Using acoustic detection, pressure isolation, and electronic line tracing, OX locates slab leaks to within inches — through the concrete — before any repair begins. Then we fix it the smartest way for your home: a direct access repair, an overhead reroute that bypasses the slab entirely, or, for homes with repeat failures, a repipe that ends the pattern.",
      "We've handled hundreds of slab and foundation leaks across the East Valley. Water spreading right now? We answer 24/7 and dispatch within 60 minutes.",
    ],
  },
  whyChooseUs: {
    title: "Why homeowners call OX for slab leaks.",
    cards: [
      {
        title: "Inches, not rooms",
        desc: "Electronic detection marks the leak's exact spot — so any concrete opened is measured in inches, not rooms of flooring.",
      },
      {
        title: "All three fixes on the table",
        desc: "Spot repair, reroute, or repipe — we price the honest options and explain which one actually fits your home's history.",
      },
      {
        title: "Hundreds handled",
        desc: "Slab leaks are routine work for our team, and it shows in clean access, fast repairs, and homes put back together right.",
      },
    ],
  },
  benefits: {
    title: "What precision detection protects.",
    intro:
      "Finding the leak before breaking concrete changes the entire project:",
    items: [
      "Your foundation protected from ongoing erosion",
      "Flooring and finishes preserved — minimal demolition",
      "The right repair chosen with real information",
      "Water bills back to normal immediately",
      "Mold and moisture stopped before they spread",
      "Insurance-ready documentation of cause and repair",
    ],
  },
  problems: {
    title: "Signs of a slab leak.",
    intro: "Slab leaks hide well — these are the ways they give themselves away.",
    items: [
      {
        title: "Warm spots on the floor",
        desc: "Hot line leaks warm the slab above them. If the dog keeps napping in one odd spot, take the hint.",
      },
      {
        title: "The sound of running water",
        desc: "Water hissing under the floor with every fixture off is the classic slab leak signature.",
      },
      {
        title: "Spiking water bills",
        desc: "Under-slab leaks run 24/7 — the meter knows before your floors do.",
      },
      {
        title: "Cracking tile or flooring",
        desc: "Moisture and soil movement under the slab telegraph into the finishes above.",
      },
      {
        title: "Damp carpet or baseboards",
        desc: "Water finds the slab's edges — unexplained moisture at floor level warrants a test.",
      },
      {
        title: "Low hot-water pressure",
        desc: "A leaking hot line steals pressure and keeps your water heater running overtime.",
      },
    ],
  },
  process: {
    title: "How we handle a slab leak.",
    steps: [
      {
        title: "Isolate & confirm",
        body: "Pressure testing confirms the leak and tells us which line it's on — hot side, cold side, or elsewhere entirely.",
      },
      {
        title: "Locate to inches",
        body: "Acoustic and electronic equipment pinpoints the leak through the slab, marked on your floor before anything opens.",
      },
      {
        title: "Repair the smart way",
        body: "Direct repair, overhead reroute, or repipe — priced flat-rate, explained honestly, and completed with your home protected throughout.",
      },
    ],
  },
  whyMatters: {
    title: "Your foundation is the one thing you can't replace.",
    paragraphs: [
      "Every gallon escaping under your slab erodes the soil your home stands on. Left running, slab leaks cause settling, cracked slabs, buckled floors, and moisture problems that spread far beyond the leak itself — damage measured in tens of thousands, from a pipe fix that might have been hundreds.",
      "Speed matters and precision matters. Locating first means repairing small; repairing fast means your foundation never becomes part of the problem.",
    ],
  },
  experience: {
    title: "Hundreds of slab leaks across the valley.",
    paragraphs: [
      "Slab leak response is core OX work: we've located and repaired hundreds of them across Mesa, Gilbert, Chandler, and Tempe — including the emergency ones that flood hallways at midnight.",
      "One reviewer put it best: isolated within the hour, thousands saved in flooring, upfront price, zero pressure. That's the standard on every slab call.",
    ],
    stats: [
      { value: "100s", label: "Of slab leaks repaired" },
      { value: "<60", label: "Minute emergency response" },
      { value: "±in", label: "Locating precision" },
      { value: "100%", label: "Upfront flat-rate pricing" },
    ],
  },
  features: {
    title: "Slab leak services we provide.",
    intro: "Detection through repair — and the honest advice between.",
    items: [
      "Electronic slab leak detection",
      "Pressure isolation testing",
      "Direct-access slab repairs",
      "Overhead line reroutes",
      "Repipe options for repeat offenders",
      "Emergency isolation & response, 24/7",
      "Foundation-safe access & restoration prep",
      "Insurance documentation & support",
    ],
  },
  faqs: [
    {
      q: "How do you find a leak under concrete?",
      a: "We isolate the leaking line with pressure testing, then trace it and listen with acoustic equipment that hears pressurized water escaping — through the slab. The combination marks the leak within inches before any concrete is touched.",
    },
    {
      q: "Do you have to break my floor to fix it?",
      a: "Not always. When access is the right call, it's a small, precise opening at the marked spot. Often an overhead reroute through walls and attic bypasses the slab entirely — no concrete opened at all. We present both with real prices.",
    },
    {
      q: "Is a slab leak an emergency?",
      a: "An active one, yes — it undermines your foundation around the clock. Shut off the main water valve and call. We answer 24/7 and dispatch within 60 minutes across the East Valley, and we've handled hundreds of these.",
    },
    {
      q: "Repair, reroute, or repipe — how do I choose?",
      a: "First leak on otherwise healthy pipe? Spot repair. A leak on a line with history, or pipe that's hard to access? Reroute. Multiple slab leaks over the years? That's a pattern, and a repipe usually costs less than the next three emergencies. We'll show you the math for your house.",
    },
  ],
  related: [
    {
      label: "Leak Detection & Repair",
      desc: "The same precision detection for leaks anywhere in your home.",
      href: "/services/leak-detection-repair",
    },
    {
      label: "Repipes",
      desc: "End repeat slab leaks for good with whole-home repiping.",
      href: "/services/repipes",
    },
    {
      label: "24/7 Emergency Plumbing",
      desc: "Water spreading now? We dispatch within 60 minutes.",
      href: "/services/emergency-plumbing",
    },
  ],
  cta: {
    title: "Think it's a slab leak?",
    copy: "Located to inches, repaired without needless demolition. Call now — we answer immediately, 24/7.",
  },
};

export const residentialPages: ServicePageData[] = [
  waterHeaters,
  waterTreatment,
  drainIssues,
  hydroJetting,
  fixtureRepairInstallation,
  sewerCameraInspection,
  leakDetectionRepair,
  repipes,
  gasSystemsPiping,
  slabLeakDetectionRepair,
];

// Re-exported asset references used by multiple pages (kept here so future
// entries reuse the same existing images rather than adding new ones).
export { jobImages, luxuryImages, serviceImages };
