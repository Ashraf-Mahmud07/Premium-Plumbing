import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { ShieldCheckIcon } from "@/components/icons";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { StatBand } from "@/components/StatBand";
import { certs, stats, timeline, values } from "@/data/about";
import { company } from "@/data/company";
import { aboutImages } from "@/data/images";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata(
  "About OX Plumbing | Family-Owned Mesa Plumbers",
  "OX Plumbing is a family-owned company built on 10 years of high-quality plumbing work in Mesa and the East Valley — owner-operated, licensed ROC #347174.",
  "/about",
);

export default function AboutPage() {
  return (
    <PageShell>
      <JsonLd data={[breadcrumbSchema("About", "/about")]} />

      {/* HERO / STORY */}
      <section className="bg-ink text-dark-heading relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute top-[-200px] left-[-100px] w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(245,137,31,0.13) 0%, rgba(245,137,31,0) 65%)",
          }}
        />
        <div className="max-w-[1240px] mx-auto px-6 py-[clamp(56px,8vw,110px)] grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(32px,5vw,72px)] items-center relative">
          <div>
            <div className="inline-flex items-center gap-2 border border-accent/35 bg-accent/8 text-accent-soft text-[13px] font-semibold tracking-[0.04em] px-3.5 py-[7px] rounded-full mb-6">
              Family-owned &amp; operated
            </div>
            <h1 className="font-display font-extrabold text-[clamp(36px,5vw,58px)] leading-[1.06] tracking-[-0.025em] m-0 mb-5">
              Strong as an ox.
              <br />
              Honest as family<span className="text-accent">.</span>
            </h1>
            <p
              className="text-[clamp(16px,1.6vw,18.5px)] leading-[1.65] text-dark-body m-0 mb-[18px] max-w-[54ch]"
              style={{ textWrap: "pretty" }}
            >
              OX Plumbing is a family-owned company built on 10 years of consistent, high-quality
              plumbing work in Mesa and the East Valley. Owner-operated from day one, every customer
              gets direct attention, honest communication, and repairs built to last.
            </p>
            <p
              className="text-[clamp(15px,1.5vw,17px)] leading-[1.65] text-dark-body m-0 mb-8 max-w-[54ch]"
              style={{ textWrap: "pretty" }}
            >
              Our mission is simple: fix it once, fix it right, and treat your home like our own —
              whether it&apos;s a dripping faucet or a midnight slab leak.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <a
                href={company.phoneHref}
                className="flex items-center gap-2.5 bg-accent text-accent-ink no-underline font-display font-bold text-[17px] px-[26px] py-[15px] rounded-xl hover:bg-accent-hover"
              >
                Call (602) 905-3722
              </a>
              <Link
                href="/gallery"
                className="flex items-center text-dark-heading no-underline font-semibold text-[15.5px] px-[22px] py-3.5 border border-white/18 rounded-xl hover:border-accent hover:text-accent"
              >
                See our work
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="w-full aspect-[4/3.4] relative rounded-[20px] overflow-hidden">
              <Image
                src={aboutImages.team.src}
                alt={aboutImages.team.alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 584px"
                className="object-cover"
              />
            </div>
            <div className="absolute left-[-12px] bottom-[-14px] bg-surface-dark border border-white/12 rounded-[14px] px-5 py-3.5 shadow-[0_16px_40px_rgba(0,0,0,0.45)]">
              <div className="font-display font-extrabold text-xl text-accent">ROC #347174</div>
              <div className="text-[13px] text-dim">Licensed · Bonded · Insured</div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <StatBand stats={stats} variant="light" numberSize="clamp(34px, 3.8vw, 48px)" />

      {/* VALUES */}
      <section className="px-6 py-[clamp(64px,8vw,100px)]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-12">
            <SectionHeading center eyebrow="What we stand for" title="Our values." />
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
            {values.map((v) => (
              <div
                key={v.n}
                className="bg-card border border-line rounded-[18px] px-[26px] py-[30px] transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(20,15,5,0.08)]"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/12 flex items-center justify-center mb-[18px] font-display font-extrabold text-accent-deep text-base">
                  {v.n}
                </div>
                <h3 className="font-display font-bold text-lg m-0 mb-2">{v.title}</h3>
                <div className="text-[14.5px] leading-[1.6] text-muted" style={{ textWrap: "pretty" }}>
                  {v.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-ink text-dark-heading px-6 py-[clamp(64px,8vw,100px)]">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-[52px]">
            <SectionHeading center dark eyebrow="Our story" title="A decade in the making." />
          </div>
          <div className="grid gap-0">
            {timeline.map((t) => (
              <div key={t.year} className="grid grid-cols-[90px_30px_1fr] gap-x-3.5">
                <div className="font-display font-extrabold text-lg text-accent text-right pt-0.5">
                  {t.year}
                </div>
                <div aria-hidden="true" className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-accent shrink-0 mt-1.5" />
                  <div className="w-0.5 flex-1 bg-white/12" />
                </div>
                <div className="pb-10">
                  <h3 className="font-display font-bold text-lg m-0 mb-1.5">{t.title}</h3>
                  <div
                    className="text-[15px] leading-[1.6] text-dark-body"
                    style={{ textWrap: "pretty" }}
                  >
                    {t.body}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS / TRUST */}
      <section className="bg-card border-b border-line px-6 py-[clamp(64px,8vw,100px)]">
        <div className="max-w-[1240px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(36px,5vw,72px)] items-center">
          <div>
            <SectionHeading
              eyebrow="Why customers trust us"
              title="Credentials that back up the work."
              titleSize="clamp(26px, 3.2vw, 40px)"
            />
            <div className="grid gap-4 mt-6">
              {certs.map((c) => (
                <div key={c.title} className="flex gap-3.5 items-start">
                  <div className="shrink-0 w-[38px] h-[38px] rounded-[11px] bg-accent/12 flex items-center justify-center text-accent-deep">
                    <ShieldCheckIcon />
                  </div>
                  <div>
                    <div className="font-bold text-[15.5px] mb-0.5">{c.title}</div>
                    <div className="text-[14.5px] leading-[1.55] text-muted">{c.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="w-full aspect-[1/1.2] relative rounded-2xl overflow-hidden">
              <Image
                src={aboutImages.work1.src}
                alt={aboutImages.work1.alt}
                fill
                sizes="(max-width: 768px) 50vw, 284px"
                className="object-cover"
              />
            </div>
            <div className="grid gap-4">
              <div className="w-full aspect-[1/0.9] relative rounded-2xl overflow-hidden">
                <Image
                  src={aboutImages.work2.src}
                  alt={aboutImages.work2.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 284px"
                  className="object-cover"
                />
              </div>
              <div className="w-full aspect-[1/0.9] relative rounded-2xl overflow-hidden">
                <Image
                  src={aboutImages.work3.src}
                  alt={aboutImages.work3.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 284px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-[clamp(64px,8vw,100px)]">
        <CtaBanner
          title="Experience the OX difference."
          copy="Same-day service across Mesa and the East Valley. Call now — we answer immediately."
          copyMaxWidth="48ch"
          secondary={{ label: "Request service online", href: "/contact" }}
        />
      </section>
    </PageShell>
  );
}
