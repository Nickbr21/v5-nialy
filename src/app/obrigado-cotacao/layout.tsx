import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NIALY | Solicitação Recebida com Sucesso",
  description: "Sua solicitação foi recebida. Nossa equipe entrará em contato em breve.",
  keywords: "cotação recebida, agradecimento, confirmação viagem",
  openGraph: {
    title: "NIALY | Solicitação Recebida com Sucesso",
    description: "Sua solicitação foi recebida. Nossa equipe entrará em contato em breve.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function ObrigadoCotacaoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}