/* eslint-disable @next/next/no-img-element */
"use client";

import Providers from "@/app/components/Providers";
import Backgroud from "@/app/components/Backgroud";
import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import TechSection from "@/app/components/TechSection";
import Portfolio from "@/app/components/Portfolio";
import OfferSection from "@/app/components/OfferSection";
import TestimonialSection from "@/app/components/TestimonialSection";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <Providers>
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <Backgroud />

        <HeroSection />

        <AboutSection />

        <TechSection />

        <Portfolio />

        <OfferSection />

        <TestimonialSection />

        <Contact />

        <Footer />
      </div>
    </Providers>
  );
}
