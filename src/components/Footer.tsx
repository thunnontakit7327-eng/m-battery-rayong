import Link from 'next/link';
import { Phone, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300 pt-16 pb-24 lg:pb-12 border-t border-gray-800">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-primary text-dark font-black px-2.5 py-1 rounded-md text-lg">M</div>
            <span className="font-bold text-xl text-white">{siteConfig.name}</span>
          </div>
          <p className="text-sm text-gray-400 mb-4">
            บริการจำหน่ายและเปลี่ยนแบตเตอรี่รถยนต์ถึงที่ในระยอง แบตหมด รถสตาร์ทไม่ติด เรียกใช้บริการด่วน มั่นใจได้ของแท้ 100% พร้อมบริการด้วยความซื่อสัตย์
          </p>
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center gap-2 bg-primary text-dark font-bold px-4 py-2 rounded-lg hover:bg-primary-hover transition-colors"
          >
            <Phone className="w-4 h-4 fill-dark" /> {siteConfig.phone}
          </a>
        </div>

        <div>
          <h4 className="text-white font-bold text-lg mb-4">ลิงก์ด่วน</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-primary transition-colors">หน้าแรก</Link></li>
            <li><Link href="/mobile-car-battery-replacement/" className="hover:text-primary transition-colors">บริการเปลี่ยนแบตเตอรี่นอกสถานที่</Link></li>
            <li><Link href="/car-batteries/" className="hover:text-primary transition-colors">แบตเตอรี่รถยนต์ (GS, FB, 3K, Bosch ฯลฯ)</Link></li>
            <li><Link href="/service-areas/" className="hover:text-primary transition-colors">พื้นที่ให้บริการในระยอง</Link></li>
            <li><Link href="/articles/" className="hover:text-primary transition-colors">บทความสาระน่ารู้</Link></li>
            <li><Link href="/contact/" className="hover:text-primary transition-colors">ติดต่อและแผนที่</Link></li>
            <li><Link href="/privacy-policy/" className="hover:text-primary transition-colors">นโยบายความเป็นส่วนตัว</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-lg mb-4">ข้อมูลร้าน (NAP)</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>{siteConfig.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary shrink-0" />
              <span>เปิดให้บริการ: {siteConfig.openingHours}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <a href={siteConfig.phoneHref} className="hover:text-primary font-bold">{siteConfig.phone}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} {siteConfig.name} ({siteConfig.englishName}). สงวนลิขสิทธิ์ทั้งหมด.</p>
        <p className="mt-1">บริการเปลี่ยนแบตเตอรี่รถยนต์ ระยอง • ร้านแบตเตอรี่ใกล้ฉัน • รถสตาร์ทไม่ติดโทรด่วน</p>
      </div>
    </footer>
  );
}