import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NIALY Insiders | Acesso a Oportunidades Exclusivas',
  description: 'Junte-se ao NIALY Insiders e tenha acesso a ofertas exclusivas de viagens com descontos de até 70% e experiências VIP.',
  keywords: 'NIALY Insiders, ofertas exclusivas viagem, descontos viagem luxo, grupo VIP',
  openGraph: {
    title: 'NIALY Insiders | Acesso a Oportunidades Exclusivas',
    description: 'Junte-se ao NIALY Insiders e tenha acesso a ofertas exclusivas de viagens com descontos de até 70% e experiências VIP.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NIALY Insiders | Acesso a Oportunidades Exclusivas',
    description: 'Junte-se ao NIALY Insiders e tenha acesso a ofertas exclusivas de viagens com descontos de até 70% e experiências VIP.',
  },
}

export default function InsidersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}