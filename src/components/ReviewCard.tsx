import type { Review } from "@/data/reviews";

/** Review figure card. `variant` matches the section background it sits on. */
export function ReviewCard({ review, variant = "paper" }: { review: Review; variant?: "paper" | "card" }) {
  return (
    <figure
      className={`m-0 ${
        variant === "paper" ? "bg-paper" : "bg-card"
      } border border-line rounded-[18px] p-7 flex flex-col gap-4`}
    >
      <span aria-label="5 out of 5 stars" className="text-star text-base tracking-[2px]">
        ★★★★★
      </span>
      <blockquote
        className="m-0 text-[15.5px] leading-[1.65] text-body-strong"
        style={{ textWrap: "pretty" }}
      >
        “{review.quote}”
      </blockquote>
      <figcaption className="flex items-center gap-3 mt-auto">
        <div
          aria-hidden="true"
          className="w-[38px] h-[38px] rounded-full bg-ink text-accent flex items-center justify-center font-display font-extrabold text-sm"
        >
          {review.initials}
        </div>
        <div>
          <div className="font-bold text-[14.5px]">{review.name}</div>
          <div className="text-[13px] text-dim">{review.meta}</div>
        </div>
      </figcaption>
    </figure>
  );
}

/** "★★★★★ 5.0 · 350+ Google reviews" line used beside review section headings. */
export function ReviewsScoreLine() {
  return (
    <div className="flex items-center gap-2.5 text-[15px] text-muted">
      <span aria-hidden="true" className="text-star text-lg">
        ★★★★★
      </span>
      <strong className="text-body">5.0</strong> · 350+ Google reviews
    </div>
  );
}
