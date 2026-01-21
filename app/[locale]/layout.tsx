import type { Metadata } from "next";
import "../globals.css";
import WhatsAppFab from "../components/WhatsAppFab";
import Header from "../components/Header";
import NeuralBackground from "../components/NeuralBackground";

export const metadata: Metadata = {
  title: "Innovatrix — AI, Automation & Software Engineering",
  description:
    "Innovatrix helps businesses move faster with automation, AI solutions, and modern software engineering.",
};

const allowed = ["en", "es"] as const;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = (allowed as readonly string[]).includes(raw) ? raw : "en";
  const t = await import(`../i18n/${locale}.json`);

  return (
    <html lang={locale}>
      <body className="antialiased">
        <div className="min-h-screen bg-black text-white relative">
          <div className="fixed inset-0 z-0">
            <NeuralBackground />
          </div>
          <main className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-20">
            <Header locale={locale} />
            {children}
          </main>
        </div>
        {/* Sticky WhatsApp button visible on all pages */}
        <WhatsAppFab ctaText={t.fab?.cta} defaultMessage={t.fab?.message} />
      </body>
    </html>
  );
}
