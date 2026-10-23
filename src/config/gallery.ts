export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: 'storefront' | 'inventory' | 'service';
}

export const galleryImages: GalleryImage[] = [
  {
    id: 'store-1',
    src: '/images/gallery/store-1.jpg',
    alt: 'หน้าร้าน เอ็มแบตเตอรี่ ระยอง บริเวณสามแยกหมวดทางหลวงเชิงเนิน',
    caption: 'ป้ายหน้าร้านชัดเจน ติดถนนสุขุมวิท สามแยกหมวดทางหลวงเชิงเนิน',
    category: 'storefront',
  },
  {
    id: 'store-2',
    src: '/images/gallery/store-2.jpg',
    alt: 'สต็อกแบตเตอรี่ใหม่สดทุกแบรนด์ชั้นนำ เอ็มแบตเตอรี่ ระยอง',
    caption: 'สต็อกแบตเตอรี่ใหม่สด มีครบทุกรุ่น GS, FB, 3K, PUMA, AMARON',
    category: 'inventory',
  },
  {
    id: 'store-3',
    src: '/images/gallery/store-3.jpg',
    alt: 'ช่างเปลี่ยนแบตเตอรี่รถยนต์นอกสถานที่ระยอง ด่วนถึงบ้าน',
    caption: 'ช่างชำนาญการออกให้บริการเปลี่ยนแบตเตอรี่นอกสถานที่ด่วน',
    category: 'service',
  },
  {
    id: 'store-4',
    src: '/images/gallery/store-4.jpg',
    alt: 'ตรวจเช็กไดชาร์จและไดสตาร์ทฟรีหลังเปลี่ยนแบตเตอรี่',
    caption: 'ตรวจเช็กระบบไฟ ไดชาร์จ และไดสตาร์ทฟรีหลังเปลี่ยนแบตเตอรี่',
    category: 'service',
  },
];