'use client';
import { Phone } from 'lucide-react';

interface PhoneCallButtonProps {
  phoneNumber: string;
  displayNumber?: string;
  className?: string;
}

export default function PhoneCallButton({ phoneNumber, displayNumber, className = '' }: PhoneCallButtonProps) {
  return (
    <a
      href={`tel:${phoneNumber}`}
      className={`bg-primary hover:bg-primary-hover text-dark font-bold px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95 touch-target shadow-md ${className}`}
      aria-label="โทรเรียกช่างด่วน"
    >
      <Phone className="w-5 h-5 fill-dark animate-bounce" />
      <span>{displayNumber || phoneNumber}</span>
    </a>
  );
}