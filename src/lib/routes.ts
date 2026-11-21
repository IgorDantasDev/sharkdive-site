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
    paths: { pt: "/inicio/", en: "/en/home/", es: "/es/inicio/" },
    title: {
      pt: "Shark Dive | Mergulhos em Salvador",
      en: "Shark Dive | Scuba diving in Salvador",
      es: "Shark Dive | Buceo en Salvador",
    },
    description: {
      pt: "Conheça a Shark Dive e nossas experiências de mergulho e mar em Salvador, Bahia.",
      en: "Meet Shark Dive and discover our scuba diving and marine experiences in Salvador, Bahia, Brazil.",
      es: "Conoce Shark Dive y nuestras experiencias de buceo y mar en Salvador de Bahía, Brasil.",
    },
  },
  batismo: {
    id: "mergulho-recreativo",
    paths: { pt: "/batismo/", en: "/en/first-dive/", es: "/es/bautismo/" },
    title: {
      pt: "Batismo de mergulho em Salvador | Shark Dive",
      en: "Discover scuba diving in Salvador | Shark Dive",
      es: "Bautismo de buceo en Salvador | Shark Dive",
    },
    description: {
      pt: "Faça sua primeira experiência de mergulho em Salvador com acompanhamento profissional da Shark Dive.",
      en: "Try scuba diving in Salvador with professional guidance from the Shark Dive team.",
      es: "Vive tu primera experiencia de buceo en Salvador con el acompañamiento profesional de Shark Dive.",
    },
  },
  cursos: {
    id: "cursos",
    paths: { pt: "/cursos/", en: "/en/courses/", es: "/es/cursos/" },
    title: {
      pt: "Cursos SDI e TDI em Salvador | Shark Dive",
      en: "SDI and TDI courses in Salvador | Shark Dive",
      es: "Cursos SDI y TDI en Salvador | Shark Dive",
    },
    description: {
      pt: "Conheça os cursos e especialidades SDI e TDI oferecidos pela Shark Dive em Salvador.",
      en: "Explore SDI and TDI courses and specialties offered by Shark Dive in Salvador.",
      es: "Conoce los cursos y especialidades SDI y TDI ofrecidos por Shark Dive en Salvador.",
    },
  },
  baleias: {
    id: "safari-baleias",
    paths: { pt: "/baleias/", en: "/en/whales/", es: "/es/ballenas/" },
    title: {
      pt: "Safari de baleias em Salvador | Shark Dive",
      en: "Whale-watching safari in Salvador | Shark Dive",
      es: "Safari de ballenas en Salvador | Shark Dive",
    },
    description: {
      pt: "Consulte a Shark Dive sobre o safari para observação de baleias-jubarte no litoral de Salvador.",
      en: "Ask Shark Dive about whale-watching safaris along the coast of Salvador, Bahia.",
      es: "Consulta con Shark Dive sobre el safari de avistamiento de ballenas en la costa de Salvador.",
    },
  },
  sobre: {
    id: "sobre",
    paths: { pt: "/sobre/", en: "/en/about/", es: "/es/nosotros/" },
    title: {
      pt: "Sobre a Shark Dive | Centro de mergulho em Salvador",
      en: "About Shark Dive | Dive center in Salvador",
      es: "Sobre Shark Dive | Centro de buceo en Salvador",
    },
    description: {
      pt: "Conheça a equipe e a atuação da Shark Dive em Salvador, Bahia.",
      en: "Meet the Shark Dive team and learn about our work in Salvador, Bahia, Brazil.",
      es: "Conoce al equipo de Shark Dive y nuestro trabajo en Salvador de Bahía, Brasil.",
    },
  },
  contato: {
    id: "contato",
    paths: { pt: "/contato/", en: "/en/contact/", es: "/es/contacto/" },
    title: {
      pt: "Contato | Shark Dive Salvador",
      en: "Contact | Shark Dive Salvador",
      es: "Contacto | Shark Dive Salvador",
    },
    description: {
      pt: "Fale com a Shark Dive sobre batismos, cursos e safari de baleias em Salvador.",
      en: "Contact Shark Dive about first dives, courses and whale-watching safaris in Salvador.",
      es: "Contacta con Shark Dive sobre bautismos, cursos y safaris de ballenas en Salvador.",
    },
  },
};

export const sectionRouteKeys = Object.keys(sectionRoutes) as SectionRoute[];

export const sectionPath = (lang: Locale, section: SectionRoute) => sectionRoutes[section].paths[lang];

export const sectionFromSlug = (lang: Locale, slug: string) =>
  sectionRouteKeys.find((section) => sectionPath(lang, section).split("/").filter(Boolean).at(-1) === slug);
