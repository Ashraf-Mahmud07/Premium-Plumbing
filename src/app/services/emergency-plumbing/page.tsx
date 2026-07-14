import type { Metadata } from "next";
import Link from "next/link";
import { AreaChips } from "@/components/AreaChips";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PhoneIcon, WarningIcon } from "@/components/icons";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { ReviewCard, ReviewsScoreLine } from "@/components/ReviewCard";
import { SectionHeading } from "@/components/SectionHeading";
import { StatBand } from "@/components/StatBand";
import { TrustBar } from "@/components/TrustBar";
import { extendedAreas } from "@/data/areas";
import { company } from "@/data/company";
import {
  emergencies,
  heroCards,
  processSteps,
  signs,
  stats,
  trustItems,
} from "@/data/emergency";
import { emergencyFaqs } from "@/data/faqs";
import { emergencyReviews } from "@/data/reviews";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, emergencyServiceSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata(
  "24/7 Emergency Plumbing Mesa | 60-Minute Response | OX Plumbing",
  "Emergency plumber at your door in 60 minutes. Real-person dispatch 24/7/365, fully stocked trucks that fix 95% of emergencies on the first visit. Call now.",
  "/services/emergency-plumbing",
);

export default function EmergencyPlumbingPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          emergencyServiceSchema(),
          faqSchema(emergencyFaqs),
          breadcrumbSchema("Emergency Plumbing", "/services/emergency-plumbing"),
        ]}
      />

      {/* EMERGENCY HERO */}
      <section className="bg-ink text-dark-heading relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(245,137,31,0.16) 0%, rgba(245,137,31,0) 65%)",
          }}
        />
        <div className="max-w-[1240px] mx-auto px-6 pt-[clamp(56px,8vw,100px)] pb-[clamp(48px,6vw,80px)] grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(32px,5vw,72px)] items-center relative">
          <div>
            <div className="inline-flex items-center gap-[9px] border border-accent/40 bg-accent/10 text-accent-soft text-[13px] font-bold tracking-[0.05em] px-[15px] py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-accent inline-block animate-blink" />
              EMERGENCY LINE OPEN — WE ANSWER IMMEDIATELY
            </div>
            <h1 className="font-display font-extrabold text-[clamp(36px,5.2vw,60px)] leading-[1.05] tracking-[-0.025em] m-0 mb-[18px]">
              Emergency plumber
              <br />
              at your door in <span className="text-accent">60 minutes</span>.
            </h1>
            <p
              className="text-[clamp(16px,1.6vw,19px)] leading-[1.6] text-dark-body m-0 mb-[30px] max-w-[50ch]"
              style={{ textWrap: "pretty" }}
            >
              Leak getting worse? Sewer backing up? Water damage spreads fast — every minute counts.
              Real-person dispatch, 24/7/365, fully stocked trucks that fix 95% of emergencies on
              the first visit.
            </p>
            <div className="flex flex-wrap gap-3.5 items-center mb-7">
              <a
                href={company.phoneHref}
                className="flex items-center gap-2.5 bg-accent text-accent-ink no-underline font-display font-bold text-[clamp(18px,2vw,22px)] px-8 py-[19px] rounded-[14px] animate-pulse-ring transition-all duration-150 hover:bg-accent-hover hover:-translate-y-0.5"
              >
                <PhoneIcon size={21} />
                Call (602) 905-3722 Now
              </a>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <span aria-hidden="true" className="text-star text-base">
                ★★★★★
              </span>
              <span className="text-sm text-dark-body">
                <strong className="text-dark-heading">350+</strong> verified Google reviews ·
                Licensed &amp; insured ROC #347174
              </span>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="bg-surface-dark border border-accent/35 rounded-[20px] px-[30px] py-7">
              <div className="font-display font-black text-[clamp(24px,2.6vw,32px)] tracking-[-0.01em] text-accent mb-2">
                60 minutes or $60 off.
              </div>
              <div className="text-[15px] leading-[1.6] text-dark-body">
                If we&apos;re not at your door within 60 minutes of dispatch, take $60 off the
                repair. We&apos;ll assess the emergency and start fixing it on the spot.
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {heroCards.map((c) => (
                <div
                  key={c.title}
                  className="bg-surface-dark border border-white/10 rounded-2xl px-[22px] py-5"
                >
                  <div className="font-display font-extrabold text-[19px] text-dark-heading mb-1">
                    {c.title}
                  </div>
                  <div className="text-[13.5px] text-dim leading-[1.5]">{c.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <TrustBar items={trustItems} />
      </section>

      {/* COMMON EMERGENCIES */}
      <section className="px-6 py-[clamp(64px,8vw,100px)]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-12">
            <SectionHeading
              center
              eyebrow="We can help"
              title="Dealing with any of these? We fix it now."
            />
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-[18px]">
            {emergencies.map((e) => (
              <a
                key={e.title}
                href={company.phoneHref}
                className="block no-underline text-inherit bg-card border border-line rounded-2xl px-6 pt-6 pb-[22px] transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-[3px] hover:shadow-[0_16px_36px_rgba(20,15,5,0.09)] hover:border-accent"
              >
                <h3 className="font-display font-bold text-[17.5px] m-0 mb-1.5">{e.title}</h3>
                <div className="text-sm leading-[1.55] text-muted mb-3">{e.body}</div>
                <div className="text-[13.5px] font-bold text-accent-deep">Call now →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <StatBand stats={stats} numberSize="clamp(34px, 3.8vw, 48px)" />

      {/* EMERGENCY PROCESS */}
      <section className="px-6 py-[clamp(64px,8vw,100px)]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-12">
            <SectionHeading center eyebrow="Built for speed" title="What happens when you call." />
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
            {processSteps.map((p) => (
              <div key={p.n} className="bg-card border border-line rounded-[18px] px-[26px] py-[30px]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/12 flex items-center justify-center font-display font-extrabold text-accent-deep text-[17px]">
                    {p.n}
                  </div>
                  <div className="text-[12.5px] font-bold tracking-[0.06em] uppercase text-dim">
                    {p.time}
                  </div>
                </div>
                <h3 className="font-display font-bold text-lg m-0 mb-2">{p.title}</h3>
                <div className="text-[14.5px] leading-[1.6] text-muted" style={{ textWrap: "pretty" }}>
                  {p.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT COUNTS AS EMERGENCY + AREAS */}
      <section className="bg-card border-y border-line px-6 py-[clamp(64px,8vw,100px)]">
        <div className="max-w-[1240px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(36px,5vw,72px)] items-start">
          <div>
            <SectionHeading
              eyebrow="Know the signs"
              title="What counts as a plumbing emergency?"
              titleSize="clamp(26px, 3.2vw, 38px)"
            />
            <p
              className="text-[15.5px] leading-[1.65] text-muted mt-[18px] mb-6"
              style={{ textWrap: "pretty" }}
            >
              If the issue involves active leaking, flooding, sewage, gas, or loss of essential
              plumbing function, call right away. Unsure? Call anyway — we&apos;ll help you decide
              the best next step.
            </p>
            <div className="grid gap-3">
              {signs.map((s) => (
                <div
                  key={s}
                  className="flex gap-[11px] items-start text-[15px] leading-[1.55] text-body-strong"
                >
                  <WarningIcon size={16} className="text-accent shrink-0 mt-[3px]" />
                  {s}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="bg-ink rounded-[22px] p-[clamp(28px,4vw,42px)] text-dark-heading mb-5">
              <div className="text-[13px] font-bold tracking-[0.1em] uppercase text-accent-soft mb-3.5">
                Fast response area
              </div>
              <div className="font-display font-extrabold text-2xl mb-[18px]">
                Serving the entire East Valley, 24/7.
              </div>
              <div className="flex flex-wrap gap-2">
                <AreaChips areas={extendedAreas} variant="dark" />
              </div>
            </div>
            <div className="bg-paper border border-line rounded-[22px] p-[clamp(24px,3vw,32px)]">
              <div className="font-bold text-base mb-2.5">While you wait for us</div>
              <div className="text-[14.5px] leading-[1.7] text-muted">
                Shut off your main water supply to stop the flow. Move valuables away from water and
                contain it with towels or buckets. Don&apos;t attempt pipe repairs yourself —
                we&apos;ll be there shortly with the right tools.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="px-6 py-[clamp(64px,8vw,100px)]">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-5 mb-11">
            <SectionHeading eyebrow="Reviews" title="When it mattered most." />
            <ReviewsScoreLine />
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
            {emergencyReviews.map((r) => (
              <ReviewCard key={r.name} review={r} variant="card" />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card border-t border-line px-6 py-[clamp(64px,8vw,100px)]">
        <div className="max-w-[820px] mx-auto">
          <div className="text-center mb-11">
            <SectionHeading center eyebrow="Emergency FAQ" title="Quick answers." />
          </div>
          <FaqAccordion items={emergencyFaqs} variant="paper" />
        </div>
      </section>

      {/* EMERGENCY CONTACT CTA */}
      <section className="px-6 py-[clamp(64px,8vw,100px)]">
        <div className="max-w-[1240px] mx-auto bg-ink rounded-[28px] px-[clamp(28px,5vw,80px)] py-[clamp(48px,6vw,80px)] text-center relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute bottom-[-260px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(245,137,31,0.2) 0%, rgba(245,137,31,0) 65%)",
            }}
          />
          <div className="relative">
            <div className="inline-flex items-center gap-[9px] text-accent-soft text-[13px] font-bold tracking-[0.1em] uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-accent inline-block animate-blink" />
              Emergency line open now
            </div>
            <h2 className="font-display font-extrabold text-[clamp(30px,4.2vw,50px)] tracking-[-0.02em] text-dark-heading m-0 mb-4">
              Every minute counts.
            </h2>
            <p className="text-[17px] text-dark-body max-w-[46ch] mx-auto mt-0 mb-9 leading-[1.6]">
              Talk to a real OX team member right now — never a call center. Dispatch within 60
              minutes, day or night.
            </p>
            <a
              href={company.phoneHref}
              className="inline-flex items-center gap-3 bg-accent text-accent-ink no-underline font-display font-extrabold text-[clamp(20px,2.4vw,26px)] px-10 py-5 rounded-[14px] animate-pulse-ring hover:bg-accent-hover"
            >
              <PhoneIcon size={23} />
              {company.phoneDisplay}
            </a>
            <div className="mt-[22px] text-sm text-dim">
              $99 service call fee — credited toward your repair when you proceed. Non-urgent?{" "}
              <Link href="/contact" className="text-accent-soft no-underline font-semibold">
                Request service online
              </Link>
              .
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
