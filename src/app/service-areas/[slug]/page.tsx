import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Phone, MapPin, CheckCircle, ArrowLeft, Clock } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { serviceAreas } from '@/config/areas';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return serviceAreas.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const area = serviceAreas.find((a) => a.slug === params.slug);
  if (!area) return {};
  return {
    title: area.title,
    description: area.desc,
    alternates: { canonical: `/service-areas/${area.slug}` },
    openGraph: {
      title: area.title,
      description: area.desc,
      url: `/service-areas/${area.slug}`,
      images: [{ url: '/images/og-cover.jpg', width: 1200, height: 630 }],
    },
  };
}

export default function ServiceAreaPage({ params }: PageProps) {
  const area = serviceAreas.find((a) => a.slug === params.slug);
  if (!area) notFound();

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `เปลี่ยนแบตเตอรี่รถยนต์นอกสถานที่ ${area.name}`,
      serviceType: 'เปลี่ยนแบตเตอรี่รถยนต์',
      provider: { '@id': siteConfig.url },
      areaServed: { '@type': 'AdministrativeArea', name: `${area.name} จังหวัดระยอง` },
      url: `${siteConfig.url}/service-areas/${area.slug}`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'หน้าแรก', item: siteConfig.url },
        { '@type': 'ListItem', position: 2, name: 'พื้นที่ให้บริการ', item: `${siteConfig.url}/service-areas` },
        { '@type': 'ListItem', position: 3, name: area.name, item: `${siteConfig.url}/service-areas/${area.slug}` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: area.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ];

  const others = serviceAreas.filter((a) => a.slug !== area.slug);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container mx-auto px-4 py-10 max-w-4xl space-y-10">
        <Link href="/service-areas" className="inline-flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-dark">
          <ArrowLeft className="w-4 h-4" /> พื้นที่ให้บริการทั้งหมด
        </Link>

        <header className="text-center space-y-5">
          <span className="bg-primary/20 text-dark font-bold px-4 py-1.5 rounded-full text-sm inline-flex items-center gap-2">
            <MapPin className="w-4 h-4" /> {area.name} จ.ระยอง
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-dark leading-tight">
            เปลี่ยนแบตเตอรี่รถยนต์ {area.short}
            <span className="block text-primary-dark mt-2">ถึงใน 15 นาที</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">{area.intro}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <a
              href={siteConfig.phoneHref}
              className="bg-primary hover:bg-primary-hover text-dark font-extrabold text-lg px-8 py-4 rounded-2xl shadow-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5 fill-dark" /> โทร {siteConfig.phone}
            </a>
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dark hover:bg-dark-light text-white font-bold px-6 py-4 rounded-2xl flex items-center justify-center gap-2"
            >
              <MapPin className="w-5 h-5 text-primary" /> นำทางมาที่ร้าน
            </a>
          </div>
          <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" /> {siteConfig.openingHours}
          </p>
        </header>

        <section className="bg-gray-50 border border-gray-200 rounded-3xl p-6 md:p-10 space-y-5">
          <h2 className="text-2xl font-bold text-dark">บริการใน{area.name}</h2>
          <ul className="space-y-3">
            {area.local.map((t) => (
              <li key={t} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-dark shrink-0 mt-1" />
                <span className="text-gray-700">{t}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-bold text-dark">เรียกช่างใน{area.short} บอกข้อมูลนี้ช่วยให้ถึงเร็วขึ้น</h2>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {area.tips.map((t, i) => (
              <li key={t} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                <span className="bg-dark text-primary font-black w-8 h-8 rounded-full inline-flex items-center justify-center mb-3">
                  {i + 1}
                </span>
                <p className="text-gray-700">{t}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-dark">คำถามที่พบบ่อย</h2>
          {area.faqs.map((f) => (
            <div key={f.q} className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-dark text-lg mb-1">{f.q}</h3>
              <p className="text-gray-700">{f.a}</p>
            </div>
          ))}
        </section>

        <section className="bg-dark text-white rounded-3xl p-8 text-center space-y-4">
          <h2 className="text-2xl font-extrabold">แบตหมดใน{area.short}? โทรเลย</h2>
          <p className="text-gray-300">แจ้งรุ่นรถและพิกัด ช่างแจ้งราคาก่อนออกเดินทาง</p>
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-dark font-extrabold text-xl px-8 py-4 rounded-xl shadow-xl"
          >
            <Phone className="w-6 h-6 fill-dark" /> {siteConfig.phone}
          </a>
        </section>

        <nav className="space-y-3" aria-label="พื้นที่อื่น">
          <h2 className="text-lg font-bold text-dark">พื้นที่ให้บริการอื่น</h2>
          <div className="flex flex-wrap gap-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/service-areas/${o.slug}`}
                className="bg-white border border-gray-200 hover:border-primary rounded-full px-4 py-2 text-sm font-bold text-dark"
              >
                เปลี่ยนแบตเตอรี่ {o.short}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
