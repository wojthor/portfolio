"use client";

import Image from "next/image";
import { Github, Linkedin, LayoutGrid, Download, ChevronDown } from "lucide-react";
import { Button } from "../components/ui/button";
import { socialLinks } from "@/data/socials";
import { useLanguage } from "@/i18n/LanguageProvider";

const socialIcons: Record<string, JSX.Element> = {
  GitHub: <Github className="h-5 w-5" />,
  LinkedIn: <Linkedin className="h-5 w-5" />,
};

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="z-10 relative w-screen h-screen flex items-center justify-center overflow-hidden pt-3 pb-3 px-4 md:px-10 md:overflow-visible md:min-h-screen md:h-auto md:py-12 lg:pt-5 lg:pb-12 lg:px-32">
      <div className="relative flex flex-col w-full h-full min-h-0 items-center justify-between md:justify-center lg:flex-row lg:justify-center gap-4 md:gap-8 lg:gap-16 lg:h-full lg:max-h-[none]">
        <div className="hero-enter hero-enter-delay-0 relative order-1 lg:order-2 flex justify-center w-full shrink-0 h-1/2 min-h-[140px] md:h-auto lg:w-auto lg:h-full lg:items-center">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 aspect-square h-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F7011E]/30 blur-[60px] md:h-auto md:w-[80%] md:blur-[90px]"
            aria-hidden
          />
          <Image
            src="/wojciech-aniszewski.png"
            alt={t.hero.photoAlt}
            width={960}
            height={960}
            priority
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 40rem"
            className="relative h-full w-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] md:max-w-[28rem] lg:w-[40rem] lg:max-w-none lg:h-auto xl:w-[38rem]"
          />
        </div>

        <div className="order-2 lg:order-1 text-center w-full flex-1 min-h-0 flex flex-col items-center justify-center gap-5 md:gap-6 lg:h-full lg:text-left lg:items-start lg:justify-center lg:flex-initial lg:min-h-0">
          <div className="hero-enter hero-enter-delay-1 surface hidden md:inline-flex items-center gap-2.5 rounded-full px-5 py-2 font-mono text-xs uppercase tracking-[0.2em] text-[#F7011E]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F7011E] opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#F7011E]"></span>
            </span>
            {t.hero.badge}
          </div>

          <div className="hero-enter hero-enter-delay-2 space-y-1 md:space-y-2">
            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.045em] md:pt-20 md:text-7xl lg:text-8xl xl:text-[7.5rem]">
              <span className="bg-gradient-to-r from-white via-[#ffb3b3] to-white bg-clip-text text-transparent">
                Wojciech
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#ff4d4d] via-[#F7011E] to-[#a30000] bg-clip-text text-transparent">
                Aniszewski
              </span>
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-400 md:mt-8 md:text-xl lg:text-[1.35rem]">
              {t.hero.tagline}
            </p>
          </div>

          <div className="hero-enter hero-enter-delay-3 flex flex-wrap justify-center lg:justify-start gap-2 md:gap-4">
            <Button
              size="lg"
              className="btn-glow rounded-full bg-gradient-to-b from-[#ff2a3f] to-[#c20016] px-5 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 md:px-9 md:py-7 md:text-base"
              asChild
            >
              <a href="#projects">
                <LayoutGrid className="mr-2 h-4 w-4 md:mr-2.5 md:h-5 md:w-5" />
                {t.hero.featuredProjects}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="surface rounded-full px-5 py-4 text-sm font-semibold text-gray-200 transition-all hover:-translate-y-0.5 hover:border-[#F7011E]/50 hover:bg-transparent hover:text-white md:px-9 md:py-7 md:text-base"
              asChild
            >
              <a
                href={encodeURI("/WOJCIECH ANISZEWSKI-CV.pdf.pdf")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4 md:mr-2.5 md:h-5 md:w-5" />
                {t.hero.downloadResume}
              </a>
            </Button>
          </div>

          <div className="hero-enter hero-enter-delay-4 flex justify-center lg:justify-start gap-3 md:gap-5">
            {socialLinks.map((social, i) => (
              <Button
                key={i}
                variant="ghost"
                size="icon"
                className="surface h-11 w-11 rounded-full text-gray-300 transition-all hover:-translate-y-0.5 hover:border-[#F7011E]/40 hover:bg-transparent hover:text-[#F7011E] md:h-14 md:w-14"
                asChild
              >
                <a href={social.href} target="_blank" aria-label={social.label}>
                  {socialIcons[social.label]}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to content"
        className="hero-enter hero-enter-delay-5 absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 text-[#F7011E]/70 transition-colors hover:text-[#F7011E] md:block"
      >
        <ChevronDown className="h-7 w-7 animate-bounce md:h-8 md:w-8" aria-hidden />
      </a>
    </section>
  );
}
