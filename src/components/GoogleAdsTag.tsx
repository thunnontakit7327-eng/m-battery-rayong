'use client';
import Script from 'next/script';
import { useEffect } from 'react';
import { siteConfig } from '@/config/site';

declare global {
  interface Window { dataLayer: unknown[]; gtag?: (...args: unknown[]) => void }
}

/**
 * Google tag (Google Ads) + นับ Conversion เมื่อกดปุ่มสำคัญ — ทำงานกับทุกปุ่มบนเว็บอัตโนมัติ ไม่ต้องแก้ทีละปุ่ม
 *  - ลิงก์ tel:            → กดโทร
 *  - ลิงก์ Google Maps     → กดนำทาง
 *  - ลิงก์ LINE (line.me / lin.ee) → กดแอด LINE
 */
export default function GoogleAdsTag() {
  const { id, callLabel, directionsLabel, lineLabel } = siteConfig.googleAds;

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!a || !window.gtag) return;
      const href = a.getAttribute('href') ?? '';
      let kind: 'call' | 'directions' | 'line' | null = null;
      if (href.startsWith('tel:')) kind = 'call';
      else if (/google\.[a-z.]+\/maps|maps\.app\.goo\.gl|goo\.gl\/maps/i.test(href)) kind = 'directions';
      else if (/line\.me|lin\.ee/i.test(href)) kind = 'line';
      if (!kind) return;
      const label = kind === 'call' ? callLabel : kind === 'directions' ? directionsLabel : lineLabel;
      // เหตุการณ์ทั่วไป (ดูใน Google tag / Analytics ได้) + Conversion ของ Google Ads เมื่อใส่ป้ายกำกับแล้ว
      window.gtag('event', kind === 'call' ? 'click_call' : kind === 'directions' ? 'click_directions' : 'click_line',
        { link_url: href, link_text: (a.textContent ?? '').trim().slice(0, 60), transport_type: 'beacon' });
      if (label) window.gtag('event', 'conversion', { send_to: `${id}/${label}`, transport_type: 'beacon' });
    };
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, [id, callLabel, directionsLabel, lineLabel]);

  if (!id) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="google-ads-tag" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${id}');`}
      </Script>
    </>
  );
}
