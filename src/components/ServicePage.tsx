import Image from "next/image";
import Link from "next/link";
import type { ServicePageData } from "@/data/service-pages/types";
import { company } from "@/data/company";
import { faqSchema, breadcrumbTrailSchema, plumberId } from "@/lib/schema";
import { areaServed } from "@/data/areas";
import { CtaBanner } from "./CtaBanner";
import { FaqAccordion } from "./FaqAccordion";
import { CheckIcon, PhoneIcon, ShieldCheckIcon } from "./icons";
import { JsonLd } from "./JsonLd";
import { PageShell } from "./PageShell";
import { SectionHeading } from "./SectionHeading";

const bodyP = "text-[15.5px] leading-[1.7] text-muted m-0";

function serviceSchema(data: ServicePageData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: data.serviceType,
    name: `${data.hero.titleLines[0]} ${data.hero.titleLines[1]}`,
    description: data.metaDescription,
    provider: { "@id": plumberId },
    areaServed: areaServed.map((city) => ({ "@type": "City", name: city })),
  };
}

/**
 * Shared service-page template — composes the existing section patterns
 * (dark hero, SectionHeading, card grids, ghost-number steps, ink panel,
 * FaqAccordion, CtaBanner). Content comes entirely from ServicePageData.
 */
export function ServicePage({ data }: { data: ServicePageData }) {
  return (
    <PageShell>
      <JsonLd
        data={[
          serviceSchema(data),
          faqSchema(data.faqs),
          breadcrumbTrailSchema([
            { name: data.category, path: "/#services" },
            { name: data.hero.titleLines.join(" "), path: `/services/${data.slug}` },
          ]),
        ]}
      />

      {/* HERO */}
      <section className="bg-ink text-dark-heading relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(245,137,31,0.13) 0%, rgba(245,137,31,0) 65%)",
          }}
        />
        <div className="max-w-[1240px] mx-auto px-6 py-[clamp(56px,8vw,100px)] grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(32px,5vw,72px)] items-center relative">
          <div>
            <div className="inline-flex items-center gap-2 border border-accent/35 bg-accent/8 text-accent-soft text-[13px] font-semibold tracking-[0.04em] px-3.5 py-[7px] rounded-full mb-6">
              {data.category}
            </div>
            <h1 className="font-display font-extrabold text-[clamp(36px,5vw,58px)] leading-[1.06] tracking-[-0.025em] m-0 mb-5">
              {data.hero.titleLines[0]}
              <br />
              {data.hero.titleLines[1]}
              <span className="text-accent">.</span>
            </h1>
            <p
              className="text-[clamp(16px,1.6vw,18.5px)] leading-[1.65] text-dark-body m-0 mb-8 max-w-[52ch]"
              style={{ textWrap: "pretty" }}
            >
              {data.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-3.5">
              <a
                href={company.phoneHref}
                className="flex items-center gap-2.5 bg-accent text-accent-ink no-underline font-display font-bold text-[17px] px-[26px] py-[15px] rounded-xl hover:bg-accent-hover"
              >
                <PhoneIcon size={18} />
                Call {company.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="flex items-center text-dark-heading no-underline font-semibold text-[15.5px] px-[22px] py-3.5 border border-white/18 rounded-xl hover:border-accent hover:text-accent"
              >
                Request service online
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="w-full aspect-[4/3.4] relative rounded-[20px] overflow-hidden border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
              <Image
                src={data.hero.image.src}
                alt={data.hero.image.alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 584px"
                className="object-cover"
              />
            </div>
            <div className="absolute left-[-12px] bottom-[-14px] bg-surface-dark border border-white/12 rounded-[14px] px-5 py-3.5 shadow-[0_16px_40px_rgba(0,0,0,0.45)]">
              <div className="font-display font-extrabold text-xl text-accent">
                {data.hero.card.title}
              </div>
              <div className="text-[13px] text-dim">{data.hero.card.note}</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE OVERVIEW */}
      <section className="bg-card border-b border-line px-6 py-[clamp(64px,8vw,100px)]">
        <div className="max-w-[820px] mx-auto">
          <SectionHeading eyebrow={data.overview.eyebrow} title={data.overview.title} />
          <div className="grid gap-5 mt-6">
            {data.overview.paragraphs.map((p) => (
              <p key={p.slice(0, 32)} className={bodyP} style={{ textWrap: "pretty" }}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-6 py-[clamp(64px,8vw,100px)]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-12">
            <SectionHeading center eyebrow="Why choose OX" title={data.whyChooseUs.title} />
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
            {data.whyChooseUs.cards.map((c, i) => (
              <div
                key={c.title}
                className="bg-card border border-line rounded-[18px] px-[26px] py-[30px] transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(20,15,5,0.08)]"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/12 flex items-center justify-center mb-[18px] font-display font-extrabold text-accent-deep text-base">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display font-bold text-lg m-0 mb-2">{c.title}</h3>
                <div className="text-[14.5px] leading-[1.6] text-muted" style={{ textWrap: "pretty" }}>
                  {c.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-card border-y border-line px-6 py-[clamp(64px,8vw,100px)]">
        <div className="max-w-[1240px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(36px,5vw,72px)] items-center">
          <div>
            <SectionHeading
              eyebrow="What you get"
              title={data.benefits.title}
              titleSize="clamp(28px, 3.4vw, 42px)"
            />
            <p className={`${bodyP} mt-5`} style={{ textWrap: "pretty" }}>
              {data.benefits.intro}
            </p>
          </div>
          <div className="grid gap-4">
            {data.benefits.items.map((b) => (
              <div key={b} className="flex gap-3.5 items-start">
                <div className="shrink-0 w-[38px] h-[38px] rounded-[11px] bg-accent/12 flex items-center justify-center text-accent-deep">
                  <CheckIcon size={17} />
                </div>
                <div className="font-semibold text-[15.5px] pt-2">{b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMON PROBLEMS */}
      <section className="px-6 py-[clamp(64px,8vw,100px)]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-12">
            <SectionHeading
              center
              eyebrow="We can help"
              title={data.problems.title}
              copy={data.problems.intro}
            />
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-[18px]">
            {data.problems.items.map((p) => (
              <a
                key={p.title}
                href={company.phoneHref}
                className="block no-underline text-inherit bg-card border border-line rounded-2xl px-6 pt-6 pb-[22px] transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-[3px] hover:shadow-[0_16px_36px_rgba(20,15,5,0.09)] hover:border-accent"
              >
                <h3 className="font-display font-bold text-[17.5px] m-0 mb-1.5">{p.title}</h3>
                <div className="text-sm leading-[1.55] text-muted mb-3">{p.desc}</div>
                <div className="text-[13.5px] font-bold text-accent-deep">Call now →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="bg-card border-y border-line px-6 py-[clamp(64px,8vw,100px)]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-12">
            <SectionHeading center eyebrow="How it works" title={data.process.title} />
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
            {data.process.steps.map((s, i) => (
              <div
                key={s.title}
                className="bg-paper border border-line rounded-[18px] px-7 py-8 transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(20,15,5,0.08)]"
              >
                <div
                  aria-hidden="true"
                  className="font-display font-black text-[44px] text-ghost-number leading-none mb-[18px]"
                >
                  {i + 1}
                </div>
                <h3 className="font-display font-bold text-[19px] m-0 mb-2">{s.title}</h3>
                <div className="text-[15px] leading-[1.6] text-muted" style={{ textWrap: "pretty" }}>
                  {s.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS + EXPERIENCE */}
      <section className="px-6 py-[clamp(64px,8vw,100px)]">
        <div className="max-w-[1240px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(36px,5vw,72px)] items-start">
          <div>
            <SectionHeading
              eyebrow="Why it matters"
              title={data.whyMatters.title}
              titleSize="clamp(28px, 3.4vw, 42px)"
            />
            <div className="grid gap-5 mt-5">
              {data.whyMatters.paragraphs.map((p) => (
                <p key={p.slice(0, 32)} className={bodyP} style={{ textWrap: "pretty" }}>
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div className="bg-ink rounded-3xl p-[clamp(32px,4vw,48px)] text-dark-heading">
            <div className="flex items-start gap-4 mb-5">
              <div className="shrink-0 w-[46px] h-[46px] rounded-[13px] bg-accent/14 flex items-center justify-center text-accent">
                <ShieldCheckIcon size={21} />
              </div>
              <h3 className="font-display font-bold text-[22px] tracking-[-0.01em] leading-[1.25] m-0">
                {data.experience.title}
              </h3>
            </div>
            <div className="grid gap-4 mb-7">
              {data.experience.paragraphs.map((p) => (
                <p
                  key={p.slice(0, 32)}
                  className="text-[14.5px] leading-[1.7] text-dark-body m-0"
                  style={{ textWrap: "pretty" }}
                >
                  {p}
                </p>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/8">
              {data.experience.stats.map((st) => (
                <div key={st.label}>
                  <div className="font-display font-black text-[28px] tracking-[-0.02em] text-accent leading-none">
                    {st.value}
                  </div>
                  <div className="text-[13px] text-dark-body mt-1.5">{st.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE FEATURES */}
      <section className="bg-card border-y border-line px-6 py-[clamp(64px,8vw,100px)]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-12">
            <SectionHeading
              center
              eyebrow="What's included"
              title={data.features.title}
              copy={data.features.intro}
            />
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] gap-x-10 gap-y-4 max-w-[920px] mx-auto">
            {data.features.items.map((f) => (
              <div key={f} className="flex gap-2.5 items-start text-[15px] leading-[1.55] text-body-strong">
                <CheckIcon size={16} strokeWidth={2.6} className="text-accent shrink-0 mt-[3px]" />
                {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-[clamp(64px,8vw,100px)]">
        <div className="max-w-[820px] mx-auto">
          <div className="text-center mb-11">
            <SectionHeading center eyebrow="Got questions?" title="Frequently asked questions." />
          </div>
          <FaqAccordion items={data.faqs} variant="card" />
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="bg-card border-t border-line px-6 py-[clamp(64px,8vw,100px)]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-12">
            <SectionHeading
              center
              eyebrow={`Looking for more than ${data.hero.titleLines.join(" ").toLowerCase()}?`}
              title="Related services."
            />
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[18px]">
            {data.related.map((r) => (
              <Link
                key={r.label}
                href={r.href}
                className="block no-underline text-inherit bg-paper border border-line rounded-2xl px-6 pt-6 pb-[22px] transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-[3px] hover:shadow-[0_16px_36px_rgba(20,15,5,0.09)] hover:border-accent"
              >
                <h3 className="font-display font-bold text-[17.5px] m-0 mb-1.5">{r.label}</h3>
                <div className="text-sm leading-[1.55] text-muted mb-3">{r.desc}</div>
                <div className="text-[13.5px] font-bold text-accent-deep">Learn more →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-[clamp(64px,8vw,100px)]">
        <CtaBanner
          eyebrow={
            <div className="text-[13px] font-bold tracking-[0.1em] uppercase text-accent-soft mb-4">
              We answer immediately
            </div>
          }
          title={data.cta.title}
          copy={data.cta.copy}
          primaryWithIcon
          secondary={{ label: "Request service online", href: "/contact" }}
        />
      </section>
    </PageShell>
  );
}
