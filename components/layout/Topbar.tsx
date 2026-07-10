export function Topbar() {
  return (
    <div className="bg-charcoal px-4 py-[9px] text-center font-sans text-[.72rem] font-light tracking-[.16em] text-cream uppercase max-[640px]:flex max-[640px]:flex-col max-[640px]:gap-1.5 max-[640px]:py-3">
      <span>Atendimento personalizado</span>
      <span className="max-[640px]:hidden">&nbsp;·&nbsp;</span>
      <span>Entrega para toda a região</span>
      <span className="max-[640px]:hidden">&nbsp;·&nbsp;</span>
      <b className="font-medium text-blush">Amostras grátis na primeira compra</b>
    </div>
  );
}
