const services = [
  {
    title: "Or Certifie",
    description:
      "Chaque piece est controlee et livree avec certificat d'authenticite.",
    icon: "◆",
  },
  {
    title: "Personnalisation",
    description:
      "Gravure, ajustement et finitions sur mesure pour vos occasions speciales.",
    icon: "✦",
  },
  {
    title: "Conseil Expert",
    description:
      "Notre equipe vous accompagne pour choisir la piece ideale selon votre style.",
    icon: "◈",
  },
  {
    title: "Livraison Securisee",
    description:
      "Service rapide partout au Maroc avec suivi et emballage premium.",
    icon: "⬢",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-14 scroll-reveal">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">Nos Services</p>
        <h2 className="font-display text-4xl sm:text-5xl text-ivory font-light mb-4">
          Une Experience <span className="gold-gradient-text italic">Complete</span>
        </h2>
        <p className="font-body text-ivory/55 max-w-2xl mx-auto leading-relaxed">
          Plus qu'une bijouterie, Addahab vous offre un accompagnement premium avant, pendant
          et apres votre achat.
        </p>
      </div>

      <div className="stagger-children grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <article
            key={service.title}
            className="group relative overflow-hidden border border-gold/20 bg-white p-6 min-h-[250px] shadow-sm"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top,hsla(120,61%,50%,0.16),transparent_65%)]" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full border border-gold/35 flex items-center justify-center text-gold text-lg mb-5 bg-muted/40">
                {service.icon}
              </div>
              <h3 className="font-display text-xl text-ivory mb-3 group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              <p className="font-body text-sm text-ivory/55 leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="absolute bottom-0 left-0 h-px w-0 bg-gold/70 group-hover:w-full transition-all duration-500" />
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
