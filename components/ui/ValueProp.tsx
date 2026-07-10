import type { ValuePropItem } from "@/data/valueProps";

export function ValueProp({ icon: Icon, title, description }: ValuePropItem) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full border border-rose-gold/25 bg-blush text-rose-gold-dp">
        <Icon className="h-6 w-6 stroke-current stroke-[1.4] fill-none" />
      </div>
      <h4 className="m-0 text-[1.28rem]">{title}</h4>
      <p className="m-0 text-[.96rem] text-charcoal-2">{description}</p>
    </div>
  );
}
