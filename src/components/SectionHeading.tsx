import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  copy?: ReactNode;
  /** Center-aligned block (default: left). */
  center?: boolean;
  /** On dark sections the eyebrow uses the soft accent. */
  dark?: boolean;
  /** Exact clamp() from the design for this heading. */
  titleSize?: string;
  titleMaxWidth?: string;
  className?: string;
};

/** Eyebrow + display title used at the top of nearly every section. */
export function SectionHeading({
  eyebrow,
  title,
  copy,
  center = false,
  dark = false,
  titleSize = "clamp(28px, 3.6vw, 44px)",
  titleMaxWidth,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`${center ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <div
          className={`text-[13px] font-bold tracking-[0.1em] uppercase mb-3 ${
            dark ? "text-accent-soft" : "text-accent-deep"
          }`}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className="font-display font-extrabold tracking-[-0.02em] leading-[1.08] m-0"
        style={{
          fontSize: titleSize,
          maxWidth: titleMaxWidth,
          marginLeft: center && titleMaxWidth ? "auto" : undefined,
          marginRight: center && titleMaxWidth ? "auto" : undefined,
        }}
      >
        {title}
      </h2>
      {copy && (
        <p
          className={`text-[16.5px] leading-[1.6] mt-3.5 mb-0 ${
            dark ? "text-dark-body" : "text-muted"
          } ${center ? "mx-auto" : ""}`}
          style={{ maxWidth: "56ch" }}
        >
          {copy}
        </p>
      )}
    </div>
  );
}
