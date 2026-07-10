export interface Step {
  number: string;
  title: string;
  description: string;
}

export const STEPS: Step[] = [
  {
    number: "01",
    title: "Escolha o que ama",
    description: "Navegue pelas categorias ou me conte o que procura — eu te ajudo a decidir.",
  },
  {
    number: "02",
    title: "Fale comigo",
    description: "Tire dúvidas no WhatsApp, receba indicações e feche seu pedido com tranquilidade.",
  },
  {
    number: "03",
    title: "Receba em casa",
    description: "Entrega cuidadosa em toda a região, com amostras de brinde e acompanhamento.",
  },
];
