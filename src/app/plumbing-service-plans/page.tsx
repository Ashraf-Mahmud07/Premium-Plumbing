import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CheckIcon } from "@/components/icons";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { company } from "@/data/company";
import { planFaqs } from "@/data/faqs";
import {
  compareRows,
  compareTotals,
  plansTrustItems,
  residentialPlans,
  savings,
  specialtyPlans,
} from "@/data/plans";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, plansServiceSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata(
  "OX Shield Plumbing Service Plans | OX Plumbing Mesa, AZ",
  "Protect your home with OX Shield: preventative maintenance, priority service, waived emergency fees, and member repair pricing. No contracts — cancel anytime.",
  "/plumbing-service-plans",
);

const chipCls =
  "text-[12.5px] font-bold px-[11px] py-[5px] rounded-full bg-accent/13";

export default function ServicePlansPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          plansServiceSchema(residentialPlans, specialtyPlans),
          faqSchema(planFaqs),
          breadcrumbSchema("Service Plans", "/plumbing-service-plans"),
        ]}
      />

      {/* HERO */}
      <section className="bg-ink text-dark-heading relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute top-[-220px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(245,137,31,0.13) 0%, rgba(245,137,31,0) 65%)",
          }}
        />
        <div className="max-w-[860px] mx-auto px-6 pt-[clamp(56px,8vw,100px)] pb-[clamp(48px,6vw,80px)] text-center relative">
          <div className="inline-flex items-center gap-2 border border-accent/35 bg-accent/8 text-accent-soft text-[13px] font-semibold tracking-[0.04em] px-3.5 py-[7px] rounded-full mb-6">
            Memberships
          </div>
          <h1 className="font-display font-extrabold text-[clamp(36px,5vw,60px)] leading-[1.06] tracking-[-0.025em] m-0 mb-5">
            The OX Shield
            <br />
            protection plans<span className="text-accent">.</span>
          </h1>
          <p
            className="text-[clamp(16px,1.6vw,19px)] leading-[1.6] text-dark-body mx-auto mt-0 mb-8 max-w-[52ch]"
            style={{ textWrap: "pretty" }}
          >
            Protect your home with preventative maintenance, priority service, and exclusive
            discounts. No long-term contracts — cancel anytime.
          </p>
          <div className="flex flex-wrap gap-[clamp(14px,3vw,36px)] justify-center">
            {plansTrustItems.map((t) => (
              <div key={t} className="flex items-center gap-[9px] text-dark-body text-sm font-medium">
                <CheckIcon size={16} className="text-accent shrink-0" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESIDENTIAL PLANS */}
      <section className="px-6 py-[clamp(64px,8vw,100px)]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-12">
            <SectionHeading
              center
              eyebrow="For your home"
              title="Residential service plans."
              copy="Choose the plan that fits your home's needs. All plans include priority scheduling and waived emergency fees."
            />
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[22px] items-stretch">
            {residentialPlans.map((pl) => (
              <div
                key={pl.name}
                className={`${
                  pl.dark ? "bg-ink text-dark-heading border-ink" : "bg-card text-body border-line"
                } border rounded-[22px] px-[30px] py-[34px] flex flex-col relative transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_24px_54px_rgba(20,15,5,0.14)]`}
              >
                <div className="absolute top-[-13px] left-[30px] bg-accent text-accent-ink text-xs font-extrabold tracking-[0.06em] px-[13px] py-[5px] rounded-full">
                  {pl.badge}
                </div>
                <h3 className="font-display font-extrabold text-[17px] tracking-[0.02em] m-0 mb-3.5">
                  {pl.name}
                </h3>
                <div className="flex items-baseline gap-[5px]">
                  <span className="font-display font-black text-[44px] tracking-[-0.02em]">
                    {pl.price}
                  </span>
                  <span className="text-[14.5px] opacity-65">/month</span>
                </div>
                <div className="flex gap-2 mt-4 mb-5 flex-wrap">
                  <span className={`${chipCls} ${pl.dark ? "text-accent-soft" : "text-accent-deep"}`}>
                    {pl.visits}
                  </span>
                  <span className={`${chipCls} ${pl.dark ? "text-accent-soft" : "text-accent-deep"}`}>
                    {pl.discount} off repairs
                  </span>
                  <span className={`${chipCls} ${pl.dark ? "text-accent-soft" : "text-accent-deep"}`}>
                    {pl.value} value
                  </span>
                </div>
                <div className="grid gap-[11px] mb-[26px]">
                  {pl.features.map((f) => (
                    <div key={f} className="flex gap-2.5 text-[14.5px] leading-[1.5] opacity-92">
                      <CheckIcon
                        size={16}
                        strokeWidth={2.6}
                        className="text-accent shrink-0 mt-0.5"
                      />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={company.phoneHref}
                  className={`mt-auto flex items-center justify-center gap-2 no-underline font-bold text-[15.5px] px-5 py-3.5 rounded-xl hover:opacity-88 ${
                    pl.dark ? "bg-accent text-accent-ink" : "bg-ink text-dark-heading"
                  }`}
                >
                  Select this plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALTY + COMMERCIAL */}
      <section className="bg-card border-y border-line px-6 py-[clamp(64px,8vw,100px)]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-12">
            <SectionHeading
              center
              eyebrow="Specialty & business"
              title="WaterCare & commercial coverage."
              copy="Dedicated maintenance for water systems — and quarterly protection built for restaurants, salons, offices, and multi-unit buildings."
            />
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[22px] items-stretch">
            {specialtyPlans.map((pl) => (
              <div
                key={pl.name}
                className="bg-paper border border-line rounded-[22px] px-[30px] py-[34px] flex flex-col relative transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_24px_54px_rgba(20,15,5,0.1)]"
              >
                <div className="absolute top-[-13px] left-[30px] bg-ink text-accent-soft text-xs font-extrabold tracking-[0.06em] px-[13px] py-[5px] rounded-full">
                  {pl.badge}
                </div>
                <h3 className="font-display font-extrabold text-[17px] tracking-[0.02em] m-0 mb-1.5">
                  {pl.name}
                </h3>
                <div className="text-sm text-muted mb-3.5 leading-[1.55]">{pl.tagline}</div>
                <div className="flex items-baseline gap-[5px]">
                  <span className="font-display font-black text-[44px] tracking-[-0.02em]">
                    {pl.price}
                  </span>
                  <span className="text-[14.5px] text-dim">/month</span>
                </div>
                <div className="flex gap-2 mt-4 mb-5 flex-wrap">
                  <span className={`${chipCls} text-accent-deep`}>{pl.visits}</span>
                  <span className={`${chipCls} text-accent-deep`}>{pl.discount} off repairs</span>
                  <span className={`${chipCls} text-accent-deep`}>{pl.value} value</span>
                </div>
                <div className="grid gap-[11px] mb-[26px]">
                  {pl.features.map((f) => (
                    <div
                      key={f}
                      className="flex gap-2.5 text-[14.5px] leading-[1.5] text-body-strong"
                    >
                      <CheckIcon
                        size={16}
                        strokeWidth={2.6}
                        className="text-accent shrink-0 mt-0.5"
                      />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={company.phoneHref}
                  className="mt-auto flex items-center justify-center gap-2 no-underline font-bold text-[15.5px] px-5 py-3.5 rounded-xl bg-ink text-dark-heading hover:opacity-88"
                >
                  Select this plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MEMBERSHIP SAVES MONEY */}
      <section className="px-6 py-[clamp(64px,8vw,100px)]">
        <div className="max-w-[1240px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(36px,5vw,72px)] items-center">
          <div>
            <SectionHeading
              eyebrow="Why it pays off"
              title="Membership costs less than one emergency."
              titleSize="clamp(28px, 3.4vw, 42px)"
            />
            <p
              className="text-base leading-[1.65] text-muted mt-5 mb-7"
              style={{ textWrap: "pretty" }}
            >
              Water damage is the #2 most common home insurance claim, and 1 in 60 homes files a
              leak claim every year. Preventative maintenance catches small problems before they
              become floods — and members skip the $99+ after-hours fees entirely.
            </p>
            <div className="grid gap-4">
              {savings.map((s) => (
                <div key={s.title} className="flex gap-3.5 items-start">
                  <div className="shrink-0 w-[38px] h-[38px] rounded-[11px] bg-accent/12 flex items-center justify-center text-accent-deep">
                    <CheckIcon size={17} />
                  </div>
                  <div>
                    <div className="font-bold text-[15.5px] mb-0.5">{s.title}</div>
                    <div className="text-[14.5px] leading-[1.55] text-muted">{s.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-ink rounded-3xl p-[clamp(32px,4vw,48px)] text-dark-heading">
            <div className="font-display font-bold text-[15px] tracking-[0.08em] uppercase text-accent-soft mb-7">
              A typical year, compared
            </div>
            <div className="grid gap-[18px]">
              {compareRows.map((row) => (
                <div
                  key={row.label}
                  className="flex justify-between gap-4 pb-4 border-b border-white/8 text-[14.5px]"
                >
                  <span className="text-dark-body">{row.label}</span>
                  <div className="flex gap-[22px] shrink-0">
                    <span className="text-dim min-w-[70px] text-right">{row.without}</span>
                    <span className="text-accent font-bold min-w-[70px] text-right">
                      {row.withPlan}
                    </span>
                  </div>
                </div>
              ))}
              <div className="flex justify-between gap-4 text-[15.5px] font-bold">
                <span>Estimated annual total</span>
                <div className="flex gap-[22px] shrink-0">
                  <span className="text-dim min-w-[70px] text-right line-through">
                    {compareTotals.without}
                  </span>
                  <span className="text-accent min-w-[70px] text-right">
                    {compareTotals.withPlan}
                  </span>
                </div>
              </div>
              <div className="flex justify-end gap-[22px] text-[12.5px] text-dim">
                <span>Without plan</span>
                <span className="text-accent-soft font-bold">With OX Shield Plus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card border-t border-line px-6 py-[clamp(64px,8vw,100px)]">
        <div className="max-w-[820px] mx-auto">
          <div className="text-center mb-11">
            <SectionHeading center eyebrow="Got questions?" title="Frequently asked questions." />
          </div>
          <FaqAccordion items={planFaqs} variant="paper" />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-[clamp(64px,8vw,100px)]">
        <CtaBanner
          eyebrow={
            <div className="text-[13px] font-bold tracking-[0.1em] uppercase text-accent-soft mb-4">
              We answer immediately
            </div>
          }
          title="Ready to protect your home?"
          copy="Call now and we'll help you pick the right plan. All plans are transferable with home sale and cancel anytime."
          primaryWithIcon
          secondary={{ label: "Request service online", href: "/contact" }}
        />
      </section>
    </PageShell>
  );
}
