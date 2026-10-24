'use client';
import { useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function GoogleMapEmbed() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-inner border border-gray-200 relative min-h-[350px] flex flex-col items-center justify-center">
      {!loaded ? (
        <div className="absolute inset-0 bg-dark/90 flex flex-col items-center justify-center p-6 text-center z-10 text-white">
          <MapPin className="w-12 h-12 text-primary mb-3 animate-bounce" />
          <h3 className="text-xl font-bold mb-2">แผนที่ร้าน เอ็มแบตเตอรี่ ระยอง</h3>
          <p className="text-sm text-gray-300 max-w-md mb-6">{siteConfig.address}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setLoaded(true)}
              className="bg-primary text-dark font-bold px-6 py-3 rounded-xl hover:bg-primary-hover transition-colors touch-target"
            >
              โหลดแผนที่ Google Maps
            </button>
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700 flex items-center gap-2 transition-colors touch-target"
            >
              <Navigation className="w-4 h-4" /> เปิดในแอป Maps
            </a>
          </div>
        </div>
      ) : null}

      <iframe
        title="M Battery Rayong Map"
        src="https://www.google.com/maps?q=M+Battery+Rayong+Rayong&output=embed"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full min-h-[380px]"
      ></iframe>
    </div>
  );
}