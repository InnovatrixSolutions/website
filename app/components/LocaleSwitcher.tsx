"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function LocaleSwitcher({ currentLocale }: { currentLocale: string }) {
  const pathname = usePathname() || "/";
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];
  const rest = segments.slice(1).join("/");

  const buildHref = (loc: string) => {
    if (first === "en" || first === "es") {
      return "/" + loc + (rest ? "/" + rest : "");
    }
    return "/" + loc + (pathname === "/" ? "" : pathname);
  };

  const enHref = buildHref("en");
  const esHref = buildHref("es");

  return (
    <div className="flex items-center gap-2">
      <a
        href={enHref}
        className={
          currentLocale === "en"
            ? "rounded-full border px-3 py-1 text-xs bg-white/10 border-white/30 text-white"
            : "rounded-full border px-3 py-1 text-xs border-white/20 text-white/70 hover:text-white"
        }
        aria-current={currentLocale === "en" ? "page" : undefined}
      >
        EN
      </a>
      <a
        href={esHref}
        className={
          currentLocale === "es"
            ? "rounded-full border px-3 py-1 text-xs bg-white/10 border-white/30 text-white"
            : "rounded-full border px-3 py-1 text-xs border-white/20 text-white/70 hover:text-white"
        }
        aria-current={currentLocale === "es" ? "page" : undefined}
      >
        ES
      </a>
    </div>
  );
}
