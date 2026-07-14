import { CheckIcon } from "./icons";

/** Checkmark trust bar under the dark heroes. */
export function TrustBar({ items }: { items: string[] }) {
  return (
    <div className="border-t border-white/8">
      <div className="max-w-[1240px] mx-auto px-6 py-[18px] flex flex-wrap gap-[clamp(16px,4vw,48px)] items-center justify-center">
        {items.map((t) => (
          <div key={t} className="flex items-center gap-[9px] text-dark-body text-sm font-medium">
            <CheckIcon size={16} className="text-accent shrink-0" />
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}
