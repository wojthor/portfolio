"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative z-10 border-t border-white/10 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-center justify-center text-sm text-gray-400">
          <p>
            {t.footer.poweredBy}{" "}
            <span className="text-[#F7011E] font-semibold">
              Wojciech Aniszewski © {new Date().getFullYear()}
            </span>
          </p>
          <p>
            {t.footer.visualConcept}{" "}
            <a
              href="mailto:wilczynska.visuals@gmail.com"
              className="text-[#F7011E] font-bold"
            >
              wilczynska.visuals
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
