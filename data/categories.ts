import type { ComponentType } from "react";
import { BottleIcon, LipstickIcon, PerfumeIcon, GiftBoxIcon } from "@/lib/icons";

export interface Category {
  index: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
  from?: string;
  to?: string;
}

export const CATEGORIES: Category[] = [
  { index: "01", label: "Skincare", icon: BottleIcon },
  { index: "02", label: "Maquiagem", icon: LipstickIcon, from: "var(--color-blush-deep)", to: "var(--color-rose)" },
  { index: "03", label: "Fragrâncias", icon: PerfumeIcon, from: "var(--color-nude)", to: "var(--color-blush-deep)" },
  { index: "04", label: "Presentes", icon: GiftBoxIcon, from: "var(--color-rose)", to: "var(--color-nude)" },
];
