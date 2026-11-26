'use client';

import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

/** คะแนนรีวิว Google จริง (ดึงจาก /api/google-reviews) — ถ้าดึงไม่ได้จะไม่แสดงอะไรเลย ไม่ใส่ตัวเลขเดาเอง */
export default function GoogleRatingBadge({ className = '' }: { className?: string }) {
  const [data, setData] = useState<{ rating: number; count: number } | null>(null);

  useEffect(() => {
    fetch('/api/google-reviews')
      .then((r) => r.json())
      .then((d) => {
        if (d?.status === 'OK' && d.rating && d.userRatingCount) {
          setData({ rating: Number(d.rating), count: Number(d.userRatingCount) });
        }
      })
      .catch(() => {});
  }, []);

  if (!data) return null;
  return (
    <a
      href="#reviews"
      className={`inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur border border-white/20 rounded-full px-4 py-1.5 text-sm text-white transition-colors ${className}`}
      aria-label={`คะแนนรีวิว Google ${data.rating.toFixed(1)} จาก ${data.count} รีวิว`}
    >
      <span className="flex text-primary" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" />
        ))}
      </span>
      <strong className="font-extrabold">{data.rating.toFixed(1)}</strong>
      <span className="text-gray-300">จาก {data.count.toLocaleString('th-TH')} รีวิวบน Google</span>
    </a>
  );
}
