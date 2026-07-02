export type Locale = "en" | "pl";

import { offerTiersEn, offerTiersPl } from "./offerTiersData";

export type SlideImage = { src: string; alt: string };
export type PortfolioProject = {
  id: string;
  title: string;
  shortDescription: string;
  tech: string[];
  image: string;
  visitUrl?: string;
  reviewAnchor?: string;
  hidden?: boolean;
  inProgress?: boolean;
};
export type TechCategory = {
  id: "web" | "data";
  title: string;
  description: string;
  items: string[];
};
export type OfferFeature = {
  title: string;
  desc: string;
};

export type OfferTier = {
  name: string;
  description: string;
  price: string;
  deliveryTime: string;
  features: OfferFeature[];
  examplesLabel: string;
  examples: string;
  tech: string[];
  cardAction: string;
};

export type OfferTab = "web" | "data";

export type OfferCustomIdea = {
  navLabel: string;
  desc: string;
  cta: string;
};

export type Translations = {
  meta: { htmlLang: string };
  languageSwitcher: { label: string; en: string; pl: string };
  slider: {
    prev: string;
    next: string;
    slide: string;
    close: string;
  };
  hero: {
    photoAlt: string;
    badge: string;
    tagline: string;
    featuredProjects: string;
    downloadResume: string;
  };
  about: {
    badge: string;
    title: string;
    titleAccent: string;
    body: string;
    experienceTitle: string;
    experience: {
      period: string;
      role: string;
      company?: string | null;
      current?: boolean;
      logo?: string;
    }[];
  };
  tech: {
    sectionBadge: string;
    sectionTitle: string;
    categories: TechCategory[];
  };
  portfolio: {
    badge: string;
    title: string;
    titleAccent: string;
    visitProject: string;
    clientReview: string;
    inProgressLabel: string;
    projects: PortfolioProject[];
  };
  offer: {
    sectionBadge: string;
    sectionTitle: string;
    gateways: { web: string; data: string };
    viewOffer: string;
    tabs: { web: string; data: string };
    servicesNav: { web: string; data: string };
    priceEstimateLabel: string;
    scopeLabel: string;
    timelineLabel: string;
    techDetailsLabel: string;
    mailtoSubject: string;
    backToHome: string;
    footerCta: { question: string; subtitle: string; button: string };
    web: OfferTier[];
    data: OfferTier[];
    customIdea: OfferCustomIdea;
  };
  testimonial: {
    badge: string;
    title: string;
    titleAccent: string;
    paragraphs: string[];
    viewProject: string;
  };
  contact: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    cta: string;
  };
  footer: {
    poweredBy: string;
    visualConcept: string;
  };
};

