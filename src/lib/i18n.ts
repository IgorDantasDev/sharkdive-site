export type Locale = "pt" | "en" | "es";

export const translate = (locale: Locale, pt: string, en: string, es: string) =>
  locale === "en" ? en : locale === "es" ? es : pt;
