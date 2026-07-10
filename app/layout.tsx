import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beny Kay — Consultora de Beleza",
  description:
    "Skincare, maquiagem e fragrâncias com curadoria pessoal. Consultoria de beleza independente Mary Kay com atendimento próximo, do diagnóstico à entrega na sua porta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="bg-cream font-sans text-charcoal antialiased">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
