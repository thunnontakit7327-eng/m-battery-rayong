import type { Metadata } from 'next';
import { Phone, MapPin, Clock, Navigation } from 'lucide-react';
import { siteConfig } from '@/config/site';
import GoogleMapEmbed from '@/components/GoogleMapEmbed';

export const metadata: Metadata = {
  title: 'ติดต่อ เอ็มแบตเตอรี่ ระยอง | ร้านแบตเตอรี่รถยนต์ใกล้ฉัน',
  description: 'ติดต่อ เอ็มแบตเตอรี่ ระยอง โทร 095-292-6881 ตั้งอยู่บริเวณสามแยกหมวดทางหลวงเชิงเนิน อ.เมืองระยอง เปิดทุกวัน 07:30–19:00 น.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl space-y-12">
      <div className="text-center">
        <span className="bg-primary/20 text-dark font-bold px-4 py-1.5 rounded-full text-sm inline-block mb-4">
          ติดต่อเรา
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-dark mb-6">
          ติดต่อ เอ็มแบตเตอรี่ ระยอง
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          ต้องการเปลี่ยนแบตเตอรี่รถยนต์ด่วน สอบถามราคารุ่นรถ หรือเดินทางมาที่ร้าน ติดต่อเราได้ตามข้อมูลด้านล่างนี้
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-50 border border-gray-200 p-8 rounded-3xl space-y-6">
          <h2 className="text-2xl font-bold text-dark">ข้อมูลติดต่อ (NAP)</h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <strong className="block text-dark">ที่อยู่ร้าน</strong>
                <span className="text-sm">{siteConfig.address}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="w-6 h-6 text-primary shrink-0" />
              <div>
                <strong className="block text-dark">เวลาเปิดทำการ</strong>
                <span className="text-sm">{siteConfig.openingHours}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-primary shrink-0" />
              <div>
                <strong className="block text-dark">เบอร์โทรศัพท์ด่วน</strong>
                <a href={siteConfig.phoneHref} className="text-lg font-bold text-dark hover:text-primary-dark">
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-md touch-target"
            >
              <Navigation className="w-5 h-5" /> นำทางมาที่ร้าน (Google Maps)
            </a>
          </div>
        </div>

        <div>
          <GoogleMapEmbed />
        </div>
      </div>
    </div>
  );
}