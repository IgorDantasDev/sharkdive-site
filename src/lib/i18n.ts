export type Locale = "pt" | "en" | "es";

export type LocalizedText = Record<Locale, string>;

export const localeSettings = {
  pt: { htmlLang: "pt-BR", rootPath: "/", openGraphLocale: "pt_BR" },
  en: { htmlLang: "en", rootPath: "/en/", openGraphLocale: "en_US" },
  es: { htmlLang: "es", rootPath: "/es/", openGraphLocale: "es_ES" },
} as const satisfies Record<Locale, {
  htmlLang: string;
  rootPath: string;
  openGraphLocale: string;
}>;

export const selectCopy = <T extends Record<string, LocalizedText>>(
  locale: Locale,
  source: T,
) => Object.fromEntries(
  Object.entries(source).map(([key, value]) => [key, value[locale]]),
) as { [K in keyof T]: string };
