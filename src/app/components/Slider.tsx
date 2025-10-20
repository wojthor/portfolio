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
    <div className="relative w-full max-w-4xl mx-auto mt-4">
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close slider"
        className="absolute z-20 right-2 top-3 p-2 rounded-md 
             bg-black/80 text-[#F7011E] border border-[#F7011E] 
             hover:bg-[#F7011E] hover:text-black 
             hover:shadow-[0_0_10px_#F7011E] 
             transition-all duration-200"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="relative h-[460px] mx-12 group overflow-hidden rounded-xl bg-[#0d1117]">
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
        className="absolute left-0 top-1/2 transform -translate-y-1/2 h-[460px] rounded-xl text-white p-2 group"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-gray-400 group-hover:text-white" />
      </button>

      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[460px] rounded-xl text-white p-2 group"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="text-gray-400 group-hover:text-white" />
      </button>

      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-10 mx-1 ${
              index === currentIndex
                ? "bg-[#F7011E] rounded-xl"
                : "bg-gray-600 rounded-xl"
            } transition-all duration-500 ease-in-out`}
          />
        ))}
      </div>
    </div>
  );
}
