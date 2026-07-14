import { jobImages, serviceImages } from "@/data/images";
import type { ServicePageData } from "./types";

/**
 * Commercial service pages. Content substance is adapted from the reference
 * site and rewritten in the OX Plumbing voice for East Valley businesses.
 */

export const backflowTesting: ServicePageData = {
  slug: "backflow-testing-installation",
  category: "Commercial Plumbing",
  metaTitle: "Backflow Testing & Installation in Mesa, AZ | OX Plumbing",
  metaDescription:
    "Certified backflow preventer testing, installation, and repair for Mesa businesses. Stay compliant with annual testing requirements — fast reports, fair rates.",
  serviceType: "Backflow testing and installation",
  hero: {
    titleLines: ["Backflow testing", "& installation"],
    subtitle:
      "Backflow preventers keep contaminated water out of the drinking supply — and your water provider requires them tested every year. We install, test, repair, and file the paperwork, so compliance is one call, not a project.",
    card: { title: "Stay compliant", note: "Annual testing · reports filed" },
    image: jobImages.pressureRegulator,
  },
  overview: {
    eyebrow: "Protect the water supply",
    title: "Certified backflow services for East Valley businesses.",
    paragraphs: [
      "Backflow happens when a pressure drop in the supply line pulls water backward — and with it, whatever that water has touched. Irrigation chemicals, process water, bacteria: without a working backflow preventer, one main break or fire-hydrant draw can siphon contamination straight into the drinking supply.",
      "That's why municipalities require commercial properties to install backflow prevention assemblies and have them tested annually by a certified tester. OX Plumbing installs, tests, rebuilds, and replaces backflow preventers for restaurants, offices, retail, HOAs, and multi-unit buildings across Mesa and the East Valley.",
      "We track your test dates, show up before the deadline, and file the certification with your water provider — compliance handled, year after year.",
    ],
  },
  whyChooseUs: {
    title: "Why businesses choose OX for backflow.",
    cards: [
      {
        title: "Test-and-file service",
        desc: "We test the assembly, complete the certification, and submit it to your water provider — you get a copy, not a chore.",
      },
      {
        title: "Repairs on the spot",
        desc: "Failed check valve or relief valve? Our trucks carry rebuild kits for common assemblies, so most failures pass the same day.",
      },
      {
        title: "Deadline tracking",
        desc: "We calendar your annual test dates so a missed notice never becomes a violation or a water shut-off.",
      },
    ],
  },
  benefits: {
    title: "What a maintained backflow assembly protects.",
    intro:
      "A backflow preventer is a one-way gate for your water. Keeping it certified protects more than the pipe:",
    items: [
      "Compliance with your city's testing requirements",
      "Safe drinking water for customers and staff",
      "Protection from contamination liability",
      "No violation notices or water service interruptions",
      "Your property value and insurance standing",
      "Documented, filed certifications every year",
    ],
  },
  problems: {
    title: "Backflow situations we handle.",
    intro: "From a first-time install to a failed test with a deadline attached — we've got it.",
    items: [
      {
        title: "Annual test due",
        desc: "Certified testing performed on-site, usually in under an hour, with results filed for you.",
      },
      {
        title: "Failed inspection notice",
        desc: "We diagnose the assembly, rebuild or replace what failed, and retest before your deadline.",
      },
      {
        title: "New assembly required",
        desc: "New construction, tenant improvements, or an upgraded requirement — sized and installed to spec.",
      },
      {
        title: "Leaking or discharging assembly",
        desc: "A relief valve dumping water is telling you something. We repair it before the water bill does.",
      },
      {
        title: "Frozen or vandalized units",
        desc: "Exposed assemblies take abuse — we repair, replace, and add protection.",
      },
      {
        title: "Irrigation backflow service",
        desc: "Landscape systems are a top contamination path. We test and service those assemblies too.",
      },
    ],
  },
  process: {
    title: "Compliance in three steps.",
    steps: [
      {
        title: "Schedule before the deadline",
        body: "Call or let our reminder reach you first. We work around your business hours — early, late, or weekend.",
      },
      {
        title: "Test & repair as needed",
        body: "Certified gauge testing of every valve. If something fails, we quote the fix flat-rate and usually complete it same visit.",
      },
      {
        title: "File & document",
        body: "Certification submitted to your water provider, a copy for your records, and next year's date on our calendar.",
      },
    ],
  },
  whyMatters: {
    title: "One valve stands between your water and everything else.",
    paragraphs: [
      "Cross-connections are everywhere on a commercial property — irrigation, boilers, soda systems, fire lines. The backflow assembly is the single mechanical barrier keeping what's in those systems out of the drinking water, which is why regulators treat a failed or untested assembly as seriously as they do.",
      "The stakes are health, liability, and continuity: contamination incidents make headlines, and non-compliance can end with your water service disconnected. An annual test is cheap insurance against all three.",
    ],
  },
  experience: {
    title: "Commercial compliance, handled quietly.",
    paragraphs: [
      "OX services backflow assemblies across the East Valley's restaurants, offices, salons, and multi-unit properties — the same businesses on our quarterly commercial maintenance routes.",
      "We do the testing, the rebuilds, and the paperwork on schedule, so the only time you think about backflow is when our reminder arrives.",
    ],
    stats: [
      { value: "1hr", label: "Typical on-site test time" },
      { value: "100%", label: "Certifications filed for you" },
      { value: "24/7", label: "Emergency assembly repair" },
      { value: "ROC", label: "#347174 licensed & insured" },
    ],
  },
  features: {
    title: "Backflow services we provide.",
    intro: "Every assembly type, every service it will ever need.",
    items: [
      "Annual certified backflow testing",
      "Test report filing with your water provider",
      "Backflow preventer installation & replacement",
      "Assembly rebuilds & valve repairs",
      "Irrigation system backflow service",
      "Retesting after repairs",
      "Multi-property scheduling for HOAs & managers",
      "Compliance reminders & date tracking",
    ],
  },
  faqs: [
    {
      q: "How often does my backflow preventer need testing?",
      a: "Most municipalities, including cities across the East Valley, require commercial backflow assemblies to be tested annually by a certified tester. Your water provider sends notices — but the deadline applies whether or not the notice reaches the right desk, which is why we track dates for our customers.",
    },
    {
      q: "What happens if my assembly fails the test?",
      a: "Most failures are worn check valves or relief valves, and our trucks carry rebuild kits for common assemblies — so the usual outcome is a same-visit repair and retest. If a unit is beyond economical repair, we quote the replacement flat-rate before touching anything.",
    },
    {
      q: "What exactly does a backflow preventer do?",
      a: "It's a one-way gate on your water line. When supply pressure drops — a main break, hydrant use, heavy demand — water tries to flow backward into the public supply. The assembly's check valves slam shut so whatever is on your side of the meter stays there.",
    },
    {
      q: "Do you handle the compliance paperwork?",
      a: "Yes. We complete the certification and submit it to your water provider, give you a copy for your records, and put your next test date on our calendar so the cycle repeats without you managing it.",
    },
  ],
  related: [
    {
      label: "Commercial Pump & Control Service",
      desc: "Pumps, controls, and the mechanical room around your backflow.",
      href: "/services/commercial-pump-control-service",
    },
    {
      label: "Commercial Leak Detection & Repair",
      desc: "Unexplained water loss found and fixed before it hits the bill.",
      href: "/services/commercial-leak-detection-repair",
    },
    {
      label: "Commercial Emergency Service",
      desc: "Plumbing failures that can't wait — handled 24/7.",
      href: "/services/commercial-emergency-service",
    },
  ],
  cta: {
    title: "Test due — or notice in hand?",
    copy: "Certified backflow testing with same-visit repairs and filed reports. Call now — we answer immediately.",
  },
};

