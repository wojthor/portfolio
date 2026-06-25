# Teksty strony - pełna lista do edycji

> Stan: czerwiec 2026  
> **Główne źródło:** `src/i18n/translations.ts` (PL + EN)  
> Po zmianach wystarczy zapisać ten plik - większość UI czyta stamtąd przez `useLanguage()`.

---

## Gdzie edytować co

| Co chcesz zmienić | Plik |
|-------------------|------|
| Wszystkie sekcje PL/EN | `src/i18n/translations.ts` |
| Imię i nazwisko w Hero (nagłówek) | `src/app/components/HeroSection.tsx` (hardcoded) |
| Imię w stopce | `src/app/components/Footer.tsx` (hardcoded) |
| Autor opinii | `src/data/testimonial.ts` |
| SEO (title, description) | `src/app/layout.tsx` |
| E-mail kontaktowy | `OfferSection.tsx`, `Contact.tsx`, `layout.tsx` |
| Linki social | `src/data/socials.ts` |

---

## 1. Przełącznik języka

| Klucz | EN | PL |
|-------|----|----|
| label | Language | Język |
| en | EN | EN |
| pl | PL | PL |

---

## 2. Hero

| Klucz | EN | PL |
|-------|----|----|
| photoAlt | Wojciech Aniszewski - Software Developer | Wojciech Aniszewski - Programista |
| badge | Freelance Web Developer | Freelance Web Developer |
| tagline | Freelance Full-Stack Developer. I turn your Figma designs into fully functional web applications – from a polished UI to robust backend architecture. | Freelance Full-Stack Developer. Zamieniam projekty z Figma w w pełni działające aplikacje webowe - od dopracowanego UI po solidną architekturę backendu. |
| featuredProjects | Featured Projects | Wybrane projekty |
| downloadResume | Download my resume | Pobierz CV |

**Hardcoded (nie w translations):**
- Nagłówek H1: `Wojciech` / `Aniszewski`
- Plik CV: `Wojciech Aniszewski CV Freelancer.pdf`

**Slider (aria, jeśli używany):**

| Klucz | EN | PL |
|-------|----|----|
| prev | Previous slide | Poprzedni slajd |
| next | Next slide | Następny slajd |
| slide | Slide | Slajd |
| close | Close gallery | Zamknij galerię |

---

## 3. O mnie (About)

| Klucz | EN | PL |
|-------|----|----|
| badge | Info | Info |
| title | About | O |
| titleAccent | Me | mnie |
| body | I specialize in building modern, fast, and scalable digital products. My expertise lies in crafting dynamic user interfaces with React & Next.js, seamlessly integrated with secure APIs built in Node.js & Python. I partner with businesses and design teams to deliver complete web solutions. Available for B2B collaborations and end-to-end freelance projects. | Tworzę nowoczesne, szybkie i skalowalne produkty cyfrowe. Specjalizuję się w dynamicznych interfejsach użytkownika z React i Next.js, zintegrowanych z bezpiecznymi API w Node.js i Pythonie. Współpracuję z firmami i zespołami designerskimi, dostarczając kompletne rozwiązania webowe. Dostępny na współpracę B2B i projekty freelancerskie end-to-end. |

---

## 4. Tech Stack

| Klucz | EN | PL |
|-------|----|----|
| sectionBadge | TECH STACK | STACK TECHNOLOGICZNY |
| sectionTitle | Tools and technologies I use | Narzędzia i technologie, których używam |

### Kategoria: Web Development

| Klucz | EN | PL |
|-------|----|----|
| title | Web Development | Web Development |
| description | Building scalable applications, APIs, and beautiful user interfaces. | Budowanie skalowalnych aplikacji, API i estetycznych interfejsów użytkownika. |
| items | Next.js, React, TypeScript, Node.js, GraphQL, REST APIs, Prisma, PostgreSQL, MongoDB, Tailwind CSS | *(identyczne)* |

### Kategoria: Data Science & Cloud

| Klucz | EN | PL |
|-------|----|----|
| title | Data Science & Cloud | Data Science & Cloud |
| description | Automating pipelines, writing complex SQL, and visualizing data. | Automatyzacja pipeline'ów, zaawansowane SQL i wizualizacja danych. |
| items | Python, SQL, BigQuery, Data Studio, Dataform, GCP | *(identyczne)* |

