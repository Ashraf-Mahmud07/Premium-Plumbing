import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { CheckIcon, PhoneIcon, ShieldCheckIcon } from "@/components/icons";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { company } from "@/data/company";
import { luxuryImages } from "@/data/images";
import {
  americanBrands,
  brandsSection,
  dependSection,
  dreamSection,
  fixturesSection,
  internationalBrands,
  introSection,
  luxuryHero,
  moreResidential,
  precisionSection,
} from "@/data/luxury";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbTrailSchema, luxuryServiceSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata(
  "Luxury Plumbing Services in Davie, FL | High-End Fixtures & Faucets",
  "Elevate your space with luxury plumbing: premium fixtures and faucets from Duravit, Grohe, Toto, Kohler and more, plus smart leak detection for total peace of mind.",
  "/residential-plumbing/luxury-plumbing",
);

const bodyP = "text-[15.5px] leading-[1.7] text-muted m-0";

export default function LuxuryPlumbingPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          luxuryServiceSchema(),
          breadcrumbTrailSchema([
            { name: "Residential Plumbing", path: "/#services" },
            { name: "Luxury Plumbing", path: "/residential-plumbing/luxury-plumbing" },
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
              {luxuryHero.badge}
            </div>
            <h1 className="font-display font-extrabold text-[clamp(36px,5vw,58px)] leading-[1.06] tracking-[-0.025em] m-0 mb-5">
              Luxury Plumbing Services
              <br />
              in Davie, FL<span className="text-accent">.</span>
            </h1>
            <p
              className="text-[clamp(16px,1.6vw,18.5px)] leading-[1.65] text-dark-body m-0 mb-8 max-w-[52ch]"
              style={{ textWrap: "pretty" }}
            >
              {luxuryHero.subtitle}
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
                src={luxuryImages.hero.src}
                alt={luxuryImages.hero.alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 584px"
                className="object-cover"
              />
            </div>
            <div className="absolute left-[-12px] bottom-[-14px] bg-surface-dark border border-white/12 rounded-[14px] px-5 py-3.5 shadow-[0_16px_40px_rgba(0,0,0,0.45)]">
              <div className="font-display font-extrabold text-xl text-accent">High-end brands</div>
              <div className="text-[13px] text-dim">Duravit · Grohe · Toto · Kohler &amp; more</div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-card border-b border-line px-6 py-[clamp(64px,8vw,100px)]">
        <div className="max-w-[820px] mx-auto">
          <SectionHeading eyebrow={introSection.eyebrow} title={introSection.title} />
          <div className="grid gap-5 mt-6">
            {introSection.paragraphs.map((p) => (
              <p key={p.slice(0, 32)} className={bodyP} style={{ textWrap: "pretty" }}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* DREAM SPACE + PRECISION */}
      <section className="px-6 py-[clamp(64px,8vw,100px)]">
        <div className="max-w-[1240px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(36px,5vw,72px)] items-start">
          <div>
            <SectionHeading
              eyebrow="Crafted to your vision"
              title={dreamSection.title}
              titleSize="clamp(28px, 3.4vw, 42px)"
            />
            <div className="grid gap-5 mt-5">
              {dreamSection.paragraphs.map((p) => (
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
                {precisionSection.title}
              </h3>
            </div>
            <div className="grid gap-4">
              {precisionSection.paragraphs.map((p) => (
                <p
                  key={p.slice(0, 32)}
                  className="text-[14.5px] leading-[1.7] text-dark-body m-0"
                  style={{ textWrap: "pretty" }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="bg-card border-y border-line px-6 py-[clamp(64px,8vw,100px)]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-12">
            <SectionHeading
              center
              eyebrow="Curated global selection"
              title={brandsSection.title}
              copy={brandsSection.intro}
            />
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
            {internationalBrands.map((b) => (
              <div
                key={b.name}
                className="bg-paper border border-line rounded-[18px] px-[26px] py-7 transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(20,15,5,0.08)]"
              >
                <div className="w-[42px] h-[42px] rounded-xl bg-accent/12 flex items-center justify-center mb-4 text-accent-deep">
                  <CheckIcon size={18} strokeWidth={2.2} />
                </div>
                <h3 className="font-display font-bold text-lg m-0 mb-2">{b.name}</h3>
                <div className="text-[14.5px] leading-[1.6] text-muted" style={{ textWrap: "pretty" }}>
                  {b.desc}
                </div>
              </div>
            ))}
          </div>
          <p className={`${bodyP} max-w-[720px] mx-auto text-center mt-10`} style={{ textWrap: "pretty" }}>
            {brandsSection.closing}
          </p>
          <div className="text-center mt-11 pt-10 border-t border-line">
            <div className="text-[13px] font-bold tracking-[0.1em] uppercase text-accent-deep mb-5">
              {brandsSection.americanLead}
            </div>
            <div className="flex flex-wrap gap-2.5 justify-center max-w-[760px] mx-auto">
              {americanBrands.map((b) => (
                <span
                  key={b}
                  className="border border-line bg-paper text-body-strong text-[14.5px] font-semibold px-5 py-2.5 rounded-full transition-all duration-150 cursor-default hover:border-accent hover:text-accent-deep hover:bg-accent/7"
                >
                  {b}
                </span>
              ))}
            </div>
            <p className={`${bodyP} max-w-[62ch] mx-auto mt-8`} style={{ textWrap: "pretty" }}>
              {brandsSection.outro}
            </p>
          </div>
        </div>
      </section>

      {/* FIXTURES AND FAUCETS */}
      <section className="px-6 py-[clamp(64px,8vw,100px)]">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(36px,5vw,72px)] items-center mb-[clamp(40px,5vw,64px)]">
            <div>
              <SectionHeading eyebrow="Statement pieces" title={fixturesSection.title} />
              <div className="grid gap-5 mt-5">
                {fixturesSection.paragraphs.map((p) => (
                  <p key={p.slice(0, 32)} className={bodyP} style={{ textWrap: "pretty" }}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
            <div className="w-full aspect-[4/3] relative rounded-[20px] overflow-hidden border border-line">
              <Image
                src={luxuryImages.fixtures.src}
                alt={luxuryImages.fixtures.alt}
                fill
                sizes="(max-width: 768px) 100vw, 584px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(440px,100%),1fr))] gap-6">
            {fixturesSection.cards.map((c) => (
              <div
                key={c.title}
                className="bg-card border border-line border-t-[3px] border-t-accent rounded-[20px] px-[30px] py-8"
              >
                <h3 className="font-display font-bold text-[21px] tracking-[-0.01em] leading-[1.25] m-0 mb-4">
                  {c.title}
                </h3>
                <div className="grid gap-3.5">
                  {c.paragraphs.map((p) => (
                    <p
                      key={p.slice(0, 32)}
                      className="text-[15px] leading-[1.65] text-muted m-0"
                      style={{ textWrap: "pretty" }}
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPEND ON US */}
      <section className="bg-card border-y border-line px-6 py-[clamp(64px,8vw,100px)]">
        <div className="max-w-[820px] mx-auto text-center">
          <SectionHeading center eyebrow="Why homeowners trust us" title={dependSection.title} />
          <div className="grid gap-5 mt-6">
            {dependSection.paragraphs.map((p) => (
              <p key={p.slice(0, 32)} className={bodyP} style={{ textWrap: "pretty" }}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* MORE RESIDENTIAL PLUMBING */}
      <section className="px-6 py-[clamp(64px,8vw,100px)]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-12">
            <SectionHeading
              center
              eyebrow={moreResidential.eyebrow}
              title={moreResidential.title}
            />
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-[18px]">
            {moreResidential.items.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="block no-underline text-inherit bg-card border border-line rounded-2xl px-6 pt-6 pb-[22px] transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-[3px] hover:shadow-[0_16px_36px_rgba(20,15,5,0.09)] hover:border-accent"
              >
                <h3 className="font-display font-bold text-[17.5px] m-0 mb-1.5">{s.title}</h3>
                {s.desc && <div className="text-sm leading-[1.55] text-muted mb-3">{s.desc}</div>}
                <div className="text-[13.5px] font-bold text-accent-deep">Learn more →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-[clamp(64px,8vw,100px)]">
        <CtaBanner
          eyebrow={
            <div className="text-[13px] font-bold tracking-[0.1em] uppercase text-accent-soft mb-4">
              How can we help you?
            </div>
          }
          title="We're standing by to serve you."
          copy="Call now and talk to a real team member right away — or request service online and we'll follow up within 24 hours."
          primaryWithIcon
          secondary={{ label: "Request service", href: "/contact" }}
        />
      </section>
    </PageShell>
  );
}
