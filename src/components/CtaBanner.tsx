import type { ReactNode } from "react";
import { company } from "@/data/company";
import { PhoneIcon } from "./icons";

type CtaBannerProps = {
  eyebrow?: ReactNode;
  title: string;
  copy: string;
  copyMaxWidth?: string;
  /** Label of the primary phone CTA (defaults to the phone number). */
  primaryLabel?: string;
  primaryWithIcon?: boolean;
  secondary?: { label: string; href: string };
  /** Extra content under the CTAs (badges, footnote). */
  children?: ReactNode;
  glowOpacity?: number;
};

/** Dark rounded CTA panel with the radial orange glow — shared by all pages. */
export function CtaBanner({
  eyebrow,
  title,
  copy,
  copyMaxWidth = "50ch",
  primaryLabel,
  primaryWithIcon = false,
  secondary,
  children,
  glowOpacity = 0.18,
}: CtaBannerProps) {
  return (
    <div className="max-w-[1240px] mx-auto bg-ink rounded-[28px] px-[clamp(28px,5vw,80px)] py-[clamp(48px,6vw,88px)] text-center relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute bottom-[-260px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(245,137,31,${glowOpacity}) 0%, rgba(245,137,31,0) 65%)`,
        }}
      />
      <div className="relative">
        {eyebrow}
        <h2 className="font-display font-extrabold text-[clamp(30px,4.2vw,50px)] tracking-[-0.02em] text-dark-heading m-0 mb-4">
          {title}
        </h2>
        <p
          className="text-[17px] text-dark-body mx-auto mt-0 mb-9 leading-[1.6]"
          style={{ maxWidth: copyMaxWidth }}
        >
          {copy}
        </p>
        <div className="flex flex-wrap gap-3.5 justify-center">
          <a
            href={company.phoneHref}
            className="flex items-center gap-2.5 bg-accent text-accent-ink no-underline font-display font-bold text-lg px-[30px] py-[17px] rounded-xl hover:bg-accent-hover"
          >
            {primaryWithIcon && <PhoneIcon size={19} />}
            {primaryLabel ?? company.phoneDisplay}
          </a>
          {secondary && (
            <a
              href={secondary.href}
              className="flex items-center text-dark-heading no-underline font-semibold text-base px-[26px] py-4 border border-white/20 rounded-xl hover:border-accent hover:text-accent"
            >
              {secondary.label}
            </a>
          )}
        </div>
        {children}
      </div>
    </div>
  );
}
