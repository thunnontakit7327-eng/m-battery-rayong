import type { Metadata } from 'next';
import { Prompt } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';
import GoogleAdsTag from '@/components/GoogleAdsTag';
import { siteConfig } from '@/config/site';

const prompt = Prompt({
  subsets: ['thai', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-prompt',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'ร้านแบตเตอรี่ระยอง | เปลี่ยนแบตเตอรี่รถยนต์ถึงที่ - เอ็มแบตเตอรี่',
  description: 'เอ็มแบตเตอรี่ ระยอง บริการเปลี่ยนแบตเตอรี่รถยนต์ถึงที่และหน้าร้าน แบตหมด รถสตาร์ทไม่ติด โทร 095-292-6881 พร้อมให้คำแนะนำและนำทางมาร้าน',
  keywords: [
    'ร้านแบตเตอรี่ระยอง',
    'ร้านแบตเตอรี่ใกล้ฉัน',
    'เปลี่ยนแบตเตอรี่รถยนต์ระยอง',
    'เปลี่ยนแบตนอกสถานที่ระยอง',
    'แบตเตอรี่รถยนต์ระยอง',
    'รถสตาร์ทไม่ติด ระยอง',
    'ร้านแบตเตอรี่เมืองระยอง',
    'แบตเตอรี่ GS ระยอง',
    'แบตเตอรี่ FB ระยอง',
  ],
  authors: [{ name: 'M Battery Rayong' }],
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    url: siteConfig.url,
    title: 'ร้านแบตเตอรี่ระยอง | เปลี่ยนแบตเตอรี่รถยนต์ถึงที่ - เอ็มแบตเตอรี่',
    description: 'เอ็มแบตเตอรี่ ระยอง บริการเปลี่ยนแบตเตอรี่รถยนต์ถึงที่และหน้าร้าน แบตหมด รถสตาร์ทไม่ติด โทร 095-292-6881',
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ร้านแบตเตอรี่ระยอง | เปลี่ยนแบตเตอรี่รถยนต์ถึงที่',
    description: 'บริการเปลี่ยนแบตเตอรี่รถยนต์ถึงที่และหน้าร้าน โทร 095-292-6881',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    name: siteConfig.name,
    image: `${siteConfig.url}/images/gallery/store-1.jpg`,
    '@id': siteConfig.url,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    priceRange: '฿฿',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'สามแยกหมวดทางหลวงเชิงเนิน',
      addressLocality: 'เมืองระยอง',
      addressRegion: 'ระยอง',
      postalCode: '21000',
      addressCountry: 'TH',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '07:30',
      closes: '19:00',
    },
    hasMap: siteConfig.googlePlaceUrl,
    sameAs: [siteConfig.googlePlaceUrl],
  };

  return (
    <html lang="th" className={prompt.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileStickyBar />
        <GoogleAdsTag />
      </body>
    </html>
  );
}