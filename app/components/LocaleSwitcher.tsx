"use client";

import { usePathname } from "next/navigation";

export default function LocaleSwitcher({
  locale,
}: {
  locale: "en" | "es";
}) {
  const pathname = usePathname();

  function toLocale(nextLocale: "en" | "es") {
    const parts = pathname.split("/");
    // pathname starts with /{locale}/...
    if (parts.length > 1) parts[1] = nextLocale;
    return parts.join("/") || `/${nextLocale}`;
  }

  const enHref = toLocale("en");
  const esHref = toLocale("es");

  const pill =
    "rounded-full px-3 py-2 text-xs border hover:bg-[color-mix(in_srgb,var(--color-accent)_10%,transparent)] transition-colors";

  return (
    <div className="flex items-center gap-2">
      <a
        href={enHref}
        className={`${pill}`}
        style={{ borderColor: "var(--color-border)" }}
        aria-current={locale === "en" ? "page" : undefined}
      >
        EN
      </a>
      <a
        href={esHref}
        className={`${pill}`}
        style={{ borderColor: "var(--color-border)" }}
        aria-current={locale === "es" ? "page" : undefined}
      >
        ES
      </a>
    </div>
  );
}
