import "server-only";

const dictionaries = {
  en: () => import("./en.json").then((m) => m.default),
  es: () => import("./es.json").then((m) => m.default),
};

export async function getDictionary(locale: "en" | "es") {
  return (dictionaries[locale] ?? dictionaries.en)();
}
