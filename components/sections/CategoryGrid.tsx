import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { CATEGORIES } from "@/data/categories";

export function CategoryGrid() {
  return (
    <section id="categorias" className="py-[clamp(64px,9vw,132px)]">
      <Container>
        <div className="mb-[42px] flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow className="mb-[18px]">Explore por categoria</Eyebrow>
            <h2 className="display-lg">
              Tudo para o seu
              <br />
              <span className="script">ritual de beleza</span>
            </h2>
          </div>
          <a
            href="#produtos"
            className="inline-flex items-center gap-[.6em] border-b border-charcoal/[.12] pb-[.4em] font-sans text-[.78rem] font-medium tracking-[.18em] text-charcoal uppercase transition-[gap,border-color,color] duration-300 hover:gap-[1em] hover:border-rose-gold hover:text-rose-gold-dp"
          >
            Ver catálogo completo →
          </a>
        </div>
        <div className="grid grid-cols-4 gap-6 max-[980px]:grid-cols-2 max-[640px]:grid-cols-1">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.label}
              className="relative flex aspect-[3/4] items-end overflow-hidden rounded-md border border-charcoal/[.07]"
            >
              <ImagePlaceholder label={cat.label} from={cat.from} to={cat.to} className="absolute inset-0" />
              <div className="relative z-2 w-full bg-[linear-gradient(to_top,rgba(28,24,22,.7),transparent)] p-[22px] text-ivory">
                <span className="text-[.72rem] tracking-[.18em] uppercase opacity-85">{cat.index}</span>
                <h3 className="m-0 text-[1.5rem] text-ivory">{cat.label}</h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
