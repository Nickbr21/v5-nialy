import Script from 'next/script';

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NIALY | A Arquitetura da Jornada Executiva",
  description: "Descubra a NIALY, a agência que transforma viagens em legados através de um serviço de ultra-luxo e uma experiência incomparável.",
  keywords: "viagens de luxo, jato privado, experiências exclusivas, turismo premium, viagens executivas",
  authors: [{ name: "NIALY" }],
  openGraph: {
    title: "NIALY | A Arquitetura da Jornada Executiva",
    description: "Transformamos viagens em legados através de um serviço de ultra-luxo e uma experiência incomparável.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "NIALY | A Arquitetura da Jornada Executiva",
    description: "Transformamos viagens em legados através de um serviço de ultra-luxo e uma experiência incomparável.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Montserrat:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
        {/* Google Tag Manager - Script Principal */}
<Script id="google-tag-manager" strategy="afterInteractive">
  {`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-5CZKRXQS');
  `}
</Script>
      </head>
      <body className="font-inter antialiased">
        {children}
      </body>
      {/* Google Tag Manager (noscript) */}
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5CZKRXQS"
height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
{/* End Google Tag Manager (noscript) */}
    </html>
  );
}