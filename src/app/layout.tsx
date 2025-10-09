import type { Metadata } from 'next'
import '@fontsource/playfair-display/400.css'
import '@fontsource/playfair-display/700.css'
import '@fontsource/montserrat/300.css'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/700.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'NIALY | A Arquitetura da Jornada Executiva',
  description: 'Descubra a NIALY, uma agência de viagens premium que transforma jornadas em legados através de um serviço de ultra-luxo e curadoria incomparável.',
  keywords: 'viagens de luxo, turismo executivo, agência de viagens premium, viagens personalizadas, consultoria em viagens',
  authors: [{ name: 'NIALY Travel' }],
  creator: 'NIALY Travel',
  publisher: 'NIALY Travel',
  robots: 'index, follow',
  openGraph: {
    title: 'NIALY | A Arquitetura da Jornada Executiva',
    description: 'Descubra a NIALY, uma agência de viagens premium que transforma jornadas em legados através de um serviço de ultra-luxo e curadoria incomparável.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'NIALY Travel',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NIALY | A Arquitetura da Jornada Executiva',
    description: 'Descubra a NIALY, uma agência de viagens premium que transforma jornadas em legados através de um serviço de ultra-luxo e curadoria incomparável.',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0A1F44',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" />
      </head>
      <body className="font-montserrat antialiased">
        {children}
      </body>
    </html>
  )
}