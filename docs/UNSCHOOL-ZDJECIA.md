# Unschool Your English - ściąga ze zdjęć do slidera

Dodaj pliki do folderu `public/`. Format: **PNG lub JPG**, proporcje ok. **16:9**, szerokość min. **1440px**.  
Dwa pierwsze zdjęcia już masz - uzupełnij pozostałe pięć.

| # | Plik w `public/` | Co ma być na zrzucie (alt) |
|---|------------------|----------------------------|
| 1 | `wikus-projekt1.png` ✅ | **VSL Sales Landing - hero:** główny nagłówek, krótki opis oferty, przycisk CTA i górna nawigacja anchor |
| 2 | `wikus-projekt2.png` ✅ | **VSL Sales Landing - środek strony:** sekcja problemu, autorytet, rozbicie oferty lub testimoniale |
| 3 | `unschool-stripe.png` | **Stripe & Webhooks:** ekran Stripe Checkout z podsumowaniem zamówienia lub strona sukcesu po płatności |
| 4 | `unschool-dashboard.png` | **Student Dashboard:** widok zalogowanego ucznia - lista kursów, postęp lekcji, nawigacja po materiałach |
| 5 | `unschool-admin.png` | **Payload CMS Admin:** panel administracyjny - lista kursów, lekcji lub zarządzanie studentami |
| 6 | `unschool-voice.png` | **Vercel Blob Media:** interfejs nagrywania/wysyłki voice recordingu lub podgląd przesłanych nagrań |
| 7 | `unschool-enrolments.png` | **PostgreSQL Backend:** widok zapisów na kursy, statusów uczniów lub relacji danych w panelu admina |

## Wskazówki

- Kadruj **czytelnie jedną funkcję** - bez całego desktopu z dockiem, jeśli możesz.
- Zachowaj **spójny motyw** (jasny/ciemny) między slajdami.
- Dla slajdów 3–7 wystarczy screenshot przeglądarki; ważne, żeby widać było UI produktu.
- Po dodaniu pliku odśwież stronę - slider sam podmieni placeholder na zdjęcie.

Źródło danych w kodzie: `src/i18n/translations.ts` → `flagship.slides` (EN/PL).
