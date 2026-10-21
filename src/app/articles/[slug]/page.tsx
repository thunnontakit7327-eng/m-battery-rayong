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
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: `${siteConfig.url}/articles/${article.slug}/`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
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
            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> อัปเดตล่าสุด 2026</span>
          </div>
        </header>

        <div className="prose prose-lg text-gray-700 space-y-6 leading-relaxed">
          <p className="text-lg font-medium text-gray-800 bg-gray-50 p-6 rounded-2xl border border-gray-200">
            {article.desc}
          </p>

          <h2 className="text-2xl font-bold text-dark pt-4">รายละเอียดและข้อสังเกตสำคัญ</h2>
          <p>
            ปัญหาเกี่ยวกับแบตเตอรี่รถยนต์เป็นเรื่องที่สามารถเกิดขึ้นได้กับผู้ขับขี่ทุกคน โดยเฉพาะเมื่อใช้งานแบตเตอรี่มาเป็นระยะเวลานาน หรือจอดรถทิ้งไว้เป็นเวลานานโดยไม่ได้สตาร์ทเครื่องยนต์ บทความนี้จะพาท่านไปทำความเข้าใจถึงสาเหตุและแนวทางแก้ไขที่ถูกต้อง
          </p>

          <h3 className="text-xl font-bold text-dark pt-2">ข้อควรปฏิบัติเมื่อเกิดปัญหา</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>ตรวจสอบขั้วแบตเตอรี่ว่ามีความหลวมหรือคราบเกลือขึ้นหรือไม่</li>
            <li>สังเกตไฟหน้าปัดรถยนต์ว่ามีความสว่างปกติหรืออ่อนแรงลง</li>
            <li>หากรถสตาร์ทไม่ติด แนะนำให้หลีกเลี่ยงการพยายามสตาร์ทต่อเนื่องหลายครั้ง เพราะอาจทำให้มอเตอร์สตาร์ทเสียหายได้</li>
            <li>ติดต่อผู้เชี่ยวชาญเพื่อตรวจวัดค่า CCA และสุขภาพแบตเตอรี่ด้วยเครื่องมือวัดมาตรฐาน</li>
          </ul>

          <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8 my-8 text-center space-y-4">
            <h3 className="text-xl font-extrabold text-dark">รถสตาร์ทไม่ติดในระยอง ต้องการเปลี่ยนแบตเตอรี่ด่วน?</h3>
            <p className="text-gray-600 text-sm">
              เอ็มแบตเตอรี่ ระยอง บริการเปลี่ยนแบตเตอรี่รถยนต์ถึงที่ ฟรีค่าแรง โดยช่างผู้ชำนาญการ โทรหาเราได้ทันที
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