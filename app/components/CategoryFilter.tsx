"use client";

import React, { useMemo, useState } from "react";
import type { Product } from "@/data/catalog";
import ProductCard from "./ProductCard";

export default function CategoryFilter({ products, t }: { products: Product[]; t: any }) {
  const [active, setActive] = useState<string>("all");

  const categories = (
    (t && t.categories) || {
      all: "All",
      asistencia: "Asistencia",
      streaming: "Streaming",
      productos: "Productos",
    }
  );

  const CATEGORIES = [
    { id: "all", label: categories.all },
    { id: "asistencia", label: categories.asistencia },
    { id: "streaming", label: categories.streaming },
    { id: "productos", label: categories.productos },
  ];

  const filtered = useMemo(() => {
    if (active === "all") return products;
    return products.filter((p) => p.category === active);
  }, [active, products]);

  return (
    <div>
      <div className="mb-4 flex gap-3 overflow-auto">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`rounded-full px-4 py-2 text-sm transition ${active === c.id ? "bg-[#42A5F6] text-black" : "border border-white/10"
              }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} t={t} />
        ))}
      </div>
    </div>
  );
}
