type Stat = { value: string; label: string };

type StatBandProps = {
  stats: Stat[];
  /** "dark": ink band, accent numbers. "light": white band, deep-accent numbers. */
  variant?: "dark" | "light";
  numberSize?: string;
};

/** Stat band section (dark on home/emergency, light on about). */
export function StatBand({
  stats,
  variant = "dark",
  numberSize = "clamp(36px, 4vw, 52px)",
}: StatBandProps) {
  const dark = variant === "dark";
  return (
    <section
      className={
        dark
          ? "bg-ink px-6 py-[clamp(48px,6vw,80px)]"
          : "bg-card border-b border-line px-6 py-[clamp(44px,6vw,68px)]"
      }
    >
      <div className="max-w-[1240px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8">
        {stats.map((st) => (
          <div key={st.label} className="text-center p-2">
            <div
              className={`font-display font-black tracking-[-0.02em] leading-none ${
                dark ? "text-accent" : "text-accent-deep"
              }`}
              style={{ fontSize: numberSize }}
            >
              {st.value}
            </div>
            <div className={`text-[14.5px] mt-2.5 ${dark ? "text-dark-body" : "text-muted"}`}>
              {st.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