export const commercialSewerDrains: ServicePageData = {
  slug: "commercial-sewer-drains",
  category: "Commercial Plumbing",
  metaTitle: "Commercial Sewer & Drain Service in Mesa, AZ | OX Plumbing",
  metaDescription:
    "Commercial drain and sewer service for Mesa restaurants, offices, and multi-unit buildings. Fast clearing, scheduled maintenance, minimal business disruption.",
  serviceType: "Commercial sewer and drain service",
  hero: {
    titleLines: ["Commercial sewer &", "drain service"],
    subtitle:
      "A backed-up drain doesn't just stop water — it stops business. We clear commercial lines fast, schedule maintenance that prevents the next one, and work around your operating hours, not ours.",
    card: { title: "Zero downtime", note: "After-hours & weekend service" },
    image: serviceImages.sewerLine,
  },
  overview: {
    eyebrow: "Keep the doors open",
    title: "Drain and sewer service built for business.",
    paragraphs: [
      "Commercial drain lines work harder than residential ones and fail more expensively. A restaurant's grease-laden kitchen line, a salon's hair-choked floor drains, an office building's aging main — when they back up, the cost isn't the plumbing bill, it's the closed dining room and the customers who walked out.",
      "OX Plumbing clears, maintains, and repairs commercial drain and sewer systems across Mesa and the East Valley. We bring commercial-grade cable machines, hydro jetting, and camera equipment to every call, and we schedule the disruptive work for the hours your business is closed.",
      "For businesses that can't afford surprises, our OX Shield Commercial plan puts quarterly jetting and priority response on the calendar — clog prevention as a line item instead of a crisis.",
    ],
  },
  whyChooseUs: {
    title: "Why East Valley businesses choose OX.",
    cards: [
      {
        title: "Around your hours",
        desc: "Early mornings, overnights, weekends — the messy work happens while your customers aren't watching.",
      },
      {
        title: "Commercial-grade equipment",
        desc: "High-capacity jetters, heavy cable machines, and cameras sized for commercial mains — on every truck we send.",
      },
      {
        title: "Prevention on a schedule",
        desc: "Quarterly maintenance plans that make backups rare, budgeted, and somebody else's job — ours.",
      },
    ],
  },
  benefits: {
    title: "What professional drain care saves your business.",
    intro:
      "Every hour a commercial drain is down has a cost. Professional service turns that risk into a schedule:",
    items: [
      "Backups cleared fast — often before opening time",
      "Grease and buildup removed, not just pierced",
      "Health-inspection problems prevented, not managed",
      "Camera-verified line condition you can plan around",
      "Predictable maintenance costs instead of emergencies",
      "One accountable vendor for every location",
    ],
  },
  problems: {
    title: "Commercial drain problems we solve.",
    intro: "If it slows service, fails inspections, or smells like trouble — call us.",
    items: [
      {
        title: "Kitchen line backups",
        desc: "Grease is relentless. We clear it, jet it, and put prevention on a quarterly schedule.",
      },
      {
        title: "Floor drain problems",
        desc: "Backed-up or odorous floor drains in kitchens, salons, and shops cleared and trap-primed.",
      },
      {
        title: "Main line stoppages",
        desc: "Whole-building backups handled as the emergencies they are — 24/7, highest priority.",
      },
      {
        title: "Grease trap line issues",
        desc: "Lines to and from interceptors cleared and maintained between pump-outs.",
      },
      {
        title: "Recurring tenant complaints",
        desc: "Multi-unit drain issues diagnosed at the building level, not apartment by apartment.",
      },
      {
        title: "Sewer odors in the space",
        desc: "Dry traps, failed seals, or venting problems traced and eliminated before customers notice.",
      },
    ],
  },
  process: {
    title: "How we keep your lines open.",
    steps: [
      {
        title: "Respond & clear",
        body: "Fast dispatch with commercial equipment — flow restored first, disruption minimized, flat-rate price approved before work.",
      },
      {
        title: "Diagnose the cause",
        body: "Camera inspection shows why the line failed — grease, roots, scale, or damage — with footage you keep.",
      },
      {
        title: "Prevent the repeat",
        body: "A maintenance schedule matched to your line's actual condition, from annual checks to quarterly jetting.",
      },
    ],
  },
  whyMatters: {
    title: "Drains are infrastructure, not fixtures.",
    paragraphs: [
      "For a restaurant, a single Friday-night backup can erase the month's maintenance budget in lost covers — before the cleanup costs. For property managers, chronic drain problems are the complaint that never stops generating calls.",
      "Treating commercial drains as scheduled infrastructure — inspected, cleaned, documented — is what separates businesses that never think about plumbing from businesses that think about nothing else every few months.",
    ],
  },
  experience: {
    title: "The crews behind East Valley kitchens.",
    paragraphs: [
      "OX runs scheduled drain maintenance for restaurants, salons, offices, and multi-unit buildings across the valley — over 200 commercial jobs and counting.",
      "We know commercial lines because we service them quarterly: where grease collects, which fittings fail, and how to keep a health inspection from ever mentioning your drains.",
    ],
    stats: [
      { value: "200+", label: "Commercial jobs completed" },
      { value: "90", label: "Day jetting cycles available" },
      { value: "24/7", label: "Backup response" },
      { value: "100%", label: "Upfront flat-rate pricing" },
    ],
  },
  features: {
    title: "Commercial drain services we provide.",
    intro: "Everything below your floor drains and behind your walls.",
    items: [
      "Emergency drain & sewer clearing, 24/7",
      "Commercial hydro jetting",
      "Kitchen & grease line maintenance",
      "Floor & area drain service",
      "Main line clearing & repair",
      "Camera inspections with reporting",
      "Quarterly maintenance plans (OX Shield Commercial)",
      "Multi-location service scheduling",
    ],
  },
  faqs: [
    {
      q: "Can you service our drains outside business hours?",
      a: "Yes — that's how most of our commercial work runs. Overnight, early morning, and weekend scheduling keeps jetting and clearing invisible to your customers, and emergencies get 24/7 response regardless.",
    },
    {
      q: "How often should a restaurant have its drain lines jetted?",
      a: "Most full-service kitchens do best on a quarterly cycle — that's precisely what our OX Shield Commercial plan provides, with main line jetting included where access allows. Lighter-use businesses may only need semi-annual or annual service; a camera look tells us which.",
    },
    {
      q: "Do you work with property managers and multi-unit buildings?",
      a: "Constantly. We handle building-level diagnosis, per-unit clearing, and scheduled maintenance across multiple properties, with one point of contact and consolidated reporting.",
    },
    {
      q: "What does commercial drain service cost?",
      a: "Flat-rate, quoted before work begins — for emergencies and maintenance alike. Plan customers get member pricing, waived emergency fees, and the scheduling priority that matters most at 6am on a Saturday.",
    },
  ],
  related: [
    {
      label: "Commercial Hydro Jetting",
      desc: "Quarterly high-pressure cleaning that keeps grease from winning.",
      href: "/services/commercial-hydro-jetting",
    },
    {
      label: "Commercial Sewer Camera Inspection",
      desc: "Know your lines' condition before it becomes an emergency.",
      href: "/services/commercial-sewer-camera-inspection",
    },
    {
      label: "Commercial Emergency Service",
      desc: "Backups and failures handled 24/7 with priority dispatch.",
      href: "/services/commercial-emergency-service",
    },
  ],
  cta: {
    title: "Keep your drains off the worry list.",
    copy: "Fast clearing today, scheduled prevention tomorrow. Call now — we answer immediately.",
  },
};

