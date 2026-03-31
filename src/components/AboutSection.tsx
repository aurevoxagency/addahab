const stats = [
  { value: "63K+", label: "Abonnés" },
  { value: "3", label: "Boutiques" },
  { value: "🇲🇦", label: "Livraison" },
  { value: "✓", label: "Or Certifié" },
];

const AboutSection = () => (
  <section id="apropos" className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div className="scroll-reveal">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">Notre Histoire</p>
          <h2 className="font-display text-4xl sm:text-5xl text-ivory font-light mb-6 leading-tight">
            L'excellence de l'or, <br />
            <span className="gold-gradient-text italic">depuis des générations</span>
          </h2>
          <p className="font-body text-ivory/50 leading-relaxed mb-4">
            Addahab Elhayani est une maison de joaillerie basée à Casablanca, dédiée à l'art de l'or
            depuis des décennies. Chaque pièce est sélectionnée avec soin pour offrir à nos clients
            l'excellence en matière de bijoux et montres de prestige.
          </p>
          <p className="font-body text-ivory/50 leading-relaxed">
            Avec trois boutiques à Casablanca et une livraison partout au Maroc, nous rendons le luxe
            accessible tout en préservant l'authenticité et la qualité de l'or certifié.
          </p>
        </div>

        {/* Decorative geometric frame */}
        <div className="scroll-reveal flex items-center justify-center">
          <div className="relative w-72 h-80">
            {/* Outer frame */}
            <div className="absolute inset-0 border border-gold/30" />
            {/* Inner frame offset */}
            <div className="absolute inset-4 border border-gold/20" />
            {/* Diamond center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-gold/40 rotate-45" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-gold/25 rotate-45" />
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold/50" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold/50" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold/50" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold/50" />
            {/* Center text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-2xl text-gold/60 italic tracking-wider">A.E</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="stagger-children grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-16 border-t border-gold/10">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-display text-3xl sm:text-4xl text-gold mb-2">{stat.value}</div>
            <div className="font-body text-xs tracking-[0.3em] uppercase text-ivory/40">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
