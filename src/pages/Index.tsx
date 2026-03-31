import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import AboutSection from "@/components/AboutSection";
import CollectionsGrid from "@/components/CollectionsGrid";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import LocationsCTA from "@/components/LocationsCTA";
import Footer from "@/components/Footer";

const Index = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    const el = mainRef.current;
    if (el) {
      const reveals = el.querySelectorAll(".scroll-reveal, .stagger-children");
      reveals.forEach((r) => observer.observe(r));
      return () => reveals.forEach((r) => observer.unobserve(r));
    }
  }, []);

  return (
    <div ref={mainRef} className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <MarqueeStrip />
      <AboutSection />
      <CollectionsGrid />
      <WhyUsSection />
      <TestimonialsSection />
      <FAQSection />
      <LocationsCTA />
      <Footer />
    </div>
  );
};

export default Index;
