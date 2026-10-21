import type { Metadata } from 'next';
import { Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'แบตเตอรี่รถยนต์ ระยอง | GS, FB, 3K, Bosch, Amaron - เอ็มแบตเตอรี่',
  description: 'จำหน่ายแบตเตอรี่รถยนต์ระยอง แบรนด์ชั้นนำ GS, FB, 3K, BOSCH, AMARON, PUMA พร้อมบริการเปลี่ยนถึงที่ ฟรีค่าแรง โทร 095-292-6881',
};

export default function CarBatteriesPage() {
  const batteriesInfo = [
    { brand: "GS Battery", desc: "แบตเตอรี่สัญชาติญี่ปุ่นยอดนิยม ทนทาน คุ้มค่า มีชื่อเสียงยาวนาน" },
    { brand: "FB Battery", desc: "พลังไฟอึด ทนทาน เหมาะกับสภาพอากาศเมืองไทยและรถทุกประเภท" },
    { brand: "3K Battery", desc: "แบตเตอรี่ไทยมาตรฐานสากล กำลังสตาร์ทสูง ทนทานทุกการใช้งาน" },
    { brand: "BOSCH", desc: "เทคโนโลยีเยอรมนีขั้นสูง จ่ายไฟเสถียร เหมาะกับรถยุโรปและรถญี่ปุ่น" },
    { brand: "AMARON", desc: "แบตเตอรี่ชนิดกึ่งแห้ง/แห้ง อายุการใช้งานยาวนาน ไม่ต้องดูแลน้ำกลั่นบ่อย" },
    { brand: "PUMA", desc: "แบตเตอรี่ Maintenance Free พลังไฟแรง พร้อมตาแมวบอกสถานะแบตเตอรี่" }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl space-y-12">
      <div className="text-center">
        <span className="bg-primary/20 text-dark font-bold px-4 py-1.5 rounded-full text-sm inline-block mb-4">
          สินค้าคุณภาพ ของแท้ 100%
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-dark mb-6">
          แบตเตอรี่รถยนต์ ระยอง
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          เอ็มแบตเตอรี่ ระยอง คัดสรรแบตเตอรี่รถยนต์คุณภาพสูงจากแบรนด์ชั้นนำระดับโลก ตรงรุ่นรถยนต์ทุกยี่ห้อ ทั้งรถเก๋ง กระบะ SUV และรถยุโรป
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {batteriesInfo.map((item, idx) => (
          <div key={idx} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col justify-between shadow-sm">
            <div>
              <div className="bg-dark text-primary font-black text-xl px-4 py-2 rounded-xl w-fit mb-4">
                {item.brand}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {item.desc}
              </p>
            </div>
            <a
              href={siteConfig.phoneHref}
              className="bg-primary hover:bg-primary-hover text-dark font-bold py-2.5 px-4 rounded-xl text-center flex items-center justify-center gap-2 touch-target"
            >
              <Phone className="w-4 h-4 fill-dark" /> สอบถามรุ่นนี้โทรเลย
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}