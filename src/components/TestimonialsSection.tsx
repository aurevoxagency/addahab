import { useEffect, useState } from "react";

const testimonials = [
  { name: "Fatima Z.", text: "Des bijoux magnifiques et un service exceptionnel. Je recommande vivement !", stars: 5 },
  { name: "Youssef B.", text: "J'ai acheté une montre pour mon mariage. Qualité irréprochable et livraison rapide.", stars: 5 },
  { name: "Sara M.", text: "La boutique au Morocco Mall est superbe. L'équipe est très professionnelle.", stars: 5 },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center scroll-reveal">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">Témoignages</p>
        <h2 className="font-display text-4xl sm:text-5xl text-ivory font-light mb-16">Ce que disent nos clients</h2>

        <div className="relative h-48">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700"
              style={{ opacity: i === active ? 1 : 0, pointerEvents: i === active ? "auto" : "none" }}
            >
              <span className="font-display text-5xl text-gold/30 mb-4">"</span>
              <p className="font-body text-lg text-ivory/70 italic max-w-xl mb-4">{t.text}</p>
              <div className="text-gold text-sm mb-2">{"★".repeat(t.stars)}</div>
              <p className="font-body text-sm text-gold tracking-widest uppercase">{t.name}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === active ? "bg-gold" : "bg-gold/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
