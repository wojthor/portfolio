"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { SectionBadge } from "@/app/components/brand-badge";
import { featuredTestimonialAuthor } from "@/data/testimonial";
import { useLanguage } from "@/i18n/LanguageProvider";

function AuthorBlock() {
  const { fullName, avatarSrc } = featuredTestimonialAuthor;
  const [broken, setBroken] = useState(false);

  const initials = fullName
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex min-w-0 items-center gap-3">
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-zinc-800 ring-1 ring-white/15">
        {!broken ? (
          <Image
            src={avatarSrc}
            alt={fullName}
            width={96}
            height={96}
            className="h-full w-full object-cover"
            onError={() => setBroken(true)}
          />
        ) : (
          <span
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#F7011E]/40 to-zinc-900 text-sm font-semibold tracking-tight text-white"
            role="img"
            aria-label={fullName}
          >
            {initials}
          </span>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-base font-semibold leading-tight text-white md:text-lg">
          {fullName}
        </p>
      </div>
    </div>
  );
}

export default function TestimonialSection() {
  const { t } = useLanguage();
  const projectHref = `#${featuredTestimonialAuthor.linkedProjectAnchorId}`;

  return (
    <section
      id="testimonial"
      className="relative z-10 scroll-mt-24 border-t border-white/10"
      aria-labelledby="testimonial-heading"
    >
      <div className="container mx-auto px-4 pb-14 pt-16 md:px-6 md:pb-16 md:pt-20">
        <header className="mb-10 text-center md:mb-12">
          <SectionBadge className="mb-4">{t.testimonial.badge}</SectionBadge>
          <div className="flex flex-wrap justify-center gap-2">
            <h2
              id="testimonial-heading"
              className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
            >
              {t.testimonial.title}
            </h2>
            <h2 className="text-3xl font-bold tracking-tight text-[#F7011E] md:text-4xl lg:text-5xl">
              {t.testimonial.titleAccent}
            </h2>
          </div>
        </header>

        <figure className="mx-auto w-[96%] max-w-[1600px]">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <blockquote className="px-5 py-6 md:px-8 md:py-8">
              <div className="space-y-3.5 text-left text-[0.95rem] leading-[1.68] text-gray-400 md:text-base">
                {t.testimonial.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <figcaption className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <AuthorBlock />
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full shrink-0 border-white/20 text-gray-200 hover:border-[#F7011E]/40 hover:bg-white/5 hover:text-white sm:w-auto"
                  asChild
                >
                  <a href={projectHref}>
                    {t.testimonial.viewProject}
                    <ArrowUp className="ml-2 h-4 w-4 opacity-80" />
                  </a>
                </Button>
              </figcaption>
            </blockquote>
          </div>
        </figure>
      </div>
    </section>
  );
}
