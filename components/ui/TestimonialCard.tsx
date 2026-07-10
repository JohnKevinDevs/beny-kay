import { Stars } from "@/components/ui/Stars";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ quote, name, role, avatarColor }: Testimonial) {
  return (
    <div className="flex flex-col gap-[18px] rounded-md border border-charcoal/[.07] bg-ivory p-[34px] px-8 shadow-sm">
      <div className="h-[.5em] font-display text-[3.4rem] leading-[.4] text-blush-deep">&rdquo;</div>
      <p className="m-0 mb-0.5 font-display text-[1.32rem] leading-[1.5] text-charcoal italic">{quote}</p>
      <Stars />
      <div className="mt-auto flex items-center gap-3.5">
        <div className={`h-[46px] w-[46px] flex-none rounded-full ${avatarColor}`} />
        <div>
          <div className="font-sans text-[.92rem] font-medium tracking-[.02em]">{name}</div>
          <div className="text-[.74rem] tracking-[.04em] text-muted">{role}</div>
        </div>
      </div>
    </div>
  );
}
