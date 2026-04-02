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
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden grain-overlay isolate">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center scale-110 saturate-110 contrast-110 brightness-110"
      >
        <source src={videoAsset} type="video/mp4" />
      </video>

      {/* Light editorial overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/35 to-white/55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.55),rgba(255,255,255,0.12)_45%,rgba(255,255,255,0.38)_100%)]" />

      {/* Floating green accents */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${20 + i * 15}px`,
            height: `${20 + i * 15}px`,
            background: `radial-gradient(circle, hsla(142, 65%, 40%, 0.2), transparent)`,
            left: `${10 + i * 15}%`,
            top: `${20 + i * 10}%`,
            animation: `float-orb ${6 + i * 2}s ease-in-out infinite`,
            animationDelay: `${i * 0.8}s`,
          }}
        />
      ))}

      <div className="relative z-10 px-6 max-w-5xl w-full">
        <div className="mx-auto max-w-3xl flex flex-col items-center text-center px-4 sm:px-8 py-14 sm:py-16">
          {/* Decorative line */}
          <div className="w-24 h-px bg-gold/70 mx-auto mb-8" />

          <p className="font-body text-sm tracking-[0.35em] uppercase text-gold mb-4">
            Boutique de prestige
          </p>

          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6 text-ivory max-w-4xl mx-auto">
            {headline.split("").map((char, i) => (
              <span
                key={i}
                className="inline-block text-ivory"
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

          <p
            className="font-body text-base sm:text-lg text-ivory/80 tracking-[0.16em] uppercase mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{ opacity: visibleCount >= headline.length ? 1 : 0, transition: "opacity 1s ease 0.3s" }}
          >
            Bijoux & montres de prestige - Casablanca
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            style={{ opacity: visibleCount >= headline.length ? 1 : 0, transition: "opacity 1s ease 0.6s" }}
          >
            <a
              href="#collections"
              className="px-8 py-3.5 bg-gold text-white font-body text-sm font-semibold tracking-widest uppercase hover:brightness-110 transition-all shadow-gold"
            >
              Découvrir nos collections
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 border border-gold/40 text-ivory font-body text-sm font-semibold tracking-widest uppercase hover:bg-gold/10 transition-all bg-white/40 backdrop-blur-sm"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-down">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gold/70">
          <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
