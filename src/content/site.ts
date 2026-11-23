import type { LocalizedText } from "../lib/i18n";

type CopySource = Record<string, LocalizedText>;

export const landingCopy = {
  title: {
    pt: "Shark Dive | Mergulhos, cursos e baleias em Salvador",
    en: "Shark Dive | Dives, courses and whales in Salvador",
    es: "Shark Dive | Buceo, cursos y ballenas en Salvador",
  },
  description: {
    pt: "Batismo de mergulho, cursos SDI e safari para observação de baleias em Salvador, Bahia.",
    en: "Discover scuba diving, SDI courses and whale-watching safaris in Salvador, Bahia, Brazil.",
    es: "Bautismo de buceo, cursos SDI y safari de ballenas en Salvador de Bahía, Brasil.",
  },
} satisfies CopySource;

export const layoutCopy = {
  socialImageAlt: {
    pt: "Embarcação da Shark Dive e mergulhadores próximos ao Farol da Barra em Salvador",
    en: "Shark Dive boat and scuba divers near Barra Lighthouse in Salvador",
    es: "Embarcación de Shark Dive y buceadores cerca del Faro de Barra en Salvador",
  },
  skipToContent: {
    pt: "Pular para o conteúdo",
    en: "Skip to content",
    es: "Saltar al contenido",
  },
} satisfies CopySource;

export const headerCopy = {
  brandLabel: { pt: "Shark Dive - início", en: "Shark Dive - home", es: "Shark Dive - inicio" },
  brandAlt: { pt: "Shark Dive Centro de Mergulho", en: "Shark Dive Center", es: "Centro de Buceo Shark Dive" },
  mainNavigation: { pt: "Navegação principal", en: "Main navigation", es: "Navegación principal" },
  diving: { pt: "Mergulho", en: "Diving", es: "Buceo" },
  courses: { pt: "Cursos", en: "Courses", es: "Cursos" },
  whales: { pt: "Baleias", en: "Whales", es: "Ballenas" },
  about: { pt: "Sobre", en: "About", es: "Nosotros" },
  selectLanguage: { pt: "Selecionar idioma", en: "Select language", es: "Seleccionar idioma" },
  language: { pt: "Idioma", en: "Language", es: "Idioma" },
  enableDark: { pt: "Ativar modo escuro", en: "Enable dark mode", es: "Activar modo oscuro" },
  enableLight: { pt: "Ativar modo claro", en: "Enable light mode", es: "Activar modo claro" },
  switchTheme: { pt: "Alternar tema", en: "Switch theme", es: "Cambiar tema" },
  contactMessage: {
    pt: "Olá! Gostaria de saber mais sobre os batismos, cursos ou safari de baleias.",
    en: "Hello! I would like to learn more about first dives, courses or the whale-watching safari.",
    es: "¡Hola! Me gustaría saber más sobre los bautismos, cursos o el safari de ballenas.",
  },
  contactUs: { pt: "Fale conosco", en: "Contact us", es: "Contáctanos" },
  openMenu: { pt: "Abrir menu", en: "Open menu", es: "Abrir menú" },
  closeMenu: { pt: "Fechar menu", en: "Close menu", es: "Cerrar menú" },
  mobileNavigation: { pt: "Navegação mobile", en: "Mobile navigation", es: "Navegación móvil" },
  recreationalDiving: { pt: "Mergulho recreativo", en: "Recreational diving", es: "Buceo recreativo" },
  whaleSafari: { pt: "Safari de baleias", en: "Whale-watching safari", es: "Safari de ballenas" },
  contact: { pt: "Contato", en: "Contact", es: "Contacto" },
} satisfies CopySource;

