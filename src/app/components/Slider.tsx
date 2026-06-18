"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ImageIcon, X } from "lucide-react";
import type { SlideImage } from "@/i18n/translations";
import { useLanguage } from "@/i18n/LanguageProvider";

interface ImageSliderProps {
  images?: string[];
  slides?: SlideImage[];
  onClose?: () => void;
  frameless?: boolean;
  large?: boolean;
  wide?: boolean;
  showCaption?: boolean;
}

export default function ImageSlider({
  images = [],
  slides,
  onClose,
  frameless = false,
  large = false,
  wide = false,
  showCaption = false,
}: ImageSliderProps) {
  const { t } = useLanguage();

  const slideItems: SlideImage[] =
    slides ??
    images.map((src, i) => ({
      src,
      alt: `${t.slider.slide} ${i + 1}`,
    }));

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [brokenSlides, setBrokenSlides] = useState<Record<number, boolean>>({});

  const prevSlide = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slideItems.length) % slideItems.length
    );
  };

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideItems.length);
  };

  const current = slideItems[currentIndex];
  const isBroken = brokenSlides[currentIndex];

  const frameClass = frameless
    ? wide
      ? "relative aspect-video w-full overflow-hidden rounded-lg md:rounded-xl shadow-[0_32px_80px_-32px_rgba(247,1,30,0.35)]"
      : large
        ? "relative aspect-video w-full overflow-hidden rounded-xl md:rounded-2xl shadow-[0_24px_70px_-28px_rgba(247,1,30,0.4)]"
        : "relative aspect-video w-full overflow-hidden rounded-2xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]"
    : "relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-[#0d1117]";

  return (
    <div className="relative w-full mx-auto">
      <div className={frameClass}>
        {onClose && (
          <button
            onClick={onClose}
            aria-label={t.slider.close}
            className="absolute right-3 top-3 z-30 flex items-center justify-center w-11 h-11 rounded-full bg-[#F7011E] text-white border-2 border-[#F7011E] shadow-lg hover:scale-105 transition-all duration-200"
          >
            <X className="w-5 h-5" strokeWidth={2.5} />
          </button>
        )}

        {isBroken ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center bg-white/[0.03]">
            <ImageIcon className="h-8 w-8 text-[#F7011E]/60" />
            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              {current.alt}
            </p>
            <p className="text-xs font-mono text-gray-500">{current.src}</p>
          </div>
        ) : (
          <Image
            src={current.src}
            alt={current.alt}
            fill
            style={{ objectFit: "contain" }}
            className="transition-transform duration-500 ease-in-out"
            sizes={
              wide
                ? "(max-width: 768px) 100vw, 1440px"
                : large
                  ? "(max-width: 768px) 90vw, 960px"
                  : "(max-width: 1024px) 100vw, 800px"
            }
            priority={frameless && (large || wide) && currentIndex === 0}
            onError={() =>
              setBrokenSlides((prev) => ({ ...prev, [currentIndex]: true }))
            }
          />
        )}
      </div>

      {slideItems.length > 1 && (
        <>
          <button
            className="absolute left-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-[#F7011E] md:left-3 md:h-10 md:w-10"
            onClick={prevSlide}
            aria-label={t.slider.prev}
          >
            <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
          </button>

          <button
            className="absolute right-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-[#F7011E] md:right-3 md:h-10 md:w-10"
            onClick={nextSlide}
            aria-label={t.slider.next}
          >
            <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
          </button>
        </>
      )}

      <div className="flex justify-center gap-2 mt-4">
        {slideItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`${t.slider.slide} ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-[#F7011E] shadow-[0_0_8px_#F7011E]"
                : "w-2 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {showCaption && (
        <p className="mt-3 text-center text-xs md:text-sm text-gray-500 leading-relaxed max-w-2xl mx-auto px-2">
          {current.alt}
        </p>
      )}
    </div>
  );
}
