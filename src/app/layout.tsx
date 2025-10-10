import type { Metadata } from 'next'
import '@fontsource/playfair-display/400.css'
import '@fontsource/playfair-display/700.css'
import '@fontsource/montserrat/300.css'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/600.css'
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
      <body className="font-montserrat antialiased">
        {children}
      </body>
    </html>
  )
}