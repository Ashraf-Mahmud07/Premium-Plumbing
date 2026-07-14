import type { Metadata } from "next";
import Link from "next/link";
import { AreaChips } from "@/components/AreaChips";
import { ContactForm } from "@/components/ContactForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { WarningIcon } from "@/components/icons";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { extendedAreas } from "@/data/areas";
import { company } from "@/data/company";
import { contactCards } from "@/data/contact";
import { contactFaqs } from "@/data/faqs";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata(
  "Contact OX Plumbing | Mesa, AZ | (602) 905-3722",
  "Tell us what you need and we'll reply within 24 hours — or call (602) 905-3722 and talk to a real OX team member right now. 24/7 emergency dispatch in Mesa.",
  "/contact",
);

function EmergencyBand() {
  return (
    <div className="bg-accent px-6 py-3">
      <a
        href={company.phoneHref}
        className="max-w-[1240px] mx-auto flex flex-wrap items-center justify-center gap-2.5 no-underline text-accent-ink font-bold text-[14.5px]"
      >
        <WarningIcon size={16} className="shrink-0" />
        Active emergency? Don&apos;t fill a form — call (602) 905-3722 now. We answer immediately,
        24/7.
      </a>
    </div>
  );
}

export default function ContactPage() {
  return (
    <PageShell banner={<EmergencyBand />}>
      <JsonLd data={[faqSchema(contactFaqs), breadcrumbSchema("Contact", "/contact")]} />

      {/* HERO + FORM */}
      <section className="bg-ink text-dark-heading relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(245,137,31,0.13) 0%, rgba(245,137,31,0) 65%)",
          }}
        />
        <div className="max-w-[1240px] mx-auto px-6 py-[clamp(56px,7vw,90px)] grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(36px,5vw,72px)] items-start relative">
          <div>
            <h1 className="font-display font-extrabold text-[clamp(36px,5vw,56px)] leading-[1.06] tracking-[-0.025em] m-0 mb-[18px]">
              Let&apos;s fix it<span className="text-accent">.</span>
            </h1>
            <p
              className="text-[clamp(16px,1.6vw,18px)] leading-[1.6] text-dark-body m-0 mb-9 max-w-[46ch]"
              style={{ textWrap: "pretty" }}
            >
              Tell us what you need and we&apos;ll get back to you within 24 hours — or call and
              talk to a real OX team member right now.
            </p>
            <div className="grid gap-3.5 mb-9">
              {contactCards.map((c) => {
                const inner = (
                  <>
                    <div className="shrink-0 w-[42px] h-[42px] rounded-xl bg-accent/14 flex items-center justify-center text-lg text-accent font-display font-extrabold">
                      {c.glyph}
                    </div>
                    <div>
                      <div className="text-[12.5px] font-bold tracking-[0.07em] uppercase text-dim mb-[3px]">
                        {c.label}
                      </div>
                      <div className="font-bold text-base text-dark-heading">{c.value}</div>
                    </div>
                  </>
                );
                const cls =
                  "flex items-center gap-4 bg-surface-dark border border-white/10 rounded-2xl px-[22px] py-[18px] no-underline transition-[border-color] duration-150 hover:border-accent";
                return c.href.startsWith("/") ? (
                  <Link key={c.label} href={c.href} className={cls}>
                    {inner}
                  </Link>
                ) : (
                  <a key={c.label} href={c.href} className={cls}>
                    {inner}
                  </a>
                );
              })}
            </div>
            <div className="bg-surface-dark border border-white/10 rounded-2xl px-6 py-[22px]">
              <div className="font-display font-bold text-[15px] tracking-[0.06em] uppercase text-accent-soft mb-3.5">
                Business hours
              </div>
              <div className="grid gap-2 text-[14.5px] text-dark-body">
                <div className="flex justify-between gap-4">
                  <span>Scheduled service</span>
                  <strong className="text-dark-heading">{company.hours.scheduled}</strong>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Emergency service</span>
                  <strong className="text-success">{company.hours.emergency}</strong>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-card rounded-[22px] p-[clamp(26px,3vw,40px)] text-body shadow-[0_32px_80px_rgba(0,0,0,0.4)]">
            <ContactForm variant="contact" />
          </div>
        </div>
      </section>

      {/* MAP + AREAS */}
      <section className="px-6 py-[clamp(64px,8vw,100px)]">
        <div className="max-w-[1240px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(28px,4vw,48px)] items-stretch">
          <div className="rounded-[22px] overflow-hidden border border-input-border min-h-[340px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            <iframe
              src="https://www.google.com/maps?q=1734+S+80th+St,+Mesa,+AZ+85209&z=15&output=embed"
              title="Map to OX Plumbing — 1734 S 80th St, Mesa, AZ 85209"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 340 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Where we work"
              title="Serving Mesa and 19 more East Valley cities."
              titleSize="clamp(26px, 3.2vw, 38px)"
            />
            <p
              className="text-[15.5px] leading-[1.65] text-muted mt-[18px] mb-6"
              style={{ textWrap: "pretty" }}
            >
              Based in Mesa, dispatching across the Phoenix metro — same-day for scheduled work, 60
              minutes for emergencies.
            </p>
            <div className="flex flex-wrap gap-[9px]">
              <AreaChips areas={extendedAreas} variant="contact" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card border-t border-line px-6 py-[clamp(64px,8vw,100px)]">
        <div className="max-w-[820px] mx-auto">
          <div className="text-center mb-11">
            <SectionHeading center title="Before you reach out." />
          </div>
          <FaqAccordion items={contactFaqs} variant="paper" />
        </div>
      </section>
    </PageShell>
  );
}
