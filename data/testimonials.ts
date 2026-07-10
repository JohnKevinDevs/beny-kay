export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatarColor: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "A Beny entende exatamente da minha pele. Foi a primeira vez que comprei skincare sem medo de errar.",
    name: "Larissa M.",
    role: "Cliente desde 2025",
    avatarColor: "bg-blush",
  },
  {
    quote: "Atendimento de outro nível. Me senti cuidada do início ao fim, e o presente chegou lindo de embrulhar.",
    name: "Rafaela S.",
    role: "Cliente desde 2025",
    avatarColor: "bg-nude",
  },
  {
    quote: "Comprar com a Beny é leve. Ela me lembra do que preciso e sempre tem uma novidade que combina comigo.",
    name: "Patrícia R.",
    role: "Cliente desde 2025",
    avatarColor: "bg-blush-deep",
  },
];
