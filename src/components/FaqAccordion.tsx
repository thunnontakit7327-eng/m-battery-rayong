'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <div key={idx} className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="w-full px-6 py-4 text-left font-bold flex justify-between items-center gap-4 hover:bg-gray-100 transition-colors touch-target"
          >
            <span>{item.q}</span>
            <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
          </button>
          {openIndex === idx && (
            <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-200 pt-3">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}