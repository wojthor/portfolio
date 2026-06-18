"use client";

import { Mail } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { SectionBadge } from "@/app/components/brand-badge";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="relative z-0 container mx-auto scroll-mt-24 px-6 py-20 text-center"
    >
      <header className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
        <SectionBadge>{t.contact.badge}</SectionBadge>
      </header>
      <h2 className="mb-4 mt-6 text-4xl font-bold md:text-5xl">
        <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
          {t.contact.title}
        </span>{" "}
        <span className="bg-gradient-to-r from-[#F7011E] via-[#ff3b3b] to-[#F7011E] bg-clip-text text-transparent">
          {t.contact.titleAccent}
        </span>
      </h2>
      <p className="mx-auto mb-8 max-w-2xl text-gray-400">{t.contact.subtitle}</p>
      <a href="mailto:wojtek1aniszewski1@gmail.com">
        <Button className="bg-gradient-to-r from-[#ff4d4d] to-[#a30000] text-white shadow-md hover:shadow-[#F7011E]/40">
          {t.contact.cta}
          <Mail className="ml-2 h-5 w-5" />
        </Button>
      </a>
    </section>
  );
}
