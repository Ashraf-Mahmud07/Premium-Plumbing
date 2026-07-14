import { company } from "@/data/company";
import { PhoneIcon } from "./icons";

/** Fixed bottom-right emergency call button with pulse-ring animation. */
export function FloatingCallButton() {
  return (
    <a
      href={company.phoneHref}
      aria-label="Call OX Plumbing now"
      className="fixed right-5 bottom-5 z-90 flex items-center gap-2.5 bg-accent text-accent-ink no-underline font-bold text-[15px] px-5 py-3.5 rounded-full animate-pulse-ring shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-all duration-200 hover:bg-accent-hover hover:-translate-y-0.5"
    >
      <PhoneIcon size={18} />
      <span>{company.phoneDisplay}</span>
    </a>
  );
}
