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
    src: '/images/gallery/storefront-main.jpg',
    alt: 'หน้าร้าน เอ็มแบตเตอรี่ ระยอง บริเวณสามแยกหมวดทางหลวงเชิงเนิน',
    caption: 'ป้ายหน้าร้านชัดเจน ติดถนนสุขุมวิท สามแยกหมวดทางหลวงเชิงเนิน',
    category: 'storefront',
  },
  {
    id: 'store-2',
    src: '/images/gallery/inventory-shelf.jpg',
    alt: 'ชั้นวางแบตเตอรี่รถยนต์ใหม่สดจากโรงงาน เอ็มแบตเตอรี่ ระยอง',
    caption: 'สต็อกแบตเตอรี่ใหม่สด มีครบทุกรุ่น GS, FB, 3K, PUMA, AMARON',
    category: 'inventory',
  },
  {
    id: 'service-1',
    src: '/images/gallery/service-delivery.jpg',
    alt: 'ช่างเปลี่ยนแบตเตอรี่รถยนต์นอกสถานที่ระยอง บริการด่วนถึงบ้าน',
    caption: 'ช่างชำนาญการออกให้บริการเปลี่ยนแบตเตอรี่นอกสถานที่ด่วน',
    category: 'service',
  },
  {
    id: 'service-2',
    src: '/images/gallery/battery-testing.jpg',
    alt: 'ตรวจเช็กค่าไดชาร์จและไฟรั่วด้วยเครื่องมือมาตรฐานที่เอ็มแบตเตอรี่ระยอง',
    caption: 'ตรวจเช็กระบบไฟ ไดชาร์จ และไดสตาร์ทฟรีหลังเปลี่ยนแบตเตอรี่',
    category: 'service',
  },
];