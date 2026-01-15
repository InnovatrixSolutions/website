import React from "react";
import { getDictionary } from "../../i18n/getDictionary";

export default async function SobreNosotros({ params }: { params: { locale: string } }) {
  const locale = params.locale === "es" ? "es" : "en";
  const t = await getDictionary(locale as "en" | "es");

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-semibold">{t.about.title}</h1>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">{t.about.missionTitle}</h2>
        <p className="mt-2 text-sm text-white/70">{t.about.missionText}</p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">{t.about.storyTitle}</h2>
        <p className="mt-2 text-sm text-white/70">{t.about.storyText}</p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">{t.about.trustTitle}</h2>
        <p className="mt-2 text-sm text-white/70">{t.product?.faqNote ?? ""}</p>

        <div className="mt-4 flex flex-wrap gap-3">
          {t.about.badges.map((b: string) => (
            <div key={b} className="rounded-lg border border-white/8 px-4 py-2 text-sm">
              {b}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
