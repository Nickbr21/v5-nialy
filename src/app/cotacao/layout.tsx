import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NIALY | Solicite Sua Cotação de Alta Performance",
  description: "Receba uma cotação personalizada com rotas inteligentes, tarifas exclusivas e o selo NIALY de excelência.",
  keywords: "cotação viagem, orçamento viagem, planejamento viagem, viagens personalizadas",
  openGraph: {
    title: "NIALY | Solicite Sua Cotação de Alta Performance",
    description: "Receba uma cotação personalizada com rotas inteligentes, tarifas exclusivas e o selo NIALY de excelência.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function CotacaoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}