---

## 5. Portfolio

| Klucz | EN | PL |
|-------|----|----|
| badge | FEATURED PROJECTS | WYBRANE PROJEKTY |
| title | Featured | Wybrane |
| titleAccent | Projects | projekty |
| visitProject | Visit Project | Zobacz projekt |
| clientReview | Client Review | Opinia klienta |
| inProgressLabel | In progress | W trakcie |

### Projekt 01 - Unschool Your English *(widoczny)*

| Pole | EN | PL |
|------|----|----|
| title | Unschool Your English | Unschool Your English |
| shortDescription | Complete e-learning platform and VSL sales funnel. Built from scratch with a custom CMS panel, database, and payment integration. | Kompletna platforma e-learningowa i lejek sprzedażowy VSL. Zbudowana od podstaw z autorskim panelem CMS, bazą danych i integracją płatności. |
| tech | Next.js, TypeScript, Payload CMS, Stripe, PostgreSQL, Tailwind CSS | *(identyczne)* |
| visitUrl | https://www.wiktorszyszkowski.pl | *(identyczne)* |

### Projekt 02 - Base Camp *(widoczny)*

| Pole | EN | PL |
|------|----|----|
| title | Base Camp | Base Camp |
| shortDescription | Modern headless e-commerce with Next.js and Stripe checkout. Product catalog managed in Hygraph CMS via GraphQL. | Nowoczesny sklep headless z Next.js i płatnościami Stripe. Katalog produktów w Hygraph CMS przez GraphQL. |
| tech | Next.js, React, TypeScript, Hygraph, GraphQL, Stripe | *(identyczne)* |
| visitUrl | https://next13-masters-test.vercel.app | *(identyczne)* |

### Projekt 03 - Glob Travel Agency *(ukryty: hidden: true)*

| Pole | EN | PL |
|------|----|----|
| title | Glob Travel Agency | Glob Travel Agency |
| shortDescription | Travel agency portal with dynamic content via GraphQL and Hygraph. Fast Next.js frontend for frequent updates. | Portal biura podróży z dynamiczną treścią przez GraphQL i Hygraph. Szybki frontend Next.js pod częste aktualizacje. |
| tech | Next.js, TypeScript, GraphQL, Hygraph | *(identyczne)* |

### Projekt 04 - StudioRE *(widoczny, w trakcie)*

| Pole | EN | PL |
|------|----|----|
| title | StudioRE | StudioRE |
| shortDescription | Interior design studio website with animations and interactive elements. In collaboration with wilczynska.visuals - currently in progress. | Strona studia wnętrz z animacjami i interakcjami. We współpracy z wilczynska.visuals - w trakcie realizacji. |
| tech | React, Node.js, Next.js, Tailwind CSS | *(identyczne)* |

### Projekt 05 - Rental Rate *(ukryty: hidden: true)*

| Pole | EN | PL |
|------|----|----|
| title | Rental Rate | Rental Rate |
| shortDescription | Tenant review platform powered by PostgreSQL and Prisma. Landlord ratings, user profiles, and scalable backend workflows. | Platforma ocen wynajmujących oparta na PostgreSQL i Prisma. Recenzje, profile użytkowników i skalowalny backend. |
| tech | Next.js, TypeScript, Prisma, PostgreSQL | *(identyczne)* |

---

## 6. Oferta (Offer)

### Nagłówek sekcji

| Klucz | EN | PL |
|-------|----|----|
| sectionBadge | SERVICES & PRICING | USŁUGI I CENNIK |
| sectionTitle | Specialized solutions for your business | Wyspecjalizowane rozwiązania dla Twojego biznesu |

### Romby-bramki

| Klucz | EN | PL |
|-------|----|----|
| gateways.web | Web Development | Tworzenie Stron |
| gateways.data | Data Science | Analityka i Dane |
| viewOffer | View offer | Zobacz ofertę |

### Drawer - nawigacja i etykiety

