"use client";

import React, { useMemo, useState } from "react";
import type { Product } from "@/data/catalog";
import ProductCard from "./ProductCard";

const CATEGORIES = [
  { id: "all", label: "Todos" },
  { id: "asistencia", label: "Asistencia de suscripción" },
  { id: "streaming", label: "Productos de streaming" },
  { id: "productos", label: "Productos digitales / Servicios" },
];

export default function CategoryFilter({ products }: { products: Product[] }) {
  const [active, setActive] = useState<string>("all");

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
            className={`rounded-full px-4 py-2 text-sm transition ${
              active === c.id ? "bg-[#42A5F6] text-black" : "border border-white/10"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
