import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Montserrat } from 'next/font/google';
import Script from 'next/script';
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

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const facebookDomainVerification = process.env.NEXT_PUBLIC_FACEBOOK_DOMAIN_VERIFICATION;

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
  verification: {
    ...(googleSiteVerification ? { google: googleSiteVerification } : {}),
    ...(facebookDomainVerification
      ? { other: { 'facebook-domain-verification': facebookDomainVerification } }
      : {}),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const linkedinPartnerId = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;

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
        {/* Schema.org Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Google Tag Manager - Head Script */}
        {gtmId && (
          <Script
            id="google-tag-manager"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
              `,
            }}
          />
        )}

        {/* Google Analytics 4 (GA4) */}
        {gaId && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}

        {/* Meta Pixel (Facebook & Instagram) */}
        {metaPixelId && (
          <Script
            id="meta-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${metaPixelId}');
                fbq('track', 'PageView');
              `,
            }}
          />
        )}

        {/* LinkedIn Insight Tag */}
        {linkedinPartnerId && (
          <Script
            id="linkedin-insight"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                _linkedin_partner_id = "${linkedinPartnerId}";
                window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                window._linkedin_data_partner_ids.push(_linkedin_partner_id);
                (function(l) {
                  if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                  window.lintrk.q=[]}
                  var s = document.getElementsByTagName("script")[0];
                  var b = document.createElement("script");
                  b.type = "text/javascript";b.async = true;
                  b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                  s.parentNode.insertBefore(b, s);
                })(window.lintrk);
              `,
            }}
          />
        )}
      </head>
      <body suppressHydrationWarning className="bg-[#081B33] text-[#1E1E1E] antialiased">
        {/* Google Tag Manager (noscript fallback) */}
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}

        {/* Meta Pixel (noscript fallback) */}
        {metaPixelId && (
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              alt=""
              src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
            />
          </noscript>
        )}

        {/* LinkedIn Insight Tag (noscript fallback) */}
        {linkedinPartnerId && (
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              alt=""
              src={`https://px.ads.linkedin.com/collect/?pid=${linkedinPartnerId}&fmt=gif`}
            />
          </noscript>
        )}

        {children}
      </body>
    </html>
  );
}
