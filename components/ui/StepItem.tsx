import type { Step } from "@/data/steps";

export function StepItem({ number, title, description }: Step) {
  return (
    <div className="relative border-t border-charcoal/[.12] pt-[30px] before:absolute before:-top-[5px] before:left-0 before:h-[9px] before:w-[9px] before:rounded-full before:bg-rose-gold">
      <div className="font-display text-[2.6rem] leading-none font-medium text-blush-deep italic">{number}</div>
      <h4 className="display-md my-3.5 mb-2.5 text-[1.5rem]">{title}</h4>
      <p className="m-0 text-charcoal-2">{description}</p>
    </div>
  );
}
