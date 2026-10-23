import type { Metadata } from 'next';
import { Phone, MapPin, Clock, Navigation } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'ติดต่อ เอ็มแบตเตอรี่ ระยอง | ร้านแบตเตอรี่รถยนต์ใกล้ฉัน',
  description: 'ติดต่อ เอ็มแบตเตอรี่ ระยอง โทร 095-292-6881 บริการเปลี่ยนแบตเตอรี่รถยนต์ถึงที่และหน้าร้าน สามแยกหมวดทางหลวงเชิงเนิน เปิดทุกวัน 07:30-19:00 น.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl space-y-12">
      <div className="text-center">
        <span className="bg-primary/20 text-dark font-bold px-4 py-1.5 rounded-full text-sm inline-block mb-4">
          ติดต่อเราตลอดเวลาทำการ
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-dark mb-6">
          ติดต่อ เอ็มแบตเตอรี่ ระยอง
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          รถสตาร์ทไม่ติด แบตหมด ต้องการเปลี่ยนแบตเตอรี่ด่วน หรือปรึกษาเรื่องสเปครถ ติดต่อเราได้ทันทีตามช่องทางด้านล่างนี้
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 space-y-6">
          <h2 className="text-2xl font-bold text-dark">ข้อมูลการติดต่อ</h2>
          
          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-primary-dark shrink-0 mt-1" />
            <div>
              <strong className="block text-dark font-bold">เบอร์โทรศัพท์สายด่วน</strong>
              <a href={siteConfig.phoneHref} className="text-lg font-extrabold text-blue-600 hover:underline">
                {siteConfig.phone}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-primary-dark shrink-0 mt-1" />
            <div>
              <strong className="block text-dark font-bold">ที่อยู่ร้าน</strong>
              <span className="text-sm text-gray-600">{siteConfig.address}</span>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Clock className="w-6 h-6 text-primary-dark shrink-0 mt-1" />
            <div>
              <strong className="block text-dark font-bold">เวลาเปิดทำการ</strong>
              <span className="text-sm text-gray-600">{siteConfig.openingHours}</span>
            </div>
          </div>
        </div>

        <div className="bg-dark text-white rounded-3xl p-8 flex flex-col justify-between space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">ต้องการความช่วยเหลือด่วน?</h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              หากรถของคุณจอดเสียอยู่บนท้องถนน หรือต้องการให้เราวิ่งไปเปลี่ยนแบตเตอรี่ให้ถึงที่บ้าน/ที่ทำงาน สามารถกดโทรหาช่างได้ทันที
            </p>
          </div>
          <div className="space-y-4">
            <a
              href={siteConfig.phoneHref}
              className="w-full bg-primary hover:bg-primary-hover text-dark font-extrabold py-4 px-6 rounded-xl flex items-center justify-center gap-3 text-lg shadow-lg touch-target"
            >
              <Phone className="w-6 h-6 fill-dark animate-bounce" />
              <span>โทรเรียกช่าง 095-292-6881</span>
            </a>
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 text-lg shadow-lg touch-target"
            >
              <Navigation className="w-5 h-5" />
              <span>นำทางมาที่ร้าน (Google Maps)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}