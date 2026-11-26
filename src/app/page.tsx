import type { Metadata } from 'next';
import StoreGallery from '@/components/StoreGallery';
import GoogleReviews from '@/components/GoogleReviews';
import { siteConfig } from '@/config/site';
import Image from 'next/image';
import Link from 'next/link';
import { serviceAreas } from '@/config/areas';
import GoogleRatingBadge from '@/components/GoogleRatingBadge';
import { Phone, MapPin, Clock, ShieldCheck, Wrench, Battery, CalendarDays, PhoneCall, BadgeCheck, Truck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'เอ็มแบตเตอรี่ ระยอง | ร้านแบตเตอรี่รถยนต์ เปลี่ยนแบตเตอรี่นอกสถานที่ ถึงใน 15 นาที',
  alternates: { canonical: '/' },
  description: 'ร้านเอ็มแบตเตอรี่ ระยอง บริเวณสามแยกหมวดทางหลวงเชิงเนิน บริการจำหน่ายและเปลี่ยนแบตเตอรี่รถยนต์นอกสถานที่ในระยอง ถึงใน 15 นาที เปิดทุกวัน 07:30–19:00 น. โทร 095-292-6881',
};

export default function HomePage() {
  return (
    <>
      {/* ข้อมูลร้านสำหรับ Google (JSON-LD) อยู่ใน layout.tsx ชุดเดียว */}
      <div className="min-h-screen">
        {/* SECTION 1: Hero Banner — รูปช่างทำงานจริงเป็นพื้นหลัง */}
        <section className="relative isolate overflow-hidden bg-black text-white">
          <Image
            src="/images/gallery/store-4.jpg"
            alt="ช่างเอ็มแบตเตอรี่ ระยอง กำลังเปลี่ยนแบตเตอรี่รถยนต์ให้ลูกค้า"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_35%] -z-20 opacity-60"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/75 to-black/30 md:bg-gradient-to-r md:from-black md:via-black/80 md:to-black/10" />
          <div className="container mx-auto px-4 max-w-6xl pt-20 pb-16 md:py-28">
            <div className="max-w-2xl space-y-5 text-center md:text-left">
              <GoogleRatingBadge />
              <h1 className="text-4xl md:text-6xl font-black leading-tight">
                <span className="text-primary">เอ็มแบตเตอรี่ ระยอง</span>
                <span className="block text-2xl md:text-4xl font-extrabold text-white mt-2">
                  แบตหมด สตาร์ทไม่ติด <span className="text-primary whitespace-nowrap">ถึงใน 15 นาที</span>
                </span>
              </h1>
              <p className="text-base md:text-xl text-gray-200 leading-relaxed">
                ร้านแบตเตอรี่รถยนต์ สามแยกหมวดทางหลวงเชิงเนิน บริการเปลี่ยนแบตถึงที่ทั่วเมืองระยอง ฟรีค่าบริการ เปิดทุกวัน 07:30–19:00 น.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-3">
                <a
                  href={siteConfig.phoneHref}
                  className="bg-primary hover:bg-primary-hover text-dark font-black text-lg px-8 py-4 rounded-2xl shadow-xl shadow-primary/20 transition-all active:scale-95 flex items-center justify-center gap-3"
                >
                  <Phone className="w-6 h-6 fill-dark" />
                  <span>โทร {siteConfig.phone}</span>
                </a>
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur text-white font-bold px-6 py-4 rounded-2xl border border-white/25 flex items-center justify-center gap-2"
                >
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>นำทางมาที่ร้าน</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: แถบจุดเด่น */}
        <section className="bg-primary text-dark">
          <ul className="container mx-auto px-4 max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-3 py-5 text-sm md:text-base font-bold">
            <li className="flex items-center gap-2"><Clock className="w-5 h-5 shrink-0" /> ถึงใน 15 นาที</li>
            <li className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 shrink-0" /> แบตแท้ มีใบรับประกัน</li>
            <li className="flex items-center gap-2"><Wrench className="w-5 h-5 shrink-0" /> ตรวจระบบไฟฟรี</li>
            <li className="flex items-center gap-2"><CalendarDays className="w-5 h-5 shrink-0" /> <span className="whitespace-nowrap">ทุกวัน 07:30–19:00</span></li>
          </ul>
        </section>

        {/* SECTION 3: บริการเปลี่ยนแบตเตอรี่รถยนต์ */}
        <section className="py-16 bg-white" id="services">
          <div className="container mx-auto px-4 max-w-5xl text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              บริการของเรา เอ็มแบตเตอรี่ ระยอง
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="border border-gray-200 p-8 rounded-2xl bg-gray-50 space-y-3">
                <Battery className="w-10 h-10 text-amber-500" />
                <h3 className="text-xl font-bold text-gray-900">เปลี่ยนแบตเตอรี่ที่หน้าร้าน</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  แวะมาเปลี่ยนแบตเตอรี่ที่หน้าร้านบริเวณสามแยกหมวดทางหลวงเชิงเนิน มีบริการสำรองไฟระบบรถยนต์ขณะเปลี่ยน
                </p>
              </div>
              <div className="border border-gray-200 p-8 rounded-2xl bg-gray-50 space-y-3">
                <Phone className="w-10 h-10 text-amber-500" />
                <h3 className="text-xl font-bold text-gray-900">เปลี่ยนแบตเตอรี่นอกสถานที่ด่วน</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  บริการส่งและเปลี่ยนถึงบ้าน ที่ทำงาน หรือจุดเกิดเหตุฉุกเฉินทั่วจังหวัดระยอง ไม่คิดค่าบริการเพิ่ม
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3.5: ขั้นตอนใช้บริการ */}
        <section className="py-16 bg-gray-50 border-y border-gray-200">
          <div className="container mx-auto px-4 max-w-5xl space-y-10">
            <div className="text-center space-y-2">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">เรียกช่างง่ายๆ 3 ขั้นตอน</h2>
              <p className="text-gray-600">ไม่ต้องลากรถ ไม่ต้องรอคิวอู่</p>
            </div>
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: PhoneCall, title: 'โทรแจ้งรุ่นรถและพิกัด', desc: 'บอกยี่ห้อ รุ่น ปีรถ และจุดที่รถจอดอยู่ แล้วส่งพิกัดให้ช่าง' },
                { icon: BadgeCheck, title: 'แจ้งราคาก่อนออกเดินทาง', desc: 'ช่างแนะนำรุ่นแบตที่ตรงกับรถ และแจ้งราคาให้ตกลงก่อน' },
                { icon: Truck, title: 'ถึงใน 15 นาที เปลี่ยนให้ทันที', desc: 'เปลี่ยนแบตพร้อมเช็กไดชาร์จและระบบไฟให้ก่อนกลับ' },
              ].map((step, i) => (
                <li key={step.title} className="relative bg-white rounded-2xl border border-gray-200 p-6 pt-8 shadow-sm">
                  <span className="absolute -top-4 left-6 bg-dark text-primary font-black w-9 h-9 rounded-full flex items-center justify-center shadow">
                    {i + 1}
                  </span>
                  <step.icon className="w-9 h-9 text-amber-500 mb-3" />
                  <h3 className="font-bold text-lg text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">{step.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* SECTION 4: แบรนด์แบตเตอรี่ที่จำหน่าย */}
        <section className="py-12 bg-gray-900 text-white">
          <div className="container mx-auto px-4 max-w-5xl text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-amber-400">
              จำหน่ายแบตเตอรี่ชั้นนำครบทุกยี่ห้อ
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-6 font-black text-xl text-gray-400">
              <span className="bg-gray-800 px-6 py-3 rounded-xl border border-gray-700 text-white">GS BATTERY</span>
              <span className="bg-gray-800 px-6 py-3 rounded-xl border border-gray-700 text-white">FB BATTERY</span>
              <span className="bg-gray-800 px-6 py-3 rounded-xl border border-gray-700 text-white">3K BATTERY</span>
              <span className="bg-gray-800 px-6 py-3 rounded-xl border border-gray-700 text-white">PUMA</span>
              <span className="bg-gray-800 px-6 py-3 rounded-xl border border-gray-700 text-white">AMARON</span>
            </div>
          </div>
        </section>

        {/* SECTION 5: รูปภาพหน้าร้านและผลงานจริง */}
        <StoreGallery />

        {/* SECTION 6: รีวิวจาก Google Maps */}
        <GoogleReviews />

        {/* SECTION 7: พื้นที่ให้บริการ */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 max-w-5xl text-center space-y-6">
            <h2 className="text-3xl font-extrabold text-gray-900">พื้นที่ให้บริการด่วนในระยอง</h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              ครอบคลุมพื้นที่ อ.เมืองระยอง, เชิงเนิน, ทับมา, เนินพระ, มาบตาพุด, ปากน้ำระยอง, บ้านฉาง และพื้นที่ใกล้เคียง
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              {serviceAreas.map((a) => (
                <Link
                  key={a.slug}
                  href={`/service-areas/${a.slug}`}
                  className="bg-white border border-gray-200 hover:border-amber-400 rounded-full px-5 py-2.5 text-sm font-bold text-gray-900 shadow-sm"
                >
                  เปลี่ยนแบตเตอรี่ {a.short}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8: คำถามที่พบบ่อย */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl space-y-6">
            <h2 className="text-3xl font-extrabold text-center text-gray-900">คำถามที่พบบ่อย (FAQ)</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 p-5 rounded-2xl">
                <h3 className="font-bold text-gray-900">มีค่าบริการส่งนอกสถานที่หรือไม่?</h3>
                <p className="text-gray-600 text-sm mt-1">ไม่มีค่าบริการส่งและติดตั้งเพิ่มเติม ชำระเฉพาะค่าแบตเตอรี่เท่านั้น</p>
              </div>
              <div className="border border-gray-200 p-5 rounded-2xl">
                <h3 className="font-bold text-gray-900">แบตเตอรี่มีการรับประกันอย่างไร?</h3>
                <p className="text-gray-600 text-sm mt-1">แบตเตอรี่ทุกลูกเป็นของแท้ รับประกันจากบริษัทผู้ผลิต 12–24 เดือน พร้อมใบรับประกัน</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: Google Maps พร้อมปุ่มนำทาง */}
        <section className="py-12 bg-gray-900 text-white">
          <div className="container mx-auto px-4 max-w-5xl text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-amber-400">แผนที่ร้าน เอ็มแบตเตอรี่ ระยอง</h2>
            <p className="text-gray-300 text-sm">สามแยกหมวดทางหลวงเชิงเนิน ถนนสุขุมวิท เมืองระยอง</p>
            <div className="aspect-[16/9] max-w-3xl mx-auto rounded-2xl overflow-hidden border border-gray-700 shadow-xl">
              <iframe
                src={siteConfig.mapEmbedUrl}
                title="แผนที่ร้าน เอ็มแบตเตอรี่ ระยอง"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}