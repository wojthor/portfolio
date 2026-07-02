"use client";

import Image from "next/image";
import { SectionBadge } from "@/app/components/brand-badge";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative z-10 container mx-auto px-4 md:px-6 pt-20 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 md:space-y-10">
        <div className="text-center">
          <SectionBadge className="mb-5">{t.about.badge}</SectionBadge>
          <h2 className="mt-5 text-2xl font-bold md:text-4xl">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              {t.about.title}
            </span>{" "}
            <span className="bg-gradient-to-r from-[#F7011E] via-[#ff3b3b] to-[#F7011E] bg-clip-text text-transparent">
              {t.about.titleAccent}
            </span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_300px] lg:gap-12 lg:items-start">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left text-base leading-relaxed text-gray-300 backdrop-blur-sm transition-all hover:border-[#F7011E]/40 md:p-6 md:text-lg">
            <p>{t.about.body}</p>
          </div>

          <div className="px-1 lg:px-0 lg:pt-1">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
              {t.about.experienceTitle}
            </p>
            <div className="relative space-y-0">
              {t.about.experience.map((item, idx) => (
                <div
                  key={`${item.company}-${item.period}`}
                  className="relative flex gap-4 pb-6 last:pb-0"
                >
                  {idx < t.about.experience.length - 1 && (
                    <span
                      className="absolute left-[6px] top-4 h-[calc(100%-8px)] w-px bg-gradient-to-b from-[#F7011E]/50 to-white/10"
                      aria-hidden
                    />
                  )}
                  <span
                    className={`relative z-10 mt-2 h-3 w-3 shrink-0 rounded-full ${
                      item.current
                        ? "bg-[#F7011E] shadow-[0_0_10px_rgba(247,1,30,0.55)]"
                        : "border border-[#F7011E]/40 bg-[#0a0a0a]"
                    }`}
                  />
                  <div className="min-w-0 flex-1 pt-0.5">
                    <p className="text-xs font-medium uppercase tracking-wider text-[#F7011E]/80">
                      {item.period}
                    </p>
                    <p className="mt-1 text-base font-medium text-white">{item.role}</p>
                    {item.logo ? (
                      <Image
                        src={item.logo}
                        alt={item.company ?? item.role}
                        width={120}
                        height={36}
                        className="mt-2 h-9 w-auto max-w-[140px] rounded-sm object-contain object-left"
                      />
                    ) : (
                      <p className="mt-1 text-sm text-gray-500">{item.company}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
