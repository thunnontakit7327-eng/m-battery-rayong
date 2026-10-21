import { Phone, Navigation } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-dark/95 backdrop-blur border-t border-gray-800 p-3 lg:hidden flex gap-3 shadow-2xl">
      <a
        href={siteConfig.phoneHref}
        className="flex-1 bg-primary hover:bg-primary-hover text-dark font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-base shadow-md active:scale-95 transition-transform touch-target"
      >
        <Phone className="w-5 h-5 fill-dark animate-bounce" />
        <span>โทรเรียกช่างด่วน</span>
      </a>
      <a
        href={siteConfig.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-base shadow-md active:scale-95 transition-transform touch-target"
      >
        <Navigation className="w-5 h-5" />
        <span>นำทางมาร้าน</span>
      </a>
    </div>
  );
}