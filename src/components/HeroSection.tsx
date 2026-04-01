import { useEffect, useState } from "react";
import videoAsset from "@/assets/855854-hd_1280_720_24fps.mp4";

const HeroSection = () => {
  const headline = "L'Or à l'état pur";
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= headline.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden grain-overlay">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoAsset} type="video/mp4" />
      </video>

      {/* Black to Gold gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-gold/40" />

      {/* Floating gold orbs */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${20 + i * 15}px`,
            height: `${20 + i * 15}px`,
            background: `radial-gradient(circle, hsla(43, 52%, 54%, 0.3), transparent)`,
            left: `${10 + i * 15}%`,
            top: `${20 + i * 10}%`,
            animation: `float-orb ${6 + i * 2}s ease-in-out infinite`,
            animationDelay: `${i * 0.8}s`,
          }}
        />
      ))}

      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Decorative line */}
        <div className="w-16 h-px bg-gold/40 mx-auto mb-8" />

        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-light tracking-wider mb-6">
          {headline.split("").map((char, i) => (
            <span
              key={i}
              className="inline-block gold-gradient-text"
              style={{
                opacity: i < visibleCount ? 1 : 0,
                transform: i < visibleCount ? "translateY(0)" : "translateY(30px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <p className="font-body text-lg sm:text-xl text-ivory/60 tracking-[0.2em] uppercase mb-12"
          style={{ opacity: visibleCount >= headline.length ? 1 : 0, transition: "opacity 1s ease 0.3s" }}
        >
          Bijoux & Montres de prestige — Casablanca
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{ opacity: visibleCount >= headline.length ? 1 : 0, transition: "opacity 1s ease 0.6s" }}
        >
          <a
            href="#collections"
            className="px-8 py-3.5 bg-gold text-primary-foreground font-body text-sm tracking-widest uppercase hover:brightness-110 transition-all"
          >
            Découvrir nos collections
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-gold/50 text-gold font-body text-sm tracking-widest uppercase hover:bg-gold/10 transition-all"
          >
            Nous contacter
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-down">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gold/60">
          <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
