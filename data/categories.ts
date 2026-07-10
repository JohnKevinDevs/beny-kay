export interface Category {
  index: string;
  label: string;
  from?: string;
  to?: string;
}

export const CATEGORIES: Category[] = [
  { index: "01", label: "Skincare" },
  { index: "02", label: "Maquiagem", from: "var(--color-blush-deep)", to: "var(--color-rose)" },
  { index: "03", label: "Fragrâncias", from: "var(--color-nude)", to: "var(--color-blush-deep)" },
  { index: "04", label: "Presentes", from: "var(--color-rose)", to: "var(--color-nude)" },
];