export const heroCopy = {
  imageAlt: {
    pt: "Embarcação da Shark Dive com mergulhadores próxima ao Farol da Barra",
    en: "Shark Dive boat with scuba divers near Barra Lighthouse",
    es: "Embarcación de Shark Dive con buceadores cerca del Faro de Barra",
  },
  lead: {
    pt: "Batismo de mergulho, cursos e experiências no mar em Salvador.",
    en: "Discover scuba diving, courses and marine experiences in Salvador.",
    es: "Bautismo de buceo, cursos y experiencias en el mar en Salvador.",
  },
  firstDiveMessage: {
    pt: "Olá! Gostaria de saber mais sobre o batismo de mergulho.",
    en: "Hello! I would like to learn more about the discover scuba diving experience.",
    es: "¡Hola! Me gustaría saber más sobre el bautismo de buceo.",
  },
  firstDiveCta: { pt: "Quero fazer um batismo", en: "I want to try scuba diving", es: "Quiero hacer un bautismo" },
  coursesCta: { pt: "Conhecer cursos", en: "Explore courses", es: "Conocer los cursos" },
  servicesLabel: { pt: "Ver serviços", en: "View services", es: "Ver servicios" },
  explore: { pt: "Explore", en: "Explore", es: "Explora" },
} satisfies CopySource;

export const quickLinksCopy = {
  label: { pt: "Acessos rápidos", en: "Quick links", es: "Accesos rápidos" },
  firstDive: { pt: "Batismo de mergulho", en: "Discover scuba diving", es: "Bautismo de buceo" },
  firstDiveShort: { pt: "Batismo", en: "First dive", es: "Bautismo" },
  courses: { pt: "Cursos", en: "Courses", es: "Cursos" },
  whaleSafari: { pt: "Safari de baleias", en: "Whale-watching safari", es: "Safari de ballenas" },
  whales: { pt: "Baleias", en: "Whales", es: "Ballenas" },
} satisfies CopySource;

export const recreationalCopy = {
  eyebrow: { pt: "Batismo de mergulho", en: "Discover scuba diving", es: "Bautismo de buceo" },
  title: {
    pt: "Sua primeira experiência começa em Salvador.",
    en: "Your first diving experience starts in Salvador.",
    es: "Tu primera experiencia comienza en Salvador.",
  },
  lead: {
    pt: "O batismo é a porta de entrada para conhecer o mergulho com acompanhamento profissional nos cenários da Baía de Todos-os-Santos.",
    en: "Discover scuba diving is your introduction to the underwater world, guided by professionals in the waters of All Saints Bay.",
    es: "El bautismo es la puerta de entrada al mundo submarino, con acompañamiento profesional en las aguas de la Bahía de Todos los Santos.",
  },
  beginnerTitle: { pt: "Feito para iniciantes", en: "Designed for beginners", es: "Diseñado para principiantes" },
  beginnerDescription: {
    pt: "Não é necessário ter certificação ou experiência anterior para participar.",
    en: "No certification or previous diving experience is required.",
    es: "No necesitas certificación ni experiencia previa en buceo para participar.",
  },
  guidanceTitle: { pt: "Orientação antes do mergulho", en: "Pre-dive guidance", es: "Orientación antes del buceo" },
  guidanceDescription: {
    pt: "A equipe apresenta os equipamentos, os procedimentos e as informações da atividade.",
    en: "Our team introduces the equipment, procedures and essential information before the activity.",
    es: "Nuestro equipo presenta el equipo, los procedimientos y la información esencial antes de la actividad.",
  },
  supervisionTitle: { pt: "Acompanhamento profissional", en: "Professional supervision", es: "Acompañamiento profesional" },
  supervisionDescription: {
    pt: "O mergulho é conduzido com acompanhamento próximo durante toda a experiência.",
    en: "The dive is conducted with close professional supervision throughout the experience.",
    es: "La inmersión se realiza con acompañamiento profesional cercano durante toda la experiencia.",
  },
  message: {
    pt: "Olá! Gostaria de saber mais sobre o batismo de mergulho.",
    en: "Hello! I would like to learn more about the discover scuba diving experience.",
    es: "¡Hola! Me gustaría saber más sobre el bautismo de buceo.",
  },
  cta: { pt: "Consultar batismo", en: "Ask about your first dive", es: "Consultar bautismo" },
  imageAlt: {
    pt: "Mergulhador entrando no mar a partir da embarcação da Shark Dive",
    en: "Scuba diver entering the sea from the Shark Dive boat",
    es: "Buceador entrando al mar desde la embarcación de Shark Dive",
  },
  caption: { pt: "Operação de mergulho em Salvador", en: "Dive operation in Salvador", es: "Operación de buceo en Salvador" },
} satisfies CopySource;

