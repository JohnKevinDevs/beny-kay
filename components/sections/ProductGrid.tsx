import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
import { PRODUCTS } from "@/data/products";
import { STORE_URL } from "@/data/site";

export function ProductGrid() {
  return (
    <section id="produtos" className="py-[clamp(64px,9vw,132px)]">
      <Container>
        <div className="mx-auto mb-[50px] max-w-[600px] text-center">
          <Eyebrow noRule className="mb-[18px] justify-center">
            Seleção da consultora
          </Eyebrow>
          <h2 className="display-lg">Favoritos das clientes</h2>
          <p className="lead mt-[18px] text-charcoal-2">
            Uma vitrine dos produtos mais pedidos. Toque em <em className="script">comprar</em> para garantir o seu
            pela loja oficial — ou fale comigo para uma indicação sob medida.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 max-[980px]:grid-cols-2 max-[640px]:gap-4">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href={STORE_URL} variant="rose">
            Ver loja oficial completa
          </Button>
        </div>
      </Container>
    </section>
  );
}
