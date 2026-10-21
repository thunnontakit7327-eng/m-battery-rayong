import Link from "next/link";
import { Phone, MapPin, Menu } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-dark text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary text-dark font-black px-2.5 py-1 rounded-md text-lg tracking-tight">
            M
          </div>
          <div>
            <span className="font-bold text-lg md:text-xl block leading-tight group-hover:text-primary transition-colors">
              {siteConfig.name}
            </span>
            <span className="text-xs text-gray-400 block">
              เปลี่ยนแบตเตอรี่รถยนต์ ระยอง
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-200">
          <Link href="/" className="hover:text-primary transition-colors">หน้าแรก</Link>
          <Link href="/mobile-car-battery-replacement/" className="hover:text-primary transition-colors">บริการนอกสถานที่</Link>
          <Link href="/car-batteries/" className="hover:text-primary transition-colors">แบตเตอรี่รถยนต์</Link>
          <Link href="/service-areas/" className="hover:text-primary transition-colors">พื้นที่ให้บริการ</Link>
          <Link href="/articles/" className="hover:text-primary transition-colors">บทความ</Link>
          <Link href="/contact/" className="hover:text-primary transition-colors">ติดต่อเรา</Link>
        </nav>

        {/* CTA Call */}
        <div className="flex items-center gap-3">
          <a
            href={siteConfig.phoneHref}
            className="bg-primary hover:bg-primary-hover text-dark font-bold px-4 py-2.5 rounded-lg flex items-center gap-2 shadow-lg transition-transform active:scale-95 touch-target"
            aria-label="โทรเรียกช่าง"
          >
            <Phone className="w-4 h-4 fill-dark" />
            <span className="hidden sm:inline">โทร:</span> {siteConfig.phone}
          </a>
        </div>
      </div>
    </header>
  );
}