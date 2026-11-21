import type { Locale } from "./i18n";

export type SectionRoute = "inicio" | "batismo" | "cursos" | "baleias" | "sobre" | "contato";

interface SectionDefinition {
  id: string;
  paths: Record<Locale, string>;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
}

export const sectionRoutes: Record<SectionRoute, SectionDefinition> = {
  inicio: {
    id: "inicio",
    paths: { pt: "/inicio/", en: "/en/home/" },
    title: {
      pt: "Shark Dive | Mergulhos em Salvador",
      en: "Shark Dive | Scuba diving in Salvador",
    },
    description: {
      pt: "Conheça a Shark Dive e nossas experiências de mergulho e mar em Salvador, Bahia.",
      en: "Meet Shark Dive and discover our scuba diving and marine experiences in Salvador, Bahia, Brazil.",
    },
  },
  batismo: {
    id: "mergulho-recreativo",
    paths: { pt: "/batismo/", en: "/en/first-dive/" },
    title: {
      pt: "Batismo de mergulho em Salvador | Shark Dive",
      en: "Discover scuba diving in Salvador | Shark Dive",
    },
    description: {
      pt: "Faça sua primeira experiência de mergulho em Salvador com acompanhamento profissional da Shark Dive.",
      en: "Try scuba diving in Salvador with professional guidance from the Shark Dive team.",
    },
  },
  cursos: {
    id: "cursos",
    paths: { pt: "/cursos/", en: "/en/courses/" },
    title: {
      pt: "Cursos SDI e TDI em Salvador | Shark Dive",
      en: "SDI and TDI courses in Salvador | Shark Dive",
    },
    description: {
      pt: "Conheça os cursos e especialidades SDI e TDI oferecidos pela Shark Dive em Salvador.",
      en: "Explore SDI and TDI courses and specialties offered by Shark Dive in Salvador.",
    },
  },
  baleias: {
    id: "safari-baleias",
    paths: { pt: "/baleias/", en: "/en/whales/" },
    title: {
      pt: "Safari de baleias em Salvador | Shark Dive",
      en: "Whale-watching safari in Salvador | Shark Dive",
    },
    description: {
      pt: "Consulte a Shark Dive sobre o safari para observação de baleias-jubarte no litoral de Salvador.",
      en: "Ask Shark Dive about whale-watching safaris along the coast of Salvador, Bahia.",
    },
  },
  sobre: {
    id: "sobre",
    paths: { pt: "/sobre/", en: "/en/about/" },
    title: {
      pt: "Sobre a Shark Dive | Centro de mergulho em Salvador",
      en: "About Shark Dive | Dive center in Salvador",
    },
    description: {
      pt: "Conheça a equipe e a atuação da Shark Dive em Salvador, Bahia.",
      en: "Meet the Shark Dive team and learn about our work in Salvador, Bahia, Brazil.",
    },
  },
  contato: {
    id: "contato",
    paths: { pt: "/contato/", en: "/en/contact/" },
    title: {
      pt: "Contato | Shark Dive Salvador",
      en: "Contact | Shark Dive Salvador",
    },
    description: {
      pt: "Fale com a Shark Dive sobre batismos, cursos e safari de baleias em Salvador.",
      en: "Contact Shark Dive about first dives, courses and whale-watching safaris in Salvador.",
    },
  },
};

export const sectionRouteKeys = Object.keys(sectionRoutes) as SectionRoute[];

export const sectionPath = (lang: Locale, section: SectionRoute) => sectionRoutes[section].paths[lang];

export const sectionFromSlug = (lang: Locale, slug: string) =>
  sectionRouteKeys.find((section) => sectionPath(lang, section).split("/").filter(Boolean).at(-1) === slug);
