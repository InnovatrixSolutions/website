"use client";

import React from "react";
import type { Product } from "@/data/catalog";
import { generateWhatsAppLink, formatCOP } from "@/lib/generateWhatsAppLink";

export default function ProductCard({ product }: { product: Product }) {
  const wa = generateWhatsAppLink({
    name: product.name,
    priceCOP: product.priceCOP,
    slug: product.slug,
  });

  return (
    <article className="rounded-2xl border border-white/8 bg-white/3 p-4">
      <h3 className="text-base font-semibold">{product.name}</h3>
      <p className="mt-2 text-sm text-white/70">{product.shortDescription}</p>

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
          Solicitar por WhatsApp
        </a>
      </div>
    </article>
  );
}
