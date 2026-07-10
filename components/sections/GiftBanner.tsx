import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FoilText } from "@/components/ui/FoilText";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { GiftBoxIcon } from "@/lib/icons";
import { WHATSAPP_LINKS } from "@/data/site";

export function GiftBanner() {
  return (
    <section className="py-[clamp(64px,9vw,132px)]">
      <Container>
        <div className="relative overflow-hidden rounded-lg bg-charcoal text-cream">
          <div className="grid grid-cols-2 items-center gap-0 max-[820px]:grid-cols-1">
            <div className="p-[clamp(34px,5vw,68px)]">
              <Eyebrow className="mb-5 text-blush">Para presentear</Eyebrow>
              <h2 className="display-lg text-cream">
                Um presente que diz <FoilText as="span">eu te vejo.</FoilText>
              </h2>
              <p className="lead mt-[22px] max-w-[42ch] text-[#d8cec6]">
                Monte uma seleção especial e eu cuido do embrulho. Aniversário, Dia das Mães, &ldquo;só porque
                sim&rdquo; — beleza é sempre um carinho bem recebido.
              </p>
              <Button href={WHATSAPP_LINKS.gift} variant="light" className="mt-[30px]">
                Montar um presente
              </Button>
            </div>
            <div className="relative min-h-[340px] self-stretch max-[820px]:order-first max-[820px]:min-h-[260px]">
              <ImagePlaceholder
                icon={<GiftBoxIcon />}
                label="Box presente embrulhado"
                variant="ink"
                className="absolute inset-0 border-none"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
