type AreaChipsProps = {
  areas: string[];
  /** Matches the three chip treatments in the design. */
  variant?: "home" | "dark" | "contact";
};

/** Service-area pill chips. */
export function AreaChips({ areas, variant = "home" }: AreaChipsProps) {
  const cls = {
    home: "border border-line bg-paper text-body-strong text-[14.5px] font-semibold px-5 py-2.5 rounded-full transition-all duration-150 cursor-default hover:border-accent hover:text-accent-deep hover:bg-accent/7",
    dark: "border border-white/15 text-dark-nav text-[13.5px] font-semibold px-[15px] py-2 rounded-full",
    contact:
      "border border-line bg-card text-body-strong text-sm font-semibold px-[18px] py-[9px] rounded-full hover:border-accent hover:text-accent-deep",
  }[variant];

  return (
    <>
      {areas.map((a) => (
        <span key={a} className={cls}>
          {a}
        </span>
      ))}
    </>
  );
}
