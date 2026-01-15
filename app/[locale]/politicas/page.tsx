import React from "react";
import { getDictionary } from "../../i18n/getDictionary";

export default async function PoliticasIndex({ params }: { params: { locale: string } }) {
  const locale = params.locale === "es" ? "es" : "en";
  const t = await getDictionary(locale as "en" | "es");

  const base = `/${params.locale}/politicas`;

  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-semibold">{t.policies.title}</h1>

      <p className="mt-3 text-sm text-white/70">Enlaces a términos, privacidad y reembolsos.</p>

      <ul className="mt-6 space-y-3">
        <li>
          <a href={`${base}/terminos`} className="text-[#42A5F6]">
            {t.policies.terms}
          </a>
        </li>
        <li>
          <a href={`${base}/privacidad`} className="text-[#42A5F6]">
            {t.policies.privacy}
          </a>
        </li>
        <li>
          <a href={`${base}/reembolsos`} className="text-[#42A5F6]">
            {t.policies.refunds}
          </a>
        </li>
      </ul>
    </div>
  );
}
