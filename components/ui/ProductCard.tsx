import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Stars } from "@/components/ui/Stars";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { HeartIcon } from "@/lib/icons";
import { STORE_URL } from "@/data/site";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const { name, category, priceWhole, priceCents, badge, badgeVariant, icon: Icon, from, to } = product;

  return (
    <article className="flex flex-col overflow-hidden rounded-md border border-charcoal/[.07] bg-ivory transition-[transform,box-shadow] duration-[400ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-1.5 hover:shadow-md">
      <div className="relative aspect-[4/5]">
        {badge && (
          <Badge variant={badgeVariant} className="absolute top-3.5 left-3.5 z-2">
            {badge}
          </Badge>
        )}
        <div className="absolute top-3 right-3 z-2 flex h-[38px] w-[38px] items-center justify-center rounded-full border border-charcoal/[.12] bg-ivory/90 text-rose-gold">
          <HeartIcon className="h-[18px] w-[18px]" />
        </div>
        <ImagePlaceholder icon={<Icon />} from={from} to={to} className="absolute inset-0" />
      </div>
      <div className="flex flex-1 flex-col gap-[.55rem] px-5 pt-5 pb-[22px]">
        <span className="text-[.66rem] tracking-[.2em] text-muted uppercase">{category}</span>
        <span className="font-display text-[1.18rem] leading-[1.2] font-medium">{name}</span>
        <Stars />
        <div className="mt-auto flex items-center justify-between gap-3 pt-[.4rem]">
          <span className="font-display text-[1.5rem] text-charcoal italic">
            {priceWhole}
            <small className="font-sans text-[.7rem] tracking-[.1em] text-muted not-italic">{priceCents}</small>
          </span>
          <Button href={STORE_URL} variant="primary" size="sm">
            Comprar
          </Button>
        </div>
      </div>
    </article>
  );
}
