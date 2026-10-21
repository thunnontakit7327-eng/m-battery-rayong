import type { Metadata } from 'next';
import { Phone, CheckCircle, Wrench, Clock, Zap } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'บริการเปลี่ยนแบตเตอรี่รถยนต์นอกสถานที่ ระยอง | เอ็มแบตเตอรี่',
  description: 'บริการเปลี่ยนแบตเตอรี่รถยนต์นอกสถานที่ในระยอง แบตหมด รถสตาร์ทไม่ติด ถึงบ้าน ที่ทำงาน หรือริมถนน โทร 095-292-6881 ฟรีค่าแรงติดตั้ง',
};

export default function MobileServicePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl space-y-12">
      <div className="text-center">
        <span className="bg-primary/20 text-dark font-bold px-4 py-1.5 rounded-full text-sm inline-block mb-4">
          บริการฉุกเฉิน 24 ชม. / นอกสถานที่
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-dark mb-6">
          บริการเปลี่ยนแบตเตอรี่รถยนต์นอกสถานที่ ระยอง
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          รถสตาร์ทไม่ติด แบตเสื่อมกลางทาง ไม่ต้องลากรถไปอู่ เอ็มแบตเตอรี่ ระยอง พร้อมนำแบตเตอรี่ใหม่ส่งตรงถึงที่ พร้อมเปลี่ยนให้ทันทีโดยช่างมืออาชีพ
        </p>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-10 space-y-6">
        <h2 className="text-2xl font-bold text-dark">จุดเด่นบริการนอกสถานที่ของเรา</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-primary-dark shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-1">ฟรีค่าแรงติดตั้ง</h3>
              <p className="text-sm text-gray-600">บริการเปลี่ยนให้ถึงที่โดยไม่มีค่าบริการแรงงานเพิ่ม</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-primary-dark shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-1">แบตใหม่แกะกล่อง มีใบรับประกัน</h3>
              <p className="text-sm text-gray-600">แบตเตอรี่ของแท้ 100% จากโรงงานผู้ผลิตชั้นนำ</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-primary-dark shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-1">แจ้งราคาก่อนออกเดินทาง</h3>
              <p className="text-sm text-gray-600">ทราบราคาชัดเจนก่อนตกลงเปลี่ยน ไม่มีชาร์จเพิ่มหน้างาน</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-primary-dark shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-1">ตรวจเช็กระบบไฟฟรี</h3>
              <p className="text-sm text-gray-600">เช็กไดชาร์จและระบบไฟฟ้ารั่วหลังเปลี่ยนเสร็จทุกครั้ง</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark text-white rounded-3xl p-8 md:p-12 text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-extrabold">แบตหมด รถสตาร์ทไม่ติดในระยอง เรียกเราเลย!</h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          โทรแจ้งรุ่นรถและพิกัดของคุณ ช่างพร้อมเดินทางให้บริการอย่างรวดเร็ว
        </p>
        <a
          href={siteConfig.phoneHref}
          className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-dark font-extrabold text-xl px-8 py-4 rounded-xl shadow-xl transition-transform active:scale-95 touch-target"
        >
          <Phone className="w-6 h-6 fill-dark" /> โทร 095-292-6881 (สายด่วน)
        </a>
      </div>
    </div>
  );
}