| Klucz | EN | PL |
|-------|----|----|
| servicesNav.web | Web Development Services | Usługi Web Development |
| servicesNav.data | Data Science Services | Usługi Data Science |
| priceEstimateLabel | Estimate | Estymacja |
| mailtoSubject | Inquiry about: | Zapytanie o projekt: |
| backToHome | ← Back to home | ← Wróć na stronę główną |
| techDetailsLabel | Show tech details | Szczegóły technologiczne |
| tabs.web | Web Development | Tworzenie Stron |
| tabs.data | Data & Analytics | Analityka i Dane |

### Web - Tier 1: Static Showcase

| Pole | EN | PL |
|------|----|----|
| name | Static Showcase | Static Showcase |
| price | od 1 500 zł | od 1 500 zł |
| audienceLabel | FOR WHOM: | DLA KOGO: |
| audience[0] | Freelancers & creators | Freelancerzy i twórcy |
| audience[1] | Law firms & premium boutiques | Kancelarie i butiki premium |
| audience[2] | Businesses selling one product or service | Firmy sprzedające jeden produkt lub usługę |
| examplesLabel | EXAMPLE PROJECTS: | PRZYKŁADOWE PROJEKTY: |
| examples | Static Landing Page, Portfolio Page, Business Card Site | Static Landing Page, Portfolio Page, Strona wizytówka |
| tech | HTML/CSS/JS, Next.js, Core Web Vitals, SEO | *(identyczne)* |
| cardAction | Select this solution → | Wybierz to rozwiązanie → |

### Web - Tier 2: Dynamic Core

| Pole | EN | PL |
|------|----|----|
| name | Dynamic Core | Dynamic Core |
| price | od 3 300 zł | od 3 300 zł |
| audienceLabel | FOR WHOM: | DLA KOGO: |
| audience[0] | Companies publishing content regularly | Firmy regularnie publikujące treści |
| audience[1] | Brands with product catalogs | Marki z katalogiem produktów |
| audience[2] | Agencies with frequently changing offers | Agencje często zmieniające ofertę |
| examplesLabel | EXAMPLE PROJECTS: | PRZYKŁADOWE PROJEKTY: |
| examples | Company Blog, Product Catalog, Agency Website | Blog firmowy, Katalog produktów, Strona agencji |
| tech | Sanity, Contentful, Next.js, SSG/SSR, CDN | *(identyczne)* |
| cardAction | Select this solution → | Wybierz to rozwiązanie → |

### Web - Tier 3: Data-Driven System

| Pole | EN | PL |
|------|----|----|
| name | Data-Driven System | Data-Driven System |
| price | od 6 900 zł | od 6 900 zł |
| audienceLabel | FOR WHOM: | DLA KOGO: |
| audience[0] | Online course creators | Twórcy kursów online |
| audience[1] | B2B SaaS founders | Founderzy narzędzi SaaS |
| audience[2] | E-commerce with custom business logic | E-commerce z własną logiką biznesową |
| examplesLabel | EXAMPLE PROJECTS: | PRZYKŁADOWE PROJEKTY: |
| examples | E-learning Platform, SaaS Application, Custom E-commerce | Platforma e-learning, Aplikacja SaaS, Custom E-commerce |
| tech | Next.js, PostgreSQL, Supabase, Stripe, Auth | *(identyczne)* |
| cardAction | Select this solution → | Wybierz to rozwiązanie → |

### Data - Tier 1: Data Studio Dashboards

| Pole | EN | PL |
|------|----|----|
| name | Data Studio Dashboards | Data Studio Dashboards |
| price | od 800 zł | od 800 zł |
| audienceLabel | FOR WHOM: | DLA KOGO: |
| audience[0] | Marketing & growth teams | Zespoły marketingu i growth |
| audience[1] | E-commerce owners | Właściciele e-commerce |
| audience[2] | Ops teams building weekly reports | Operacje budujące raporty tygodniowe |
| examplesLabel | EXAMPLE PROJECTS: | PRZYKŁADOWE PROJEKTY: |
| examples | GA4 Traffic Dashboard, Stripe Revenue Report, Sheets Ops Dashboard | Dashboard GA4, Raport Stripe, Dashboard operacyjny |
| tech | Data Studio, Google Sheets, BigQuery, GA4 | *(identyczne)* |
| cardAction | Select this solution → | Wybierz to rozwiązanie → |

