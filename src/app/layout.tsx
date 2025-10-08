import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NIALY | A Arquitetura da Jornada Executiva',
  description: 'Descubra a NIALY, uma agência de viagens premium que transforma jornadas em legados através de um serviço de ultra-luxo e curadoria incomparável.',
  keywords: 'viagens de luxo, viagens executivas, agência de viagens premium, NIALY, jornadas personalizadas',
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
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-montserrat antialiased">
        {children}
      </body>
    </html>
  )
}