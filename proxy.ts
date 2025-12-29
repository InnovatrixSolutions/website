import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "es"] as const;
const defaultLocale = "en";

function detectLocale(req: NextRequest) {
  const header = req.headers.get("accept-language") || "";
  const first = header.split(",")[0]?.toLowerCase() || "";
  if (first.startsWith("es")) return "es";
  if (first.startsWith("en")) return "en";
  return defaultLocale;
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ignore next internals + api + static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return NextResponse.next();

  const locale = detectLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
