import type { Metadata } from 'next';
import PhoneCallButton from '@/components/PhoneCallButton';
import StoreGallery from '@/components/StoreGallery';
import GoogleReviews from '@/components/GoogleReviews';
import { siteConfig } from '@/config/site';
import { Phone, MapPin, Clock, ShieldCheck, Wrench, Battery } from 'lucide-react';

export const metadata: Metadata = {
  title: 'เอ็มแบตเตอรี่ ระยอง | ร้านแบตเตอรี่รถยนต์ เปลี่ยนแบตเตอรี่นอกสถานที่ด่วน 24 ชม.',
  description: 'ร้านเอ็มแบตเตอรี่ ระยอง บริเวณสามแยกหมวดทางหลวงเชิงเนิน บริการจำหน่ายและเปลี่ยนแบตเตอรี่รถยนต์นอกสถานที่ระยอง ด่วนถึงที่ภายใน 30 นาที โทร 095-292-6881',
};

export default function HomePage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    name: siteConfig.name,
    image: `${siteConfig.url}/images/gallery/storefront-main.jpg`,
    '@id': siteConfig.url,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'สามแยกหมวดทางหลวงเชิงเนิน ถนนสุขุมวิท ต.เชิงเนิน',
      addressLocality: 'เมืองระยอง',
      addressRegion: 'ระยอง',
      postalCode: '21000',
      addressCountry: 'TH',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 12.681,
      longitude: 101.281,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <main className="min-h-screen pb-20 md:pb-0">
        {/* SECTION 1: Hero Banner */}
        <section className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-16 md:py-24 border-b border-amber-400/30">
          <div className="container mx-auto px-4 max-w-5xl text-center space-y-6">
            <span className="bg-amber-400 text-black font-extrabold px-4 py-1.5 rounded-full text-xs md:text-sm inline-block shadow-md">
              ร้านแบตเตอรี่ระยอง บริการด่วนถึงที่ใน 30 นาที
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-amber-400 leading-tight">
              เอ็มแบตเตอรี่ ระยอง
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              รถสตาร์ทไม่ติด แบตเตอรี่หมดกลางทาง บริการส่งและเปลี่ยนแบตเตอรี่รถยนต์นอกสถานที่ทั่วเมืองระยอง ฟรีค่าบริการ
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={siteConfig.phoneHref}
                className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-black font-black text-lg px-8 py-4 rounded-2xl shadow-xl transition-all active:scale-95 flex items-center justify-center gap-3"
              >
                <Phone className="w-6 h-6 fill-black" />
                <span>โทรด่วน {siteConfig.phone}</span>
              </a>
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 text-amber-400 font-bold px-6 py-4 rounded-2xl border border-amber-400/30 flex items-center justify-center gap-2"
              >
                <MapPin className="w-5 h-5 text-amber-400" />
                <span>นำทางมาที่ร้าน</span>
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 2: จุดเด่นของร้าน */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex items-start gap-4">
              <Clock className="w-10 h-10 text-amber-500 shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900 text-lg">รวดเร็วถึงใน 30 นาที</h3>
                <p className="text-gray-600 text-sm mt-1">ทีมช่างแสตนบายพร้อมออกให้บริการฉุกเฉินทั่วระยอง</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex items-start gap-4">
              <ShieldCheck className="w-10 h-10 text-amber-500 shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900 text-lg">แบตเตอรี่แท้ 100%</h3>
                <p className="text-gray-600 text-sm mt-1">ใหม่สดจากโรงงาน พร้อมใบรับประกันจากศูนย์ 12-24 เดือน</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex items-start gap-4">
              <Wrench className="w-10 h-10 text-amber-500 shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900 text-lg">ตรวจเช็กระบบไฟฟรี</h3>
                <p className="text-gray-600 text-sm mt-1">ตรวจวัดค่า CCA ไดชาร์จ ไดสตาร์ท ด้วยเครื่องมือมาตรฐาน</p>
              </div>
            </div>
          </div>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8!2d101.281!3d12.681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDQwJzUxLjYiTiAxMDHCsDE2JzUxLjYiRQ!5e0!3m2!1sth!2sth!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        {/* SECTION 10: ปุ่มโทรค้างด้านล่างบนมือถือ (Sticky Call Bar) */}
        <PhoneCallButton />
      </main>
    </>
  );
}