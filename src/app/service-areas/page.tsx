import type { Metadata } from 'next';
import { MapPin, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'พื้นที่ให้บริการเปลี่ยนแบตเตอรี่ระยอง | เอ็มแบตเตอรี่',
  description: 'เอ็มแบตเตอรี่ ระยอง บริการเปลี่ยนแบตเตอรี่รถยนต์นอกสถานที่ครอบคลุมอำเภอเมืองระยอง สามแยกหมวดทางหลวงเชิงเนิน ทับมา เนินพระ และพื้นที่ใกล้เคียง',
};

export default function ServiceAreasPage() {
  const areas = [
    "สามแยกหมวดทางหลวงเชิงเนิน (ที่ตั้งร้าน)",
    "อำเภอเมืองระยอง",
    "ตำบลเชิงเนิน",
    "ตำบลทับมา",
    "ตำบลเนินพระ",
    "ตำบลมาบตาพุด",
    "ตำบลห้วยโป่ง",
    "ถนนสุขุมวิท ระยอง",
    "ถนนสายบายพาส ระยอง"
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl space-y-12">
      <div className="text-center">
        <span className="bg-primary/20 text-dark font-bold px-4 py-1.5 rounded-full text-sm inline-block mb-4">
          ครอบคลุมทั่วเมืองระยอง
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-dark mb-6">
          พื้นที่ให้บริการเปลี่ยนแบตเตอรี่รถยนต์
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          ร้านเอ็มแบตเตอรี่ ตั้งอยู่บริเวณสามแยกหมวดทางหลวงเชิงเนิน อำเภอเมืองระยอง พร้อมบริการจัดส่งและเปลี่ยนแบตเตอรี่นอกสถานที่ในพื้นที่ใกล้เคียงอย่างรวดเร็ว
        </p>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8">
        <h2 className="text-2xl font-bold text-dark mb-6">เขตพื้นที่บริการหลัก</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {areas.map((area, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <span className="font-medium text-dark">{area}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <p className="text-gray-600 mb-6">รถเสีย แบตหมดในพื้นที่ระยอง สอบถามเส้นทางหรือเรียกช่างด่วนได้เลย</p>
        <a
          href={siteConfig.phoneHref}
          className="inline-flex items-center gap-2 bg-primary text-dark font-bold px-8 py-4 rounded-xl text-lg hover:bg-primary-hover shadow-lg touch-target"
        >
          <Phone className="w-5 h-5 fill-dark" /> โทร 095-292-6881
        </a>
      </div>
    </div>
  );
}