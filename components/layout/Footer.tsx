import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon, InstagramIcon } from "@/lib/icons";
import { CONTACT, FOOTER_CATEGORY_LINKS, FOOTER_NAV_LINKS, WHATSAPP_LINKS } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-charcoal py-9 pt-[72px] text-[#D8CEC6] [&_a:hover]:text-blush [&_a]:text-[#D8CEC6] [&_a]:transition-colors [&_a]:duration-[250ms]">
      <Container>
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10 max-[860px]:grid-cols-2 max-[860px]:gap-[34px] max-[560px]:grid-cols-1">
          <div>
            <Image
              src="/logo-benykay-light.png"
              alt="Beny Kay"
              width={997}
              height={874}
              className="mb-5 h-[84px] w-auto"
            />
            <p className="m-0 max-w-[32ch] text-[.92rem] text-[#A99E95]">
              Beny Rodrigues — Consultora de Beleza Independente. Skincare, maquiagem e fragrâncias com atendimento
              de verdade.
            </p>
            <div className="mt-[18px] flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/[.18]"
              >
                <InstagramIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href={WHATSAPP_LINKS.footer}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/[.18]"
              >
                <WhatsAppIcon className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>
          <div>
            <h5 className="m-0 mb-[18px] font-sans text-[.74rem] font-medium tracking-[.2em] text-blush uppercase">
              Categorias
            </h5>
            <ul className="m-0 flex list-none flex-col gap-[11px] p-0 text-[.92rem]">
              {FOOTER_CATEGORY_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="m-0 mb-[18px] font-sans text-[.74rem] font-medium tracking-[.2em] text-blush uppercase">
              Navegar
            </h5>
            <ul className="m-0 flex list-none flex-col gap-[11px] p-0 text-[.92rem]">
              {FOOTER_NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="m-0 mb-[18px] font-sans text-[.74rem] font-medium tracking-[.2em] text-blush uppercase">
              Fale comigo
            </h5>
            <ul className="m-0 flex list-none flex-col gap-[11px] p-0 text-[.92rem]">
              <li>
                <a href={WHATSAPP_LINKS.footer} target="_blank" rel="noopener noreferrer">
                  {CONTACT.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </li>
              <li className="text-[#A99E95]">{CONTACT.hours}</li>
              <li className="text-[#A99E95]">{CONTACT.delivery}</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap justify-between gap-4 border-t border-white/[.12] pt-6">
          <span className="fine text-[#8C817A]">© 2026 Beny Kay · Consultora de Beleza Independente</span>
          <span className="fine text-[#8C817A]">Feito com carinho ✦</span>
        </div>
      </Container>
    </footer>
  );
}
