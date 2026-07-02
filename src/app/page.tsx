import dynamic from "next/dynamic";
import Providers from "@/app/components/Providers";
import Backgroud from "@/app/components/Backgroud";
import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import TechSection from "@/app/components/TechSection";

const Portfolio = dynamic(() => import("@/app/components/Portfolio"));
const OfferSection = dynamic(() => import("@/app/components/OfferSection"));
const TestimonialSection = dynamic(() => import("@/app/components/TestimonialSection"));
const Contact = dynamic(() => import("@/app/components/Contact"));
const Footer = dynamic(() => import("@/app/components/Footer"));

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