export const commercialHydroJetting: ServicePageData = {
  slug: "commercial-hydro-jetting",
  category: "Commercial Plumbing",
  metaTitle: "Commercial Hydro Jetting in Mesa, AZ | OX Plumbing",
  metaDescription:
    "Quarterly hydro jetting programs for Mesa restaurants, salons, and commercial buildings. Prevent grease backups with scheduled, camera-verified cleaning.",
  serviceType: "Commercial hydro jetting",
  hero: {
    titleLines: ["Commercial hydro", "jetting programs"],
    subtitle:
      "Grease never takes a quarter off — neither do we. Scheduled high-pressure jetting keeps kitchen and main lines clean year-round, so backups stop being part of your operating reality.",
    card: { title: "Every 90 days", note: "Scheduled · after-hours · verified" },
    image: serviceImages.hydroJetting,
  },
  overview: {
    eyebrow: "Prevention on a schedule",
    title: "High-pressure jetting that keeps business flowing.",
    paragraphs: [
      "Commercial kitchens put more grease down a drain in a week than a home does in a year. Cable machines punch temporary holes through that buildup; hydro jetting removes it — scouring the pipe wall clean at high pressure so the line starts every quarter at full capacity.",
      "OX Plumbing runs scheduled commercial jetting across Mesa and the East Valley for restaurants, cafeterias, salons, medical facilities, and multi-unit buildings. Service happens after hours, main line jetting is included where access allows, and problem lines get camera verification so you see exactly what you're paying for.",
      "It's the core of our OX Shield Commercial plan for a simple reason: for grease-heavy businesses, quarterly jetting is the difference between maintenance and emergencies.",
    ],
  },
  whyChooseUs: {
    title: "Why businesses schedule jetting with OX.",
    cards: [
      {
        title: "Set-and-forget scheduling",
        desc: "Every 90 days, after hours, without a reminder from you. Clean lines become something that just happens.",
      },
      {
        title: "Commercial-duty equipment",
        desc: "High-capacity jetters and nozzles matched to grease, scale, and roots in commercial-diameter lines.",
      },
      {
        title: "Verified, documented results",
        desc: "Camera checks on problem lines and service records for every visit — useful at inspection time.",
      },
    ],
  },
  benefits: {
    title: "What scheduled jetting buys you.",
    intro:
      "Compare one quarter of jetting to one Friday-night backup, and the program sells itself:",
    items: [
      "Backups prevented instead of survived",
      "Full pipe capacity restored every cycle",
      "Grease, sludge, scale, and roots removed — not pierced",
      "Health-inspection-ready drain systems",
      "After-hours service invisible to customers",
      "A predictable line item instead of emergency invoices",
    ],
  },
  problems: {
    title: "What commercial jetting eliminates.",
    intro: "The recurring problems that quietly cost businesses the most.",
    items: [
      {
        title: "Grease-choked kitchen lines",
        desc: "The number one cause of restaurant backups, stripped to bare pipe every cycle.",
      },
      {
        title: "Recurring main line clogs",
        desc: "Lines that need cabling every few months get reset to clean and stay that way.",
      },
      {
        title: "Slow floor drains",
        desc: "Hair, product, and sludge scoured out of salon and facility drains completely.",
      },
      {
        title: "Root intrusion",
        desc: "Roots cut out at the joints and monitored on camera before they cost you a line.",
      },
      {
        title: "Odor complaints",
        desc: "Biofilm and decaying buildup — the usual source of drain odors — washed away entirely.",
      },
      {
        title: "Pre-inspection cleanups",
        desc: "Lines brought to their best before health inspections, audits, or property sales.",
      },
    ],
  },
  process: {
    title: "How the program runs.",
    steps: [
      {
        title: "Baseline assessment",
        body: "We inspect your lines — camera included where warranted — and set the right cycle for your actual usage.",
      },
      {
        title: "Scheduled jetting",
        body: "Every 90 days (or your cycle), after hours: kitchen lines, floor drains, and main lines jetted where access allows.",
      },
      {
        title: "Report & adjust",
        body: "Service documented, anomalies flagged early, and the schedule tuned as your business changes.",
      },
    ],
  },
  whyMatters: {
    title: "Grease doesn't negotiate.",
    paragraphs: [
      "Every fryer, flat-top, and dish station sends emulsified grease down the line, where it cools, hardens, and narrows the pipe a little more each week. There is no volume of enzyme treatment or hot water that reverses it — only mechanical removal.",
      "Businesses either remove that buildup on their schedule or the buildup picks the schedule for them, and it always picks a Friday night. Quarterly jetting is how professional kitchens make that choice once and never again.",
    ],
  },
  experience: {
    title: "The quarterly crews businesses count on.",
    paragraphs: [
      "OX jetting crews run scheduled commercial routes across the East Valley — the same equipment, technicians, and 90-day discipline our OX Shield Commercial plan is built on.",
      "We've kept restaurant kitchens, salons, and multi-unit buildings backup-free for years at a time. That's the promise of the program: plumbing you don't think about.",
    ],
    stats: [
      { value: "90", label: "Day service cycles" },
      { value: "200+", label: "Commercial jobs completed" },
      { value: "24/7", label: "Emergency jetting available" },
      { value: "15%", label: "Repair discount for plan members" },
    ],
  },
  features: {
    title: "Commercial jetting services we provide.",
    intro: "Scheduled programs plus on-demand deep cleans.",
    items: [
      "Quarterly hydro jetting programs",
      "Kitchen & grease line jetting",
      "Main line jetting where access allows",
      "Floor & area drain cleaning",
      "Root cutting & removal",
      "Emergency jetting response, 24/7",
      "Camera verification on problem lines",
      "Service documentation for inspections",
    ],
  },
  faqs: [
    {
      q: "How often does a commercial kitchen need jetting?",
      a: "Full-service kitchens generally need it quarterly — grease accumulates faster than most owners expect, and 90 days is the interval that keeps lines comfortably ahead of it. Lower-grease businesses may stretch to semi-annual; we set the cycle from your line's actual condition, not a sales target.",
    },
    {
      q: "Will jetting disrupt our business?",
      a: "No — commercial jetting is scheduled after hours or during your slowest windows. Most services complete before you open, and your staff just sees drains that work.",
    },
    {
      q: "Is jetting safe for older commercial lines?",
      a: "Yes, when assessed first. We verify pipe material and condition — on camera when there's any doubt — and match pressure accordingly. Fragile lines get an honest conversation instead of a gamble.",
    },
    {
      q: "What's included in the OX Shield Commercial plan?",
      a: "Quarterly hydro jetting every 90 days, main line jetting where access is available, same-day priority scheduling, 15% off repair labor and parts, and no emergency or dispatch fees — built for restaurants, salons, offices, and multi-unit buildings at $79.99/month.",
    },
  ],
  related: [
    {
      label: "Commercial Sewer & Drains",
      desc: "Full drain and sewer care for commercial properties.",
      href: "/services/commercial-sewer-drains",
    },
    {
      label: "Commercial Sewer Camera Inspection",
      desc: "Camera-verified line condition before and after cleaning.",
      href: "/services/commercial-sewer-camera-inspection",
    },
    {
      label: "Service Plans",
      desc: "The OX Shield Commercial plan — prevention as a subscription.",
      href: "/plumbing-service-plans",
    },
  ],
  cta: {
    title: "Ready to retire the plunger budget?",
    copy: "Quarterly jetting keeps commercial lines clean and businesses open. Call now — we answer immediately.",
  },
};

