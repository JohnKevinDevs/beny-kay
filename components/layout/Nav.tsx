"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { MenuIcon } from "@/lib/icons";
import { NAV_LINKS, WHATSAPP_LINKS } from "@/data/site";

export function Nav() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/[.07] bg-cream/[.82] backdrop-blur-[14px]">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-[clamp(20px,5vw,88px)] py-3.5">
        <a href="#top" className="flex items-center gap-3">
          <Image src="/logo-mark.png" alt="Beny Kay" width={40} height={40} priority className="h-10 w-auto" />
          <b className="font-display text-[1.15rem] font-medium tracking-[.02em]">Beny Kay</b>
        </a>
        <nav className="flex gap-[34px] text-[.8rem] font-normal tracking-[.1em] uppercase max-[880px]:hidden">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="py-1.5 text-charcoal-2 transition-colors hover:text-rose-gold-dp">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3.5">
          <Button href={WHATSAPP_LINKS.nav} variant="rose" size="sm" className="max-[540px]:hidden">
            Falar comigo
          </Button>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={mobileNavOpen}
            onClick={() => setMobileNavOpen((open) => !open)}
            className="hidden cursor-pointer border-none bg-transparent max-[880px]:block"
          >
            <MenuIcon className="h-[26px] w-[26px] text-charcoal" />
          </button>
        </div>
      </div>
      {mobileNavOpen && (
        <div className="border-t border-charcoal/[.07] bg-cream">
          <div className="mx-auto flex flex-col gap-1 px-[clamp(20px,5vw,88px)] py-3.5">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileNavOpen(false)} className="py-2.5">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
