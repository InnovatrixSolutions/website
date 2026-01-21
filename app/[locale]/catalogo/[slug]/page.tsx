import React from "react";
import { generateWhatsAppLink, formatCOP } from "@/lib/generateWhatsAppLink";
import ProductCard from "@/app/components/ProductCard";
import { getDictionary } from "@/app/i18n/getDictionary";

export default async function ProductPage({ params }: { params: { locale: string; slug: string } }) {
  const locale = params.locale === "es" ? "es" : "en";
  const t = await getDictionary(locale as "en" | "es");

  const { slug } = params;

  // Products are stored in t.products as an object { slug: Product } or similar.
  // We can convert to array to find or access directly if key == slug.
  const products = Object.values(t.products || {}) as any[];
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="mx-auto w-full max-w-4xl px-6 py-20">
        <h1 className="text-2xl font-semibold">{t.product.notFoundTitle}</h1>
        <p className="mt-2 text-sm text-white/70">{t.product.notFoundDesc}</p>
      </div>
    );
  }

  const wa = generateWhatsAppLink({ name: product.name, priceCOP: product.priceCOP, slug: product.slug });

  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-12">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <p className="mt-3 text-sm text-white/70">{product.longDescription}</p>

          <h3 className="mt-6 text-lg font-semibold">{t.product.includesTitle}</h3>
          <ul className="mt-2 list-inside list-disc text-sm text-white/70">
            {product.includes && product.includes.map((it: string) => (
              <li key={it}>{it}</li>
            ))}
          </ul>

          <h3 className="mt-6 text-lg font-semibold">{t.product.deliveryTitle}</h3>
          <p className="mt-2 text-sm text-white/70">{product.deliveryTime}</p>

          <h3 className="mt-6 text-lg font-semibold">Preguntas frecuentes</h3>
          <div className="mt-2 text-sm text-white/70">
            <p>{t.product.faqNote}</p>
          </div>
        </div>

        <aside className="md:col-span-1">
          <div className="rounded-2xl border border-white/8 bg-white/3 p-4">
            <div className="text-sm text-white/60">{t.product.priceLabel}</div>
            <div className="mt-1 text-xl font-semibold">{formatCOP(product.priceCOP)}</div>
            <div className="mt-2 text-xs text-white/50">{product.deliveryTime}</div>

            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-medium text-black"
            >
              Solicitar por WhatsApp
            </a>
          </div>

          {related.length > 0 && (
            <div className="mt-6">
              <h4 className="text-base font-semibold">También te puede interesar</h4>
              <div className="mt-3 grid gap-3">
                {related.map((r) => (
                  <ProductCard key={r.slug} product={r} t={t} />
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