export const commercialPumpControl: ServicePageData = {
  slug: "commercial-pump-control-service",
  category: "Commercial Plumbing",
  metaTitle: "Commercial Pump & Control Service in Mesa, AZ | OX Plumbing",
  metaDescription:
    "Sewage ejectors, sump pumps, booster pumps, and control panels serviced for Mesa commercial properties. Repairs, replacements, and preventative maintenance.",
  serviceType: "Commercial pump and control service",
  hero: {
    titleLines: ["Commercial pump &", "control service"],
    subtitle:
      "Ejector pits, sump pumps, booster systems, and the control panels that run them — we repair, replace, and maintain the equipment your building can't operate without.",
    card: { title: "Always pumping", note: "Ejectors · sumps · boosters · controls" },
    image: serviceImages.waterTreatment,
  },
  overview: {
    eyebrow: "The equipment behind the building",
    title: "Pumps and controls, kept running.",
    paragraphs: [
      "Most tenants never see the pumps that make a commercial building work — the sewage ejectors lifting waste from below-grade fixtures, the sump pumps guarding basements and elevator pits, the booster systems holding pressure on upper floors. They only notice when one stops.",
      "OX Plumbing services commercial pump systems and their controls across Mesa and the East Valley: diagnosis and repair, full replacements, float and alarm service, and the scheduled maintenance that catches a failing pump before it fails a building.",
      "When a pump is down and the pit is rising, we treat it like the emergency it is — 24/7 response with the parts and expertise to put it back online.",
    ],
  },
  whyChooseUs: {
    title: "Why facilities call OX for pump work.",
    cards: [
      {
        title: "Systems, not just pumps",
        desc: "Floats, check valves, alarms, and panels — we service the whole system, because that's what actually fails.",
      },
      {
        title: "Downtime-first response",
        desc: "A dead ejector is an emergency at our shop. Priority dispatch, day or night, with common pumps and parts sourced fast.",
      },
      {
        title: "Maintenance that predicts",
        desc: "Scheduled testing and pit service that finds weak amps, stuck floats, and worn impellers before the flood does.",
      },
    ],
  },
  benefits: {
    title: "What proactive pump service protects.",
    intro:
      "Pump failures announce themselves — to anyone who's testing. Regular service means:",
    items: [
      "Failures caught at the weak-amp stage, not the flood stage",
      "Below-grade spaces protected around the clock",
      "Alarms and backups that actually work when needed",
      "Longer equipment life from clean, exercised systems",
      "Documented maintenance for owners and insurers",
      "One accountable vendor across all your properties",
    ],
  },
  problems: {
    title: "Pump problems we handle.",
    intro: "Sewage, storm, or supply — if it pumps and it stopped, we're the call.",
    items: [
      {
        title: "Ejector pump failure",
        desc: "Below-grade restrooms out of service? We diagnose, repair, or replace — priority response.",
      },
      {
        title: "Sump pump not keeping up",
        desc: "Undersized, worn, or clogged sumps corrected before the next storm tests them.",
      },
      {
        title: "Alarm going off",
        desc: "A high-water alarm is your early warning. We respond, resolve, and reset it properly.",
      },
      {
        title: "Control panel faults",
        desc: "Failed floats, contactors, and switches traced and replaced — the usual culprits behind 'dead' pumps.",
      },
      {
        title: "Short-cycling pumps",
        desc: "Rapid on-off cycling burns out motors. We fix the cause — floats, check valves, or sizing.",
      },
      {
        title: "Low pressure on upper floors",
        desc: "Booster system problems diagnosed and repaired to bring every floor back to spec.",
      },
    ],
  },
  process: {
    title: "How we service pump systems.",
    steps: [
      {
        title: "Diagnose the system",
        body: "Amp draw, floats, check valves, controls, and pit condition — the full picture, not just the pump.",
      },
      {
        title: "Repair or replace, flat-rate",
        body: "Honest math on repair versus replacement, priced before work begins, with equipment matched to the duty.",
      },
      {
        title: "Test & schedule",
        body: "Full-function testing under load, alarms verified, and a maintenance interval set so this visit isn't repeated as an emergency.",
      },
    ],
  },
  whyMatters: {
    title: "Pumps fail silently, then all at once.",
    paragraphs: [
      "A sewage ejector doesn't send warning emails. It runs a little hotter, draws a little more current, cycles a little oddly — and then a below-grade floor floods with the one substance no tenant forgives.",
      "The cost asymmetry is stark: a maintenance visit versus remediation, closed floors, and equipment replaced under emergency pricing. Buildings with critical pumps need them tested like the infrastructure they are.",
    ],
  },
  experience: {
    title: "Facility-grade expertise.",
    paragraphs: [
      "OX services pump systems across the East Valley's offices, restaurants, retail centers, and multi-unit residential properties — as part of the 200+ commercial jobs behind our name.",
      "Our commercial plan customers get the same discipline on pumps as on drains: scheduled attention, documented results, and problems solved while they're still small.",
    ],
    stats: [
      { value: "24/7", label: "Pump-down emergency response" },
      { value: "200+", label: "Commercial jobs completed" },
      { value: "100%", label: "Systems tested under load" },
      { value: "ROC", label: "#347174 licensed & insured" },
    ],
  },
  features: {
    title: "Pump & control services we provide.",
    intro: "From the pit to the panel.",
    items: [
      "Sewage ejector repair & replacement",
      "Sump pump service & upgrades",
      "Booster pump system service",
      "Float, alarm & check valve replacement",
      "Control panel diagnosis & repair",
      "Pit cleaning & inspection",
      "Preventative maintenance programs",
      "Emergency response, 24/7",
    ],
  },
  faqs: [
    {
      q: "How often should commercial pumps be serviced?",
      a: "Critical-duty pumps — sewage ejectors and sumps protecting occupied space — should be inspected and tested at least annually, and heavy-use systems quarterly. Testing takes minutes; discovering a dead pump by flood takes much longer.",
    },
    {
      q: "My pump alarm is sounding — what do I do?",
      a: "Treat it as the early warning it is: the alarm means water is above the level the pump should have handled. Minimize water going to that system and call us — we prioritize alarm calls because the next stage is a flooded floor.",
    },
    {
      q: "Repair or replace a failing pump?",
      a: "Age, duty cycle, and what failed decide it. A worn float on a young pump is a repair; a burned motor on a decade-old ejector is a replacement conversation. We show you the numbers both ways before you commit to either.",
    },
    {
      q: "Do you install backup pumps and alarms?",
      a: "Yes — for spaces where failure isn't acceptable, we install redundant pumps, high-water alarms, and battery backups, then test the whole arrangement under load so 'backup' means something.",
    },
  ],
  related: [
    {
      label: "Commercial Sewer & Drains",
      desc: "The lines your pumps feed, cleared and maintained.",
      href: "/services/commercial-sewer-drains",
    },
    {
      label: "Commercial Emergency Service",
      desc: "Pump down at 2am? Priority dispatch, 24/7.",
      href: "/services/commercial-emergency-service",
    },
    {
      label: "Backflow Testing & Installation",
      desc: "Compliance testing for the assemblies beside your pumps.",
      href: "/services/backflow-testing-installation",
    },
  ],
  cta: {
    title: "Pump trouble — or overdue for testing?",
    copy: "Repairs, replacements, and maintenance that keep buildings dry and running. Call now — we answer immediately.",
  },
};

