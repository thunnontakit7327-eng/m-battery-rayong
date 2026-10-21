import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { articlesList } from '@/config/articles';

export const metadata: Metadata = {
  title: 'บทความสาระน่ารู้เกี่ยวกับแบตเตอรี่รถยนต์ | เอ็มแบตเตอรี่ ระยอง',
  description: 'รวมบทความ วิธีดูแลรักษาแบตเตอรี่รถยนต์ อาการแบตเสื่อม วิธีเลือกแบตเตอรี่รถยนต์ให้เหมาะกับรถคุณ จากเอ็มแบตเตอรี่ ระยอง',
};

export default function ArticlesPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl space-y-12">
      <div className="text-center">
        <span className="bg-primary/20 text-dark font-bold px-4 py-1.5 rounded-full text-sm inline-block mb-4">
          ความรู้คู่รถยนต์
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-dark mb-6">
          บทความและสาระน่ารู้
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          รวบรวมเกร็ดความรู้ วิธีการดูแลรักษา และคำแนะนำที่เป็นประโยชน์เกี่ยวกับแบตเตอรี่รถยนต์จากทีมงาน เอ็มแบตเตอรี่ ระยอง
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {articlesList.map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}/`}
            className="bg-gray-50 hover:bg-gray-100 border border-gray-200 p-6 md:p-8 rounded-2xl transition-all group flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-dark group-hover:text-primary-dark transition-colors">
                {article.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {article.desc}
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 text-dark font-bold text-sm bg-primary/20 px-4 py-2.5 rounded-xl w-fit">
              <span>อ่านบทความ</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}