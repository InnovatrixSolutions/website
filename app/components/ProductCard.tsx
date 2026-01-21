"use client";

import React from "react";
import { generateWhatsAppLink, formatCOP } from "@/lib/generateWhatsAppLink";

export default function ProductCard({ product, t }: { product: any; t?: any }) {
  const wa = generateWhatsAppLink({
    name: product.name,
    priceCOP: product.priceCOP,
    slug: product.slug,
  });

  const cta = (t && (t.ctaWhatsApp || t.catalog?.ctaWhatsApp)) || "Request via WhatsApp";

  console.log(`[ProductCard] slug: ${product.slug}, t.title:`, t?.catalog?.title);

  const displayName = (t && t.products && t.products[product.slug]?.name) || product.name;
  const displayShort = (t && t.products && t.products[product.slug]?.shortDescription) || product.shortDescription;

  return (
    <article className="rounded-2xl border border-white/8 bg-white/3 p-4">
      <h3 className="text-base font-semibold">{displayName}</h3>
      <p className="mt-2 text-sm text-white/70">{displayShort}</p>

      <div className="mt-4 flex items-center justify-between">
        <div>
          <div className="text-sm text-white/60">{formatCOP(product.priceCOP)}</div>
          <div className="text-xs text-white/50">{product.deliveryTime}</div>
        </div>

        <a
          className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-3 py-2 text-sm font-medium text-black"
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
        >
          {cta}
        </a>
      </div>
    </article>
  );
}
