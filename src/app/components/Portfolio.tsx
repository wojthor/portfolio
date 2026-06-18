"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { PortfolioProject } from "@/i18n/translations";
import { AccentChip, SectionBadge } from "@/app/components/brand-badge";
import { useLanguage } from "@/i18n/LanguageProvider";

const AUTO_PLAY_MS = 5000;

function BrowserMockup({ project }: { project: PortfolioProject }) {
  return (
    <div className="w-full overflow-hidden rounded-t-xl border border-b-0 border-white/10 bg-black/30 shadow-2xl backdrop-blur-sm">
      <div className="flex h-8 items-center gap-1.5 border-b border-white/5 bg-white/5 px-3 backdrop-blur-sm">
        <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
      </div>
      <div className="relative aspect-[2/1] w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 58vw"
          priority={project.id === "01"}
        />
      </div>
    </div>
  );
}

function SlideContent({
  project,
  visitLabel,
  clientReviewLabel,
  inProgressLabel,
  visible,
}: {
  project: PortfolioProject;
  visitLabel: string;
  clientReviewLabel: string;
  inProgressLabel: string;
  visible: boolean;
}) {
  return (
    <div
      className={`transition-opacity duration-500 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <span className="mb-3 inline-block font-mono text-xs tabular-nums tracking-widest text-[#F7011E]/80">
        {project.id}
      </span>

      <div className="mb-3 flex flex-wrap items-center gap-3">
        <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
          {project.title}
        </h3>
        {project.inProgress && (
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-gray-400 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400/80 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
            </span>
            {inProgressLabel}
          </span>
        )}
      </div>

      <p className="mb-6 max-w-md text-base leading-relaxed text-gray-400">
        {project.shortDescription}
      </p>

      <div className="mb-6 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <AccentChip key={item}>{item}</AccentChip>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {project.visitUrl && (
          <a
            href={project.visitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-[#F7011E] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#d9001a]"
          >
            {visitLabel}
          </a>
        )}
        {project.reviewAnchor && (
          <a
            href={`#${project.reviewAnchor}`}
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-[#F7011E]/40 hover:bg-white/10"
          >
            {clientReviewLabel}
          </a>
        )}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const { t } = useLanguage();
  const { portfolio } = t;
  const projects = portfolio.projects.filter((p) => !p.hidden);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visible, setVisible] = useState(true);
  const [paused, setPaused] = useState(false);

  const changeSlide = useCallback((index: number) => {
    setVisible(false);
    window.setTimeout(() => {
      setCurrentSlide(index);
      setVisible(true);
    }, 300);
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      if (index === currentSlide) return;
      changeSlide(index);
    },
    [changeSlide, currentSlide]
  );

  const prevSlide = useCallback(() => {
    changeSlide((currentSlide - 1 + projects.length) % projects.length);
  }, [changeSlide, currentSlide, projects.length]);

  const nextSlide = useCallback(() => {
    changeSlide((currentSlide + 1) % projects.length);
  }, [changeSlide, currentSlide, projects.length]);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % projects.length);
        setVisible(true);
      }, 300);
    }, AUTO_PLAY_MS);
    return () => window.clearInterval(timer);
  }, [paused, projects.length]);

  const project = projects[currentSlide];

  return (
    <section id="projects" className="relative z-10 border-t border-white/10">
      <div className="container mx-auto px-4 pb-10 pt-16 md:px-6 md:pb-12 md:pt-20">
        <header className="text-center">
          <SectionBadge className="mb-4">{portfolio.badge}</SectionBadge>
          <div className="flex justify-center gap-2">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              {portfolio.title}
            </h2>
            <h2 className="text-3xl font-bold tracking-tight text-[#F7011E] md:text-4xl lg:text-5xl">
              {portfolio.titleAccent}
            </h2>
          </div>
        </header>
      </div>

      <div className="container mx-auto px-4 pb-14 md:px-6 md:pb-16">
        <div
          className="mx-auto w-[96%] max-w-[1600px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="grid grid-cols-1 gap-8 px-5 pt-8 md:px-8 md:pt-10 lg:grid-cols-12 lg:items-end lg:gap-10">
              <div className="pb-8 md:pb-10 lg:col-span-5 lg:self-start">
                <SlideContent
                  project={project}
                  visitLabel={portfolio.visitProject}
                  clientReviewLabel={portfolio.clientReview}
                  inProgressLabel={portfolio.inProgressLabel}
                  visible={visible}
                />
              </div>
              <div
                className={`lg:col-span-7 transition-opacity duration-500 ${
                  visible ? "opacity-100" : "opacity-0"
                }`}
              >
                <BrowserMockup project={project} />
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
            <button
              type="button"
              onClick={prevSlide}
              aria-label={t.slider.prev}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-[#F7011E] hover:bg-[#F7011E]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {projects.map((p, index) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`${t.slider.slide} ${index + 1}`}
                  aria-current={index === currentSlide ? "true" : undefined}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "w-8 bg-[#F7011E]"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextSlide}
              aria-label={t.slider.next}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-[#F7011E] hover:bg-[#F7011E]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
