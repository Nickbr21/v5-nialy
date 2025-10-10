import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NIALY Insiders | Acesso a Oportunidades Exclusivas",
  description: "Seja parte de um círculo exclusivo de viajantes que têm acesso às melhores ofertas e experiências únicas.",
  keywords: "grupo vip viagens, ofertas exclusivas, viagens de luxo, clube de viajantes",
  openGraph: {
    title: "NIALY Insiders | Acesso a Oportunidades Exclusivas",
    description: "Seja parte de um círculo exclusivo de viajantes que têm acesso às melhores ofertas e experiências únicas.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function GrupoVipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}