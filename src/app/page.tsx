/* eslint-disable @next/next/no-img-element */
"use client";

import Backgroud from "@/app/components/Backgroud";
import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import TechSection from "@/app/components/TechSection";
import Portfolio from "@/app/components/Portfolio";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Backgroud />

      <HeroSection />

      <AboutSection />

      <TechSection />

      <Portfolio />

      <Contact />

      <Footer />
    </div>
  );
}
