import { Container } from "@/components/ui/Container";
import { Ornament } from "@/components/ui/Ornament";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/lib/icons";
import { WHATSAPP_LINKS } from "@/data/site";

export function FinalCta() {
  return (
    <section className="py-[clamp(64px,9vw,132px)]">
      <Container>
        <div className="relative overflow-hidden rounded-lg bg-[linear-gradient(165deg,#F7E4DC,#E8C9BD_60%,#DCA593)] p-[clamp(46px,6vw,86px)] text-center">
          <Ornament className="mb-6 text-rose-gold-dp" />
          <h2 className="display-lg mx-auto max-w-[18ch]">Vamos conversar sobre a sua beleza?</h2>
          <p className="lead mx-auto mt-5 max-w-[48ch] text-charcoal-2">
            Me chame no WhatsApp para uma consultoria sem compromisso, ou receba minhas dicas e novidades por e-mail.
          </p>
          <div className="mt-[34px] flex flex-wrap items-center justify-center gap-3.5">
            <Button href={WHATSAPP_LINKS.finalCta} variant="rose">
              <WhatsAppIcon />
              Chamar no WhatsApp
            </Button>
            <div className="flex items-center gap-2.5 rounded-full border border-white/80 bg-white/70 py-[.55em] pr-[.6em] pl-[1.4em] max-[540px]:w-full max-[540px]:flex-wrap">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="w-full border-none bg-transparent font-sans text-base font-light text-charcoal placeholder:text-muted focus:outline-none"
              />
              <Button variant="primary" size="sm">
                Quero dicas
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