export const coursesCopy = {
  eyebrow: { pt: "Cursos e especialidades", en: "Courses and specialties", es: "Cursos y especialidades" },
  title: {
    pt: "Formação para cada fase do mergulho.",
    en: "Training for every stage of your diving journey.",
    es: "Formación para cada etapa de tu camino en el buceo.",
  },
  introduction: {
    pt: "Comece do zero, atualize suas habilidades ou avance para novas modalidades com cursos SDI e TDI. Turmas, pré-requisitos, locais e disponibilidade devem ser consultados com a equipe.",
    en: "Start from scratch, refresh your skills or explore new disciplines with SDI and TDI courses. Contact our team for schedules, prerequisites, locations and availability.",
    es: "Comienza desde cero, actualiza tus habilidades o avanza hacia nuevas modalidades con cursos SDI y TDI. Consulta con nuestro equipo sobre grupos, requisitos, lugares y disponibilidad.",
  },
  imageAlt: {
    pt: "Mergulhadores da Shark Dive durante atividade de mergulho técnico",
    en: "Shark Dive divers during a technical diving activity",
    es: "Buceadores de Shark Dive durante una actividad de buceo técnico",
  },
  caption: {
    pt: "Treinamento, técnica e experiência no mar",
    en: "Training, technique and experience at sea",
    es: "Entrenamiento, técnica y experiencia en el mar",
  },
  careerEyebrow: { pt: "Formação e carreira", en: "Training and career", es: "Formación y carrera" },
  careerTitle: {
    pt: "Transforme experiência em profissão.",
    en: "Turn experience into a profession.",
    es: "Convierte la experiencia en profesión.",
  },
  careerLabel: {
    pt: "Cursos de formação profissional",
    en: "Professional training courses",
    es: "Cursos de formación profesional",
  },
  careerMessage: {
    pt: "Olá! Gostaria de saber mais sobre os cursos de formação e carreira.",
    en: "Hello! I would like to learn more about professional training and career courses.",
    es: "¡Hola! Me gustaría saber más sobre los cursos de formación profesional y carrera.",
  },
  careerCta: { pt: "Falar com um instrutor", en: "Talk to an instructor", es: "Hablar con un instructor" },
} satisfies CopySource;

