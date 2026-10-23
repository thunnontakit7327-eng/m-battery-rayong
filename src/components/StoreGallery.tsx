'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { galleryImages } from '@/config/gallery';
import { siteConfig } from '@/config/site';

export default function StoreGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section className="py-16 bg-gray-900 text-white" id="gallery">
      <div className="container mx-auto px-4 max-w-6xl space-y-8">
        <div className="text-center space-y-3">
          <span className="bg-amber-400 text-black font-extrabold px-4 py-1.5 rounded-full text-xs md:text-sm inline-flex items-center gap-1.5">
            <MapPin className="w-4 h-4" /> ร้านมีตัวตนจริงบริการแน่นอน
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-amber-400">
            ภาพบรรยากาศร้าน เอ็มแบตเตอรี่ ระยอง
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            ดูภาพหน้าร้านและบรรยากาศจริงของเอ็มแบตเตอรี่ ระยอง พร้อมบริการจำหน่าย สต็อกแบตเตอรี่ใหม่ และภาพช่างเปลี่ยนแบตเตอรี่รถยนต์นอกสถานที่
          </p>
        </div>

        {/* Grid รูปภาพ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => setSelectedIndex(idx)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-gray-800 border border-gray-700 hover:border-amber-400 transition-all duration-300 shadow-md"
            >
              <div className="aspect-[4/3] relative w-full overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-3 bg-gray-800/90 backdrop-blur-sm">
                <p className="text-xs text-gray-200 line-clamp-2 font-medium">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <a
            href={siteConfig.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black font-extrabold px-6 py-3 rounded-xl shadow-lg transition-transform active:scale-95 text-sm md:text-base"
          >
            <span>ดูรูปภาพเพิ่มเติมบน Google Maps</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Lightbox / Modal ดูภาพใหญ่ */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-4 right-4 text-white hover:text-amber-400 p-2 rounded-full bg-gray-800/80 transition-colors"
            aria-label="ปิดรูปภาพ"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 text-white hover:text-amber-400 p-2 rounded-full bg-gray-800/80 transition-colors"
            aria-label="รูปก่อนหน้า"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center gap-3">
            <div className="relative w-full aspect-[4/3] max-h-[70vh] rounded-xl overflow-hidden">
              <Image
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-amber-400 font-bold text-center text-sm md:text-base px-4">
              {galleryImages[selectedIndex].caption}
            </p>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-4 text-white hover:text-amber-400 p-2 rounded-full bg-gray-800/80 transition-colors"
            aria-label="รูปถัดไป"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  );
}