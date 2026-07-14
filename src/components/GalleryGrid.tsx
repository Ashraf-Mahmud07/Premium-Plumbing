"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { galleryCategories, galleryItems, type GalleryCategory, type GalleryItem } from "@/data/gallery";
import { useFocusTrap } from "@/lib/useFocusTrap";

/**
 * Gallery category filter pills (active = dark bg, orange text), CSS-columns
 * masonry, and a lightbox (Escape-dismissable, focus-trapped).
 * All 12 items render in the server HTML (default filter is "All").
 */
export function GalleryGrid() {
  const [filter, setFilter] = useState<GalleryCategory>("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  useFocusTrap(lightboxRef, lightbox !== null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const items = filter === "All" ? galleryItems : galleryItems.filter((i) => i.cat === filter);

  return (
    <>
      <div className="flex flex-wrap gap-2.5 justify-center mb-10">
        {galleryCategories.map((c) => {
          const active = filter === c;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              aria-pressed={active}
              className={`border font-sans text-sm font-bold px-5 py-2.5 rounded-full cursor-pointer transition-all duration-150 hover:border-accent ${
                active ? "border-ink bg-ink text-accent" : "border-line bg-card text-body-strong"
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>
      <div style={{ columns: "3 280px", columnGap: 18 }}>
        {items.map((it) => (
          <button
            key={it.title}
            type="button"
            onClick={() => setLightbox(it)}
            aria-label={`View larger: ${it.title}`}
            className="block w-full text-left p-0 cursor-pointer break-inside-avoid mb-[18px] rounded-2xl overflow-hidden bg-card border border-line transition-[transform,box-shadow] duration-200 hover:-translate-y-[3px] hover:shadow-[0_18px_40px_rgba(20,15,5,0.12)] focus-visible:outline-2 focus-visible:outline-accent"
          >
            <div className="w-full relative" style={{ aspectRatio: it.ratio }}>
              <Image
                src={it.image.src}
                alt={it.image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 395px"
                className="object-cover"
              />
            </div>
            <div className="flex items-center justify-between gap-2.5 px-4 py-[13px]">
              <span className="text-[13.5px] font-bold text-body">{it.title}</span>
              <span className="text-[11.5px] font-extrabold tracking-[0.05em] uppercase text-accent-deep bg-accent/10 px-2.5 py-1 rounded-full shrink-0">
                {it.cat}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          ref={lightboxRef}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
          className="fixed inset-0 z-100 bg-ink/90 flex items-center justify-center p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightbox(null);
          }}
        >
          <div className="relative max-w-[900px] w-full">
            <button
              type="button"
              onClick={() => setLightbox(null)}
              aria-label="Close"
              className="absolute -top-12 right-0 w-10 h-10 bg-white/10 border border-white/20 rounded-full text-dark-heading text-lg cursor-pointer hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
            >
              ✕
            </button>
            <div
              className="relative w-full rounded-2xl overflow-hidden"
              style={{ aspectRatio: lightbox.ratio }}
            >
              <Image
                src={lightbox.image.src}
                alt={lightbox.image.alt}
                fill
                sizes="(max-width: 948px) 100vw, 900px"
                className="object-contain bg-ink"
              />
            </div>
            <div className="flex items-center justify-between gap-2.5 mt-4">
              <span className="text-[15px] font-bold text-dark-heading">{lightbox.title}</span>
              <span className="text-[11.5px] font-extrabold tracking-[0.05em] uppercase text-accent bg-accent/15 px-2.5 py-1 rounded-full shrink-0">
                {lightbox.cat}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
