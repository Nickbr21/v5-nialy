import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NIALY Insiders | Acesso a Oportunidades Exclusivas',
  description: 'Junte-se ao grupo VIP NIALY Insiders e tenha acesso a ofertas exclusivas, descontos de até 60% e experiências únicas de viagem.',
  keywords: 'grupo vip viagens, ofertas exclusivas viagem, descontos viagem luxo, comunidade viajantes premium',
  robots: 'index, follow',
  openGraph: {
    title: 'NIALY Insiders | Acesso a Oportunidades Exclusivas',
    description: 'Junte-se ao grupo VIP NIALY Insiders e tenha acesso a ofertas exclusivas, descontos de até 60% e experiências únicas de viagem.',
    type: 'website',
  },
}

export default function InsidersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}