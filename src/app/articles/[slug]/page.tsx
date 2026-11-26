import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Phone, ArrowLeft, Calendar, User } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { articlesList } from '@/config/articles';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return articlesList.map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = articlesList.find((a) => a.slug === params.slug);
  if (!article) return {};

  return {
    title: `${article.title} | เอ็มแบตเตอรี่ ระยอง`,
    description: article.desc,
    alternates: { canonical: `/articles/${article.slug}` },
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.desc,
      url: `/articles/${article.slug}`,
      images: [{ url: '/images/og-cover.jpg', width: 1200, height: 630 }],
    },
  };
}

export default function ArticleDetailPage({ params }: PageProps) {
  const article = articlesList.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.desc,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name
    },
    datePublished: article.updated,
    dateModified: article.updated,
    mainEntityOfPage: `${siteConfig.url}/articles/${article.slug}`,
  };

  const faqSchema = article.faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: article.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null;

  const updatedLabel = new Date(article.updated + 'T00:00:00+07:00').toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Bangkok',
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <div className="container mx-auto px-4 py-12 max-w-3xl space-y-8">
        <Link href="/articles/" className="inline-flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-dark transition-colors">
          <ArrowLeft className="w-4 h-4" /> กลับสู่หน้าบทความ
        </Link>

        <header className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-dark leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-xs text-gray-500 pb-4 border-b border-gray-200">
            <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> เอ็มแบตเตอรี่ ระยอง</span>
            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> อัปเดตล่าสุด {updatedLabel}</span>
          </div>
        </header>

        <div className="prose prose-lg text-gray-700 space-y-6 leading-relaxed">
          <p className="text-lg font-medium text-gray-800 bg-gray-50 p-6 rounded-2xl border border-gray-200">
            {article.intro}
          </p>

          {article.sections.map((sec) => (
            <section key={sec.heading} className="space-y-4">
              <h2 className="text-2xl font-bold text-dark pt-4">{sec.heading}</h2>
              {sec.paragraphs?.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {sec.list &&
                (sec.ordered ? (
                  <ol className="list-decimal pl-6 space-y-2">
                    {sec.list.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ol>
                ) : (
                  <ul className="list-disc pl-6 space-y-2">
                    {sec.list.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ul>
                ))}
              {sec.note && (
                <p className="text-sm bg-amber-50 border border-amber-200 text-amber-900 rounded-xl p-4">
                  <strong>ข้อควรรู้:</strong> {sec.note}
                </p>
              )}
            </section>
          ))}

          {article.faqs && article.faqs.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-dark pt-4">คำถามที่พบบ่อย</h2>
              {article.faqs.map((f) => (
                <div key={f.q} className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-dark text-lg mb-2">{f.q}</h3>
                  <p className="text-gray-700">{f.a}</p>
                </div>
              ))}
            </section>
          )}

          <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8 my-8 text-center space-y-4">
            <h3 className="text-xl font-extrabold text-dark">รถสตาร์ทไม่ติดในระยอง ต้องการเปลี่ยนแบตเตอรี่?</h3>
            <p className="text-gray-600 text-sm">
              เอ็มแบตเตอรี่ ระยอง บริการตรวจเช็กและเปลี่ยนแบตเตอรี่รถยนต์ ที่ร้านหรือนอกสถานที่ เปิดทุกวัน 07:30–19:00 น.
            </p>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-dark font-extrabold px-6 py-3 rounded-xl shadow-md touch-target"
            >
              <Phone className="w-5 h-5 fill-dark" /> โทร 095-292-6881
            </a>
          </div>
        </div>
      </div>
    </>
  );
}