export const commercialSewerCamera: ServicePageData = {
  slug: "commercial-sewer-camera-inspection",
  category: "Commercial Plumbing",
  metaTitle: "Commercial Sewer Camera Inspection in Mesa, AZ | OX Plumbing",
  metaDescription:
    "HD camera inspections of commercial sewer lines in Mesa. Document line condition for maintenance planning, disputes, due diligence, and repairs — with footage.",
  serviceType: "Commercial sewer camera inspection",
  hero: {
    titleLines: ["Commercial sewer", "camera inspection"],
    subtitle:
      "Before you budget a repair, sign a lease, or accept a bid — see the line. HD camera inspections document exactly what's under your property, with footage and locations you keep.",
    card: { title: "On the record", note: "HD footage · located · documented" },
    image: serviceImages.cameraInspections,
  },
  overview: {
    eyebrow: "Decisions need evidence",
    title: "Line-condition facts for commercial properties.",
    paragraphs: [
      "Commercial sewer decisions carry commercial price tags — and too many of them get made on guesswork. A camera inspection replaces the guessing: an HD, self-leveling camera travels the line while a locator marks every finding at the surface with depth, and you get the recording.",
      "OX runs commercial camera inspections across Mesa and the East Valley for recurring-backup diagnosis, pre-purchase and pre-lease due diligence, tenant-dispute documentation, pre- and post-repair verification, and baseline records for maintenance planning.",
      "For property managers, the footage becomes the asset: an objective record of line condition that turns arguments into decisions.",
    ],
  },
  whyChooseUs: {
    title: "Why businesses scope with OX.",
    cards: [
      {
        title: "Documentation-grade output",
        desc: "Recorded footage, located findings with depth, and plain-English reporting — built for files, claims, and negotiations.",
      },
      {
        title: "Commercial line experience",
        desc: "Larger diameters, longer runs, grease and roots at commercial scale — our crews scope these lines daily.",
      },
      {
        title: "No manufactured problems",
        desc: "We diagnose on camera precisely so nobody has to take anyone's word — including ours. Healthy line? That's the report.",
      },
    ],
  },
  benefits: {
    title: "What an inspection is worth commercially.",
    intro: "An hour of camera work routinely reshapes five-figure decisions:",
    items: [
      "Repair bids grounded in evidence, not worst cases",
      "Due diligence before purchases and leases",
      "Objective documentation for tenant and vendor disputes",
      "Verification that paid-for repairs were completed",
      "Maintenance intervals set from actual condition",
      "A baseline record that appreciates over time",
    ],
  },
  problems: {
    title: "When commercial properties need a scope.",
    intro: "Any of these on your desk right now? Put a camera in the line first.",
    items: [
      {
        title: "Recurring backups",
        desc: "Find the grease, roots, or damage causing them — once, on video, with locations.",
      },
      {
        title: "Buying or leasing property",
        desc: "Sewer replacement costs can reshape a deal. Know the line before you sign.",
      },
      {
        title: "Evaluating a repair bid",
        desc: "Verify the diagnosis behind a big number before approving it — or get our second opinion on camera.",
      },
      {
        title: "Tenant damage disputes",
        desc: "Objective footage settles what caused the problem and when.",
      },
      {
        title: "After completed repairs",
        desc: "Post-repair verification confirms the work you paid for actually happened.",
      },
      {
        title: "Planning maintenance budgets",
        desc: "Baseline inspections turn 'replace someday' into a scheduled, budgeted line item.",
      },
    ],
  },
  process: {
    title: "How a commercial scope works.",
    steps: [
      {
        title: "Access & inspect",
        body: "Through cleanouts or access points, the HD camera runs the full line — scheduled around your business hours.",
      },
      {
        title: "Locate & record",
        body: "Every finding marked at the surface with depth and distance, the entire run recorded.",
      },
      {
        title: "Report & recommend",
        body: "Findings in plain English with honest recommendations — repair, clean, monitor, or relax — and the footage is yours.",
      },
    ],
  },
  whyMatters: {
    title: "Underground surprises are budget killers.",
    paragraphs: [
      "Sewer failures are among the most expensive surprises a commercial property can produce — excavation through parking or flooring, business interruption, and emergency pricing all arrive together.",
      "Inspection converts that risk into information. A line that's monitored fails on your schedule, at planned prices, with competitive bids — or doesn't fail at all, because the problem was caught as buildup instead of collapse.",
    ],
  },
  experience: {
    title: "The diagnostic habit that built our name.",
    paragraphs: [
      "Camera-first diagnosis is how OX approaches every stubborn line, residential and commercial — it's why our reviews talk about finding causes other companies missed.",
      "We scope commercial mains, kitchen laterals, and multi-building systems across the East Valley, and every scope ends the same way: with you knowing exactly what you own.",
    ],
    stats: [
      { value: "HD", label: "Self-leveling camera systems" },
      { value: "±1ft", label: "Surface locating accuracy" },
      { value: "200+", label: "Commercial jobs completed" },
      { value: "100%", label: "Footage provided to you" },
    ],
  },
  features: {
    title: "Inspection services we provide.",
    intro: "Every scope located, recorded, and explained.",
    items: [
      "Main & lateral line camera inspections",
      "Pre-purchase & pre-lease due diligence scopes",
      "Recurring-problem diagnosis",
      "Pre- & post-repair verification",
      "Surface locating with depth measurement",
      "Recorded footage & written findings",
      "Multi-property baseline programs",
      "Annual inspections for plan members",
    ],
  },
  faqs: [
    {
      q: "Should we scope the sewer before buying commercial property?",
      a: "Always. A commercial sewer replacement can run well into five figures with business interruption on top, and no standard building inspection looks inside the line. An hour-long scope is the cheapest due diligence in the transaction.",
    },
    {
      q: "Can inspections happen outside business hours?",
      a: "Yes — like all our commercial work, scopes are scheduled around your operation. Most take one to two hours and require nothing from your staff beyond access.",
    },
    {
      q: "What do we receive after the inspection?",
      a: "The full recording, findings located with depth and distance, and a plain-English written summary with recommendations — a package built to be forwarded to owners, insurers, or opposing bids.",
    },
    {
      q: "Our contractor quoted a big repair — can you verify it?",
      a: "That's one of the most valuable scopes we do. We'll put a camera in the line and show you what's actually there. Sometimes the bid is right; sometimes the 'collapsed line' is a grease blockage. Either way, you decide with evidence.",
    },
  ],
  related: [
    {
      label: "Commercial Sewer & Drains",
      desc: "Clearing and maintenance for whatever the camera finds.",
      href: "/services/commercial-sewer-drains",
    },
    {
      label: "Commercial Hydro Jetting",
      desc: "The deep clean, verified on camera before and after.",
      href: "/services/commercial-hydro-jetting",
    },
    {
      label: "Commercial Pipe Replacement & Repair",
      desc: "When the footage shows real damage, we fix it right.",
      href: "/services/commercial-pipe-replacement-repair",
    },
  ],
  cta: {
    title: "Make your next sewer decision with evidence.",
    copy: "HD inspections with located, recorded, plain-English results. Call now — we answer immediately.",
  },
};

export const commercialEmergency: ServicePageData = {
  slug: "commercial-emergency-service",
  category: "Commercial Plumbing",
  metaTitle: "Commercial Emergency Plumbing in Mesa, AZ | OX Plumbing",
  metaDescription:
    "24/7 commercial emergency plumbing in Mesa — burst pipes, sewer backups, flooding. Real-person dispatch and fast response that keeps your business open.",
  serviceType: "Commercial emergency plumbing",
  hero: {
    titleLines: ["Commercial emergencies,", "answered 24/7"],
    subtitle:
      "A burst pipe over inventory, sewage in the dining room, no water in a full building — commercial plumbing emergencies bleed money by the minute. Real-person dispatch, fully stocked trucks, and crews who understand what downtime costs.",
    card: { title: "60-minute", note: "Emergency dispatch · 24/7/365" },
    image: serviceImages.emergency,
  },
  overview: {
    eyebrow: "When minutes cost money",
    title: "Emergency response built for businesses.",
    paragraphs: [
      "A residential emergency ruins an evening. A commercial one closes a kitchen mid-service, floods a sales floor, or takes a whole building's restrooms offline while tenants watch. The difference isn't the plumbing — it's the meter running on your revenue while it's broken.",
      "OX Plumbing answers commercial emergency calls 24/7/365 with a real person, dispatches fast across Mesa and the East Valley, and arrives in trucks stocked to fix most failures on the first visit. We stop the damage first, stabilize your operation, and then complete the repair with a flat-rate price you approve.",
      "OX Shield Commercial members get the fastest lane of all: highest-priority dispatch and zero emergency fees, every time.",
    ],
  },
  whyChooseUs: {
    title: "Why businesses keep our number posted.",
    cards: [
      {
        title: "A person, not a queue",
        desc: "Your 2am call reaches an OX team member who starts dispatch while you're still describing the problem.",
      },
      {
        title: "Damage control first",
        desc: "We think like operators: stop the water, protect the stock, keep what can stay open, open — then repair.",
      },
      {
        title: "First-visit resolution",
        desc: "Stocked trucks and experienced crews fix 95% of emergencies on the spot — no 'we'll order the part' at 3am.",
      },
    ],
  },
  benefits: {
    title: "What fast commercial response saves.",
    intro: "In a commercial emergency, response time is the whole ballgame:",
    items: [
      "Water damage contained before it spreads to inventory",
      "Health-code exposure from sewage handled immediately",
      "Revenue protected — partial operations kept running",
      "Repairs done once, at quoted prices, even at 3am",
      "Documentation for insurance from the first minute",
      "Tenants and staff who see a managed response",
    ],
  },
  problems: {
    title: "Commercial emergencies we handle.",
    intro: "If it's flooding, backing up, leaking, or shut down — call. We're already awake.",
    items: [
      {
        title: "Burst pipes & major leaks",
        desc: "Located and isolated fast, repaired on the spot, damage documented as we go.",
      },
      {
        title: "Sewage backups",
        desc: "Cleared, jetted, and sanitized-ready — with the cause identified so it doesn't repeat next weekend.",
      },
      {
        title: "No water to the building",
        desc: "Supply failures traced and restored — valves, mains, or equipment — with tenants kept informed.",
      },
      {
        title: "Commercial water heater failure",
        desc: "No hot water stops kitchens and salons cold. Emergency repair or same-day replacement.",
      },
      {
        title: "Flooding & pump failures",
        desc: "Ejector and sump failures pumped down, repaired, and backed up before the next storm.",
      },
      {
        title: "Gas emergencies",
        desc: "Suspected leaks treated as the hazard they are — fast response, safe repairs, proper testing.",
      },
    ],
  },
  process: {
    title: "What happens when you call.",
    steps: [
      {
        title: "Real person, instant dispatch",
        body: "Describe the emergency; we dispatch immediately and walk your staff through shut-offs while the truck rolls.",
      },
      {
        title: "Stabilize on arrival",
        body: "Water stopped, hazard contained, operations triaged — the damage stops growing before the paperwork starts.",
      },
      {
        title: "Fix with a flat-rate quote",
        body: "Exact price before repair work begins, fixed on the spot in 95% of cases, documented for your insurer.",
      },
    ],
  },
  whyMatters: {
    title: "Downtime is the real invoice.",
    paragraphs: [
      "The plumbing repair is rarely the biggest number in a commercial emergency. It's the closed kitchen on a Friday, the soaked inventory, the tenants with no restrooms, the health inspector's follow-up visit. Every minute between failure and response feeds those numbers.",
      "That's why response time and first-visit resolution are the metrics we build for — and why the businesses that have used us once put the number where the whole staff can see it.",
    ],
  },
  experience: {
    title: "Tested at 2am, hundreds of times.",
    paragraphs: [
      "The midnight sewer backup cleared and jetted before 2am. The Sunday-night water heater replaced by morning. Our reviews tell the emergency stories because that's where plumbing companies prove themselves.",
      "OX has answered East Valley emergencies 24/7/365 for years — for homes and for the restaurants, offices, and buildings that keep our commercial routes busy.",
    ],
    stats: [
      { value: "<60", label: "Minute dispatch window" },
      { value: "95%", label: "Fixed on the first visit" },
      { value: "24/7", label: "Real-person availability" },
      { value: "$0", label: "Emergency fees for plan members" },
    ],
  },
  features: {
    title: "Emergency services we provide.",
    intro: "Every commercial failure mode, covered around the clock.",
    items: [
      "Burst pipe & major leak repair",
      "Sewage backup clearing & hydro jetting",
      "Water supply restoration",
      "Commercial water heater emergency service",
      "Ejector & sump pump emergency response",
      "Gas leak emergency response",
      "Flood containment & damage documentation",
      "Priority dispatch for OX Shield Commercial members",
    ],
  },
  faqs: [
    {
      q: "How fast can you reach our business?",
      a: "We dispatch within 60 minutes for most East Valley locations, 24/7/365 — and OX Shield Commercial members get the highest dispatch priority we offer. You'll talk to a real person immediately, never an answering service.",
    },
    {
      q: "What should our staff do while waiting?",
      a: "Shut off the water at the affected fixture or the building main if it's spreading, keep people away from sewage or suspected gas, and move what's movable. Our dispatcher walks whoever's on-site through it — that call alone often saves thousands.",
    },
    {
      q: "What does emergency service cost?",
      a: "You get an upfront flat-rate quote before repair work begins, even at 3am. The $99 service call fee is credited toward the repair when you proceed — and OX Shield Commercial members pay no emergency or dispatch fees at all.",
    },
    {
      q: "Can you help with the insurance side?",
      a: "Yes — we document cause, conditions, and repairs from the first minute, and that documentation is written to be handed to adjusters. Ask for it; it's part of the job.",
    },
  ],
  related: [
    {
      label: "Commercial Sewer & Drains",
      desc: "Scheduled maintenance that prevents most 2am calls.",
      href: "/services/commercial-sewer-drains",
    },
    {
      label: "Commercial Pump & Control Service",
      desc: "The pumps that cause floods when neglected — maintained.",
      href: "/services/commercial-pump-control-service",
    },
    {
      label: "Service Plans",
      desc: "OX Shield Commercial: priority dispatch, zero emergency fees.",
      href: "/plumbing-service-plans",
    },
  ],
  cta: {
    title: "Emergency right now?",
    copy: "Real-person dispatch within 60 minutes, 24/7/365. Call — we answer immediately.",
  },
};

