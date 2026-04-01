import logo from "@/assets/logoaddahab.jpg";

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
            Addahab  est une maison de joaillerie basée à Casablanca, dédiée à l'art de l'or
            depuis des décennies. Chaque pièce est sélectionnée avec soin pour offrir à nos clients
            l'excellence en matière de bijoux et montres de prestige.
          </p>
          <p className="font-body text-ivory/50 leading-relaxed">
            Avec trois boutiques à Casablanca et une livraison partout au Maroc, nous rendons le luxe
            accessible tout en préservant l'authenticité et la qualité de l'or certifié.
          </p>
        </div>

        {/* Logo */}
        <div className="scroll-reveal flex items-center justify-center">
          <div className="relative w-full flex items-center justify-center group">
            {/* Glow effect background */}
            <div className="absolute inset-0 bg-gradient-radial from-gold/10 to-transparent rounded-2xl blur-3xl group-hover:from-gold/20 transition-all duration-300" />
            {/* Logo image with shadow and hover effects */}
            <img 
              src={logo} 
              alt="Addahab Logo" 
              className="w-80 h-80 object-contain p-8 rounded-2xl shadow-2xl group-hover:shadow-gold/50 group-hover:scale-105 transition-all duration-300 relative z-10"
            />
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