export const courseGroupCopy = [
  {
    copy: {
      eyebrow: { pt: "Comece aqui", en: "Start here", es: "Comienza aquí" },
      title: { pt: "Primeira experiência", en: "First experience", es: "Primera experiencia" },
      description: {
        pt: "Para quem quer conhecer o mergulho com acompanhamento profissional.",
        en: "For anyone who wants to discover scuba diving with professional guidance.",
        es: "Para quienes quieren descubrir el buceo con acompañamiento profesional.",
      },
    } satisfies CopySource,
    courses: ["Scuba Discovery"],
  },
  {
    copy: {
      eyebrow: { pt: "Certificação", en: "Certification", es: "Certificación" },
      title: { pt: "Formação inicial", en: "Entry-level training", es: "Formación inicial" },
      description: {
        pt: "O caminho para se tornar um mergulhador certificado.",
        en: "Your path to becoming a certified scuba diver.",
        es: "El camino para convertirte en buceador certificado.",
      },
    } satisfies CopySource,
    courses: ["SDI Open Water Scuba Diver"],
  },
  {
    copy: {
      eyebrow: { pt: "Desenvolvimento", en: "Development", es: "Desarrollo" },
      title: { pt: "Evolução e segurança", en: "Skills and safety", es: "Evolución y seguridad" },
      description: {
        pt: "Treinamentos para ganhar experiência, controle e autonomia.",
        en: "Training to build experience, control and independence.",
        es: "Formación para ganar experiencia, control y autonomía.",
      },
    } satisfies CopySource,
    courses: ["Advanced Adventure Diver", "Advanced Buoyancy Diver", "Rescue Diver", "Refresher Course"],
  },
  {
    copy: {
      eyebrow: { pt: "Novos desafios", en: "New challenges", es: "Nuevos desafíos" },
      title: { pt: "Especialidades", en: "Specialties", es: "Especialidades" },
      description: {
        pt: "Formações para explorar novos ambientes e modalidades.",
        en: "Training to explore new environments and diving disciplines.",
        es: "Formación para explorar nuevos entornos y modalidades de buceo.",
      },
    } satisfies CopySource,
    courses: [
      "Deep Diver", "Underwater Navigation Diver", "Computer Nitrox Diver", "Wreck Diver",
      "Dry Suit Diver", "SDI Sidemount Diver", "Solo Diver", "Diver Propulsion Vehicle Diver",
      "Night-Limited Visibility Diver",
    ],
  },
  {
    copy: {
      eyebrow: { pt: "Mergulho técnico · TDI", en: "Technical diving · TDI", es: "Buceo técnico · TDI" },
      title: { pt: "Formação técnica", en: "Technical training", es: "Formación técnica" },
      description: {
        pt: "Cursos para avançar no planejamento, nos gases e nos procedimentos do mergulho técnico.",
        en: "Courses focused on technical diving planning, gases and procedures.",
        es: "Cursos centrados en la planificación, los gases y los procedimientos del buceo técnico.",
      },
    } satisfies CopySource,
    courses: ["Intro To Tech", "Nitrox Diver", "Advanced Nitrox Diver", "Decompression Procedures Diver"],
  },
];

export const safariCopy = {
  imageAlt: {
    pt: "Baleia-jubarte saltando no litoral da Bahia",
    en: "Humpback whale breaching off the coast of Bahia",
    es: "Ballena jorobada saltando frente a la costa de Bahía",
  },
  caption: { pt: "Baleia-jubarte no litoral baiano", en: "Humpback whale off the coast of Bahia", es: "Ballena jorobada en la costa de Bahía" },
  eyebrow: { pt: "Experiência sazonal", en: "Seasonal experience", es: "Experiencia de temporada" },
  title: { pt: "Safari para observação de baleias.", en: "Whale-watching safari.", es: "Safari de avistamiento de ballenas." },
  lead: {
    pt: "Observe baleias-jubarte no litoral baiano em uma experiência planejada pela equipe da Shark Dive.",
    en: "Watch humpback whales off the coast of Bahia on an experience planned by the Shark Dive team.",
    es: "Observa ballenas jorobadas en la costa de Bahía en una experiencia planificada por el equipo de Shark Dive.",
  },
  season: { pt: "Temporada e datas sob consulta", en: "Season and dates available on request", es: "Temporada y fechas bajo consulta" },
  departure: { pt: "Saída em Salvador", en: "Departure from Salvador", es: "Salida desde Salvador" },
  booking: { pt: "Reserva antecipada", en: "Advance booking", es: "Reserva anticipada" },
  message: {
    pt: "Olá! Gostaria de saber mais sobre o safari de observação de baleias.",
    en: "Hello! I would like to learn more about the whale-watching safari.",
    es: "¡Hola! Me gustaría saber más sobre el safari de avistamiento de ballenas.",
  },
  cta: { pt: "Consultar safari", en: "Ask about the safari", es: "Consultar safari" },
} satisfies CopySource;

export const galleryCopy = {
  eyebrow: { pt: "Shark Dive em ação", en: "Shark Dive in action", es: "Shark Dive en acción" },
  title: {
    pt: "Salvador vista do mar e por baixo dele.",
    en: "Salvador from the sea and beneath it.",
    es: "Salvador vista desde el mar y bajo sus aguas.",
  },
  description: {
    pt: "Registros de mergulhos e encontros no litoral baiano publicados pela equipe Shark Dive.",
    en: "Scenes from dives and marine encounters off the coast of Bahia, published by the Shark Dive team.",
    es: "Imágenes de inmersiones y encuentros marinos en la costa de Bahía, publicadas por el equipo de Shark Dive.",
  },
  credit: {
    pt: "Acervo Shark Dive. Créditos autorais preservados nas imagens.",
    en: "Shark Dive archive. Original photo credits are preserved in the images.",
    es: "Archivo de Shark Dive. Los créditos originales se conservan en las imágenes.",
  },
} satisfies CopySource;

