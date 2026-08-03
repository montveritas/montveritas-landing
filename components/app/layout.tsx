import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Montserrat } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#081B33',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Montveritas | Estratégias de Alavancagem Patrimonial',
  description:
    'Construa, multiplique e proteja seu patrimônio através de estratégias patrimoniais personalizadas. Diagnóstico Estratégico Gratuito.',
  keywords: [
    'Patrimônio',
    'Planejamento Patrimonial',
    'Consórcio',
    'Consórcio Inteligente',
    'Alavancagem Patrimonial',
    'Renda Passiva',
    'Investimentos',
    'Patrimônio Imobiliário',
    'Proteção Patrimonial',
    'Planejamento Sucessório',
    'Consórcio Imobiliário',
    'Consórcio Automóvel',
    'Imóveis',
    'Studios',
    'Flat Studios',
    'Ecossistema de Soluções Patrimoniais',
    'Montveritas',
  ],
  authors: [{ name: 'Montveritas' }],
  metadataBase: new URL('https://montveritas.com.br'),
  alternates: {
    canonical: 'https://montveritas.com.br',
  },
  openGraph: {
    title: 'Montveritas | Estratégias de Alavancagem Patrimonial',
    description:
      'Construa, multiplique e proteja seu patrimônio através de estratégias patrimoniais personalizadas. Diagnóstico Estratégico Gratuito.',
    url: 'https://montveritas.com.br',
    siteName: 'Montveritas',
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Montveritas - Estratégias de Alavancagem Patrimonial',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Montveritas | Estratégias de Alavancagem Patrimonial',
    description:
      'Construa, multiplique e proteja seu patrimônio através de estratégias patrimoniais personalizadas. Diagnóstico Estratégico Gratuito.',
    images: ['/assets/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': 'https://montveritas.com.br/#organization',
      name: 'Montveritas',
      legalName: 'Montveritas Estratégias Patrimoniais',
      url: 'https://montveritas.com.br',
      logo: 'https://montveritas.com.br/assets/logo-circ.png',
      image: 'https://montveritas.com.br/assets/og-image.jpg',
      description: 'Desenvolvimento de Estratégias Patrimoniais Inteligentes e Alavancagem Patrimonial.',
      slogan: 'Construa, Multiplique e Proteja seu Patrimônio.',
      knowsAbout: [
        'Construção Patrimonial',
        'Multiplicação Patrimonial',
        'Proteção Patrimonial',
        'Legado e Sucessão',
        'Ecossistema de Soluções Patrimoniais',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': 'https://montveritas.com.br/#service',
      name: 'Montveritas - Estratégias de Alavancagem Patrimonial',
      provider: { '@id': 'https://montveritas.com.br/#organization' },
      areaServed: {
        '@type': 'Country',
        name: 'Brasil',
      },
      serviceType: 'Consultoria Estratégica Patrimonial',
      description: 'Estratégias patrimoniais personalizadas utilizando um ecossistema de parceiros consolidados.',
      url: 'https://montveritas.com.br',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': 'https://montveritas.com.br/#website',
      url: 'https://montveritas.com.br',
      name: 'Montveritas',
      publisher: { '@id': 'https://montveritas.com.br/#organization' },
      inLanguage: 'pt-BR',
    },
  ];

  return (
    <html lang="pt-BR" className={`${playfair.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="bg-[#081B33] text-[#1E1E1E] antialiased">
        {children}
      </body>
    </html>
  );
}
