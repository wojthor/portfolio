"use client";

import { ArrowUpRight } from "lucide-react";
import { SectionBadge } from "@/app/components/brand-badge";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="relative z-0 container mx-auto scroll-mt-24 px-4 py-20 md:px-6 md:py-24"
    >
      <div className="surface relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] px-6 py-14 text-center md:px-12 md:py-20">
        <div
          className="pointer-events-none absolute inset-x-0 -bottom-1/2 mx-auto h-[120%] w-[90%] rounded-full bg-[radial-gradient(closest-side,rgba(247,1,30,0.35),transparent)]"
          aria-hidden
        />
        <div className="relative">
          <SectionBadge>{t.contact.badge}</SectionBadge>
          <h2 className="mx-auto mb-5 mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] md:text-6xl">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              {t.contact.title}
            </span>{" "}
            <span className="bg-gradient-to-r from-[#F7011E] via-[#ff3b3b] to-[#F7011E] bg-clip-text text-transparent">
              {t.contact.titleAccent}
            </span>
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-gray-400 md:text-lg">{t.contact.subtitle}</p>
          <a
            href="mailto:wojtek1aniszewski1@gmail.com"
            className="btn-glow group inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-[#ff2a3f] to-[#c20016] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 md:px-9 md:py-4 md:text-base"
          >
            {t.contact.cta}
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
