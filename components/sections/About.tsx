import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ValueProp } from "@/components/ui/ValueProp";
import { PersonIcon } from "@/lib/icons";
import { VALUE_PROPS } from "@/data/valueProps";

export function About() {
  return (
    <section id="sobre" className="bg-cream-deep py-[clamp(64px,9vw,132px)]">
      <Container className="grid grid-cols-[.85fr_1.15fr] items-center gap-[clamp(34px,5vw,76px)] max-[880px]:grid-cols-1">
        <div className="relative max-[880px]:mx-auto max-[880px]:w-full max-[880px]:max-w-[440px]">
          <ImagePlaceholder
            icon={<PersonIcon />}
            label="Retrato — Beny Rodrigues"
            className="aspect-[4/5] rounded-[14px] shadow-md"
          />
          <Image
            src="/logo-mark.png"
            alt=""
            aria-hidden
            width={120}
            height={120}
            className="absolute -right-[22px] -bottom-[26px] w-[120px] drop-shadow-[0_14px_24px_rgba(120,80,68,.25)]"
          />
        </div>
        <div>
          <Eyebrow className="mb-[22px]">Prazer, sou a Beny</Eyebrow>
          <h2 className="display-lg">
            Beleza é cuidado —
            <br />
            e cuidado é <span className="script">pessoal.</span>
          </h2>
          <p className="lead mt-[26px] max-w-[52ch] text-charcoal-2">
            Como Consultora de Beleza Independente, eu acompanho cada cliente de perto: entendo a sua pele, o seu
            estilo e o seu momento para indicar exatamente o que faz sentido pra você. Sem pressa, com verdade.
          </p>
          <div className="mt-[38px] grid grid-cols-2 gap-x-9 gap-y-[30px] max-[760px]:grid-cols-1">
            {VALUE_PROPS.map((vp) => (
              <ValueProp key={vp.title} {...vp} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
