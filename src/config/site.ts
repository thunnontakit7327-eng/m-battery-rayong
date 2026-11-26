export const siteConfig = {
  name: "เอ็มแบตเตอรี่ ระยอง",
  englishName: "M Battery Rayong",
  url: "https://www.mbattery-rayong.com",
  phone: "095-292-6881",
  phoneHref: "tel:+66952926881",
  address: "บริเวณสามแยกหมวดทางหลวงเชิงเนิน อำเภอเมืองระยอง จังหวัดระยอง 21000",
  addressShort: "สามแยกหมวดทางหลวงเชิงเนิน อ.เมือง ระยอง",
  openingHours: "ทุกวัน 07:30–19:00 น.",
  googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=12.6761302%2C101.2906985&destination_place_id=ChIJgaQrBwD9AjERhuaGGPSVUvw",
  // หน้าร้านบน Google Maps (Google Business Profile)
  googlePlaceUrl: "https://www.google.com/maps/place/?q=place_id:ChIJgaQrBwD9AjERhuaGGPSVUvw",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.5706829605538!2d101.2906985!3d12.6761302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102fd00072ba481%3A0xfc5295f41886e686!2z4LmA4Lit4LmH4Lih4LmB4Lia4LiV4LmA4LiV4Lit4Lij4Li14LmIIOC4o-C4sOC4ouC4reC4hw!5e0!3m2!1sth!2sth!4v1792849056478!5m2!1sth!2sth",
  geo: { latitude: 12.6761302, longitude: 101.2906985 },
  placeId: "ChIJgaQrBwD9AjERhuaGGPSVUvw", // Place ID จริงจาก Google Maps
  // ใส่เฉพาะส่วนหลัง "/" ของ send_to เช่น 'AW-11523653600/AbCdEfGh123' → ใส่ 'AbCdEfGh123'
  googleAds: {
    id: "AW-11523653600",
    callLabel: "CJg3CLym878dEOD_8_Yq",       // กดโทร → Conversion "เว็บ - กดโทร"
    directionsLabel: "EgmWCL-m878dEOD_8_Yq", // กดนำทาง → Conversion "เว็บ - กดนำทาง"
    lineLabel: "",       // (ยังไม่มีปุ่ม LINE)
  },
  brands: ["GS", "FB", "3K", "BOSCH", "AMARON", "PUMA", "MF"],
  features: [
    { title: "ฟรีค่าแรงติดตั้ง", desc: "บริการเปลี่ยนแบตเตอรี่ถึงที่โดยไม่มีค่าแรงเพิ่ม" },
    { title: "แบตใหม่แกะกล่อง", desc: "ของแท้ 100% มีใบรับประกันจากโรงงานผู้ผลิต" },
    { title: "บริการนอกสถานที่", desc: "ถึงบ้าน ที่ทำงาน หรือริมถนนในเขตระยอง" },
    { title: "ให้คำแนะนำตรงรุ่น", desc: "วิเคราะห์และเลือกแอมป์ที่ถูกต้องตรงสเปครถยนต์" },
  ],
};