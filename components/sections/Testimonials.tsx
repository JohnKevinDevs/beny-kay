import { Container } from "@/components/ui/Container";
import { Ornament } from "@/components/ui/Ornament";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { TESTIMONIALS } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-cream-deep py-[clamp(64px,9vw,132px)]">
      <Container>
        <div className="mb-[50px] text-center">
          <Ornament className="mb-[22px]" />
          <h2 className="display-lg">
            Quem compra, <span className="script">volta.</span>
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-6 max-[980px]:grid-cols-2 max-[640px]:grid-cols-1">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </Container>
    </section>
  );
}
