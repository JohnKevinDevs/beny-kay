import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FoilText } from "@/components/ui/FoilText";
import { Button } from "@/components/ui/Button";
import { Stars } from "@/components/ui/Stars";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { WhatsAppIcon, HeartIcon, PersonIcon } from "@/lib/icons";
import { WHATSAPP_LINKS } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[clamp(18px,2.6vw,40px)] pb-[clamp(56px,7vw,100px)]">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-20 -left-[120px] h-[520px] w-[520px] rounded-full bg-blush opacity-55 blur-[60px]" />
        <div className="absolute -right-[60px] -bottom-[120px] h-[440px] w-[440px] rounded-full bg-nude opacity-40 blur-[60px]" />
      </div>

      <Container className="relative z-2 grid grid-cols-[1.05fr_.95fr] items-center gap-[clamp(30px,5vw,70px)] max-[880px]:grid-cols-1">
        <div>
          <Eyebrow className="mb-[26px]">Consultora de Beleza Independente</Eyebrow>
          <h1 className="m-0 text-[clamp(3rem,6.4vw,5.8rem)] leading-[.96] tracking-[-.02em]">
            Beleza que
            <br />
            cuida de você,
            <br />
            <FoilText as="em">do seu jeito.</FoilText>
          </h1>
          <p className="lead mt-7 max-w-[46ch] text-charcoal-2">
            Skincare, maquiagem e fragrâncias com curadoria pessoal. Eu te ajudo a montar a rotina ideal — com
            atendimento próximo, do diagnóstico à entrega na sua porta.
          </p>
          <div className="mt-[34px] flex flex-wrap gap-3.5">
            <Button href={WHATSAPP_LINKS.hero} variant="wa">
              <WhatsAppIcon />
              Falar no WhatsApp
            </Button>
            <Button href="#produtos" variant="ghost">
              Ver produtos
            </Button>
          </div>
          <div className="mt-[38px] flex flex-wrap items-center gap-[22px]">
            <div className="flex">
              <span className="h-10 w-10 rounded-full border-2 border-cream bg-blush" />
              <span className="-ml-3 h-10 w-10 rounded-full border-2 border-cream bg-nude" />
              <span className="-ml-3 h-10 w-10 rounded-full border-2 border-cream bg-blush-deep" />
            </div>
            <small className="text-[.82rem] leading-[1.4] text-charcoal-2">
              <b className="font-medium text-charcoal">+200 clientes</b> atendidas com carinho
              <br />
              <Stars className="align-[-2px]" /> 5,0 de avaliação
            </small>
          </div>
        </div>

        <div className="relative max-[880px]:mx-auto max-[880px]:w-full max-[880px]:max-w-[440px] max-[540px]:max-w-[320px]">
          <div className="absolute top-[22px] -right-[18px] -bottom-[18px] left-[22px] z-0 [border-radius:200px_200px_14px_14px] border border-rose-gold opacity-45" />
          <div className="absolute -left-[7%] top-[13%] z-5 flex items-center gap-3 rounded-lg border border-charcoal/[.07] bg-ivory px-[18px] py-3.5 shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blush text-rose-gold-dp">
              <HeartIcon fill="currentColor" stroke="none" className="h-5 w-5" />
            </div>
            <div>
              <b className="block font-display text-[1.05rem] leading-none">Curadoria</b>
              <span className="text-[.7rem] tracking-[.06em] text-muted uppercase">feita pra você</span>
            </div>
          </div>
          <ImagePlaceholder
            icon={<PersonIcon />}
            label="Retrato da Beny / cliente"
            className="relative z-1 aspect-[4/5] [border-radius:200px_200px_14px_14px] border border-white/50 shadow-lg"
          />
        </div>
      </Container>
    </section>
  );
}
