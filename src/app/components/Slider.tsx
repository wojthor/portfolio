"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImageSliderProps {
  images: string[];
  onClose?: () => void;
}

export default function ImageSlider({ images, onClose }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative h-[460px] mx-12 group overflow-hidden rounded-2xl bg-[#0d1117] border border-white/10 shadow-2xl">
        
        <button
          onClick={onClose}
          aria-label="Zamknij galerię"
          className="absolute right-3 top-3 z-30 flex items-center justify-center w-11 h-11 rounded-full 
               bg-[#F7011E] text-[#white] border-2 border-[#F7011E] shadow-lg
                hover:text-white hover:scale-105
               active:scale-105
               transition-all duration-200 ease-out"
        >
          <X className="w-5 h-5" strokeWidth={2.5} />
        </button>
        <Image
          src={images[currentIndex]}
          alt={`Slider Image ${currentIndex + 1}`}
          fill
          style={{ objectFit: "contain" }}
          className="transition-transform duration-500 ease-in-out"
          sizes="(max-width: 1024px) 100vw, 800px"
        />
      </div>

      
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full 
                 bg-black/60 text-white hover:bg-[#F7011E] hover:scale-110 transition-all duration-200"
        onClick={prevSlide}
        aria-label="Poprzedni slajd"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full 
                 bg-black/60 text-white hover:bg-[#F7011E] hover:scale-110 transition-all duration-200"
        onClick={nextSlide}
        aria-label="Następny slajd"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Kropki nawigacji */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Slajd ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-[#F7011E] shadow-[0_0_8px_#F7011E]"
                : "w-2 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
