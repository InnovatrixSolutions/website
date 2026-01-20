import React from "react";
import CategoryFilter from "../../components/CategoryFilter";
import FAQ from "../../components/FAQ";
import catalog from "@/data/catalog";
import { getDictionary } from "../../i18n/getDictionary";

export default async function CatalogoPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const { locale: rawLocale } = resolvedParams;
  const locale = rawLocale === "es" ? "es" : "en";
  const t = await getDictionary(locale as "en" | "es");

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold">{t.catalog.title}</h1>
        <p className="mt-2 text-sm text-white/70">{t.catalog.subtitle}</p>
      </header>

      <section aria-labelledby="catalogo" className="mb-10">
        <CategoryFilter products={catalog} t={t} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">{t.catalog.howTitle}</h2>
        <ol className="mt-4 grid gap-4 sm:grid-cols-2">
          {t.catalog.howSteps.map((s: string, i: number) => (
            <li key={i} className="rounded-xl border border-white/6 p-4">
              <div className="text-sm">{s}</div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Preguntas frecuentes</h2>
        <FAQ items={t.catalog.faq} />
      </section>
    </div>
  );
}
