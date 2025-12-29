import type { Metadata } from "next";
import "../globals.css";

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

  return (
    <html lang={locale}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
