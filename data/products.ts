import type { ComponentType } from "react";
import { BottleIcon, LipstickIcon, PerfumeIcon, GiftBoxIcon, SunTargetIcon } from "@/lib/icons";

export interface Product {
  name: string;
  category: string;
  priceWhole: string;
  priceCents: string;
  badge?: string;
  badgeVariant?: "default" | "ink" | "blush";
  icon: ComponentType<{ className?: string }>;
  from?: string;
  to?: string;
}

export const PRODUCTS: Product[] = [
  {
    name: "Sérum Iluminador Noturno",
    category: "Skincare",
    priceWhole: "R$ 189",
    priceCents: ",90",
    badge: "Best-seller",
    badgeVariant: "default",
    icon: BottleIcon,
  },
  {
    name: "Batom Matte Veludo Rosé",
    category: "Maquiagem",
    priceWhole: "R$ 79",
    priceCents: ",90",
    badge: "Novidade",
    badgeVariant: "blush",
    icon: LipstickIcon,
    from: "var(--color-blush-deep)",
    to: "var(--color-rose)",
  },
  {
    name: "Eau de Parfum Flor de Lis",
    category: "Fragrâncias",
    priceWhole: "R$ 249",
    priceCents: ",90",
    icon: PerfumeIcon,
    from: "var(--color-nude)",
    to: "var(--color-blush)",
  },
  {
    name: "Kit Rotina Antissinais",
    category: "Skincare",
    priceWhole: "R$ 459",
    priceCents: ",90",
    badge: "Kit",
    badgeVariant: "ink",
    icon: GiftBoxIcon,
  },
  {
    name: "Base Fluida Cobertura Natural",
    category: "Maquiagem",
    priceWhole: "R$ 134",
    priceCents: ",90",
    icon: SunTargetIcon,
    from: "var(--color-ivory)",
    to: "var(--color-blush-deep)",
  },
  {
    name: "Box Autocuidado Beny Kay",
    category: "Presentes",
    priceWhole: "R$ 199",
    priceCents: ",90",
    badge: "Presente",
    badgeVariant: "blush",
    icon: GiftBoxIcon,
    from: "var(--color-rose)",
    to: "var(--color-nude)",
  },
];
