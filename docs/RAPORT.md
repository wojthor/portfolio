# Raport projektu - Portfolio Wojciech Aniszewski

> Kompletna dokumentacja repozytorium i strony **aniszewski-code.pl**.  
> Ostatnia aktualizacja: **czerwiec 2026** (i18n PL/EN, oferta drawer, cennik freelancer 2026, web + data positioning, Impel timeline).

---

## Spis treści

1. [Podsumowanie wykonawcze](#1-podsumowanie-wykonawcze)
2. [Cel strony i grupa docelowa](#2-cel-strony-i-grupa-docelowa)
3. [Wielojęzyczność (PL / EN)](#3-wielojęzyczność-pl--en)
4. [Tożsamość wizualna](#4-tożsamość-wizualna)
5. [System badge'ów (`brand-badge.tsx`)](#5-system-badgeów-brand-badgets)
6. [Struktura strony - sekcje](#6-struktura-strony--sekcje)
7. [Hero](#7-hero)
8. [O mnie (About)](#8-o-mnie-about)
9. [Stack technologiczny (Tech)](#9-stack-technologiczny-tech)
10. [Portfolio](#10-portfolio)
11. [Oferta (Services & Pricing)](#11-oferta-services--pricing)
12. [Opinie klientów (Testimonial)](#12-opinie-klientów-testimonial)
13. [Kontakt i stopka](#13-kontakt-i-stopka)
14. [Architektura repozytorium](#14-architektura-repozytorium)
15. [Warstwa i18n i danych](#15-warstwa-i18n-i-danych)
16. [SEO, metadane, JSON-LD](#16-seo-metadane-json-ld)
17. [Zasoby statyczne (`public/`)](#17-zasoby-statyczne-public)
18. [Animacje i UX](#18-animacje-i-ux)
19. [Zależności i skrypty](#19-zależności-i-skrypty)
20. [Szybki start](#20-szybki-start)
21. [Znane niedociągnięcia](#21-znane-niedociągnięcia)
22. [Historia zmian (czerwiec 2026)](#22-historia-zmian-czerwiec-2026)

---

## 1. Podsumowanie wykonawcze

| Pole | Wartość |
|------|---------|
| **Nazwa repozytorium** | `portfolio` |
| **Właściciel** | Wojciech Aniszewski |
| **Rola (copy strony)** | Freelance Developer |
| **Kompetencje** | Web development + inżynieria danych (Dual-Threat) |
| **Lokalizacja** | Gdańsk, Polska |
| **Domena** | [aniszewski-code.pl](https://aniszewski-code.pl) |
| **E-mail** | wojtek1aniszewski1@gmail.com |
| **GitHub** | [github.com/wojthor](https://github.com/wojthor) |
| **LinkedIn** | [linkedin.com/in/wojciech-aniszewski](https://www.linkedin.com/in/wojciech-aniszewski/) |
| **Typ** | Jednostronicowe portfolio (SPA-like landing) |
| **Języki UI** | Polski + Angielski |
| **Framework** | Next.js 16.1.1 · React 19 · TypeScript |
| **Styl** | Dark mode, glassmorphism, akcent `#F7011E` |
| **Koncept wizualny** | wilczynska.visuals |
| **Projekty w sliderze** | 3 widoczne / 5 w danych |

### Co robi strona

1. **Pozycjonuje** freelancera na styku React/Next.js i BigQuery/SQL/Data Studio.
2. **Pokazuje** 3 case study w auto-sliderze z mockupem przeglądarki.
3. **Sprzedaje** 6 pakietów usług (3 web + 3 data) w rozwijanym drawerze z cennikiem „od …”.
4. **Buduje zaufanie** przez opinię Wiktora Szyszkowskiego (Unschool Your English).
5. **Konwertuje** na kontakt e-mail i pobranie CV.

### Model Dual-Threat

| Filar | Komunikat | Gdzie na stronie |
|-------|-----------|------------------|
| **Web Development** | Strony, aplikacje, CMS, SaaS | Tech (romb 1), Oferta (bramka Web) |
| **Data & Cloud** | Pipeline'y, dashboardy, migracje z Excela | Tech (romb 2), Oferta (bramka Data) |

---

## 2. Cel strony i grupa docelowa

### Cel biznesowy

Strona ma pozyskiwać klientów B2B i projekty freelancerskie. Główny przekaz (PL):

> *Buduję aplikacje webowe i pipeline'y danych. React i Next.js od strony frontu, BigQuery i SQL od strony danych.*

EN odpowiednik w `translations.en.hero.tagline`.

### Grupa docelowa

| Segment | Potrzeba |
|---------|----------|
| Małe firmy / freelancerzy | Landing page, wizytówka online |
| Firmy z treścią | Strona z CMS-em, prosty sklep |
| Founders SaaS | Platforma z kontami i Stripe |
| Marketing / ops | Dashboard Data Studio |
| Firmy na GCP | Pipeline BigQuery + Dataform |
| Zespoły na Excelu | Migracja do SQL + dashboard |

### Call-to-action

| Etykieta (PL / EN) | Akcja |
|--------------------|-------|
| Wybrane projekty / Featured Projects | `#projects` |
| Pobierz CV / Download my resume | PDF w `public/` |
| Zobacz projekt / Visit Project | URL projektu |
| Opinia klienta / Client Review | `#testimonial` |
| Napisz do mnie / Get in touch | `mailto:wojtek1aniszewski1@gmail.com` |
| Umów rozmowę (stopka oferty) | `mailto:` z tematem tieru |

---

## 3. Wielojęzyczność (PL / EN)

### Komponenty

| Plik | Rola |
|------|------|
| `src/i18n/translations.ts` | Słowniki EN + PL, typy TypeScript |
| `src/i18n/offerTiersData.ts` | Dane 6 tierów oferty (osobny plik ze względu na rozmiar) |
| `src/i18n/LanguageProvider.tsx` | Context React, `useLanguage()` |
| `src/app/components/LanguageSwitcher.tsx` | Przełącznik EN \| PL |
| `src/app/components/Providers.tsx` | Opakowanie Provider + Switcher |

### Zachowanie

- **Persistencja:** `localStorage` klucz `portfolio-locale`
- **Domyślny język:** PL jeśli `navigator.language` zaczyna się od `pl`, inaczej EN
- **`document.documentElement.lang`:** aktualizowany dynamicznie (`pl` / `en`)
- **Pozycja switchera:** `fixed top-4 right-4 z-50`

### Co jest tłumaczone

Hero, About, Tech, Portfolio (opisy projektów), Oferta (pełne tiery), Testimonial (osobne akapity PL), Contact, Footer (częściowo), etykiety slidera, aria labels slidera.

### Co NIE jest tłumaczone

- Imię i nazwisko w H1 (hardcoded w `HeroSection.tsx`)
- Nazwy technologii w chipach (Next.js, BigQuery…)
- Nazwy projektów (Unschool, Base Camp, StudioRE)
- URL-e, e-mail, nazwa wilczynska.visuals
- Opinia klienta EN (oryginalny tekst Wiktora po angielsku; PL to tłumaczenie)

### Hardcoded (poza `translations.ts`)

| Element | Lokalizacja |
|---------|-------------|
| H1 „Wojciech Aniszewski" | `HeroSection.tsx` |
| Stopka „Powered by" | `Footer.tsx` (częściowo w `translations`) |
| Treść opinii EN | `translations.en.testimonial` (autentyczna opinia) |

---

## 4. Tożsamość wizualna

### Paleta

| Token | HEX | Użycie |
|-------|-----|--------|
| Brand Red | `#F7011E` | Akcent, CTA, chipy, aktywne stany |
| Red Light | `#ff4d4d` | Gradient przycisków |
| Red Mid | `#ff3b3b` | Gradient nagłówków |
| Red Dark | `#a30000` | Końcówka gradientu CTA |
| Tło | `bg-black` | Cała strona |
| Karty | `bg-white/5` + `backdrop-blur` | Panele, drawer oferty |
| Obramowania | `border-white/10` | Karty; hover `border-[#F7011E]/40` |

### Typografia

- **Font:** Inter (`next/font/google`, `display: swap`)
- **Nagłówki sekcji:** `text-3xl` → `lg:text-5xl`, `font-bold`, `tracking-tight`
- **Hero H1:** do `lg:text-8xl`, gradient na imię i nazwisko
- **Etykiety redakcyjne** (oferta): `text-[11px] uppercase tracking-[0.2em] text-gray-500`

### Tło (`Backgroud.tsx`)

- Rozmyte czerwone bloby (`blur-[120px]`)
- SVG pattern krzyżyków (opacity 5%)
- `position: fixed`, `pointer-events: none`

### Wzorce layoutu

- **Romb** (`-skew-x-[15deg]` + counter-skew treści): bramki oferty (desktop), karty tech (desktop)
- **Prostokąt** (`rounded-xl`): bramki oferty (mobile), karty tech (mobile)
- **Drawer oferty:** panel master-detail (sidebar + content), `bg-[#0a0a0a]`

---

## 5. System badge'ów (`brand-badge.tsx`)

Jeden plik definiuje **dwa warianty** wizualne używane konsekwentnie na całej stronie.

### `SectionBadge` - nagłówki sekcji

Zapowiada część strony (np. „WYBRANE PROJEKTY", „USŁUGI I CENNIK").

```
inline-block · px-4 py-1.5 · rounded-full
border border-[#F7011E]/20 · bg-[#F7011E]/5
text-xs font-medium uppercase tracking-[0.2em] text-[#F7011E]
backdrop-blur-sm
```

**Używane w:** About, Tech, Portfolio, Offer, Testimonial, Contact.

### `AccentChip` - tagi wewnątrz kart

Technologie w portfolio, stacku, szczegółach technicznych oferty.

```
rounded-full · px-3 py-1
border border-[#F7011E]/20 · bg-[#F7011E]/5
text-xs text-[#F7011E]
```

**Używane w:** `Portfolio.tsx`, `TechSection.tsx`, `OfferSection.tsx` (wiersz „Szczegóły techniczne").

---

## 6. Struktura strony - sekcje

Kolejność w `src/app/page.tsx`:

```
Providers
├── LanguageProvider + LanguageSwitcher (fixed)
└── <div min-h-screen bg-black>
    ├── Backgroud (fixed dekoracja)
    ├── HeroSection
    ├── AboutSection          #about
    ├── TechSection           #tech
    ├── Portfolio             #projects
    ├── OfferSection          #offer
    ├── TestimonialSection    #testimonial
    ├── Contact               #contact
    └── Footer
```

| # | Sekcja | Plik | Anchor | ID sekcji |
|---|--------|------|--------|-----------|
| 1 | Hero | `HeroSection.tsx` | - | - |
| 2 | O mnie | `AboutSection.tsx` | scroll z hero | `#about` |
| 3 | Stack | `TechSection.tsx` | - | `#tech` |
| 4 | Portfolio | `Portfolio.tsx` | CTA hero | `#projects` |
| 5 | Oferta | `OfferSection.tsx` | - | `#offer` |
| 6 | Opinie | `TestimonialSection.tsx` | z portfolio | `#testimonial` |
| 7 | Kontakt | `Contact.tsx` | - | `#contact` |
| 8 | Stopka | `Footer.tsx` | - | - |

> `navbar.tsx` istnieje w repo, ale **nie jest montowany** na stronie głównej.

---

## 7. Hero

**Plik:** `src/app/components/HeroSection.tsx`

### Elementy

| Element | Opis |
|---------|------|
| Zdjęcie | `/photo3.png`, responsywne, `object-contain` |
| Badge | „Freelance Developer" + pulsująca kropka (ukryty na mobile) |
| H1 | **Hardcoded** gradient: Wojciech + Aniszewski |
| Tagline | Z `translations` - web + data |
| CTA primary | „Wybrane projekty" → `#projects` |
| CTA secondary | „Pobierz CV" → PDF |
| Social | GitHub, LinkedIn (`data/socials.ts`) |
| Scroll hint | `ChevronDown` na dole, `animate-bounce`, link `#about` |

### Animacje wejścia

Klasy `hero-enter` + `hero-enter-delay-0` … `delay-4` w `globals.css` (fade + slide up, stagger).

### Layout

- Mobile: kolumna, zdjęcie ~50% wysokości
- Desktop: `lg:flex-row`, tekst po lewej, zdjęcie po prawej

---

## 8. O mnie (About)

**Plik:** `src/app/components/AboutSection.tsx`

### Treść

- Badge „Info"
- Tytuł: „O" + „mnie" (gradient jak inne sekcje)
- Body: web (React, Next.js, CMS, Stripe) + data (BigQuery, Dataform, Data Studio)

### Layout

Grid `lg:grid-cols-[1fr_300px]`:

| Kolumna | Zawartość |
|---------|-----------|
| Lewa | Karta z body (`rounded-2xl border bg-white/5`) |
| Prawa | **Oś czasu doświadczenia** - bez tła/karty, luźny układ |

### Oś czasu (`translations.about.experience`)

| Okres | Rola | Firma | Logo |
|-------|------|-------|------|
| kwi 2026 - obecnie / Apr 2026 - now | Junior Data Scientist | Impel | `/Logo_Impel_Group.jpg` |
| 2022 - obecnie | Freelance Developer | Projekty web i dane | - |

Wizualnie: pionowa linia gradientowa, czerwona kropka przy bieżącej pozycji, logo Impel pod rolą (`next/image`, `h-9`).

---

## 9. Stack technologiczny (Tech)

**Plik:** `src/app/components/TechSection.tsx`

### Nagłówek

- `SectionBadge`: „STACK TECHNOLOGICZNY" / „TECH STACK"
- Tytuł: „Narzędzia, z których korzystam" / „Tools I actually use"

### Dwie kategorie (romby / prostokąty)

| ID | Tytuł | Opis skrócony |
|----|-------|---------------|
| `web` | Web Development | Full-stack, landing → SaaS |
| `data` | Data & Cloud | Pipeline'y, SQL, GCP |

### Itemy w chipach

**Web:** Next.js, React, TypeScript, Node.js, GraphQL, REST APIs, Prisma, PostgreSQL, MongoDB, Tailwind CSS

**Data:** Python, SQL, BigQuery, Data Studio, Dataform, Google Cloud Platform

### Responsywność rombów

| Breakpoint | Kształt |
|------------|---------|
| `< md` | Prostokąt `rounded-xl`, bez skew |
| `≥ md` | Romb `-skew-x-[15deg]`, treść `skew-x-[15deg]` |

---

## 10. Portfolio

**Plik:** `src/app/components/Portfolio.tsx`  
**Anchor:** `#projects`

### Auto-slider

| Parametr | Wartość |
|----------|---------|
| Interwał | 5000 ms (`AUTO_PLAY_MS`) |
| Pauza | `mouseenter` / `mouseleave` |
| Przejście | fade opacity 500 ms |
| Sterowanie | Prev/next + kropki pod panelem |

### Layout slajdu

- Panel: `rounded-2xl border bg-white/5 backdrop-blur-md`, szerokość ~96%, `max-w-[1600px]`
- Grid `lg:grid-cols-12`: tekst (5 kol.) + browser mockup (7 kol.)
- Mockup: pasek macOS (3 kropki), `aspect-[2/1]`, `object-cover object-top`

### Projekty widoczne

| ID | Nazwa | Status | URL | Extra |
|----|-------|--------|-----|-------|
| 01 | Unschool Your English | Live | wiktorszyszkowski.pl | Link „Opinia klienta" → `#testimonial` |
| 02 | Base Camp | Live | Vercel demo | Headless e-commerce |
| 04 | StudioRE | W trakcie | - | Badge amber „W trakcie" |

### Projekty ukryte (`hidden: true`)

| ID | Nazwa |
|----|-------|
| 03 | Glob Travel Agency |
| 05 | Rental Rate |

Źródło: `translations.*.portfolio.projects[]`.

### Per slajd

- Numer `01`… (mono, czerwony)
- Tytuł + badge in progress
- `shortDescription`
- `AccentChip` dla każdej technologii
- Przyciski: Visit Project, Client Review (jeśli `reviewAnchor`)

---

## 11. Oferta (Services & Pricing)

**Plik:** `src/app/components/OfferSection.tsx`  
**Dane:** `src/i18n/offerTiersData.ts` + etykiety w `translations.ts`  
**Anchor:** `#offer`

### Nagłówek sekcji

- Badge: „USŁUGI I CENNIK" / „SERVICES & PRICING"
- Tytuł: „Dwa obszary, jedna osoba" / „Two areas, one person"

### Bramki (gateway cards)

Dwa romby/prostokąty obok siebie:

| Bramka | Ikona | Tab |
|--------|-------|-----|
| Tworzenie stron i aplikacji / Web Development | `Globe` | `web` |
| Analityka i dane / Data & Analytics | `BarChart3` | `data` |

Kliknięcie otwiera **Smooth Sliding Drawer** (`grid-rows` animacja 500 ms). Ponowne kliknięcie zamyka. Przełączenie między bramkami: zamknij → otwórz drugi tab.

### Drawer - master-detail

```
┌─────────────────┬──────────────────────────────────────────┐
│ Sidebar (~26%)  │ Content                                  │
│ - nav tierów    │ - OfferHeader (eyebrow, tytuł, opis,    │
│ - „Twój pomysł" │   cena „od …")                           │
│                 │ - BenefitGrid 6 kafelków (01-06)         │
│                 │ - Kolumna PRZYKŁADY                    │
│                 │ - Szczegóły techniczne (AccentChip)      │
│                 │ - Stopka: pytanie + CTA mailto           │
└─────────────────┴──────────────────────────────────────────┘
```

### Zachowanie UI

- Zmiana tieru w sidebarze: fade + slide (`150 ms` delay)
- Cena: parser `od|from` + kwota, duży czerwony tekst
- **Brak wyświetlania czasu realizacji** w UI (pole `deliveryTime` w danych, niewykorzystane wizualnie)
- Mailto: `wojtek1aniszewski1@gmail.com`, temat z `mailtoSubject` + nazwa tieru
- Stopka panelu: „Masz pytania?" + „Napisz do mnie" / „Get in touch"

### Cennik (propozycja freelancer PL 2026)

| Tier | PL | EN |
|------|----|----|
| Landing Page | od 1 200 zł | from 1 200 PLN |
| Strona z CMS-em | od 2 800 zł | from 2 800 PLN |
| Zaawansowana platforma SaaS | od 5 900 zł | from 5 900 PLN |
| Dashboard | od 600 zł | from 600 PLN |
| Pipeline danych | od 1 600 zł | from 1 600 PLN |
| Migracja z Excela | od 2 200 zł | from 2 200 PLN |

### Web - Tier 1: Landing Page

| Pole | Wartość |
|------|---------|
| **Tech** | Next.js, TypeScript, Tailwind CSS, SEO |
| **Przykłady** | StudioRE, portfolio fotografa, landing studia jogi, landing eventu |
| **6 features** | Projekt i struktura · Responsywność · Widoczność w Google · Formularz · Treści · Wdrożenie |

### Web - Tier 2: Strona z CMS-em

| Pole | Wartość |
|------|---------|
| **Tech** | Next.js, Hygraph, Payload CMS, GraphQL, TypeScript |
| **Przykłady** | Base Camp, prosty sklep online, studio fitness, restauracja z menu |
| **6 features** | Panel CMS · Blog · Katalog · SEO per page · Responsywność · Wdrożenie i przekazanie |

### Web - Tier 3: Zaawansowana platforma SaaS

| Pole | Wartość |
|------|---------|
| **Tech** | Next.js, PostgreSQL, Stripe, Payload CMS, TypeScript |
| **Przykłady** | Unschool Your English, platforma ocen, rezerwacje B2B, SaaS subskrypcyjny |
| **6 features** | Auth · Stripe · Panel user · Panel admin · Backend · Webhooki |

### Data - Tier 1: Dashboard

| Pole | Wartość |
|------|---------|
| **Tech** | Data Studio, BigQuery, Google Sheets |
| **Przykłady** | GA4 dashboard, Stripe revenue, Google Ads, podsumowanie z Sheets |

### Data - Tier 2: Pipeline danych

| Pole | Wartość |
|------|---------|
| **Tech** | BigQuery, Dataform, Google Cloud Platform, SQL, Python |
| **Przykłady** | Multi-source merge, raporty dzienne, CRM+e-commerce, SQL jobs |

### Data - Tier 3: Migracja z Excela

| Pole | Wartość |
|------|---------|
| **Tech** | PostgreSQL, BigQuery, Data Studio, SQL |
| **Przykłady** | Excel→PostgreSQL, tracker kosztów, magazyn→baza, hub raportowania |

### Twój pomysł (`customIdea`)

Ostatnia pozycja w sidebarze - opis + CTA mailto bez cennika.

---

## 12. Opinie klientów (Testimonial)

**Plik:** `src/app/components/TestimonialSection.tsx`  
**Anchor:** `#testimonial` (`scroll-mt-24`)

### Layout (jak Portfolio)

- `SectionBadge` + tytuł split (biały + czerwony)
- Karta `rounded-2xl border bg-white/5 backdrop-blur-md`
- 3 akapity opinii (EN oryginał / PL tłumaczenie)
- `AuthorBlock`: avatar `/image.png`, Wiktor Szyszkowski
- CTA „Zobacz projekt" → `#wiktor-landing` (uwaga: portfolio używa `#projects`, link może wymagać korekty)

**Źródło autora:** `src/data/testimonial.ts`

---

## 13. Kontakt i stopka

### Contact (`Contact.tsx`)

| Pole | PL | EN |
|------|----|----|
| Badge | Kontakt | Contact |
| Tytuł | Gotowy, by zacząć **swój projekt?** | Ready to Start **Your Project?** |
| Subtitle | Napisz. Przeczytam, dopytam… | Drop me a line. I'll read it… |
| CTA | Napisz do mnie | Contact Me |

Przycisk: gradient czerwony + ikona `Mail`, `mailto:wojtek1aniszewski1@gmail.com`.

### Footer (`Footer.tsx`)

- „Powered by" + link Next.js
- „Koncepcja wizualna" / „Visual concept by" + wilczynska.visuals

---

## 14. Architektura repozytorium

```
portfolio/
├── docs/
│   ├── RAPORT.md              ← ten dokument
│   ├── TEKSTY-STRONY.md       ← copy deck v2
│   └── UNSCHOOL-ZDJECIA.md
├── public/                    ← assety statyczne, CV, favicon
├── src/
│   ├── app/
│   │   ├── components/        ← sekcje + ui/ (shadcn)
│   │   ├── layout.tsx         ← metadata + JSON-LD
│   │   ├── page.tsx           ← składanie sekcji
│   │   └── globals.css
│   ├── data/                  ← socials, testimonial, projects (legacy)
│   └── i18n/                  ← translations, offerTiersData, provider
├── package.json
├── tailwind.config.ts
└── next.config.ts
```

### Komponenty sekcji (aktywne)

`HeroSection`, `AboutSection`, `TechSection`, `Portfolio`, `OfferSection`, `TestimonialSection`, `Contact`, `Footer`, `Backgroud`, `Providers`, `LanguageSwitcher`, `brand-badge`.

### Komponenty UI (shadcn)

~40 plików w `src/app/components/ui/` - gotowe pod rozbudowę (formularze, dialogi). Na stronie głównej używane głównie: `Button`, `Tooltip`.

### Nieużywane / legacy

- `navbar.tsx` - nie importowany w `page.tsx`
- `src/data/projects.ts` - rozbudowany opis Unschool; slider korzysta z `translations.portfolio.projects`
- `FlagshipProject.tsx` - usunięty; funkcja wchłonięta przez `Portfolio.tsx`

---

## 15. Warstwa i18n i danych

### `translations.ts` - główne typy

```ts
Locale = "en" | "pl"
PortfolioProject { id, title, shortDescription, tech[], image, visitUrl?, reviewAnchor?, hidden?, inProgress? }
TechCategory { id: "web"|"data", title, description, items[] }
OfferTier { name, description, price, deliveryTime, features[], examplesLabel, examples, tech[], cardAction }
OfferTab = "web" | "data"
```

### `offerTiersData.ts`

Eksportuje `offerTiersEn` i `offerTiersPl` z polami:

- `scopeLabel` - „W ramach realizacji" / „Scope of work"
- `timelineLabel` - w danych, nie w UI
- `footerCta` - question, subtitle, button
- `web[]` - 3 tiery
- `data[]` - 3 tiery

Import w `translations.ts`:

```ts
web: offerTiersPl.web,
data: offerTiersPl.data,
footerCta: offerTiersPl.footerCta,
// ...
```

### `LanguageProvider`

```ts
const { locale, setLocale, t } = useLanguage();
// t = translations[locale]
```

---

## 16. SEO, metadane, JSON-LD

**Plik:** `src/app/layout.tsx`

| Pole | Wartość |
|------|---------|
| title | Wojciech Aniszewski - Freelance Developer |
| description | Freelance developer from Gdańsk. React, Next.js, BigQuery, SQL… |
| OG image | `/photo3.png` |
| canonical | `/` |
| JSON-LD `@type` | Person |
| jobTitle | Freelance Developer |
| knowsAbout | React, Next.js, TS, Node, GraphQL, Python, BigQuery, Dataform, SQL, Prisma, Stripe, Tailwind |

`public/robots.txt`, `public/sitemap.xml` - obecne w repo.

---

## 17. Zasoby statyczne (`public/`)

| Plik | Użycie |
|------|--------|
| `photo3.png` | Hero, OG image |
| `Wojciech Aniszewski CV Freelancer.pdf` | Pobieranie CV |
| `image.png` | Avatar Wiktora (testimonial) |
| `Logo_Impel_Group.jpg` | Logo Impel na osi czasu |
| `impel.png` | Starsze logo (zastąpione przez Logo_Impel_Group) |
| `wikus-projekt1.png`, `wikus-projekt2.png` | Unschool w sliderze portfolio |
| `shop1.jpg` | Base Camp |
| `studio-re-new-2.jpg` | StudioRE |
| `icon.png`, `icon-apple.png`, `favicon.ico` | Favicon |
| `icon.svg` | App icon (Next) |

Pełna lista obrazów projektów: `globb.jpg`, `rental-rate.png`, `studiore*.png`, itd.

---

## 18. Animacje i UX

| Animacja | Plik / klasa | Opis |
|----------|--------------|------|
| `hero-enter` | `globals.css` | Fade + slide up przy ładowaniu hero |
| `animate-bounce` | Hero scroll arrow | Wskazówka scroll do `#about` |
| Drawer offer | `grid-rows-[0fr]` → `[1fr]` | Rozwijanie panelu oferty |
| Tab tier fade | `OfferSection` | `opacity` + `translate` przy zmianie tieru |
| Portfolio fade | `Portfolio.tsx` | 500 ms między slajdami |
| `scroll-behavior: smooth` | `globals.css` | Kotwice |

---

## 19. Zależności i skrypty

### Kluczowe pakiety

| Pakiet | Wersja | Rola |
|--------|--------|------|
| next | 16.1.1 | Framework |
| react / react-dom | 19.2.3 | UI |
| typescript | 5.x | Typy |
| tailwindcss | 3.4.x | Style |
| lucide-react | 0.474 | Ikony |
| @radix-ui/* | - | Primitives (shadcn) |
| clsx | 2.1 | Łączenie klas (`brand-badge`) |

### Skrypty npm

```bash
pnpm dev      # next dev
pnpm build    # next build
pnpm start    # next start
pnpm lint     # next lint
```

---

## 20. Szybki start

```bash
git clone <repo>
cd portfolio
pnpm install
pnpm dev
# http://localhost:3000
```

### Edycja copy

1. Teksty sekcji: `src/i18n/translations.ts`
2. Tiery oferty (features, ceny, tech): `src/i18n/offerTiersData.ts`
3. SEO: `src/app/layout.tsx`

### Edycja stylu badge'ów

Jeden plik: `src/app/components/brand-badge.tsx` - zmiana propaguje się na całą stronę.

---

## 21. Znane niedociągnięcia

| # | Opis | Priorytet |
|---|------|-----------|
| 1 | Testimonial „Zobacz projekt" linkuje `#wiktor-landing`, portfolio jest pod `#projects` | Średni |
| 2 | `deliveryTime` w danych tierów bez UI | Niski (celowo usunięte z widoku) |
| 3 | `timelineLabel` w translations - martwe pole | Niski |
| 4 | Glob i Rental Rate ukryte - brak w sliderze | Produktowy |
| 5 | `navbar.tsx` nieużywany | Niski |
| 6 | `src/data/projects.ts` duplikuje część treści z translations | Refactor |
| 7 | ESLint config mix (eslint 8 + next 13 config vs next 16) | Tech debt |
| 8 | Logo Impel JPG ma białe tło - na ciemnym tle widać prostokąt | Kosmetyka |

---

## 22. Historia zmian (czerwiec 2026)

- Pełne **i18n PL/EN** z `LanguageProvider` i przełącznikiem
- Repozycjonowanie: **Freelance Developer** + web & data (nie tylko Figma→app)
- **OfferSection**: drawer master-detail, 6 kafelków benefitów, przykłady, tech chipy
- **Cennik** według benchmarku freelancer PL 2026 (od 600 zł – 5 900 zł)
- **About**: oś czasu z Impel (Junior Data Scientist) + logo
- **brand-badge.tsx**: ujednolicone SectionBadge + AccentChip
- **Hero**: strzałka scroll do `#about`
- **Tech**: prostokąty na mobile, romby na desktop
- **Testimonial**: layout jak Portfolio
- **Contact**: „Ready to Start Your Project?" + subtitle read/reply (PL+EN)
- **SEO**: JSON-LD Person, metadane Freelance Developer
- Wydzielenie **`offerTiersData.ts`** z powodu rozmiaru danych tierów

---

*Dokument utrzymywany ręcznie. Przy większych zmianach w UI aktualizuj sekcje 6–13 i 22.*
