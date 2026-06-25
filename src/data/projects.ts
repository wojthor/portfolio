export type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  images: string[];
  visitUrl?: string;
  anchorId?: string;
  reviewsSectionId?: string;
  collaboratorName?: string;
  collaboratorUrl?: string;
};

export type SlideImage = {
  /** Ścieżka w public/ - patrz docs/UNSCHOOL-ZDJECIA.md */
  src: string;
  /** Opis kadru - trafia do alt i podpisu pod sliderem */
  alt: string;
};

export const flagshipProject = {
  title: "Unschool Your English",
  subtitle: "E-learning Platform & High-Converting Sales Funnel",
  client: "Wiktor Szyszkowski",
  description:
    "A production-ready e-learning ecosystem built from scratch for an English coaching brand - not just a landing page, but a complete digital product. I designed and delivered the full stack: a VSL sales funnel that converts visitors into paying students, and a custom learning platform where they access courses, submit voice recordings, and track their progress.",
  scope:
    "From the first pixel on the landing page to the last webhook in Stripe - one developer, one codebase, end-to-end ownership. The admin team manages everything through a bespoke Payload CMS 3.0 panel: courses, enrolments, voice recordings stored on Vercel Blob, and student feedback - without touching code.",
  highlights: [
    {
      title: "VSL Sales Landing",
      description:
        "High-converting single-page funnel with anchor navigation, SEO, and newsletter capture.",
    },
    {
      title: "Stripe & Webhooks",
      description:
        "Checkout flow with automated access control - payment instantly unlocks the student dashboard.",
    },
    {
      title: "Student Dashboard",
      description:
        "Authenticated portal with course progress, lesson delivery, and voice-recording submissions.",
    },
    {
      title: "Payload CMS Admin",
      description:
        "Custom back-office for managing courses, students, media assets, and feedback review.",
    },
    {
      title: "Vercel Blob Media",
      description:
        "Secure upload pipeline for student voice recordings - stored, served, and managed at scale.",
    },
    {
      title: "PostgreSQL Backend",
      description:
        "Relational data architecture powering users, enrolments, courses, and feedback workflows.",
    },
  ],
  tech: [
    "Next.js",
    "TypeScript",
    "Payload CMS",
    "Stripe",
    "PostgreSQL",
    "Tailwind CSS",
  ],
  image: "/wikus-projekt1.png",
  slides: [
    {
      src: "/wikus-projekt1.png",
      alt: "VSL Sales Landing - hero: główny nagłówek, krótki opis oferty, przycisk CTA i górna nawigacja anchor",
    },
    {
      src: "/wikus-projekt2.png",
      alt: "VSL Sales Landing - środek strony: sekcja problemu, autorytet, rozbicie oferty lub testimoniale",
    },
    {
      src: "/unschool-stripe.png",
      alt: "Stripe & Webhooks - ekran Stripe Checkout z podsumowaniem zamówienia lub strona sukcesu po płatności",
    },
    {
      src: "/unschool-dashboard.png",
      alt: "Student Dashboard - widok zalogowanego ucznia: lista kursów, postęp lekcji i nawigacja po materiałach",
    },
    {
      src: "/unschool-admin.png",
      alt: "Payload CMS Admin - panel administracyjny: lista kursów, lekcji lub zarządzanie studentami",
    },
    {
      src: "/unschool-voice.png",
      alt: "Vercel Blob Media - interfejs nagrywania/wysyłki voice recordingu lub podgląd przesłanych nagrań",
    },
    {
      src: "/unschool-enrolments.png",
      alt: "PostgreSQL Backend - widok zapisów na kursy, statusów uczniów lub relacji danych w panelu admina",
    },
  ] satisfies SlideImage[],
  visitUrl: "https://www.wiktorszyszkowski.pl",
  anchorId: "wiktor-landing",
  reviewsSectionId: "testimonial",
} as const;

export const projects: Project[] = [
  {
    title: "Base Camp – Headless E-commerce",
    description:
      "A modern headless e-commerce application built with Next.js and TypeScript for a secure, scalable, and highly performant UI. Product catalog is managed in Hygraph CMS, with the app communicating via flexible GraphQL queries. The project covers the full purchase flow – from intuitive browsing and cart management to seamless Stripe payment integration.",
    tech: ["Next.js", "React", "TypeScript", "Hygraph", "GraphQL", "Stripe"],
    image: "/shop1.jpg",
    images: ["/shop1.jpg", "/shop2.jpg", "/shop3.jpg"],
    visitUrl: "https://next13-masters-test.vercel.app",
  },
  {
    title: "Glob Travel Agency",
    description:
      "A travel agency website powered by GraphQL, featuring dynamic content management and seamless integration with Next.js.",
    tech: ["Next.js", "TypeScript", "GraphQL", "Hygraph"],
    image: "/globb.jpg",
    images: ["/globb.jpg", "/glob-2.PNG.jpg", "/glob-3.PNG.jpg"],
  },
  {
    title: "StudioRE [In Progress]",
    description:
      "My newest project, currently in progress. A modern interior design studio website featuring captivating animations and interactive elements, developed in collaboration with ",
    collaboratorName: "wilczynska.visuals",
    collaboratorUrl: "mailto:wilczynska.visuals@gmail.com",
    tech: ["React", "Node.js", "Next.js", "Tailwind CSS"],
    image: "/studio-re-new-2.jpg",
    images: ["/studio-re-new-2.jpg", "/studio-re-new-1.jpg"],
  },
  {
    title: "Rental Rate [In Progress]",
    description:
      "A web app where tenants can rate landlords and share experiences. Backend built with Prisma; project currently in progress.",
    tech: ["Next.js", "TypeScript", "Prisma"],
    image: "/rental-rate.png",
    images: ["/rental-rate.png", "/rental-rate2.png"],
  },
];
