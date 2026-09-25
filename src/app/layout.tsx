// EMBASSY CATERING — src/app/layout.tsx — SEO/AEO Optimized June 24, 2026
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import PWARegistrar from '@/components/ui/PWARegistrar'; 
import PWAInstallPrompt from '@/components/ui/PWAInstallPrompt';
import { Cormorant_Garamond, Great_Vibes, Jost } from 'next/font/google';
import '@/styles/variables.css';
import '@/styles/typography.css';
import './globals.css';

import CustomCursor from '@/components/ui/CustomCursor';
import SmoothScroll from '@/components/providers/SmoothScroll';
import FloatingContactCTA from '@/components/ui/FloatingContactCTA';
import EventIntentPrompt from '@/components/ui/EventIntentPrompt';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display-next',
  display: 'swap',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-script-next',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--font-body-next',
  display: 'swap',
});

export const metadata: Metadata = {
  // FIXED: Added metadataBase configuration to cleanly resolve production asset paths
  metadataBase: new URL('https://embassy-catering.netlify.app'),

  title: {
    template: '%s | The Embassy Catering — Since 1948',
    default: 'The Embassy Catering — Every Celebration Carries a Legacy | Since 1948',
  },
  description:
    "The Embassy Catering — luxury multi-cuisine caterer since 1948. 25,000+ weddings, 50+ cuisines, 6,000+ dishes. Award-winning catering for weddings, corporate, and diplomatic events.",
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Embassy Catering',
  },
  icons: {
    icon: [
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },
  
  keywords: [
    'luxury catering Delhi', 'wedding caterer Delhi NCR', 'embassy catering since 1948',
    'multi-cuisine catering Delhi', 'corporate event catering Delhi', 'diplomatic catering India',
    'best caterer Delhi', 'catering for 2000 guests Delhi', 'live counter catering Delhi',
    'wedding catering cost Delhi', 'banquet catering Delhi NCR', 'royal cuisine catering',
  ],
  
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://embassy-catering.netlify.app',
    siteName: 'The Embassy Catering',
    title: 'The Embassy Catering — Every Celebration Carries a Legacy | Since 1948',
    description: "Luxury multi-cuisine caterer since 1948. 25,000+ weddings, 50+ cuisines, 6,000+ dishes. Award-winning catering for weddings, corporate, and diplomatic events.",
    images: [
      {
        url: '/assets/hero-bg-poster.webp',
        width: 1200,
        height: 630,
        alt: 'The Embassy Catering — Heritage luxury catering since 1948',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'The Embassy Catering — Luxury Catering Delhi NCR Since 1948',
    description: "Delhi's original luxury caterer since 1948.",
    images: ['/assets/hero-bg-poster.webp'],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  alternates: {
    canonical: 'https://embassy-catering.netlify.app',
  },
  
  verification: {
    google: 'REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#B11226',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'FoodEstablishment'],
        '@id': 'https://embassy-catering.netlify.app/#organization',
        name: 'The Embassy Catering',
        alternateName: ['Embassy Catering', 'Embassy Catering Delhi', 'The Embassy Caterers'],
        foundingDate: '1948',
        description: "Delhi NCR's original luxury caterer since 1948. Award-winning multi-cuisine catering for weddings, corporate events, diplomatic banquets, and private celebrations. Over 10 million guests served across 75+ years of heritage.",
        telephone: '+91-11-4123-4567',
        email: 'events@embassycatering.in',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '20:00',
          },
        ],
        areaServed: [
          { '@type': 'City', name: 'New Delhi' },
          { '@type': 'City', name: 'Gurgaon' },
          { '@type': 'City', name: 'Noida' },
          { '@type': 'City', name: 'Faridabad' },
          { '@type': 'City', name: 'Kanpur' },
          { '@type': 'AdministrativeArea', name: 'Delhi NCR' },
        ],
        servesCuisine: [
          'North Indian', 'Mughlai', 'Awadhi', 'Bengali', 'Rajasthani', 'South Indian',
          'Continental', 'Italian', 'Mediterranean', 'Chinese', 'Japanese', 'Thai', 'Multi-Cuisine',
        ],
        priceRange: '₹₹₹₹',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '6459',
          bestRating: '5',
          worstRating: '1',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'D-100, Udyog Vihar, Phase -V',
          addressLocality: 'Gurgaon',
          addressRegion: 'Haryana',
          postalCode: '122016',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 28.5254,
          longitude: 77.2713,
        },
        url: 'https://embassy-catering.netlify.app',
        logo: {
          '@type': 'ImageObject',
          url: 'https://embassy-catering.netlify.app/assets/embassy-logo.png',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Embassy Catering Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Wedding Catering Delhi NCR',
                description: 'Luxury wedding catering for 100–5,000 guests. Custom multi-cuisine menus, live counter stations, full-service banqueting. Prices start from ₹2,000 per person.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Corporate Event Catering Delhi',
                description: 'Corporate lunches, dinners, conferences, product launches, and award galas for 50–3,000 guests. Trusted by Fortune 500 companies and government institutions.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Diplomatic Banquet Catering India',
                description: 'Protocol-compliant catering for embassies, government receptions, and state-level events. International operations including the Netherlands.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Live Counter Catering Delhi',
                description: 'Interactive live food stations including wood-fired pizza, sushi bar, live chaat counter, dimsum, and jalebi station for weddings and events.',
              },
            },
          ],
        },
        sameAs: [
          'https://www.instagram.com/embassycatering',
          'https://www.facebook.com/embassycatering',
          'https://www.justdial.com/New-Delhi/Embassy-Catering',
          'https://www.wedmegood.com/wedding-vendor/Embassy-Catering',
        ],
        award: 'Premier luxury catering house of Delhi NCR since 1948',
        numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 100, maxValue: 500 },
        keywords: 'luxury catering Delhi, wedding caterer Delhi NCR, corporate catering Delhi, diplomatic catering India, live counter catering, multi-cuisine catering',
      },
      {
        '@type': 'WebSite',
        '@id': 'https://embassy-catering.netlify.app/#website',
        url: 'https://embassy-catering.netlify.app',
        name: 'The Embassy Catering',
        description: 'Luxury multi-cuisine catering Delhi NCR since 1948 — weddings, corporate events, and diplomatic banquets.',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://embassy-catering.netlify.app/journal?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', '.speakable'],
        },
      },
    ],
  };

  return (
    <html lang="en-IN" className={`${cormorant.variable} ${greatVibes.variable} ${jost.variable}`} suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Embassy Catering" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        <meta name="msapplication-TileColor" content="#B11226" />
        <meta name="msapplication-TileImage" content="/icons/icon-192.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>

      <body>
        <PWARegistrar />
        <PWAInstallPrompt />
        {children}
        <SmoothScroll />
        <CustomCursor />
        <FloatingContactCTA />
        <EventIntentPrompt />

        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/CustomEase.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://unpkg.com/@phosphor-icons/web"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}