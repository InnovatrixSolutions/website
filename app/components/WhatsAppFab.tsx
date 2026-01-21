"use client";

import React from "react";
import { generateWhatsAppLink } from "@/lib/generateWhatsAppLink";

export default function WhatsAppFab({ ctaText, defaultMessage }: { ctaText?: string; defaultMessage?: string }) {
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP ?? "+573166402868";
  const phone = waNumber.replace(/[^0-9+]/g, "");

  // Use passed message or fallback (though fallback shouldn't be needed if parent passes it)
  const defaultMsg = defaultMessage || "Hola, quisiera información sobre sus servicios y catálogo.";

  const href = `https://wa.me/${phone.replace(/^\+/, "")}?text=${encodeURIComponent(
    defaultMsg
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact via WhatsApp"
      className="fixed right-4 bottom-6 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-sm font-medium text-black shadow-lg md:right-8 md:bottom-8 transition hover:scale-105"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M21 11.5a9.5 9.5 0 1 0-2.6 6.1L21 21l-1.4-4.2A9.5 9.5 0 0 0 21 11.5z" fill="#fff" opacity="0.06" />
        <path d="M17.2 6.8a6.8 6.8 0 0 0-10 8.9l-.7 2.5 2.6-.7A6.8 6.8 0 0 0 17.2 6.8z" stroke="#000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="hidden sm:inline">{ctaText || "Chat via WhatsApp"}</span>
    </a>
  );
}
