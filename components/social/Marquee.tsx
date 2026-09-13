/** Continuous ticker of who the service is for. Static wrap under reduced motion. */
export function Marquee({ items, label }: { items: string[]; label: string }) {
  const row = [...items, ...items];
  return (
    <div className="marquee overflow-hidden py-8 md:py-10 border-y border-warm-white/10" aria-label={label}>
      <div className="marquee-track gap-0">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            aria-hidden={i >= items.length}
            className="flex items-center gap-8 md:gap-12 pr-8 md:pr-12 whitespace-nowrap font-display text-[1.6rem] md:text-[2.4rem] text-warm-white/90"
          >
            {item}
            <span className="size-2.5 md:size-3 rounded-full bg-copper" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
