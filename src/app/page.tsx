import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AreaChips } from "@/components/AreaChips";
import { ContactForm } from "@/components/ContactForm";
import { CtaBanner } from "@/components/CtaBanner";
import { FaqAccordion } from "@/components/FaqAccordion";
import {
  CheckIcon,
  CircleCheckIcon,
  ClockIcon,
  PhoneIcon,
  PlayIcon,
  StarOutlineIcon,
  WarningOutlineIcon,
  WrenchIcon,
} from "@/components/icons";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { ReviewCard, ReviewsScoreLine } from "@/components/ReviewCard";
import { SectionHeading } from "@/components/SectionHeading";
import { StatBand } from "@/components/StatBand";
import { TrustBar } from "@/components/TrustBar";
import { homeAreas } from "@/data/areas";
import { company } from "@/data/company";
import { homeFaqs } from "@/data/faqs";
import {
  formPoints,
  introCards,
  introStats,
  ownerLeft,
  ownerRight,
  prideList,
  processSteps,
  stats,
  trustItems,
  workItems,
  workmanshipList,
  type OwnerPoint,
} from "@/data/home";
import { erikFamily, erikFamilySize, heroTruck, whyVideos } from "@/data/images";
import { planTeasers } from "@/data/plans";
import { homeReviews, reviewBadges } from "@/data/reviews";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";
import { faqSchema, plumberSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata(
  "24/7 Local Plumber in Mesa, AZ | OX Plumbing",
  "Same-day plumbing and fast 24/7 response across Mesa and the East Valley. Family-owned, licensed & insured (ROC #347174) with upfront flat-rate pricing.",
  "/",
);

function OwnerColumn({ points }: { points: OwnerPoint[] }) {
  return (
    <div className="grid gap-2 content-center">
      {points.map((w) => (
        <div key={w.title} className="text-center px-1 py-2">
          <h3 className="font-display font-bold text-[18.5px] m-0 mb-2">{w.title}</h3>
          <div className="text-[14.5px] leading-[1.65] text-muted" style={{ textWrap: "pretty" }}>
            {w.body}
          </div>
          {w.divider && (
            <div aria-hidden="true" className="flex items-center justify-center gap-3 mt-[22px]">
              <span className="w-11 h-px bg-hairline" />
              <span className="w-[7px] h-[7px] rounded-full bg-accent" />
              <span className="w-11 h-px bg-hairline" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

type WhyCard = {
  icon: React.ReactNode;
  title: React.ReactNode;
  children: React.ReactNode;
};

function WhyChooseCard({ icon, title, children }: WhyCard) {
  return (
    <div className="bg-card border border-line border-t-[3px] border-t-accent rounded-[20px] px-[30px] py-8 flex flex-col">
      <div className="flex items-start gap-4 mb-4">
        <div className="shrink-0 w-[46px] h-[46px] rounded-[13px] bg-accent/12 flex items-center justify-center text-accent-deep">
          {icon}
        </div>
        <h3 className="font-display font-bold text-[21px] tracking-[-0.01em] leading-[1.25] m-0">
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
}

function VideoTile({ image }: { image: { src: string; alt: string } }) {
  return (
    <div className="relative rounded-[20px] overflow-hidden border border-line min-h-[340px]">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 940px) 100vw, 508px"
        className="object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[68px] h-[68px] rounded-full bg-[rgba(11,13,16,0.72)] backdrop-blur-[4px] flex items-center justify-center shadow-[0_12px_32px_rgba(0,0,0,0.35)]">
          <PlayIcon className="ml-1" />
        </div>
      </div>
    </div>
  );
}

const bulletCls = "flex gap-2.5 items-center text-[14.5px] text-body-strong";
const bulletDot = <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />;

export default function HomePage() {
  return (
    <PageShell showWisetack>
      <JsonLd data={[plumberSchema(), faqSchema(homeFaqs)]} />

      {/* ============ HERO ============ */}
      <section className="bg-ink text-dark-heading relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(245,137,31,0.14) 0%, rgba(245,137,31,0) 65%)",
          }}
        />
        <div className="max-w-[1240px] mx-auto px-6 pt-[clamp(56px,8vw,110px)] pb-[clamp(56px,7vw,96px)] grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(32px,5vw,72px)] items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-accent/35 bg-accent/8 text-accent-soft text-[13px] font-semibold tracking-[0.04em] px-3.5 py-[7px] rounded-full mb-6">
              <span className="w-[7px] h-[7px] rounded-full bg-success inline-block" />
              Open now — we answer immediately
            </div>
            <h1 className="font-display font-extrabold text-[clamp(38px,5.4vw,64px)] leading-[1.04] tracking-[-0.025em] m-0 mb-5">
              24/7 Local Plumber
              <br />
              in Mesa, Arizona<span className="text-accent">.</span>
            </h1>
            <p
              className="text-[clamp(16px,1.6vw,19px)] leading-[1.6] text-dark-body m-0 mb-8 max-w-[52ch]"
              style={{ textWrap: "pretty" }}
            >
              Same-day service and fast response across the East Valley. Family-owned, licensed
              &amp; insured (ROC #347174) — upfront flat-rate pricing, no surprises.
            </p>
            <div className="flex flex-wrap gap-3.5 items-center mb-9">
              <a
                href={company.phoneHref}
                className="flex items-center gap-2.5 bg-accent text-accent-ink no-underline font-display font-bold text-lg px-7 py-[17px] rounded-xl transition-all duration-150 hover:bg-accent-hover hover:-translate-y-0.5"
              >
                <PhoneIcon size={19} />
                Call (602) 905-3722
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-2 text-dark-heading no-underline font-semibold text-base px-6 py-4 border border-white/18 rounded-xl hover:border-accent hover:text-accent"
              >
                Request Service Online
              </Link>
            </div>
            <div className="inline-flex items-center gap-3 border border-dashed border-accent/50 bg-accent/6 rounded-[14px] px-[18px] py-[13px] mb-[26px]">
              <div className="shrink-0 font-display font-black text-xl text-accent">$60</div>
              <div className="text-sm leading-[1.45] text-dark-body">
                <strong className="text-dark-heading">Get service today or $60 off.</strong> We&apos;ll
                diagnose and start fixing the issue right away.
              </div>
            </div>
            <div className="flex items-center gap-3.5 flex-wrap">
              <div className="flex gap-0.5">
                <span aria-hidden="true" className="text-star text-[17px]">
                  ★★★★★
                </span>
              </div>
              <span className="text-[14.5px] text-dark-body">
                <strong className="text-dark-heading">350+</strong> verified five-star Google
                reviews
              </span>
            </div>
          </div>
          <div className="relative min-w-0">
            <div className="rounded-[20px] overflow-hidden border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.5)] w-full aspect-[4/3.4] relative">
              <Image
                src={heroTruck.src}
                alt={heroTruck.alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 584px"
                className="object-cover"
              />
            </div>
            <div className="absolute left-[-14px] bottom-6 bg-surface-dark border border-white/12 rounded-[14px] px-[18px] py-3.5 flex items-center gap-3 shadow-[0_16px_40px_rgba(0,0,0,0.45)]">
              <div className="w-10 h-10 rounded-[10px] bg-accent/15 flex items-center justify-center text-accent">
                <ClockIcon />
              </div>
              <div>
                <div className="font-display font-extrabold text-[17px] text-dark-heading">
                  60-minute response
                </div>
                <div className="text-[13px] text-dim">Emergency dispatch, day or night</div>
              </div>
            </div>
          </div>
        </div>
        <TrustBar items={trustItems} />
      </section>

      {/* ============ LOCAL INTRO ============ */}
      <section className="bg-card border-b border-line px-6 py-[clamp(64px,8vw,100px)]">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[720px] mb-12">
            <SectionHeading
              eyebrow="Local plumber · Mesa, AZ"
              title="Affordable plumbers in Mesa, Arizona."
            />
            <p
              className="text-[16.5px] leading-[1.65] text-muted mt-[18px] mb-0"
              style={{ textWrap: "pretty" }}
            >
              Looking for a reliable plumber near you? OX Plumbing provides fast, affordable
              plumbing with same-day service and honest, upfront pricing — proudly serving Mesa and
              surrounding East Valley communities including Chandler, Gilbert, Tempe, Queen Creek,
              and Apache Junction.
            </p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
            {introCards.map((c) => (
              <div key={c.title} className="bg-paper border border-line rounded-[18px] px-[26px] py-7">
                <div className="w-[42px] h-[42px] rounded-xl bg-accent/12 flex items-center justify-center mb-4 text-accent-deep">
                  <CheckIcon size={18} strokeWidth={2.2} />
                </div>
                <h3 className="font-display font-bold text-lg m-0 mb-2">{c.title}</h3>
                <div className="text-[14.5px] leading-[1.6] text-muted" style={{ textWrap: "pretty" }}>
                  {c.body}
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5 mt-11 pt-10 border-t border-line">
            {introStats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display font-black text-[clamp(34px,3.8vw,48px)] tracking-[-0.02em] text-accent-deep leading-none">
                  {s.value}
                </div>
                <div className="text-[14.5px] text-muted mt-2.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section id="services" className="px-6 py-[clamp(64px,8vw,110px)]">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-5 mb-11">
            <SectionHeading
              eyebrow="What we do"
              title="Full-service plumbing you can count on."
              titleMaxWidth="18ch"
            />
            <Link
              href="/contact"
              className="text-accent-deep no-underline font-bold text-[15px] flex items-center gap-1.5 pb-1 transition-[gap] duration-200 hover:gap-2.5"
            >
              View all services <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-5">
            {services.map((svc) => (
              <Link
                key={svc.label}
                href={svc.href}
                className="block no-underline text-inherit bg-card border border-line rounded-[18px] overflow-hidden transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(20,15,5,0.1)] hover:border-accent group"
              >
                <div className="overflow-hidden w-full aspect-[16/10] relative">
                  <Image
                    src={svc.image.src}
                    alt={svc.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 290px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                </div>
                <div className="px-[22px] pt-5 pb-[22px]">
                  <h3 className="font-display font-bold text-lg m-0 mb-1.5">{svc.label}</h3>
                  <div className="text-sm leading-[1.55] text-muted">{svc.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY / OWNER ============ */}
      <section className="bg-card border-y border-line px-6 pt-[clamp(64px,8vw,110px)] pb-[clamp(24px,3vw,40px)]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-[clamp(36px,5vw,56px)]">
            <div className="text-[13px] font-bold tracking-[0.14em] uppercase text-accent-deep mb-3.5">
              Meet the owner
            </div>
            <h2 className="font-display font-extrabold text-[clamp(30px,4.2vw,52px)] tracking-[-0.02em] leading-[1.06] m-0 mx-auto max-w-[24ch]">
              Local, owner-operated{" "}
              <span className="text-accent">plumbing company in Mesa.</span>
            </h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-[clamp(28px,4vw,48px)] items-center">
            <OwnerColumn points={ownerLeft} />
            <div className="flex items-end justify-center min-h-[340px]">
              <Image
                src={erikFamily.src}
                alt={erikFamily.alt}
                width={erikFamilySize.width}
                height={erikFamilySize.height}
                sizes="(max-width: 768px) 100vw, 400px"
                className="block w-full max-w-[400px] h-auto"
              />
            </div>
            <OwnerColumn points={ownerRight} />
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE OX ============ */}
      <section className="px-6 py-[clamp(64px,8vw,110px)]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-[52px]">
            <SectionHeading
              center
              eyebrow="Why choose OX"
              title={
                <>
                  Why Mesa homeowners choose <span className="text-accent">OX Plumbing.</span>
                </>
              }
              titleSize="clamp(30px, 4vw, 50px)"
              titleMaxWidth="22ch"
            />
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(440px,100%),1fr))] max-w-[1040px] mx-auto gap-6 items-stretch">
            {/* Row 1: Expert workmanship card + video */}
            <WhyChooseCard
              icon={<WrenchIcon />}
              title={
                <>
                  Expert Workmanship &amp;{" "}
                  <span className="text-accent-strong">Long-Term Repairs</span>
                </>
              }
            >
              <p
                className="text-[15px] leading-[1.65] text-muted m-0 mb-5"
                style={{ textWrap: "pretty" }}
              >
                With OX Plumbing, every job starts with one promise:{" "}
                <strong className="text-body">do it right the first time.</strong> No shortcuts, no
                guessing — just experienced pros who diagnose clearly and fix it to last.
              </p>
              <div className="text-[12.5px] font-extrabold tracking-[0.08em] uppercase text-accent-strong mb-3">
                Our services include
              </div>
              <div className="grid gap-[9px] mt-auto">
                {workmanshipList.map((li) => (
                  <div key={li} className={bulletCls}>
                    {bulletDot}
                    {li}
                  </div>
                ))}
              </div>
            </WhyChooseCard>
            <VideoTile image={whyVideos.rooftop} />

            {/* Row 2: video + Top rated card */}
            <VideoTile image={whyVideos.customerTruck} />
            <WhyChooseCard
              icon={<StarOutlineIcon />}
              title={
                <>
                  Top Rated With <span className="text-accent-strong">Reviews You Can Trust</span>
                </>
              }
            >
              <p
                className="text-[15px] leading-[1.65] text-muted m-0 mb-3.5"
                style={{ textWrap: "pretty" }}
              >
                Our reputation comes from real homeowners. Customers like{" "}
                <strong className="text-body">Debra</strong>, fresh off her remodel, said we did a
                beautiful job, handled everything, and got it done efficiently.
              </p>
              <p className="text-[15px] leading-[1.65] text-muted m-0" style={{ textWrap: "pretty" }}>
                Reviews are <strong className="text-body">recent, verified, and easy to check</strong>{" "}
                — so you don&apos;t have to guess who you&apos;re hiring.
              </p>
            </WhyChooseCard>

            {/* Row 3: Fast honest card + video */}
            <WhyChooseCard
              icon={<WarningOutlineIcon />}
              title={
                <>
                  Fast, Honest, <span className="text-accent-strong">Same-Day Service</span>
                </>
              }
            >
              <p
                className="text-[15px] leading-[1.65] text-muted m-0 mb-3.5"
                style={{ textWrap: "pretty" }}
              >
                Plumbing issues don&apos;t wait, and we don&apos;t waste your time. Call OX Plumbing
                for a <strong className="text-body">quick answer, clear communication,</strong> and
                real solutions that last.
              </p>
              <p className="text-[15px] leading-[1.65] text-muted m-0" style={{ textWrap: "pretty" }}>
                Burst pipe, backed-up drain, or water heater problem — we show up ready to diagnose
                and fix it the right way.
              </p>
            </WhyChooseCard>
            <VideoTile image={whyVideos.techTrucks} />

            {/* Row 4: video + Professional card */}
            <VideoTile image={whyVideos.blueprints} />
            <WhyChooseCard
              icon={<CircleCheckIcon />}
              title={
                <>
                  Professional &amp;{" "}
                  <span className="text-accent-strong">Built for Big Projects</span>
                </>
              }
            >
              <p
                className="text-[15px] leading-[1.65] text-muted m-0 mb-5"
                style={{ textWrap: "pretty" }}
              >
                We show up prepared, communicate clearly, and keep your job moving forward with
                confidence.
              </p>
              <div className="text-[12.5px] font-extrabold tracking-[0.08em] uppercase text-accent-strong mb-3">
                We take pride in
              </div>
              <div className="grid gap-[9px] mt-auto">
                {prideList.map((li) => (
                  <div key={li} className={bulletCls}>
                    {bulletDot}
                    {li}
                  </div>
                ))}
              </div>
            </WhyChooseCard>

            {/* Row 5: Local card + video */}
            <WhyChooseCard
              icon={<ClockIcon size={21} />}
              title={
                <>
                  Local &amp; <span className="text-accent-strong">Invested in Mesa</span>
                </>
              }
            >
              <p
                className="text-[15px] leading-[1.65] text-muted m-0 mb-3.5"
                style={{ textWrap: "pretty" }}
              >
                We&apos;re more than a plumbing company — we&apos;re part of the Mesa community. From
                the{" "}
                <strong className="text-body">
                  Thanksgiving outreach at Fountain of Life Church
                </strong>{" "}
                to year-round neighbor support, we serve people, not just houses.
              </p>
              <p className="text-[15px] leading-[1.65] text-muted m-0" style={{ textWrap: "pretty" }}>
                You won&apos;t be chasing a number that disappears tomorrow. You&apos;ll be calling a{" "}
                <strong className="text-body">local team that&apos;s here to stay.</strong>
              </p>
            </WhyChooseCard>
            <VideoTile image={whyVideos.community} />
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <StatBand stats={stats} />

      {/* ============ REAL JOBS ============ */}
      <section className="bg-card border-y border-line px-6 py-[clamp(64px,8vw,100px)]">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-5 mb-11">
            <SectionHeading eyebrow="Our work" title="Real jobs. Real results." titleMaxWidth="20ch" />
            <Link
              href="/gallery"
              className="text-accent-deep no-underline font-bold text-[15px] flex items-center gap-1.5 pb-1 transition-[gap] duration-200 hover:gap-2.5"
            >
              View the full gallery <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-[18px]">
            {workItems.map((w) => (
              <div
                key={w.title}
                className="bg-paper border border-line rounded-2xl overflow-hidden transition-[transform,box-shadow] duration-200 hover:-translate-y-[3px] hover:shadow-[0_18px_40px_rgba(20,15,5,0.1)]"
              >
                <div className="w-full aspect-[4/3] relative">
                  <Image
                    src={w.image.src}
                    alt={w.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 395px"
                    className="object-cover"
                  />
                </div>
                <div className="px-[18px] py-[15px]">
                  <div className="text-sm font-bold text-body mb-[3px]">{w.title}</div>
                  <div className="text-[12.5px] font-bold tracking-[0.05em] uppercase text-accent-deep">
                    {w.cat}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="px-6 py-[clamp(64px,8vw,110px)]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-12">
            <SectionHeading center eyebrow="How it works" title="Fixed in three steps." />
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
            {processSteps.map((p) => (
              <div
                key={p.n}
                className="bg-card border border-line rounded-[18px] px-7 py-8 transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(20,15,5,0.08)]"
              >
                <div
                  aria-hidden="true"
                  className="font-display font-black text-[44px] text-ghost-number leading-none mb-[18px]"
                >
                  {p.n}
                </div>
                <h3 className="font-display font-bold text-[19px] m-0 mb-2">{p.title}</h3>
                <div className="text-[15px] leading-[1.6] text-muted" style={{ textWrap: "pretty" }}>
                  {p.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="bg-card border-y border-line px-6 py-[clamp(64px,8vw,110px)]">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-5 mb-11">
            <SectionHeading eyebrow="Reviews" title="Trusted across the East Valley." />
            <ReviewsScoreLine />
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
            {homeReviews.map((r) => (
              <ReviewCard key={r.name} review={r} variant="paper" />
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICE PLANS TEASER ============ */}
      <section className="px-6 py-[clamp(64px,8vw,110px)]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-12">
            <SectionHeading
              center
              eyebrow="OX Shield memberships"
              title="Protect your home year-round."
              copy="Preventative maintenance, priority scheduling, waived emergency fees, and member-only repair pricing. No long-term contracts — cancel anytime."
            />
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-5 items-stretch">
            {planTeasers.map((pl) => (
              <div
                key={pl.name}
                className={`${
                  pl.dark ? "bg-ink text-dark-heading border-ink" : "bg-card text-body border-line"
                } border rounded-[20px] px-7 py-8 flex flex-col gap-3.5 relative transition-transform duration-200 hover:-translate-y-1`}
              >
                {pl.badge && (
                  <div className="absolute top-[-12px] left-7 bg-accent text-accent-ink text-xs font-extrabold tracking-[0.06em] px-3 py-[5px] rounded-full">
                    {pl.badge}
                  </div>
                )}
                <h3 className="font-display font-extrabold text-lg tracking-[0.01em] m-0">
                  {pl.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="font-display font-black text-[38px] tracking-[-0.02em]">
                    {pl.price}
                  </span>
                  <span className="text-sm opacity-65">/month</span>
                </div>
                <div className="text-[14.5px] leading-[1.6] opacity-80">{pl.desc}</div>
                <Link
                  href="/plumbing-service-plans"
                  className={`mt-auto inline-flex items-center justify-center gap-2 no-underline font-bold text-[15px] px-5 py-[13px] rounded-[11px] hover:opacity-88 ${
                    pl.dark ? "bg-accent text-accent-ink" : "bg-btn-neutral text-body"
                  }`}
                >
                  Compare plans →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICE AREAS ============ */}
      <section className="bg-card border-y border-line px-6 py-[clamp(56px,7vw,90px)]">
        <div className="max-w-[1240px] mx-auto text-center">
          <SectionHeading
            center
            eyebrow="Where we work"
            title="Serving Mesa, Chandler + 18 cities."
            titleSize="clamp(26px, 3.2vw, 40px)"
          />
          <div className="flex flex-wrap gap-2.5 justify-center max-w-[760px] mx-auto mt-8">
            <AreaChips areas={homeAreas} variant="home" />
          </div>
        </div>
      </section>

      {/* ============ REQUEST FORM ============ */}
      <section className="bg-ink text-dark-heading px-6 py-[clamp(64px,8vw,100px)]">
        <div className="max-w-[1240px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(36px,5vw,72px)] items-start">
          <div>
            <div className="text-[13px] font-bold tracking-[0.1em] uppercase text-accent-soft mb-3">
              Request service, pricing help, or scheduling
            </div>
            <h2 className="font-display font-extrabold text-[clamp(28px,3.4vw,42px)] tracking-[-0.02em] leading-[1.1] m-0 mb-[18px]">
              Send details, photos, or questions.
            </h2>
            <p
              className="text-base leading-[1.65] text-dark-body m-0 mb-7"
              style={{ textWrap: "pretty" }}
            >
              Tell us what you need, send photos if helpful, or request service for a later date. We
              review requests quickly and follow up within 24 hours — no phone tag.
            </p>
            <div className="grid gap-[18px]">
              {formPoints.map((p) => (
                <div key={p.title} className="flex gap-3.5 items-start">
                  <div className="shrink-0 w-[38px] h-[38px] rounded-[11px] bg-accent/14 flex items-center justify-center text-accent">
                    <CheckIcon size={16} />
                  </div>
                  <div>
                    <div className="font-bold text-[15.5px] mb-[3px] text-dark-heading">
                      {p.title}
                    </div>
                    <div className="text-[14.5px] leading-[1.55] text-dark-body">{p.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-card rounded-[22px] p-[clamp(26px,3vw,38px)] text-body shadow-[0_32px_80px_rgba(0,0,0,0.4)]">
            <ContactForm variant="home" />
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="px-6 py-[clamp(64px,8vw,110px)]">
        <div className="max-w-[820px] mx-auto">
          <div className="text-center mb-11">
            <SectionHeading center eyebrow="Got questions?" title="Frequently asked questions." />
          </div>
          <FaqAccordion items={homeFaqs} variant="card" />
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="px-6 pb-[clamp(64px,8vw,110px)]">
        <CtaBanner
          eyebrow={
            <div className="text-[13px] font-bold tracking-[0.1em] uppercase text-accent-soft mb-4">
              We answer immediately
            </div>
          }
          title="Ready to get started?"
          copy="Fast, reliable plumbing in Mesa and the East Valley. Available 24/7 for emergencies."
          primaryWithIcon
          secondary={{ label: "Request service or send photos", href: "/contact" }}
        >
          <div className="flex flex-wrap gap-3 justify-center mt-9">
            {reviewBadges.map((b) => (
              <div
                key={b.name}
                className="flex items-center gap-[9px] border border-white/14 bg-white/4 rounded-full px-[18px] py-[9px]"
              >
                <span aria-hidden="true" className="text-star text-[13px]">
                  ★
                </span>
                <span className="text-[13.5px] font-bold text-dark-heading">{b.name}</span>
                <span className="text-[13px] text-dim">{b.note}</span>
              </div>
            ))}
          </div>
        </CtaBanner>
      </section>
    </PageShell>
  );
}
