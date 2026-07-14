import { jobImages, serviceImages, type SiteImage } from "./images";

/** All copy on this page is verbatim from index.html. */

export const trustItems = [
  "24/7 Emergency Service",
  "Licensed & Insured — ROC #347174",
  "Same-Day Service",
  "Upfront Flat-Rate Pricing",
  "Wisetack Financing Available",
];

export type IntroCard = { title: string; body: string };

export const introCards: IntroCard[] = [
  {
    title: "Full-service plumbing you can count on",
    body: "From emergency plumbing and drain cleaning to leak repairs and water heater service, our licensed plumbers respond quickly and get the job done right — on time, first visit.",
  },
  {
    title: "Quality work. No surprises.",
    body: "Dependable service, clean workmanship, and respect for your home. Proven repair methods, modern tools, your property protected, and your space left clean.",
  },
  {
    title: "Honest, upfront pricing",
    body: "Flat-rate pricing before any work begins — no surprise charges, no free-quote bait-and-switch. Wisetack financing available with soft-credit pre-qualification.",
  },
];

export type Stat = { value: string; label: string };

export const introStats: Stat[] = [
  { value: "1,500+", label: "Homes served across Mesa & East Valley" },
  { value: "200+", label: "Commercial jobs — restaurants, offices, retail" },
  { value: "25+", label: "Years experience — licensed & insured" },
];

export type OwnerPoint = { title: string; body: string; divider: boolean };

export const ownerLeft: OwnerPoint[] = [
  {
    title: "A Decade of Quality Work",
    body: "OX Plumbing is a trusted name in Mesa, Arizona, built on 10 years of consistent, high-quality work. Our reputation comes from doing things the right way every time — honest communication, clean workmanship, and results that last.",
    divider: true,
  },
  {
    title: "Owner-Operated Service",
    body: "As an owner-operated company, every customer receives direct attention and a solutions-first approach. Our team brings extensive knowledge and hands-on experience to every job with the same care, urgency, and professionalism.",
    divider: true,
  },
  {
    title: "Built for Homeowners Who Want It Done Once",
    body: "A lot of plumbing problems keep coming back because the real cause never gets addressed. We take the time to identify what’s actually failing, explain the options clearly, and make repairs that are built to hold up, so you’re not calling again a week later for the same issue.",
    divider: false,
  },
];

export const ownerRight: OwnerPoint[] = [
  {
    title: "Photo Reviews & Non-Urgent Help",
    body: "Send photos, explain the job, or request service for a later date. We review requests quickly and follow up within 24 hours so you can get clear next steps without playing phone tag.",
    divider: true,
  },
  {
    title: "Quality & Transparency",
    body: "We believe quality plumbing should be affordable. Our work is backed by high-grade parts and eco-friendly practices. Upfront pricing so you know exactly what to expect before any work begins.",
    divider: true,
  },
  {
    title: "Helpful for Emergency Calls and Second Opinions",
    body: "This works well when something looks serious, you want us to review photos for a larger job, or you’d rather request a later appointment online before we reach back out.",
    divider: false,
  },
];

export const workmanshipList = [
  "Leak detection & repair",
  "Water heaters & tankless service",
  "Sewer & drain cleaning",
  "Fixture installs & upgrades",
];

export const prideList = [
  "Clean planning & professional workflow",
  "Blueprint-driven, organized staging",
  "Respectful crews who protect your home",
];

export const stats: Stat[] = [
  { value: "350+", label: "Verified five-star Google reviews" },
  { value: "25+", label: "Years of combined plumbing experience" },
  { value: "<60", label: "Minute emergency response window" },
  { value: "20", label: "East Valley cities served" },
];

export type ProcessStep = { n: string; title: string; body: string };

export const processSteps: ProcessStep[] = [
  {
    n: "1",
    title: "Call — we answer immediately",
    body: "Talk to a real OX team member, describe the issue, and get a same-day appointment. Emergencies dispatched within 60 minutes.",
  },
  {
    n: "2",
    title: "Diagnose with upfront pricing",
    body: "We find the real cause, explain your options clearly, and give you a flat-rate price before any work begins. No surprises.",
  },
  {
    n: "3",
    title: "Fixed on the first visit",
    body: "Our trucks arrive fully stocked and ready to repair or install on the spot — then we leave your space clean when we’re done.",
  },
];

export type WorkItem = { title: string; cat: string; image: SiteImage };

export const workItems: WorkItem[] = [
  {
    title: "Water softener loop with copper piping",
    cat: "Water Treatment",
    image: serviceImages.waterTreatment,
  },
  {
    title: "Water heater copper piping upgrade",
    cat: "Water Heaters",
    image: serviceImages.waterHeaters,
  },
  {
    title: "Rooftop gas line connection repair",
    cat: "Emergency Plumbing",
    image: serviceImages.emergency,
  },
  {
    title: "Underground sewer line replacement",
    cat: "Sewer Line",
    image: serviceImages.sewerLine,
  },
  {
    title: "Underslab drain transition connection",
    cat: "Slab Leak Repair",
    image: serviceImages.slabLeak,
  },
  {
    title: "Under-sink P-trap replacement",
    cat: "Drain Cleaning",
    image: jobImages.ptrap,
  },
];

export type FormPoint = { title: string; body: string };

export const formPoints: FormPoint[] = [
  {
    title: "Photo reviews & second opinions",
    body: "Send photos when something looks serious or you want us to review a larger job before we reach back out.",
  },
  {
    title: "Quality & transparency",
    body: "High-grade parts, eco-friendly practices, and upfront pricing so you know exactly what to expect before work begins.",
  },
  {
    title: "Schedule on your terms",
    body: "Request a later appointment online and get clear next steps within 24 hours — without playing phone tag.",
  },
];