export const commercialFixtures: ServicePageData = {
  slug: "commercial-fixture-installation-repair",
  category: "Commercial Plumbing",
  metaTitle: "Commercial Fixture Installation & Repair in Mesa | OX Plumbing",
  metaDescription:
    "Commercial-grade fixtures installed and repaired for Mesa businesses — restrooms, kitchens, ADA upgrades. Durable hardware, code-compliant, minimal downtime.",
  serviceType: "Commercial fixture installation and repair",
  hero: {
    titleLines: ["Commercial fixtures,", "installed & repaired"],
    subtitle:
      "Public restrooms, commercial kitchens, breakrooms, and ADA upgrades — we install and repair the fixtures your customers judge you by, with commercial-grade hardware built for the traffic.",
    card: { title: "Built for traffic", note: "Restrooms · kitchens · ADA" },
    image: jobImages.ptrap,
  },
  overview: {
    eyebrow: "Fixtures customers judge",
    title: "Commercial-grade fixture work for business spaces.",
    paragraphs: [
      "A restroom tells customers more about your business than your mission statement does. Running toilets, dripping faucets, and out-of-order signs quietly cost you reviews — while a leaking prep sink or failed flush valve can cost you a health inspection.",
      "OX Plumbing installs and repairs commercial fixtures across Mesa and the East Valley: flush valves and sensor faucets in public restrooms, three-compartment sinks and pre-rinse assemblies in kitchens, water stations in offices, and ADA-compliant upgrades wherever they're needed.",
      "We spec commercial-duty hardware — the kind rated for hundreds of uses a day — install it to code, and schedule the work so your restrooms and kitchens are never down when customers are in the building.",
    ],
  },
  whyChooseUs: {
    title: "Why businesses choose OX for fixtures.",
    cards: [
      {
        title: "Commercial-duty spec",
        desc: "We install hardware rated for commercial traffic — flush valves, sensor faucets, and fittings that survive the public.",
      },
      {
        title: "Code & ADA fluent",
        desc: "Mounting heights, clearances, backflow protection, and accessibility handled right the first time — inspection-ready.",
      },
      {
        title: "Off-hours installs",
        desc: "Restroom and kitchen work scheduled around your operating hours, so out-of-order signs never meet customers.",
      },
    ],
  },
  benefits: {
    title: "What professional fixture work delivers.",
    intro: "Done right, commercial fixtures disappear into the background — which is the point:",
    items: [
      "Restrooms that hold up to real traffic",
      "Water and sewer bills cut by ending drips and runs",
      "Health-inspection-ready kitchen fixtures",
      "ADA compliance verified, not assumed",
      "Warranties preserved by proper installation",
      "Fewer repair calls, longer replacement cycles",
    ],
  },
  problems: {
    title: "Commercial fixture problems we solve.",
    intro: "High traffic breaks things. We fix them faster than customers notice.",
    items: [
      {
        title: "Running flush valves",
        desc: "Commercial toilets and urinals that won't stop waste water by the hour — rebuilt or replaced same visit.",
      },
      {
        title: "Failed sensor faucets",
        desc: "Batteries, solenoids, and sensors serviced — or upgraded to models that actually last.",
      },
      {
        title: "Kitchen sink & faucet failures",
        desc: "Pre-rinse units, compartment sinks, and disposals repaired to keep the line moving.",
      },
      {
        title: "Leaking supply connections",
        desc: "Under-counter drips caught before they rot cabinetry or trigger inspections.",
      },
      {
        title: "ADA compliance gaps",
        desc: "Fixtures brought up to accessibility requirements with compliant hardware and clearances.",
      },
      {
        title: "Tenant improvement fixture packages",
        desc: "Full fixture installation for build-outs and remodels, coordinated with your GC.",
      },
    ],
  },
  process: {
    title: "How commercial fixture work runs.",
    steps: [
      {
        title: "Assess & spec",
        body: "We evaluate the failure or the plan, spec commercial-duty hardware, and quote flat-rate — repair versus replace, honestly.",
      },
      {
        title: "Install off-hours",
        body: "Work scheduled around your operation, protected work areas, and water back on before you open.",
      },
      {
        title: "Test & stand behind it",
        body: "Every fixture tested under pressure and traffic conditions, with workmanship we warranty in writing.",
      },
    ],
  },
  whyMatters: {
    title: "Fixtures are your most public plumbing.",
    paragraphs: [
      "Nobody reviews your water heater — but restrooms show up in Google reviews constantly. Fixtures are the only plumbing your customers personally operate, and they form impressions with every push, wave, and flush.",
      "There's a hard-cost side too: one running flush valve can waste more water in a month than the repair costs, and fixture leaks are a leading trigger for failed health inspections. Commercial-grade fixture care pays for itself in both currencies.",
    ],
  },
  experience: {
    title: "From break rooms to full build-outs.",
    paragraphs: [
      "OX crews handle fixture work across the East Valley's restaurants, offices, salons, and retail spaces — single-fixture repairs to complete tenant-improvement packages.",
      "It's the same clean, tested, code-right workmanship our residential customers review — delivered on commercial schedules with commercial hardware.",
    ],
    stats: [
      { value: "200+", label: "Commercial jobs completed" },
      { value: "ADA", label: "Compliant installation" },
      { value: "24/7", label: "Emergency fixture response" },
      { value: "100%", label: "Upfront flat-rate pricing" },
    ],
  },
  features: {
    title: "Commercial fixture services we provide.",
    intro: "Every fixture in the building, from the lobby restroom to the dish pit.",
    items: [
      "Flush valve & commercial toilet service",
      "Sensor & manual faucet installation",
      "Commercial kitchen sink & pre-rinse installation",
      "Urinal repair & replacement",
      "Drinking fountain & bottle-filler service",
      "ADA fixture upgrades",
      "Water heater connections for fixtures",
      "Tenant improvement fixture packages",
    ],
  },
  faqs: [
    {
      q: "Can fixture work happen without closing our restrooms during business hours?",
      a: "Yes — that's our default. We schedule installs and non-emergency repairs for closed hours or low-traffic windows, and stage the work so restrooms come back online fixture by fixture rather than all-or-nothing.",
    },
    {
      q: "Why do our commercial faucets and flush valves fail so often?",
      a: "Usually because residential-grade hardware was installed in a commercial setting. Consumer fixtures aren't rated for hundreds of daily cycles. We spec commercial-duty equipment, and the repair-call frequency drops accordingly.",
    },
    {
      q: "Do you handle ADA compliance upgrades?",
      a: "Yes — mounting heights, clearances, operable-parts requirements, and compliant hardware. We'll assess your restrooms against current accessibility requirements and quote exactly what's needed, nothing more.",
    },
    {
      q: "Can you supply the fixtures, or should we?",
      a: "Either works. We supply commercial-grade fixtures at fair prices with warranty support, or install owner-supplied hardware — and we'll flag quality or compliance issues before anything goes in the wall.",
    },
  ],
  related: [
    {
      label: "Commercial Leak Detection & Repair",
      desc: "Hidden leaks behind walls found before they close you down.",
      href: "/services/commercial-leak-detection-repair",
    },
    {
      label: "Commercial Sewer & Drains",
      desc: "The drains under your fixtures, cleared and maintained.",
      href: "/services/commercial-sewer-drains",
    },
    {
      label: "Backflow Testing & Installation",
      desc: "Compliance testing for your building's water protection.",
      href: "/services/backflow-testing-installation",
    },
  ],
  cta: {
    title: "Fixtures letting your business down?",
    copy: "Commercial-grade installation and repair, scheduled around your hours. Call now — we answer immediately.",
  },
};

