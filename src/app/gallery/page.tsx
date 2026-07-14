import type { Metadata } from "next";
import Image from "next/image";
import { CtaBanner } from "@/components/CtaBanner";
import { GalleryGrid } from "@/components/GalleryGrid";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { beforeAfterPairs } from "@/data/gallery";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata(
  "Project Gallery | OX Plumbing Mesa, AZ",
  "Every photo is a real OX Plumbing job in the East Valley — clean copper, tidy installs, water heaters, slab leak repairs, and workmanship we're proud to sign.",
  "/gallery",
);

export default function GalleryPage() {
  return (
    <PageShell>
      <JsonLd data={[breadcrumbSchema("Gallery", "/gallery")]} />

      {/* HERO */}
      <section className="bg-ink text-dark-heading relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute top-[-220px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(245,137,31,0.12) 0%, rgba(245,137,31,0) 65%)",
          }}
        />
        <div className="max-w-[860px] mx-auto px-6 pt-[clamp(56px,7vw,90px)] pb-[clamp(40px,5vw,64px)] text-center relative">
          <div className="inline-flex items-center gap-2 border border-accent/35 bg-accent/8 text-accent-soft text-[13px] font-semibold tracking-[0.04em] px-3.5 py-[7px] rounded-full mb-6">
            Real jobs, real results
          </div>
          <h1 className="font-display font-extrabold text-[clamp(36px,5vw,58px)] leading-[1.06] tracking-[-0.025em] m-0 mb-[18px]">
            Our work speaks
            <br />
            for itself<span className="text-accent">.</span>
          </h1>
          <p
            className="text-[clamp(16px,1.6vw,18.5px)] leading-[1.6] text-dark-body mx-auto m-0 max-w-[52ch]"
            style={{ textWrap: "pretty" }}
          >
            Every photo is a real OX Plumbing job in the East Valley — clean copper, tidy installs,
            and workmanship we&apos;re proud to sign.
          </p>
        </div>
      </section>

      {/* FILTERS + MASONRY */}
      <section className="px-6 py-[clamp(48px,6vw,72px)]">
        <div className="max-w-[1240px] mx-auto">
          <GalleryGrid />
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="bg-card border-y border-line px-6 py-[clamp(64px,8vw,100px)]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-12">
            <SectionHeading center eyebrow="Before & after" title="The transformation." />
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
            {beforeAfterPairs.map((p) => (
              <div key={p.title} className="bg-paper border border-line rounded-[20px] p-5">
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <div className="w-full aspect-square relative rounded-xl overflow-hidden">
                      <Image
                        src={p.before.src}
                        alt={p.before.alt}
                        fill
                        sizes="(max-width: 640px) 50vw, 265px"
                        className="object-cover"
                      />
                    </div>
                    <div className="text-xs font-extrabold tracking-[0.08em] uppercase text-dim mt-2.5 text-center">
                      Before
                    </div>
                  </div>
                  <div>
                    <div className="w-full aspect-square relative rounded-xl overflow-hidden">
                      <Image
                        src={p.after.src}
                        alt={p.after.alt}
                        fill
                        sizes="(max-width: 640px) 50vw, 265px"
                        className="object-cover"
                      />
                    </div>
                    <div className="text-xs font-extrabold tracking-[0.08em] uppercase text-accent-deep mt-2.5 text-center">
                      After
                    </div>
                  </div>
                </div>
                <h3 className="font-display font-bold text-[17px] m-0 mb-1">{p.title}</h3>
                <div className="text-sm leading-[1.55] text-muted">{p.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-[clamp(64px,8vw,100px)]">
        <CtaBanner
          title="Want work like this at your place?"
          copy="Same-day service across Mesa and the East Valley. Call now — we answer immediately."
          copyMaxWidth="48ch"
          secondary={{ label: "Request service online", href: "/contact" }}
        />
      </section>
    </PageShell>
  );
}