export const translations: Record<Locale, Translations> = {
  en: {
    meta: { htmlLang: "en" },
    languageSwitcher: { label: "Language", en: "EN", pl: "PL" },
    slider: {
      prev: "Previous slide",
      next: "Next slide",
      slide: "Slide",
      close: "Close gallery",
    },
    hero: {
      photoAlt: "Wojciech Aniszewski - Software Developer",
      badge: "Web Developer",
      tagline:
        "I build web apps and data pipelines. React and Next.js on the front, BigQuery and SQL on the back - whatever your project needs.",
      featuredProjects: "Featured Projects",
      downloadResume: "Download my resume",
    },
    about: {
      badge: "Info",
      title: "About",
      titleAccent: "Me",
      body: "I'm a web developer from Gdańsk specialising in building web applications from scratch and data science. I pick up new technologies fast and do my best work on projects that need building from the ground up - whether that's a web app in React and Next.js or a data pipeline in BigQuery on Google Cloud Platform.",
      experienceTitle: "Experience",
      experience: [
        {
          period: "Apr 2026 - now",
          role: "Junior Data Scientist",
          company: "Impel",
          current: true,
          logo: "/Logo_Impel_Group.jpg",
        },
        {
          period: "2023 - now",
          role: "Freelance Developer",
          company: null,
        },
      ],
    },
    tech: {
      sectionBadge: "TECH STACK",
      sectionTitle: "Tools I actually use",
      categories: [
        {
          id: "web",
          title: "Web Development",
          description:
            "Full-stack apps, APIs, and interfaces - from a landing page to a SaaS platform.",
          items: [
            "Next.js",
            "React",
            "TypeScript",
            "Node.js",
            "GraphQL",
            "REST APIs",
            "Prisma",
            "PostgreSQL",
            "MongoDB",
            "Tailwind CSS",
          ],
        },
        {
          id: "data",
          title: "Data & Cloud",
          description:
            "Data pipelines, SQL automation, and dashboards on Google Cloud.",
          items: [
            "Python",
            "SQL",
            "BigQuery",
            "Data Studio",
            "Dataform",
            "Google Cloud Platform",
          ],
        },
      ],
    },
    portfolio: {
      badge: "FEATURED PROJECTS",
      title: "Featured",
      titleAccent: "Projects",
      visitProject: "Visit Project",
      clientReview: "Client Review",
      inProgressLabel: "In progress",
      projects: [
        {
          id: "01",
          title: "Unschool Your English",
          shortDescription:
            "E-learning platform and landing page for Wiktor Szyszkowski. Built with a custom admin panel, student dashboard, and Stripe payment integration with automated access provisioning via webhooks.",
          tech: [
            "Next.js",
            "TypeScript",
            "Payload CMS",
            "Stripe",
            "PostgreSQL",
            "Tailwind CSS",
          ],
          image: "/wikus-projekt1.png",
          visitUrl: "https://www.wiktorszyszkowski.pl",
          reviewAnchor: "testimonial",
        },
        {
          id: "02",
          title: "Base Camp",
          shortDescription:
            "Modern headless e-commerce with Next.js and Stripe checkout. Product catalog managed in Hygraph CMS via GraphQL.",
          tech: [
            "Next.js",
            "React",
            "TypeScript",
            "Hygraph",
            "GraphQL",
            "Stripe",
          ],
          image: "/shop1.jpg",
          visitUrl: "https://next13-masters-test.vercel.app",
        },
        {
          id: "03",
          title: "Glob Travel Agency",
          shortDescription:
            "Travel agency portal with dynamic content via GraphQL and Hygraph. Fast Next.js frontend for frequent updates.",
          tech: ["Next.js", "TypeScript", "GraphQL", "Hygraph"],
          image: "/globb.jpg",
          hidden: true,
        },
        {
          id: "04",
          title: "StudioRE",
          shortDescription:
            "Interior design studio website with animations and interactive elements. In collaboration with wilczynska.visuals - currently in progress.",
          tech: ["React", "Node.js", "Next.js", "Tailwind CSS"],
          image: "/studio-re-new-2.jpg",
          inProgress: true,
        },
        {
          id: "05",
          title: "Rental Rate",
          shortDescription:
            "Tenant review platform powered by PostgreSQL and Prisma. Landlord ratings, user profiles, and scalable backend workflows.",
          tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
          image: "/rental-rate.png",
          hidden: true,
        },
      ],
    },
    offer: {
      sectionBadge: "SERVICES & PRICING",
      sectionTitle: "What I do",
      gateways: {
        web: "Web Development",
        data: "Data & Analytics",
      },
      viewOffer: "View offer",
      tabs: {
        web: "Web",
        data: "Data",
      },
      servicesNav: {
        web: "Web Development",
        data: "Data & Analytics",
      },
      priceEstimateLabel: "Estimate",
      scopeLabel: offerTiersEn.scopeLabel,
      timelineLabel: offerTiersEn.timelineLabel,
      techDetailsLabel: "Tech details",
      mailtoSubject: "Inquiry about:",
      backToHome: "← Back",
      footerCta: offerTiersEn.footerCta,
      web: offerTiersEn.web,
      data: offerTiersEn.data,
      customIdea: {
        navLabel: "Your idea",
        desc:
          "Got something that doesn't fit any of these? Write to me. You don't need to know exactly what you need - describe the problem and we'll figure out the rest.",
        cta: "Get in touch",
      },
    },
    testimonial: {
      badge: "Client feedback",
      title: "Trusted",
      titleAccent: "words",
      paragraphs: [
        "I strongly recommend partnership with Wojtek. The whole landing page was done as I wanted to - basing on my requirements. However, I'd also say that it was better than I expected. It was finished very quickly, the website is highly intuitive to use, and overall I'm very satisfied of the final result.",
        "When I had needed any changes to be provided, all of them would have been added there immediately. Moreover, Wojtek suggests many interesting and great things that would improve a website. For me, it was a huge advantage that he was willing to get the best result.",
        "I strongly recommend him!",
      ],
      viewProject: "View project",
    },
    contact: {
      badge: "Contact",
      title: "Ready to Start",
      titleAccent: "Your Project?",
      subtitle:
        "Drop me a line. I'll read it, ask what I need to know, and get back to you with a concrete answer.",
      cta: "Contact Me",
    },
    footer: {
      poweredBy: "Powered by",
      visualConcept: "Visual concept by",
    },
  },
  pl: {
    meta: { htmlLang: "pl" },
    languageSwitcher: { label: "Język", en: "EN", pl: "PL" },
    slider: {
      prev: "Poprzedni slajd",
      next: "Następny slajd",
      slide: "Slajd",
      close: "Zamknij galerię",
    },
    hero: {
      photoAlt: "Wojciech Aniszewski - Programista",
      badge: "Web Developer",
      tagline:
        "Buduję aplikacje webowe i pipeline'y danych. React i Next.js od strony frontu, BigQuery i SQL od strony danych - w zależności od tego, czego projekt wymaga.",
      featuredProjects: "Wybrane projekty",
      downloadResume: "Pobierz CV",
    },
    about: {
      badge: "Info",
      title: "O",
      titleAccent: "mnie",
      body: "Jestem web developerem z Gdańska, który specjalizuje się w budowaniu aplikacji webowych i data science. Szybko przyswajam nowe technologie i najlepiej czuję się w projektach, gdzie jest coś do ogarnięcia od zera - czy to aplikacja w React i Next.js, czy pipeline danych w BigQuery na Google Cloud Platform.",
      experienceTitle: "Doświadczenie",
      experience: [
        {
          period: "kwi 2026 - obecnie",
          role: "Junior Data Scientist",
          company: "Impel",
          current: true,
          logo: "/Logo_Impel_Group.jpg",
        },
        {
          period: "2023 - obecnie",
          role: "Freelance Developer",
          company: null,
        },
      ],
    },
    tech: {
      sectionBadge: "STACK TECHNOLOGICZNY",
      sectionTitle: "Narzędzia, z których korzystam",
      categories: [
        {
          id: "web",
          title: "Web Development",
          description:
            "Aplikacje full-stack, API i interfejsy - od landing page'a po platformę SaaS.",
          items: [
            "Next.js",
            "React",
            "TypeScript",
            "Node.js",
            "GraphQL",
            "REST APIs",
            "Prisma",
            "PostgreSQL",
            "MongoDB",
            "Tailwind CSS",
          ],
        },
        {
          id: "data",
          title: "Data & Cloud",
          description:
            "Pipeline'y danych, automatyzacja SQL i dashboardy na Google Cloud.",
          items: [
            "Python",
            "SQL",
            "BigQuery",
            "Data Studio",
            "Dataform",
            "Google Cloud Platform",
          ],
        },
      ],
    },
    portfolio: {
      badge: "WYBRANE PROJEKTY",
      title: "Wybrane",
      titleAccent: "projekty",
      visitProject: "Zobacz projekt",
      clientReview: "Opinia klienta",
      inProgressLabel: "W trakcie",
      projects: [
        {
          id: "01",
          title: "Unschool Your English",
          shortDescription:
            "Platforma e-learningowa i landing page dla Wiktora Szyszkowskiego. Zbudowana z autorskim panelem admina, panelem ucznia i integracją płatności Stripe z automatycznym przyznawaniem dostępu przez webhooki.",
          tech: [
            "Next.js",
            "TypeScript",
            "Payload CMS",
            "Stripe",
            "PostgreSQL",
            "Tailwind CSS",
          ],
          image: "/wikus-projekt1.png",
          visitUrl: "https://www.wiktorszyszkowski.pl",
          reviewAnchor: "testimonial",
        },
        {
          id: "02",
          title: "Base Camp",
          shortDescription:
            "Nowoczesny sklep headless z Next.js i płatnościami Stripe. Katalog produktów w Hygraph CMS przez GraphQL.",
          tech: [
            "Next.js",
            "React",
            "TypeScript",
            "Hygraph",
            "GraphQL",
            "Stripe",
          ],
          image: "/shop1.jpg",
          visitUrl: "https://next13-masters-test.vercel.app",
        },
        {
          id: "03",
          title: "Glob Travel Agency",
          shortDescription:
            "Portal biura podróży z dynamiczną treścią przez GraphQL i Hygraph. Szybki frontend Next.js pod częste aktualizacje.",
          tech: ["Next.js", "TypeScript", "GraphQL", "Hygraph"],
          image: "/globb.jpg",
          hidden: true,
        },
        {
          id: "04",
          title: "StudioRE",
          shortDescription:
            "Strona studia wnętrz z animacjami i interakcjami. We współpracy z wilczynska.visuals - w trakcie realizacji.",
          tech: ["React", "Node.js", "Next.js", "Tailwind CSS"],
          image: "/studio-re-new-2.jpg",
          inProgress: true,
        },
        {
          id: "05",
          title: "Rental Rate",
          shortDescription:
            "Platforma ocen wynajmujących oparta na PostgreSQL i Prisma. Recenzje, profile użytkowników i skalowalny backend.",
          tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
          image: "/rental-rate.png",
          hidden: true,
        },
      ],
    },
    offer: {
      sectionBadge: "USŁUGI I CENNIK",
      sectionTitle: "Czym się zajmuję",
      gateways: {
        web: "Tworzenie stron i aplikacji",
        data: "Analityka i dane",
      },
      viewOffer: "Zobacz ofertę",
      tabs: {
        web: "Web",
        data: "Data",
      },
      servicesNav: {
        web: "Tworzenie stron i aplikacji",
        data: "Analityka i dane",
      },
      priceEstimateLabel: "Estymacja",
      scopeLabel: offerTiersPl.scopeLabel,
      timelineLabel: offerTiersPl.timelineLabel,
      techDetailsLabel: "Szczegóły techniczne",
      mailtoSubject: "Zapytanie o:",
      backToHome: "← Wróć",
      footerCta: offerTiersPl.footerCta,
      web: offerTiersPl.web,
      data: offerTiersPl.data,
      customIdea: {
        navLabel: "Twój pomysł",
        desc:
          "Masz coś, co nie pasuje do żadnej z tych opcji? Napisz. Nie musisz wiedzieć czego dokładnie potrzebujesz - opisz problem, resztę ogarniemy razem.",
        cta: "Napisz do mnie",
      },
    },
    testimonial: {
      badge: "Opinie klientów",
      title: "Zaufane",
      titleAccent: "słowa",
      paragraphs: [
        "Z całego serca polecam współpracę z Wojtkiem. Cały landing powstał dokładnie tak, jak chciałem - zgodnie z moimi wymaganiami. Powiedziałbym nawet, że wyszedł lepiej, niż się spodziewałem. Strona została ukończona bardzo szybko, jest niezwykle intuicyjna w obsłudze i jestem bardzo zadowolony z efektu końcowego.",
        "Gdy potrzebowałem jakichkolwiek zmian, wszystkie były wdrażane od razu. Wojtek dodatkowo proponuje wiele ciekawych rozwiązań, które realnie poprawiają stronę. Dla mnie ogromną zaletą było to, że zależało mu na jak najlepszym rezultacie.",
        "Gorąco go polecam!",
      ],
      viewProject: "Zobacz projekt",
    },
    contact: {
      badge: "Kontakt",
      title: "Gotowy, by zacząć",
      titleAccent: "swój projekt?",
      subtitle:
        "Napisz. Przeczytam, dopytam o co trzeba i odpiszę konkretnie.",
      cta: "Napisz do mnie",
    },
    footer: {
      poweredBy: "Powered by",
      visualConcept: "visual concept by",
    },
  },
};

