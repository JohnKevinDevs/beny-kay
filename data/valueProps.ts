import type { ComponentType } from "react";
import { CheckIcon, SparkleIcon, PackageIcon, TruckIcon } from "@/lib/icons";

export interface ValuePropItem {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export const VALUE_PROPS: ValuePropItem[] = [
  {
    icon: CheckIcon,
    title: "Diagnóstico de pele",
    description: "Indicações personalizadas a partir do seu tipo de pele e rotina.",
  },
  {
    icon: SparkleIcon,
    title: "Amostras & brindes",
    description: "Experimente antes de decidir, com mimos em cada pedido.",
  },
  {
    icon: PackageIcon,
    title: "Embrulho de presente",
    description: "Embalagem especial pronta para presentear quem você ama.",
  },
  {
    icon: TruckIcon,
    title: "Entrega na sua casa",
    description: "Receba com agilidade em toda a região, com acompanhamento.",
  },
];
