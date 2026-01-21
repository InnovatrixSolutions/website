import React from "react";
import Link from "next/link";
import BrandLogo from "./BrandLogo";
import LocaleSwitcher from "./LocaleSwitcher";
import MobileMenu from "./MobileMenu";
import { getDictionary } from "../i18n/getDictionary";

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default async function Header({ locale }: { locale: string }) {
  const lang = locale === "es" ? "es" : "en";
  const t = await getDictionary(lang as "en" | "es");

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-black/80 backdrop-blur-sm border-b border-white/6">
      <div className="mx-auto w-full max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <span className="md:hidden">
              <BrandLogo variant="isotipo" size={32} priority />
            </span>
            <span className="hidden md:block">
              <BrandLogo variant="logotipo" size={34} priority />
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <Link className="hover:text-white" href={`/${locale}#services`}>
              {t.nav?.services ?? "Services"}
            </Link>
            <Link className="hover:text-white" href={`/${locale}/catalogo`}>
              {t.catalog?.title ?? "Catalog"}
            </Link>
            <Link className="hover:text-white" href={`/${locale}#capabilities`}>
              {t.nav?.capabilities ?? "Capabilities"}
            </Link>
            <Link className="hover:text-white" href={`/${locale}#process`}>
              {t.process?.title ?? "Process"}
            </Link>
            <Link className="hover:text-white" href={`/${locale}#contact`}>
              {t.nav?.contact ?? "Contact"}
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            {/* Locale Switcher */}
            <div className="hidden md:block">
              <LocaleSwitcher currentLocale={locale} />
            </div>

            {/* Mobile Menu (includes its own hamburger button) */}
            <MobileMenu
              locale={locale}
              nav={{
                services: t.nav?.services ?? "Services",
                catalog: t.catalog?.title ?? "Catalog",
                capabilities: t.nav?.capabilities ?? "Capabilities",
                process: t.process?.title ?? "Process",
                contact: t.nav?.contact ?? "Contact",
                policies: t.policies?.title ?? "Policies"
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