export const commercialLeakDetection: ServicePageData = {
  slug: "commercial-leak-detection-repair",
  category: "Commercial Plumbing",
  metaTitle: "Commercial Leak Detection & Repair in Mesa | OX Plumbing",
  metaDescription:
    "Hidden leaks in commercial buildings found electronically and repaired fast in Mesa. Protect inventory, tenants, and water bills — with documented results.",
  serviceType: "Commercial leak detection and repair",
  hero: {
    titleLines: ["Commercial leaks found", "before they find you"],
    subtitle:
      "In a commercial building, a hidden leak taxes every water bill and threatens inventory, tenants, and finishes. We locate leaks electronically — through slabs, walls, and ceilings — and repair them with your operation still running.",
    card: { title: "Pinpointed", note: "Electronic · acoustic · documented" },
    image: serviceImages.leakDetection,
  },
  overview: {
    eyebrow: "Find it before the damage does",
    title: "Precision leak detection for commercial properties.",
    paragraphs: [
      "Commercial buildings hide leaks well. Long pipe runs above ceilings and under slabs, high baseline water usage that masks losses, and nobody watching the meter — by the time a stain appears in a tenant's ceiling, the leak has usually been running for months on your dime.",
      "OX Plumbing locates commercial leaks with acoustic detection, pressure isolation, and electronic line tracing — pinpointing the failure through concrete and finishes before anything is opened. Repairs are planned around your operating hours and executed through the smallest practical access.",
      "The result: water loss stopped, damage contained, tenants undisturbed, and documentation your insurer and your owner both understand.",
    ],
  },
  whyChooseUs: {
    title: "Why properties call OX for leak work.",
    cards: [
      {
        title: "Locate before opening",
        desc: "Electronic detection marks the leak first, so ceilings and slabs are opened at the spot — not searched.",
      },
      {
        title: "Business-aware repairs",
        desc: "Isolation valving and off-hours scheduling keep as much of your building running as possible during the fix.",
      },
      {
        title: "Paper trail included",
        desc: "Cause, location, and repair documented from the first test — ready for insurers, owners, and files.",
      },
    ],
  },
  benefits: {
    title: "What early detection saves a building.",
    intro: "Commercial leaks compound daily. Precision detection means:",
    items: [
      "Water bills back to baseline immediately",
      "Inventory, equipment, and finishes protected",
      "Tenant spaces entered once, at the right spot",
      "Mold prevention instead of mold remediation",
      "Insurance claims supported by documentation",
      "Repairs scheduled, not suffered",
    ],
  },
  problems: {
    title: "Commercial leak scenarios we solve.",
    intro: "The signs look small until the invoice arrives. Call at the first one.",
    items: [
      {
        title: "Water bills climbing",
        desc: "Usage trending up with no operational change is a leak until proven otherwise — we prove it fast.",
      },
      {
        title: "Ceiling stains & drips",
        desc: "Overhead runs traced and repaired at the failure point, not the stain point.",
      },
      {
        title: "Slab & under-floor leaks",
        desc: "Pinpointed through concrete to inches — repair, reroute, or replacement quoted honestly.",
      },
      {
        title: "Irrigation & yard line losses",
        desc: "Underground service and landscape lines located and repaired without trenching the property.",
      },
      {
        title: "Meter running after hours",
        desc: "Overnight usage in a closed building means water is going somewhere. We find where.",
      },
      {
        title: "Musty odors & mold flags",
        desc: "Moisture sources found behind the complaint before remediation costs multiply.",
      },
    ],
  },
  process: {
    title: "How we find and fix commercial leaks.",
    steps: [
      {
        title: "Isolate the loss",
        body: "Meter tests and pressure isolation confirm the leak and narrow it to a system — domestic, irrigation, or process.",
      },
      {
        title: "Pinpoint electronically",
        body: "Acoustic and electronic locating marks the failure through slab, wall, or ceiling before any opening is made.",
      },
      {
        title: "Repair around your hours",
        body: "Targeted access, lasting repair, flat-rate pricing approved first — with your operation running throughout.",
      },
    ],
  },
  whyMatters: {
    title: "A commercial leak bills you three times.",
    paragraphs: [
      "First on the water bill, every month it runs. Then in damage — to finishes, inventory, and equipment that were never meant to be wet. And finally in liability, because in commercial space the water is rarely only over your own property.",
      "Detection technology exists precisely to interrupt that sequence at stage one. The buildings that use it treat unexplained usage like the alarm it is.",
    ],
  },
  experience: {
    title: "Detection-first, at commercial scale.",
    paragraphs: [
      "The same electronic leak detection that's located hundreds of residential leaks runs daily on our commercial calls — offices, restaurants, retail centers, and multi-unit buildings across the East Valley.",
      "Longer runs and higher stakes only raise the value of precision: one marked spot in a tenant's ceiling beats an afternoon of exploratory holes, every time.",
    ],
    stats: [
      { value: "100s", label: "Of leaks located & repaired" },
      { value: "<60", label: "Minute emergency response" },
      { value: "24/7", label: "Active-leak availability" },
      { value: "100%", label: "Documented findings" },
    ],
  },
  features: {
    title: "Commercial leak services we provide.",
    intro: "Confirmation through repair, with the building running.",
    items: [
      "Electronic & acoustic leak detection",
      "Meter testing & system isolation",
      "Under-slab & in-wall leak repair",
      "Overhead & ceiling line repair",
      "Underground service line locating & repair",
      "Irrigation system leak detection",
      "Emergency leak response, 24/7",
      "Insurance-grade documentation",
    ],
  },
  faqs: [
    {
      q: "Our water bill jumped — how do we confirm a leak?",
      a: "Check the meter when the building is closed and usage should be zero; movement means a leak. We formalize that with meter tests and pressure isolation that tell us not just that you have a leak, but which system it's on — usually within the first hour on site.",
    },
    {
      q: "Can you find leaks without opening tenant spaces?",
      a: "We locate before we open anything. Acoustic and electronic detection works through slabs, walls, and ceilings, so when we do need access, it's one precise opening at the marked point — scheduled with the tenant, not sprung on them.",
    },
    {
      q: "Will the building lose water during repairs?",
      a: "Usually only partially. We isolate the affected section wherever valving allows, keep the rest of the building live, and schedule full shutdowns — when unavoidable — for your lowest-impact hours.",
    },
    {
      q: "Do you provide documentation for insurance?",
      a: "Yes — location, cause, moisture extent, and repair details, recorded from the first test. Commercial water claims move on evidence, and we build the file as we work.",
    },
  ],
  related: [
    {
      label: "Commercial Pipe Replacement & Repair",
      desc: "When one leak reveals a failing system, we replace it right.",
      href: "/services/commercial-pipe-replacement-repair",
    },
    {
      label: "Commercial Emergency Service",
      desc: "Active flooding? Priority dispatch, 24/7.",
      href: "/services/commercial-emergency-service",
    },
    {
      label: "Backflow Testing & Installation",
      desc: "Assemblies that leak or discharge, repaired and certified.",
      href: "/services/backflow-testing-installation",
    },
  ],
  cta: {
    title: "Water going somewhere it shouldn't?",
    copy: "Located electronically, repaired around your operation, documented throughout. Call now — we answer immediately.",
  },
};

