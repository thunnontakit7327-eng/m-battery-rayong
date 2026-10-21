import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'นโยบายความเป็นส่วนตัว | เอ็มแบตเตอรี่ ระยอง',
  description: 'นโยบายความเป็นส่วนตัวและการคุ้มครองข้อมูลส่วนบุคคลของเว็บไซต์ เอ็มแบตเตอรี่ ระยอง',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl space-y-8">
      <h1 className="text-3xl md:text-4xl font-extrabold text-dark">นโยบายความเป็นส่วนตัว (Privacy Policy)</h1>
      <p className="text-gray-600 text-sm">อัปเดตล่าสุด: มกราคม 2026</p>

      <div className="prose text-gray-700 space-y-6 leading-relaxed text-sm md:text-base">
        <p>
          เว็บไซต์ <strong>{siteConfig.name}</strong> ({siteConfig.url}) ให้ความสำคัญกับการคุ้มครองข้อมูลส่วนบุคคลของคุณ นโยบายความเป็นส่วนตัวฉบับนี้อธิบายถึงวิธีที่เราเก็บรวบรวม ใช้ และเปิดเผยข้อมูลเมื่อท่านติดต่อใช้บริการของเรา
        </p>

        <h2 className="text-xl font-bold text-dark pt-4">1. ข้อมูลที่เราเก็บรวบรวม</h2>
        <p>
          เมื่อท่านติดต่อเราผ่านทางโทรศัพท์หรือเดินทางมาใช้บริการที่ร้าน เราอาจมีความจำเป็นต้องเก็บรวบรวมข้อมูลพื้นฐาน เช่น ชื่อ เบอร์โทรศัพท์ และพิกัดสถานที่ เพื่อใช้ในการประสานงานบริการเปลี่ยนแบตเตอรี่นอกสถานที่
        </p>

        <h2 className="text-xl font-bold text-dark pt-4">2. การใช้ประโยชน์ของข้อมูล</h2>
        <p>
          ข้อมูลที่ท่านให้ไว้จะถูกใช้เพื่อวัตถุประสงค์ในการให้บริการเปลี่ยนแบตเตอรี่รถยนต์ การติดต่อประสานงาน และการรับประกันสินค้าเท่านั้น เราไม่มีนโยบายนำข้อมูลของท่านไปจำหน่ายหรือเผยแพร่แก่บุคคลภายนอก
        </p>

        <h2 className="text-xl font-bold text-dark pt-4">3. ติดต่อเรา</h2>
        <p>
          หากท่านมีข้อสงสัยเกี่ยวกับนโยบายความเป็นส่วนตัว สามารถติดต่อเราได้ที่ {siteConfig.phone} หรือเดินทางมาที่ {siteConfig.address}
        </p>
      </div>
    </div>
  );
}