'use client';

import { useEffect, useState } from 'react';
import { Star, ExternalLink, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface Review {
  authorName: string;
  authorPhoto?: string;
  rating: number;
  relativeTime: string;
  text: string;
  originalUrl?: string;
}

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [isApiAvailable, setIsApiAvailable] = useState(false);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch('/api/google-reviews');
        const data = await res.json();
        if (data.status === 'OK' && data.reviews && data.reviews.length > 0) {
          setReviews(data.reviews);
          setIsApiAvailable(true);
        } else {
          setIsApiAvailable(false);
        }
      } catch (e) {
        setIsApiAvailable(false);
      } finally {
        setLoading(false);
      }
    }
    fetchReviews();
  }, []);

  return (
    <section className="py-16 bg-white text-gray-900" id="reviews">
      <div className="container mx-auto px-4 max-w-6xl space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 font-extrabold px-4 py-1.5 rounded-full text-xs md:text-sm">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.761H12.545z" />
            </svg>
            <span>รีวิวจากลูกค้าจริงบน Google Maps</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            รีวิวจากลูกค้าจริง เอ็มแบตเตอรี่ ระยอง
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            ความประทับใจจากลูกค้าที่ใช้บริการเปลี่ยนแบตเตอรี่รถยนต์หน้าร้านและบริการด่วนนอกสถานที่ในจังหวัดระยอง
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-amber-500"></div>
          </div>
        ) : isApiAvailable ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-amber-400 text-black font-extrabold flex items-center justify-center text-base shrink-0 overflow-hidden">
                        {rev.authorPhoto ? (
                          <img src={rev.authorPhoto} alt={rev.authorName} className="w-full h-full object-cover" />
                        ) : (
                          rev.authorName.charAt(0)
                        )}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm">{rev.authorName}</h3>
                        <p className="text-xs text-gray-500">{rev.relativeTime}</p>
                      </div>
                    </div>
                  </div>

                  {/* ดาว */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < rev.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  {/* ข้อความรีวิว */}
                  <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
                    "{rev.text}"
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500">
                  <span className="inline-flex items-center gap-1 font-medium text-gray-600">
                    <svg className="w-3.5 h-3.5 fill-gray-500" viewBox="0 0 24 24">
                      <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.761H12.545z" />
                    </svg>
                    ยืนยันจาก Google
                  </span>
                  {rev.originalUrl && (
                    <a
                      href={rev.originalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-600 font-bold hover:underline inline-flex items-center gap-1"
                    >
                      ดูต้นฉบับ <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Fallback เมื่อ API Key ยังไม่ได้เปิดใช้ */
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center space-y-4 max-w-2xl mx-auto">
            <MessageSquare className="w-12 h-12 text-amber-500 mx-auto" />
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-gray-900">อ่านรีวิวความประทับใจจากลูกค้าจริง</h3>
              <p className="text-sm text-gray-600">
                ท่านสามารถอ่านรีวิวและคะแนนดาวทั้งหมดของร้าน เอ็มแบตเตอรี่ ระยอง ได้โดยตรงบน Google Maps
              </p>
            </div>
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black font-extrabold px-6 py-3 rounded-xl shadow-md transition-transform active:scale-95 text-sm"
            >
              <span>อ่านรีวิวทั้งหมดบน Google Maps</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}

        <div className="text-center pt-2">
          <a
            href={siteConfig.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-black font-bold text-sm underline underline-offset-4"
          >
            <span>ดูหน้าโปรไฟล์ Google Business Profile ของ เอ็มแบตเตอรี่ ระยอง</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}