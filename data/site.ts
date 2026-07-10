const WHATSAPP_NUMBER = "5511984011182";

function waLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const STORE_URL = "https://loja.marykay.com.br/minha-vitrine?slug=benymk";

export const WHATSAPP_LINKS = {
  float: waLink("Olá Beny! Vim pelo site e gostaria de uma consultoria."),
  nav: waLink(),
  hero: waLink("Olá Beny!"),
  gift: waLink("Quero montar um presente"),
  finalCta: waLink("Olá Beny! Quero uma consultoria."),
  footer: waLink(),
};

export const CONTACT = {
  whatsappDisplay: "WhatsApp (11) 98401-1182",
  email: "contato@benykay.com.br",
  hours: "Atendimento de seg. a sáb.",
  delivery: "Entrega para toda a região",
};

export const NAV_LINKS = [
  { href: "#categorias", label: "Categorias" },
  { href: "#sobre", label: "Sobre" },
  { href: "#produtos", label: "Produtos" },
  { href: "#depoimentos", label: "Depoimentos" },
];

export const FOOTER_CATEGORY_LINKS = [
  { href: "#categorias", label: "Skincare" },
  { href: "#categorias", label: "Maquiagem" },
  { href: "#categorias", label: "Fragrâncias" },
  { href: "#categorias", label: "Presentes" },
];

export const FOOTER_NAV_LINKS = [
  { href: "#sobre", label: "Sobre a Beny" },
  { href: "#produtos", label: "Produtos" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: STORE_URL, label: "Loja oficial", external: true },
];
