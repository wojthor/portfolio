"use client";

import type { TechCategory } from "@/i18n/translations";
import { AccentChip, SectionBadge } from "@/app/components/brand-badge";
import { useLanguage } from "@/i18n/LanguageProvider";

function TechCategoryCard({ category }: { category: TechCategory }) {
  return (
    <div className="relative min-h-0 flex-1 md:min-h-[285px]">
      <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-8 text-center backdrop-blur-sm md:absolute md:inset-0 md:rounded-none md:-skew-x-[15deg] md:px-12 md:py-11">
        <div className="flex w-full flex-col items-center justify-center md:skew-x-[15deg]">
          <h3 className="text-lg font-bold text-white md:text-xl">{category.title}</h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-gray-400">
            {category.description}
          </p>
          <div className="mt-6 flex max-w-lg flex-wrap justify-center gap-2">
            {category.items.map((item) => (
              <AccentChip key={item}>{item}</AccentChip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TechSection() {
  const { t } = useLanguage();
  const { tech } = t;
  const [webCategory, dataCategory] = tech.categories;

  return (
    <section id="tech" className="relative z-10 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <header className="mb-12 text-center md:mb-16">
          <SectionBadge className="mb-4">{tech.sectionBadge}</SectionBadge>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            {tech.sectionTitle}
          </h2>
        </header>

        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 md:flex-row md:gap-3">
          <TechCategoryCard category={webCategory} />
          <TechCategoryCard category={dataCategory} />
        </div>
      </div>
    </section>
  );
}