export const galleryAltCopy = {
  cardume: { pt: "Cardume de peixes amarelos em recife de Salvador", en: "School of yellow fish on a reef in Salvador", es: "Banco de peces amarillos en un arrecife de Salvador" },
  reefDiver: { pt: "Mergulhador diante de um recife com muitos peixes", en: "Scuba diver in front of a reef filled with fish", es: "Buceador frente a un arrecife lleno de peces" },
  schoolDiver: { pt: "Mergulhador nadando junto a um grande cardume", en: "Scuba diver swimming alongside a large school of fish", es: "Buceador nadando junto a un gran banco de peces" },
  whales: { pt: "Duas baleias-jubarte com Salvador ao fundo", en: "Two humpback whales with Salvador in the background", es: "Dos ballenas jorobadas con Salvador al fondo" },
} satisfies CopySource;

export const aboutCopy = {
  eyebrow: { pt: "Sobre nós", en: "About us", es: "Sobre nosotros" },
  title: { pt: "Uma equipe preparada para receber você.", en: "A team ready to welcome you.", es: "Un equipo preparado para recibirte." },
  lead: {
    pt: "Somos uma equipe especializada, formada por instrutores em todos os níveis, divemasters experientes e profissionais de marinharia treinados e em sintonia com cada mergulho.",
    en: "We are a specialized team of instructors at every level, experienced divemasters and trained boat crew working in sync with every dive.",
    es: "Somos un equipo especializado, formado por instructores de todos los niveles, divemasters experimentados y tripulación capacitada que trabaja en sintonía con cada inmersión.",
  },
  detail: {
    pt: "Nossa atuação atual está concentrada em batismos de mergulho, formação de mergulhadores e safaris para observação de baleias.",
    en: "Our current activities focus on first-time scuba experiences, diver training and whale-watching safaris.",
    es: "Nuestras actividades actuales se centran en bautismos de buceo, formación de buceadores y safaris de avistamiento de ballenas.",
  },
} satisfies CopySource;

export const contactCopy = {
  eyebrow: { pt: "Contato", en: "Contact", es: "Contacto" },
  title: { pt: "Vamos planejar seu próximo mergulho?", en: "Ready to plan your next dive?", es: "¿Planeamos tu próxima inmersión?" },
  description: {
    pt: "Fale com a equipe sobre batismos, cursos e disponibilidade para o safari de baleias.",
    en: "Contact our team about first-time dives, courses and whale-watching safari availability.",
    es: "Habla con nuestro equipo sobre bautismos, cursos y disponibilidad para el safari de ballenas.",
  },
  base: { pt: "Base em Salvador", en: "Salvador base", es: "Base en Salvador" },
  address: {
    pt: "Av. da França, s/n — Terminal Turístico Náutico da Bahia, Comércio",
    en: "Av. da França, no number — Bahia Nautical Tourist Terminal, Comércio",
    es: "Av. da França, s/n — Terminal Turístico Náutico da Bahia, Comércio",
  },
  country: { pt: "Brasil", en: "Brazil", es: "Brasil" },
  message: {
    pt: "Olá! Gostaria de saber mais sobre os batismos, cursos ou safari de baleias.",
    en: "Hello! I would like to learn more about first dives, courses or the whale-watching safari.",
    es: "¡Hola! Me gustaría saber más sobre los bautismos, cursos o el safari de ballenas.",
  },
} satisfies CopySource;

export const footerCopy = {
  description: {
    pt: "Centro de mergulho em Salvador, Bahia.",
    en: "Dive center in Salvador, Bahia, Brazil.",
    es: "Centro de buceo en Salvador de Bahía, Brasil.",
  },
} satisfies CopySource;
