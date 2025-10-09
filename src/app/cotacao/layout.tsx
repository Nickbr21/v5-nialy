import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NIALY | Solicite Sua Cotação de Alta Performance',
  description: 'Solicite uma cotação personalizada para sua próxima viagem de luxo. Consultoria especializada gratuita e proposta exclusiva em até 24 horas.',
  keywords: 'cotação viagem luxo, orçamento viagem premium, consultoria viagens, planejamento viagem executiva',
  robots: 'index, follow',
  openGraph: {
    title: 'NIALY | Solicite Sua Cotação de Alta Performance',
    description: 'Solicite uma cotação personalizada para sua próxima viagem de luxo. Consultoria especializada gratuita e proposta exclusiva em até 24 horas.',
    type: 'website',
  },
}

export default function CotacaoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}