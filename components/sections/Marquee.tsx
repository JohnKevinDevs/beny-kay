const CATEGORIES = ["Skincare", "Maquiagem", "Fragrâncias", "Autocuidado", "Presentes"];

export function Marquee() {
  const items = [...CATEGORIES, ...CATEGORIES];

  return (
    <div className="overflow-hidden border-y border-charcoal/[.07] bg-cream-deep py-[22px]">
      <div className="animate-marquee flex w-max gap-14 motion-reduce:animate-none">
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-14 font-display text-[1.3rem] text-charcoal-2 italic whitespace-nowrap after:text-[0.7em] after:text-rose-gold after:content-['✦']"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