### Data - Tier 2: BigQuery Engineering

| Pole | EN | PL |
|------|----|----|
| name | BigQuery Engineering | BigQuery Engineering |
| price | od 1 900 zł | od 1 900 zł |
| audienceLabel | FOR WHOM: | DLA KOGO: |
| audience[0] | Companies on Google Cloud | Firmy na Google Cloud |
| audience[1] | High-volume operational data | Duże wolumeny danych operacyjnych |
| audience[2] | Teams merging multiple data sources | Zespoły łączące wiele źródeł danych |
| examplesLabel | EXAMPLE PROJECTS: | PRZYKŁADOWE PROJEKTY: |
| examples | GPS Data Pipeline, SQL Automation, Multi-DB Integration | Pipeline GPS, Automatyzacja SQL, Integracja wielu baz |
| tech | BigQuery, Dataform, GCP, SQL | *(identyczne)* |
| cardAction | Select this solution → | Wybierz to rozwiązanie → |

### Data - Tier 3: Excel to SQL Migration

| Pole | EN | PL |
|------|----|----|
| name | Excel to SQL Migration | Excel to SQL Migration |
| price | od 2 900 zł | od 2 900 zł |
| audienceLabel | FOR WHOM: | DLA KOGO: |
| audience[0] | Growing SMBs outgrowing spreadsheets | Rosnące MŚP wyrastające z Excela |
| audience[1] | Teams needing shared, reliable data | Zespoły potrzebujące wspólnych danych |
| audience[2] | Companies centralizing scattered files | Firmy centralizujące rozproszone pliki |
| examplesLabel | EXAMPLE PROJECTS: | PRZYKŁADOWE PROJEKTY: |
| examples | Excel → PostgreSQL, Team Data Hub, Spreadsheet Migration | Excel → PostgreSQL, Hub danych zespołu, Migracja arkuszy |
| tech | PostgreSQL, Supabase, Data Studio | *(identyczne)* |
| cardAction | Select this solution → | Wybierz to rozwiązanie → |

### Twój pomysł (customIdea) - w obu drawerach

| Klucz | EN | PL |
|-------|----|----|
| navLabel | Your idea | Twój pomysł |
| desc | Got something else in mind? Reach out. You don't need to know exactly what you need - just describe the problem. | Masz inny pomysł? Napisz. Nie musisz wiedzieć czego dokładnie potrzebujesz - wystarczy że opiszesz problem. |
| cta | Get in touch | Napisz do mnie |

**Hardcoded w mailto (OfferSection):** temat dla „Twój pomysł” = `Twój pomysł (Web)` lub `Twój pomysł (Data)` / `Your idea (Web)` / `Your idea (Data)`.

---

## 7. Opinia klienta (Testimonial)

| Klucz | EN | PL |
|-------|----|----|
| badge | Client feedback | Opinie klientów |
| title | Trusted | Zaufane |
| titleAccent | words | słowa |
| viewProject | View project | Zobacz projekt |

### Treść opinii - EN (3 akapity)

1. I strongly recommend partnership with Wojtek. The whole landing page was done as I wanted to - basing on my requirements. However, I'd also say that it was better than I expected. It was finished very quickly, the website is highly intuitive to use, and overall I'm very satisfied of the final result.

2. When I had needed any changes to be provided, all of them would have been added there immediately. Moreover, Wojtek suggests many interesting and great things that would improve a website. For me, it was a huge advantage that he was willing to get the best result.

3. I strongly recommend him!

### Treść opinii - PL (3 akapity)

1. Z całego serca polecam współpracę z Wojtkiem. Cały landing powstał dokładnie tak, jak chciałem - zgodnie z moimi wymaganiami. Powiedziałbym nawet, że wyszedł lepiej, niż się spodziewałem. Strona została ukończona bardzo szybko, jest niezwykle intuicyjna w obsłudze i jestem bardzo zadowolony z efektu końcowego.

2. Gdy potrzebowałem jakichkolwiek zmian, wszystkie były wdrażane od razu. Wojtek dodatkowo proponuje wiele ciekawych rozwiązań, które realnie poprawiają stronę. Dla mnie ogromną zaletą było to, że zależało mu na jak najlepszym rezultacie.

