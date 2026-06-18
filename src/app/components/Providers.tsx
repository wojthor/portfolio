"use client";

import { LanguageProvider } from "@/i18n/LanguageProvider";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <LanguageSwitcher />
      {children}
    </LanguageProvider>
  );
}
