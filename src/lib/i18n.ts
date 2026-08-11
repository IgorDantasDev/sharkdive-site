export type Locale = "pt" | "en";

export const translate = (locale: Locale, pt: string, en: string) =>
  locale === "en" ? en : pt;