3. Gorąco go polecam!

**Autor (hardcoded w `src/data/testimonial.ts`):**
- Imię i nazwisko: **Wiktor Szyszkowski**
- Avatar: `/image.png`

---

## 8. Kontakt

| Klucz | EN | PL |
|-------|----|----|
| badge | Contact | Kontakt |
| title | Ready to Start | Gotowy, by zacząć |
| titleAccent | Your Project? | swój projekt? |
| subtitle | Let's bring your ideas to life with cutting-edge web technologies and creative design. | Przekujmy Twoje pomysły w rzeczywistość dzięki nowoczesnym technologiom webowym i kreatywnemu designowi. |
| cta | Contact Me | Napisz do mnie |

**E-mail (hardcoded):** `wojtek1aniszewski1@gmail.com`

---

## 9. Stopka (Footer)

| Klucz | EN | PL |
|-------|----|----|
| poweredBy | Powered by | Powered by |
| visualConcept | Visual concept by | Koncepcja wizualna: |

**Hardcoded:**
- `Wojciech Aniszewski © {rok}`
- Link: `wilczynska.visuals` → `wilczynska.visuals@gmail.com`

---

## 10. Social media (tooltips)

| Label | URL |
|-------|-----|
| GitHub | https://github.com/wojthor |
| LinkedIn | https://www.linkedin.com/in/wojciech-aniszewski/ |

---

## 11. SEO i metadane (`layout.tsx`)

> **Uwaga:** SEO nie przełącza się z językiem - zawsze po angielsku.

| Pole | Wartość |
|------|---------|
| title | Wojciech Aniszewski - Freelance Web Developer |
| description | Freelancer Web Developer specializing in React, Next.js, and Angular. Full-stack projects with Prisma, Hygraph, Stripe. Collaboration with wilczynska.visuals. |
| Open Graph title | Wojciech Aniszewski - Software Developer |
| Open Graph description | Freelancer Web Developer from Gdańsk. React, Next.js, Angular. Projects: Base Camp e-commerce, StudioRE (with wilczynska.visuals), Rental Rate. Prisma, Hygraph, Stripe. |
| Twitter title | Wojciech Aniszewski - Freelance Web Developer |
| Twitter description | Freelance Web Developer. React, Next.js, Angular. Collaboration with wilczynska.visuals. Base Camp, StudioRE, Rental Rate. |
| OG image alt | Wojciech Aniszewski - Software Developer |

### JSON-LD (structured data)

| Pole | Wartość |
|------|---------|
| name | Wojciech Aniszewski |
| jobTitle | Freelancer Web Developer |
| email | wojtek1aniszewski1@gmail.com |
| addressLocality | Gdańsk |
| addressCountry | PL |
| knowsAbout | React, Next.js, Angular, TypeScript, GraphQL, Python, Prisma, Hygraph, Stripe, Node.js, Tailwind CSS |

---

## 12. Teksty NIE tłumaczone (zostają takie same w PL i EN)

- **Wojciech Aniszewski** (Hero, Footer, SEO)
- **Nazwy projektów:** Unschool Your English, Base Camp, Glob Travel Agency, StudioRE, Rental Rate
- **Nazwy tierów oferty:** Static Showcase, Dynamic Core, Data-Driven System, Data Studio Dashboards, BigQuery Engineering, Excel to SQL Migration
- **Nazwy technologii:** Next.js, React, Stripe, PostgreSQL, itd.
- **Wiktor Szyszkowski** (autor opinii)
- **wilczynska.visuals** (link w stopce i opisach projektów)
- **URL-e projektów** (wiktorszyszkowski.pl, Vercel demo, itd.)

---

## Szybka ściąga - ścieżki w `translations.ts`

```
translations.pl / translations.en
├── languageSwitcher
├── slider
├── hero
├── about
├── tech.categories[0]  → web
├── tech.categories[1]  → data
├── portfolio.projects[0..4]
├── offer
│   ├── gateways, viewOffer, servicesNav, priceEstimateLabel
│   ├── web[0..2]       → 3 tiery web
│   ├── data[0..2]      → 3 tiery data
│   └── customIdea
├── testimonial
├── contact
└── footer
```
