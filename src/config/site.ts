export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  phone: string;
  phoneHref: string;
  address: string;
  googleMapsUrl: string;
  placeId: string;
}

export const siteConfig: SiteConfig = {
  name: 'เอ็มแบตเตอรี่ ระยอง',
  description: 'บริการเปลี่ยนแบตเตอรี่รถยนต์นอกสถานที่ระยอง ถึงที่ภายใน 30 นาที ฟรีค่าแรง',
  url: 'https://mbattery-rayong.com',
  phone: '095-292-6881',
  phoneHref: 'tel:0952926881',
  openingHours: "ทุกวัน 07:30–19:00 น.",
  address: 'สามแยกหมวดทางหลวงเชิงเนิน ถนนสุขุมวิท ต.เชิงเนิน อ.เมืองระยอง จ.ระยอง 21000',
  googleMapsUrl: 'https://maps.google.com/?q=%E0%B9%80%E0%B8%8D%E0%B9%8B%E0%B8%A1%E0%B9%81%E0%B8%9A%E0%B8%95%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B8%B5%E0%B9%8C+%E0%B8%A3%E0%B8%B0%E0%B8%A2%E0%B8%AD%E0%B8%87',
  placeId: process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || '', // ใส่ Place ID ของร้านที่นี่
};