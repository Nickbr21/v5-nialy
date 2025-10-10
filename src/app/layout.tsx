import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NIALY | A Arquitetura da Jornada Executiva',
  description: 'Descubra a NIALY, uma agência de viagens premium que transforma jornadas em legados através de um serviço de ultra-luxo e curadoria incomparável.',
  keywords: 'viagens de luxo, turismo executivo, viagens premium, agência de viagens, NIALY',
  authors: [{ name: 'NIALY' }],
  openGraph: {
    title: 'NIALY | A Arquitetura da Jornada Executiva',
    description: 'Descubra a NIALY, uma agência de viagens premium que transforma jornadas em legados através de um serviço de ultra-luxo e curadoria incomparável.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NIALY | A Arquitetura da Jornada Executiva',
    description: 'Descubra a NIALY, uma agência de viagens premium que transforma jornadas em legados através de um serviço de ultra-luxo e curadoria incomparável.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="font-inter antialiased">
        {children}
      </body>
    </html>
  )
}