import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NIALY | Solicite Sua Cotação de Alta Performance',
  description: 'Solicite sua cotação personalizada para viagens de luxo. Receba uma proposta exclusiva em até 24 horas com a NIALY.',
  keywords: 'cotação viagem luxo, orçamento viagem premium, solicitar cotação NIALY',
  openGraph: {
    title: 'NIALY | Solicite Sua Cotação de Alta Performance',
    description: 'Solicite sua cotação personalizada para viagens de luxo. Receba uma proposta exclusiva em até 24 horas com a NIALY.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NIALY | Solicite Sua Cotação de Alta Performance',
    description: 'Solicite sua cotação personalizada para viagens de luxo. Receba uma proposta exclusiva em até 24 horas com a NIALY.',
  },
}

export default function CotacaoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}