type OfferFeature = { title: string; desc: string };

type OfferTier = {
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

type OfferExtras = {
  scopeLabel: string;
  timelineLabel: string;
  footerCta: { question: string; subtitle: string; button: string };
  web: OfferTier[];
  data: OfferTier[];
};

export const offerTiersEn: OfferExtras = {
  scopeLabel: "Scope of work",
  timelineLabel: "Delivery:",
  footerCta: {
    question: "Have questions?",
    subtitle: "I'll help you find the right fit.",
    button: "Get in touch",
  },
  web: [
    {
      name: "Landing Page",
      description:
        "A fast single-page site - mobile-first, SEO-ready, deployed on your domain.",
      price: "from 1 200 PLN",
      deliveryTime: "7–14 days",
      features: [
        {
          title: "Design & structure",
          desc: "Clean layout built around your offer and brand.",
        },
        {
          title: "Mobile-first",
          desc: "Works on every screen - phone, tablet, desktop.",
        },
        {
          title: "Google visibility",
          desc: "Basic SEO and fast load times out of the box.",
        },
        {
          title: "Contact form",
          desc: "Visitors can reach you without leaving the page.",
        },
        {
          title: "Content & copy",
          desc: "Clear sections that build trust and explain your offer.",
        },
        {
          title: "Launch",
          desc: "Deployed to your domain, ready to go live.",
        },
      ],
      examplesLabel: "EXAMPLES:",
      examples:
        "StudioRE (interior design studio), photographer portfolio, yoga studio landing, event landing page",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
      cardAction: "Get in touch →",
    },
    {
      name: "Site with CMS",
      description:
        "A site you update yourself - blog, catalog, no code required.",
      price: "from 2 800 PLN",
      deliveryTime: "14–21 days",
      features: [
        {
          title: "CMS admin panel",
          desc: "You edit content yourself - no code, no developer needed.",
        },
        {
          title: "Blog or news section",
          desc: "Publish posts and updates whenever you want.",
        },
        {
          title: "Product or service catalog",
          desc: "Structured listings with descriptions, photos and filters.",
        },
        {
          title: "SEO per page",
          desc: "Custom meta titles and descriptions for every subpage.",
        },
        {
          title: "Mobile-first",
          desc: "Looks good on every device without extra work.",
        },
        {
          title: "Launch & handover",
          desc: "Live on your domain with a walkthrough of the admin panel.",
        },
      ],
      examplesLabel: "EXAMPLES:",
      examples:
        "Base Camp (headless e-commerce), simple online shop, fitness studio with class schedule, restaurant menu site",
      tech: ["Next.js", "Hygraph", "Payload CMS", "GraphQL", "TypeScript"],
      cardAction: "Get in touch →",
    },
    {
      name: "Advanced SaaS Platform",
      description:
        "Full web app with accounts, payments, admin panel, and automation.",
      price: "from 5 900 PLN",
      deliveryTime: "4–8 weeks",
      features: [
        {
          title: "User accounts & auth",
          desc: "Registration, login, roles and permissions - full auth flow.",
        },
        {
          title: "Payment integration",
          desc: "One-time payments or subscriptions via Stripe.",
        },
        {
          title: "User dashboard",
          desc: "Each user sees their own data, orders or course progress.",
        },
        {
          title: "Admin panel",
          desc: "Manage users, content and orders without touching the code.",
        },
        {
          title: "Database & backend",
          desc: "Relational database with a secure API - built to scale.",
        },
        {
          title: "Webhooks & automation",
          desc: "After payment, access is granted automatically - no manual steps.",
        },
      ],
      examplesLabel: "EXAMPLES:",
      examples:
        "Unschool Your English (e-learning + Stripe + CMS), tenant review platform, B2B booking system, subscription SaaS",
      tech: ["Next.js", "PostgreSQL", "Stripe", "Payload CMS", "TypeScript"],
      cardAction: "Get in touch →",
    },
  ],
  data: [
    {
      name: "Dashboard",
      description:
        "Looker Studio dashboard wired to your data sources - KPIs on one screen.",
      price: "from 600 PLN",
      deliveryTime: "3–7 days",
      features: [
        {
          title: "Data source connection",
          desc: "GA4, Google Sheets, BigQuery or Stripe - connected and ready.",
        },
        {
          title: "KPI overview",
          desc: "The numbers that matter on one screen, updated automatically.",
        },
        {
          title: "Charts & breakdowns",
          desc: "Traffic, revenue, conversions - visualised clearly.",
        },
        {
          title: "Date range filters",
          desc: "Switch between day, week, month or custom range in one click.",
        },
        {
          title: "Shareable link",
          desc: "Share the dashboard with your team without extra setup.",
        },
        {
          title: "Handover & walkthrough",
          desc: "You get the dashboard plus a short guide on how to use it.",
        },
      ],
      examplesLabel: "EXAMPLES:",
      examples:
        "GA4 traffic & conversion dashboard, Stripe revenue report, Google Ads spend vs. results, weekly sales summary from Sheets",
      tech: ["Looker Studio", "BigQuery", "Google Sheets"],
      cardAction: "Get in touch →",
    },
    {
      name: "Data Pipeline",
      description:
        "Automated data flow in BigQuery - no more manual exports and merges.",
      price: "from 1 600 PLN",
      deliveryTime: "1–2 weeks",
      features: [
        {
          title: "Source audit",
          desc: "I map out where your data lives and how it should flow.",
        },
        {
          title: "BigQuery setup",
          desc: "Dataset structure, tables and access permissions configured.",
        },
        {
          title: "Automated data ingestion",
          desc: "Data lands in BigQuery on a schedule - no manual exports.",
        },
        {
          title: "SQL transformations",
          desc: "Raw data cleaned, joined and shaped for reporting.",
        },
        {
          title: "Dataform jobs",
          desc: "Version-controlled SQL jobs that run on their own.",
        },
        {
          title: "Dashboard-ready output",
          desc: "Final views plugged straight into Looker Studio or your BI tool.",
        },
      ],
      examplesLabel: "EXAMPLES:",
      examples:
        "Multi-source sales data merge, automated daily report pipeline, CRM + e-commerce data integration, scheduled SQL jobs",
      tech: ["BigQuery", "Dataform", "Google Cloud Platform", "SQL", "Python"],
      cardAction: "Get in touch →",
    },
    {
      name: "Excel Migration",
      description:
        "From spreadsheets to SQL with dashboards that update automatically.",
      price: "from 2 200 PLN",
      deliveryTime: "1–3 weeks",
      features: [
        {
          title: "Spreadsheet audit",
          desc: "I review all your files, spot duplicates and inconsistencies.",
        },
        {
          title: "Database design",
          desc: "A relational schema built around how your business actually works.",
        },
        {
          title: "Data migration",
          desc: "All historical data moved cleanly - nothing lost, nothing broken.",
        },
        {
          title: "SQL views & queries",
          desc: "Ready-made queries for the reports you run most often.",
        },
        {
          title: "Team access setup",
          desc: "Everyone who needs the data can reach it - with the right permissions.",
        },
        {
          title: "Dashboard connection",
          desc: "New database wired to Looker Studio so reports update automatically.",
        },
      ],
      examplesLabel: "EXAMPLES:",
      examples:
        "Excel → PostgreSQL, multi-department cost tracker, inventory spreadsheets → shared database, team reporting hub",
      tech: ["PostgreSQL", "BigQuery", "Looker Studio", "SQL"],
      cardAction: "Get in touch →",
    },
  ],
};

export const offerTiersPl: OfferExtras = {
  scopeLabel: "W ramach realizacji",
  timelineLabel: "Realizacja:",
  footerCta: {
    question: "Masz pytania?",
    subtitle: "Pomogę dobrać najlepsze rozwiązanie.",
    button: "Napisz do mnie",
  },
  web: [
    {
      name: "Landing Page",
      description:
        "Szybka strona jednostronicowa - responsywna, gotowa pod SEO, na Twojej domenie.",
      price: "od 1 200 zł",
      deliveryTime: "7–14 dni",
      features: [
        {
          title: "Projekt i struktura",
          desc: "Przejrzysty układ zbudowany wokół Twojej oferty i marki.",
        },
        {
          title: "Responsywność",
          desc: "Działa na każdym ekranie - telefon, tablet, komputer.",
        },
        {
          title: "Widoczność w Google",
          desc: "Podstawowe SEO i szybkie ładowanie od razu po starcie.",
        },
        {
          title: "Formularz kontaktowy",
          desc: "Odwiedzający mogą napisać bez opuszczania strony.",
        },
        {
          title: "Treści i prezentacja",
          desc: "Czytelne sekcje, które budują zaufanie i prezentują ofertę.",
        },
        {
          title: "Wdrożenie i publikacja",
          desc: "Uruchomienie na Twojej domenie, gotowe do działania.",
        },
      ],
      examplesLabel: "PRZYKŁADY:",
      examples:
        "StudioRE (studio projektowania wnętrz), portfolio fotografa, landing page studia jogi, landing page eventu",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
      cardAction: "Napisz do mnie →",
    },
    {
      name: "Strona z CMS-em",
      description:
        "Strona, którą sam aktualizujesz - blog, katalog, bez kodu.",
      price: "od 2 800 zł",
      deliveryTime: "14–21 dni",
      features: [
        {
          title: "Panel CMS",
          desc: "Sam edytujesz treści - bez kodu, bez developera.",
        },
        {
          title: "Blog lub aktualności",
          desc: "Publikujesz wpisy i aktualizacje kiedy chcesz.",
        },
        {
          title: "Katalog produktów lub usług",
          desc: "Uporządkowane pozycje z opisami, zdjęciami i filtrami.",
        },
        {
          title: "SEO dla każdej strony",
          desc: "Własne tytuły i opisy meta dla każdej podstrony.",
        },
        {
          title: "Responsywność",
          desc: "Wygląda dobrze na każdym urządzeniu bez dodatkowej pracy.",
        },
        {
          title: "Wdrożenie i przekazanie",
          desc: "Uruchomienie na domenie i instruktaż obsługi panelu.",
        },
      ],
      examplesLabel: "PRZYKŁADY:",
      examples:
        "Base Camp (headless e-commerce), prosty sklep online, strona studia fitness z grafikiem zajęć, strona restauracji z menu",
      tech: ["Next.js", "Hygraph", "Payload CMS", "GraphQL", "TypeScript"],
      cardAction: "Napisz do mnie →",
    },
    {
      name: "Zaawansowana platforma SaaS",
      description:
        "Pełna aplikacja z kontami, płatnościami, panelem admina i automatyzacją.",
      price: "od 5 900 zł",
      deliveryTime: "4–8 tygodni",
      features: [
        {
          title: "Konta użytkowników i autoryzacja",
          desc: "Rejestracja, logowanie, role i uprawnienia - pełny flow.",
        },
        {
          title: "Integracja płatności",
          desc: "Płatności jednorazowe lub subskrypcje przez Stripe.",
        },
        {
          title: "Panel użytkownika",
          desc: "Każdy użytkownik widzi swoje dane, zamówienia lub postępy.",
        },
        {
          title: "Panel admina",
          desc: "Zarządzasz użytkownikami, treściami i zamówieniami bez kodu.",
        },
        {
          title: "Baza danych i backend",
          desc: "Relacyjna baza danych z bezpiecznym API - gotowa na wzrost.",
        },
        {
          title: "Webhooki i automatyzacja",
          desc: "Po płatności dostęp przyznawany automatycznie, bez ręcznej obsługi.",
        },
      ],
      examplesLabel: "PRZYKŁADY:",
      examples:
        "Unschool Your English (e-learning + Stripe + CMS), platforma ocen wynajmujących, system rezerwacji B2B, SaaS z subskrypcją",
      tech: ["Next.js", "PostgreSQL", "Stripe", "Payload CMS", "TypeScript"],
      cardAction: "Napisz do mnie →",
    },
  ],
  data: [
    {
      name: "Dashboard",
      description:
        "Dashboard Looker Studio podpięty pod Twoje źródła danych - KPI na jednym ekranie.",
      price: "od 600 zł",
      deliveryTime: "3–7 dni",
      features: [
        {
          title: "Podłączenie źródła danych",
          desc: "GA4, Google Sheets, BigQuery lub Stripe - podłączone i gotowe.",
        },
        {
          title: "Przegląd KPI",
          desc: "Liczby które mają znaczenie na jednym ekranie, aktualizowane automatycznie.",
        },
        {
          title: "Wykresy i rozkłady",
          desc: "Ruch, przychody, konwersje - przejrzyście zwizualizowane.",
        },
        {
          title: "Filtry dat",
          desc: "Przełączasz się między dniem, tygodniem, miesiącem lub zakresem.",
        },
        {
          title: "Udostępniany link",
          desc: "Udostępniasz dashboard zespołowi bez dodatkowej konfiguracji.",
        },
        {
          title: "Przekazanie i instruktaż",
          desc: "Dostajesz dashboard i krótki przewodnik jak go obsługiwać.",
        },
      ],
      examplesLabel: "PRZYKŁADY:",
      examples:
        "Dashboard ruchu i konwersji GA4, raport przychodów , Google Ads: wydatki vs. wyniki, tygodniowe podsumowanie sprzedaży z arkuszy",
      tech: ["Looker Studio", "BigQuery", "Google Sheets"],
      cardAction: "Napisz do mnie →",
    },
    {
      name: "Pipeline danych",
      description:
        "Automatyczny przepływ danych w BigQuery - bez ręcznych eksportów i sklejania plików.",
      price: "od 1 600 zł",
      deliveryTime: "1–2 tygodnie",
      features: [
        {
          title: "Audyt źródeł",
          desc: "Mapuję skąd pochodzą Twoje dane i jak powinny przepływać.",
        },
        {
          title: "Konfiguracja BigQuery",
          desc: "Struktura datasetu, tabele i uprawnienia dostępu skonfigurowane.",
        },
        {
          title: "Automatyczne zasilanie danych",
          desc: "Dane trafiają do BigQuery według harmonogramu, bez ręcznych eksportów.",
        },
        {
          title: "Transformacje SQL",
          desc: "Surowe dane oczyszczone, połączone i przygotowane do raportowania.",
        },
        {
          title: "Zadania Dataform",
          desc: "Zadania SQL pod kontrolą wersji, uruchamiane automatycznie.",
        },
        {
          title: "Dane gotowe do dashboardu",
          desc: "Gotowe widoki podpięte wprost do Looker Studio lub innego narzędzia BI.",
        },
      ],
      examplesLabel: "PRZYKŁADY:",
      examples:
        "Łączenie danych sprzedaży z wielu źródeł, automatyczny pipeline raportów dziennych, integracja CRM z e-commerce, zaplanowane zadania SQL",
      tech: ["BigQuery", "Dataform", "Google Cloud Platform", "SQL", "Python"],
      cardAction: "Napisz do mnie →",
    },
    {
      name: "Migracja z Excela",
      description:
        "Z arkuszy do SQL z dashboardem, który aktualizuje się sam.",
      price: "od 2 200 zł",
      deliveryTime: "1–3 tygodnie",
      features: [
        {
          title: "Audyt arkuszy",
          desc: "Przeglądam wszystkie pliki, wyłapuję duplikaty i niespójności.",
        },
        {
          title: "Projekt bazy danych",
          desc: "Schemat relacyjny zbudowany wokół tego jak faktycznie działa Twoja firma.",
        },
        {
          title: "Migracja danych",
          desc: "Wszystkie dane historyczne przeniesione czysto - nic nie ginie, nic się nie psuje.",
        },
        {
          title: "Widoki i zapytania SQL",
          desc: "Gotowe zapytania dla raportów, które generujesz najczęściej.",
        },
        {
          title: "Konfiguracja dostępów",
          desc: "Każdy kto potrzebuje danych ma do nich dostęp z odpowiednimi uprawnieniami.",
        },
        {
          title: "Podłączenie dashboardu",
          desc: "Nowa baza podpięta do Looker Studio - raporty aktualizują się same.",
        },
      ],
      examplesLabel: "PRZYKŁADY:",
      examples:
        "Excel → PostgreSQL, tracker kosztów z wielu działów, arkusze magazynowe → wspólna baza, hub raportowania zespołu",
      tech: ["PostgreSQL", "BigQuery", "Looker Studio", "SQL"],
      cardAction: "Napisz do mnie →",
    },
  ],
};
