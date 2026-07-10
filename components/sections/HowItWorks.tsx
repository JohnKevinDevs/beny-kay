import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { StepItem } from "@/components/ui/StepItem";
import { STEPS } from "@/data/steps";

export function HowItWorks() {
  return (
    <section className="bg-cream-deep py-[clamp(64px,9vw,132px)]">
      <Container>
        <div className="mb-[54px] text-center">
          <Eyebrow noRule className="mb-[18px] justify-center">
            Simples assim
          </Eyebrow>
          <h2 className="display-lg">Como comprar comigo</h2>
        </div>
        <div className="grid grid-cols-3 gap-7 max-[760px]:grid-cols-1 max-[760px]:gap-9">
          {STEPS.map((step) => (
            <StepItem key={step.number} {...step} />
          ))}
        </div>
      </Container>
    </section>
  );
}