export const commercialPipeReplacement: ServicePageData = {
  slug: "commercial-pipe-replacement-repair",
  category: "Commercial Plumbing",
  metaTitle: "Commercial Pipe Replacement & Repair in Mesa | OX Plumbing",
  metaDescription:
    "Commercial pipe repair and replacement in Mesa — supply, drain, and sewer lines renewed with phased, off-hours work that keeps your business operating.",
  serviceType: "Commercial pipe replacement and repair",
  hero: {
    titleLines: ["Commercial pipe", "replacement & repair"],
    subtitle:
      "Aging galvanized supply, corroded copper, failing drain stacks — we repair and replace commercial piping with phased, off-hours work planned so your business never has to close to get fixed.",
    card: { title: "Phased work", note: "Minimal downtime · to code" },
    image: serviceImages.repipe,
  },
  overview: {
    eyebrow: "Infrastructure renewal",
    title: "Piping renewed without closing the doors.",
    paragraphs: [
      "Commercial buildings outlive their pipes. Galvanized supply lines rust shut, copper pits under decades of hard water, cast-iron stacks scale and crack — and the failures arrive as leaks, pressure complaints, and repair invoices that come closer together every year.",
      "OX Plumbing repairs and replaces commercial piping across Mesa and the East Valley — from targeted section repairs to full building repipes. The difference in our approach is planning: work phased by riser or zone, water restored between phases, night and weekend scheduling, and coordination with tenants so nobody's business becomes collateral.",
      "Every project is quoted fixed, built to code, pressure-tested, and documented — infrastructure work done like infrastructure work.",
    ],
  },
  whyChooseUs: {
    title: "Why properties choose OX for pipe work.",
    cards: [
      {
        title: "Phased, live-building plans",
        desc: "Zone-by-zone scheduling keeps water on and tenants open — the building operates while it's renewed.",
      },
      {
        title: "Blueprint-driven crews",
        desc: "Organized staging, mapped access, clear daily communication — big-project discipline is our signature.",
      },
      {
        title: "Fixed pricing, no drift",
        desc: "Scoped honestly and quoted fixed. Surprises behind the wall are our risk to manage, not your change order.",
      },
    ],
  },
  benefits: {
    title: "What renewed piping returns.",
    intro: "One planned project replaces an accelerating stream of failures:",
    items: [
      "An end to the leak-repair-leak cycle",
      "Full pressure and flow restored building-wide",
      "Clean water without rust or metallic taste",
      "Insurance posture improved by removing known-risk pipe",
      "Modern isolation valves for painless future service",
      "Decades of documented, warrantied service life",
    ],
  },
  problems: {
    title: "Piping problems we repair and replace.",
    intro: "One failure is a repair. A pattern is a planning conversation — and we're honest about which is which.",
    items: [
      {
        title: "Recurring pinhole leaks",
        desc: "Pitted copper fails serially. We show you the pipe's condition and price the honest options.",
      },
      {
        title: "Galvanized supply lines",
        desc: "Rust-narrowed pipe strangles pressure and sheds into the water — replacement is overdue.",
      },
      {
        title: "Failing drain stacks",
        desc: "Scaled, cracked cast iron repaired in section or replaced in phases, floor by floor.",
      },
      {
        title: "Pressure complaints",
        desc: "Building-wide low flow traced to the corroded runs causing it — then fixed at the cause.",
      },
      {
        title: "Underground line failures",
        desc: "Supply and sewer laterals located precisely and repaired or replaced with minimal excavation.",
      },
      {
        title: "Tenant improvement piping",
        desc: "Build-out and remodel piping installed to spec, coordinated with your contractor.",
      },
    ],
  },
  process: {
    title: "How commercial pipe projects run.",
    steps: [
      {
        title: "Assess & scope",
        body: "Camera inspection, pipe condition assessment, and a phased plan matched to how your building actually operates.",
      },
      {
        title: "Execute in phases",
        body: "Zone-by-zone replacement on nights and weekends where needed — water restored between phases, tenants informed throughout.",
      },
      {
        title: "Test, close & document",
        body: "Every line pressure-tested, inspections coordinated, and as-built documentation delivered for the building's file.",
      },
    ],
  },
  whyMatters: {
    title: "Failing pipe compounds like debt.",
    paragraphs: [
      "Each emergency repair on end-of-life piping costs more than its share: after-hours rates, damage restoration, tenant disruption, and a patch on pipe that will fail again a few feet away. The spend is real — it just buys no future.",
      "Planned replacement converts that spend into an asset: fixed cost, scheduled disruption, and a building that stops generating plumbing emergencies. On failing systems, the planned project is almost always the cheaper one measured over five years.",
    ],
  },
  experience: {
    title: "Built for big projects.",
    paragraphs: [
      "Blueprint-driven planning, organized staging, and respectful crews — the qualities our reviews name — are exactly what commercial pipe projects demand, and exactly how OX runs them.",
      "From section repairs to phased building repipes across the East Valley's 200+ commercial jobs, we deliver infrastructure work with the communication owners and tenants actually notice.",
    ],
    stats: [
      { value: "200+", label: "Commercial jobs completed" },
      { value: "100%", label: "Lines pressure-tested" },
      { value: "0", label: "Surprise change orders" },
      { value: "ROC", label: "#347174 licensed & insured" },
    ],
  },
  features: {
    title: "Pipe services we provide.",
    intro: "Supply, drain, and sewer — repaired in section or replaced in full.",
    items: [
      "Targeted pipe section repairs",
      "Phased building repipes — PEX & copper",
      "Galvanized supply line replacement",
      "Drain & sewer stack replacement",
      "Underground lateral repair & replacement",
      "Isolation valve installation",
      "Pressure testing & inspection coordination",
      "As-built documentation & warranties",
    ],
  },
  faqs: [
    {
      q: "Can you replace our building's pipes without shutting us down?",
      a: "That's the core of how we plan these projects. Work proceeds by zone or riser with water restored between phases, disruptive stages run nights and weekends, and tenants get schedules in advance. Most buildings never close a business day.",
    },
    {
      q: "How do we know if we need repairs or full replacement?",
      a: "Evidence first: camera inspection for drains, pressure and condition assessment for supply. If sections are healthy, we say so and repair; if the system is failing serially, we show you the footage and the failure history and price the honest options side by side.",
    },
    {
      q: "How long does a commercial repipe take?",
      a: "It depends on building size and phasing constraints — small buildings take days, multi-story phased projects take weeks of mostly off-hours work. The schedule is fixed in the proposal, and keeping tenants informed along the way is part of the job.",
    },
    {
      q: "Is the price really fixed?",
      a: "Yes. We scope thoroughly up front — camera work included — and quote fixed. Conditions behind walls are our professional risk to assess correctly, not a lever for change orders.",
    },
  ],
  related: [
    {
      label: "Commercial Sewer Camera Inspection",
      desc: "The evidence that separates repair jobs from replacements.",
      href: "/services/commercial-sewer-camera-inspection",
    },
    {
      label: "Commercial Leak Detection & Repair",
      desc: "Today's leak found and fixed while the plan comes together.",
      href: "/services/commercial-leak-detection-repair",
    },
    {
      label: "Repipes",
      desc: "Whole-home repiping with the same discipline, residential scale.",
      href: "/services/repipes",
    },
  ],
  cta: {
    title: "Pipes at the end of their run?",
    copy: "Phased, fixed-price replacement that keeps your building open. Call now — we answer immediately.",
  },
};

export const commercialPages: ServicePageData[] = [
  backflowTesting,
  commercialSewerDrains,
  commercialHydroJetting,
  commercialPumpControl,
  commercialSewerCamera,
  commercialEmergency,
  commercialFixtures,
  commercialLeakDetection,
  commercialPipeReplacement,
];
