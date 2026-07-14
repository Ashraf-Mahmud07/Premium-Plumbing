"use client";

import { useId, useState } from "react";
import type { Faq } from "@/data/faqs";

type FaqAccordionProps = {
  items: Faq[];
  /** Item background: "card" (white, on paper sections) or "paper" (on white sections). */
  variant?: "card" | "paper";
};

/**
 * One-open-at-a-time accordion, +/− toggle, orange border on the open item.
 * Answers are always rendered in the DOM (hidden via the `hidden` attribute),
 * so all FAQ copy is present in the server-rendered HTML for crawlers.
 */
export function FaqAccordion({ items, variant = "card" }: FaqAccordionProps) {
  const [open, setOpen] = useState(0);
  const baseId = useId();
  const bg = variant === "card" ? "bg-card" : "bg-paper";

  return (
    <div className="grid gap-3">
      {items.map((f, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-faq-panel-${i}`;
        return (
          <div
            key={f.q}
            className={`${bg} border rounded-[14px] overflow-hidden ${
              isOpen ? "border-accent" : "border-line"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="w-full flex items-center justify-between gap-4 bg-transparent border-none text-left font-sans font-bold text-[16.5px] text-body px-6 py-5 cursor-pointer focus-visible:outline-2 focus-visible:outline-accent"
            >
              {f.q}
              <span
                aria-hidden="true"
                className="shrink-0 w-[26px] h-[26px] rounded-full bg-accent/12 text-accent-deep flex items-center justify-center text-base font-bold"
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              id={panelId}
              hidden={!isOpen}
              className="px-6 pb-[22px] text-[15.5px] leading-[1.65] text-muted"
              style={{ textWrap: "pretty" }}
            >
              {f.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
