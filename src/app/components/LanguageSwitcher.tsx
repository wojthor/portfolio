"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import type { Locale } from "@/i18n/translations";

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();

  const options: { code: Locale; label: string }[] = [
    { code: "en", label: t.languageSwitcher.en },
    { code: "pl", label: t.languageSwitcher.pl },
  ];

  return (
    <div
      className="fixed top-4 right-4 z-50 flex items-center gap-1 rounded-full border border-white/10 bg-black/60 p-1 backdrop-blur-md shadow-lg"
      role="group"
      aria-label={t.languageSwitcher.label}
    >
      {options.map(({ code, label }) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            className={`min-w-[2.5rem] rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all ${
              active
                ? "bg-[#F7011E] text-white shadow-[0_0_12px_rgba(247,1,30,0.45)]"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
