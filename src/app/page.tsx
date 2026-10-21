import Link from 'next/link';
import { Phone, Navigation, ShieldCheck, Wrench, Zap, Clock, CheckCircle, Car } from 'lucide-react';
import { siteConfig } from '@/config/site';
import GoogleMapEmbed from '@/components/GoogleMapEmbed';
import FaqAccordion from '@/components/FaqAccordion';

export default function Home() {
  const homepageFaq = [
    {
      q: "รถสตาร์ทไม่ติด แบตหมด ต้องทำอย่างไร?",
      a: "โทรหาเอ็มแบตเตอรี่ ระยอง ได้ทันทีที่เบอร์ 095-292-6881 แจ้งรุ่นรถยนต์และพิกัดของคุณ ช่างจะประเมินราคาและเดินทางไปเปลี่ยนแบตเตอรี่ให้ถึงที่อย่างรวดเร็ว"
    },
    {
      q: "บริการเปลี่ยนแบตเตอรี่นอกสถานที่ มีค่าบริการเพิ่มไหม?",
      a: "ฟรีค่าแรงติดตั้งครับ ลูกค้าจ่ายเฉพาะราคาแบตเตอรี่จริงตามที่ตกลง ไม่มีบวกเพิ่ม (บริการถึงที่ขึ้นอยู่กับพื้นที่และสภาพการจราจร)"
    },
    {
      q: "มีแบตเตอรี่รถยนต์ยี่ห้ออะไรจำหน่ายบ้าง?",
      a: "เรามีจำหน่ายแบตเตอรี่รถยนต์ชั้นนำครบทุกแบรนด์ เช่น GS, FB, 3K, BOSCH, AMARON, PUMA และแบตเตอรี่แบบ Maintenance Free (MF) ตรงรุ่นรถทุกประเภท"
    },
    {
      q: "ร้านเปิดให้บริการวันไหนบ้าง?",
      a: "เปิดให้บริการทุกวัน ตั้งแต่เวลา 07:30 น. ถึง 19:00 น. สามารถโทรปรึกษาหรือเรียกใช้บริการได้ตลอดเวลาทำการ"
    }
  ];

  return (
    <div className="space-y-16 pb-12">
      {/* Hero Section */}
      <section className="bg-dark text-white pt-12 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FACC15_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary border border-primary/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <Zap className="w-4 h-4 text-primary" /> ร้านแบตเตอรี่ระยอง บริการด่วนถึงที่
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            ร้านแบตเตอรี่ระยอง <span className="text-primary block mt-2">เปลี่ยนแบตเตอรี่รถยนต์ถึงที่</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            รถสตาร์ทไม่ติด แบตหมด แบตเสื่อม โทรหาเอ็มแบตเตอรี่ ระยอง บริการเปลี่ยนแบตถึงบ้านและที่ทำงาน พร้อมแนะนำแบตเตอรี่ที่เหมาะกับรถคุณ
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={siteConfig.phoneHref}
              className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-dark font-extrabold text-lg px-8 py-4 rounded-xl shadow-xl flex items-center justify-center gap-3 transition-transform active:scale-95 touch-target"
            >
              <Phone className="w-6 h-6 fill-dark" />
              <span>โทรเรียกช่างทันที 095-292-6881</span>
            </a>
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 font-bold text-lg px-8 py-4 rounded-xl flex items-center justify-center gap-3 transition-colors touch-target"
            >
              <Navigation className="w-6 h-6 text-primary" />
              <span>นำทางมาที่ร้าน</span>
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-4">*บริการถึงที่รวดเร็ว (ขึ้นอยู่กับพื้นที่และสภาพการจราจร)</p>
        </div>
      </section>

      {/* Feature Cards 4 ใบ */}
      <section className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.features.map((feat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-start">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-dark font-bold text-xl mb-4 text-primary-dark">
                ✓
              </div>
              <h3 className="font-bold text-lg text-dark mb-2">{feat.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* บริการหลัก */}
      <section className="container mx-auto px-4 py-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark mb-4">บริการของ เอ็มแบตเตอรี่ ระยอง</h2>
          <p className="text-gray-600">เราพร้อมให้บริการดูแลแบตเตอรี่รถยนต์ของคุณทั้งในและนอกสถานที่ ด้วยช่างผู้ชำนาญการ</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 border border-gray-200 p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="bg-primary/20 p-4 rounded-xl w-fit mb-6 text-dark font-bold">
                <Car className="w-8 h-8 text-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3">เปลี่ยนแบตเตอรี่นอกสถานที่</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                รถสตาร์ทไม่ติดกลางทาง แบตหมดที่บ้านหรือที่ทำงาน เรามีบริการส่งและเปลี่ยนแบตเตอรี่รถยนต์นอกสถานที่ทั่วเมืองระยอง ฟรีค่าแรง
              </p>
            </div>
            <a href={siteConfig.phoneHref} className="bg-dark hover:bg-dark-light text-white font-bold py-3 px-4 rounded-xl text-center flex items-center justify-center gap-2 touch-target">
              <Phone className="w-4 h-4" /> โทรเรียกบริการด่วน
            </a>
          </div>

          <div className="bg-gray-50 border border-gray-200 p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="bg-primary/20 p-4 rounded-xl w-fit mb-6">
                <Wrench className="w-8 h-8 text-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3">จำหน่ายแบตเตอรี่รถยนต์</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                จำหน่ายแบตเตอรี่รถยนต์แท้ 100% จากแบรนด์ชั้นนำ GS, FB, 3K, Bosch, Amaron, Puma พร้อมรับประกันทุกลูก ราคาชัดเจน
              </p>
            </div>
            <Link href="/car-batteries/" className="bg-dark hover:bg-dark-light text-white font-bold py-3 px-4 rounded-xl text-center touch-target flex items-center justify-center">
              ดูแบรนด์แบตเตอรี่ทั้งหมด
            </Link>
          </div>

          <div className="bg-gray-50 border border-gray-200 p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="bg-primary/20 p-4 rounded-xl w-fit mb-6">
                <ShieldCheck className="w-8 h-8 text-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3">ตรวจเช็กไดชาร์จและแบตฟรี</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                บริการตรวจวัดสุขภาพแบตเตอรี่และระบบไดชาร์จด้วยเครื่องมือวัดมาตรฐานฟรีที่หน้าร้าน สามแยกหมวดทางหลวงเชิงเนิน
              </p>
            </div>
            <a href={siteConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="bg-dark hover:bg-dark-light text-white font-bold py-3 px-4 rounded-xl text-center touch-target flex items-center justify-center">
              นำทางมาที่ร้าน
            </a>
          </div>
        </div>
      </section>

      {/* แบรนด์แบตเตอรี่ที่จำหน่าย */}
      <section className="bg-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">แบตเตอรี่รถยนต์แบรนด์ชั้นนำที่เราให้บริการ</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">ของแท้ 100% สดใหม่จากโรงงาน มีให้เลือกทั้งแบบกึ่งแห้ง (MF) และแบบแห้งสนิท</p>
          <div className="flex flex-wrap justify-center gap-4">
            {siteConfig.brands.map((brand, idx) => (
              <div key={idx} className="bg-gray-800 border border-gray-700 px-6 py-4 rounded-xl font-black text-xl text-primary tracking-wide shadow-md">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 ขั้นตอนใช้บริการ */}
      <section className="container mx-auto px-4 py-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark mb-4">ขั้นตอนการใช้บริการง่ายๆ ใน 3 นาที</h2>
          <p className="text-gray-600">สะดวกรวดเร็วเมื่อรถมีปัญหา แบตหมด แบตเสื่อม</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200">
            <div className="w-12 h-12 bg-primary text-dark font-extrabold text-xl rounded-full flex items-center justify-center mx-auto mb-4 shadow">1</div>
            <h3 className="font-bold text-lg mb-2">โทรแจ้งรุ่นรถและพิกัด</h3>
            <p className="text-sm text-gray-600">โทร 095-292-6881 แจ้งยี่ห้อ รุ่นรถ และสถานที่ที่คุณอยู่</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200">
            <div className="w-12 h-12 bg-primary text-dark font-extrabold text-xl rounded-full flex items-center justify-center mx-auto mb-4 shadow">2</div>
            <h3 className="font-bold text-lg mb-2">ตรวจสอบราคาและเวลา</h3>
            <p className="text-sm text-gray-600">ทราบราคาแบตเตอรี่ตรงรุ่นชัดเจนและเวลาเดินทางโดยประมาณ</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200">
            <div className="w-12 h-12 bg-primary text-dark font-extrabold text-xl rounded-full flex items-center justify-center mx-auto mb-4 shadow">3</div>
            <h3 className="font-bold text-lg mb-2">ช่างเข้าเปลี่ยนให้ถึงที่</h3>
            <p className="text-sm text-gray-600">ช่างมืออาชีพเดินทางไปเปลี่ยนให้พร้อมตรวจเช็กระบบไฟให้เรียบร้อย</p>
          </div>
        </div>
      </section>

      {/* พื้นที่ให้บริการ */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark mb-4">พื้นที่ให้บริการเปลี่ยนแบตเตอรี่ในระยอง</h2>
          <p className="text-gray-600 mb-8">
            เราให้บริการครอบคลุมอำเภอเมืองระยอง และบริเวณใกล้เคียง เช่น สามแยกหมวดทางหลวงเชิงเนิน, ทับมา, เนินพระ, มาบตาพุด, และพื้นที่ใกล้เคียง
          </p>
          <Link href="/service-areas/" className="inline-block bg-dark text-white font-bold px-8 py-3 rounded-xl hover:bg-dark-light transition-colors touch-target">
            ดูรายละเอียดพื้นที่ให้บริการทั้งหมด
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark mb-3">คำถามที่พบบ่อย (FAQ)</h2>
          <p className="text-gray-600">ข้อสงสัยทั่วไปเกี่ยวกับการเปลี่ยนแบตเตอรี่รถยนต์</p>
        </div>
        <FaqAccordion items={homepageFaq} />
      </section>

      {/* Google Maps Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-dark mb-4">พิกัดร้าน เอ็มแบตเตอรี่ ระยอง</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                ตั้งอยู่บริเวณสามแยกหมวดทางหลวงเชิงเนิน อำเภอเมืองระยอง จังหวัดระยอง ลูกค้าสามารถขับรถมาใช้บริการตรวจเช็กหรือเปลี่ยนแบตเตอรี่ที่หน้าร้านได้ทุกวัน
              </p>
              <div className="space-y-3 mb-8 text-sm text-gray-700">
                <p>📍 <strong>ที่อยู่:</strong> {siteConfig.address}</p>
                <p>⏰ <strong>เวลาเปิด-ปิด:</strong> {siteConfig.openingHours}</p>
                <p>📞 <strong>เบอร์โทรศัพท์:</strong> {siteConfig.phone}</p>
              </div>
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl inline-flex items-center gap-3 shadow-md transition-colors touch-target"
              >
                <Navigation className="w-5 h-5" /> นำทางมาที่ร้าน (Google Maps)
              </a>
            </div>
            <div>
              <GoogleMapEmbed />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}