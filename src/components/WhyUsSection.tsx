const features = [
  { icon: "◆", title: "Or Certifié", desc: "Or 18K & 21K authentique, garanti et certifié" },
  { icon: "▸", title: "Livraison Rapide", desc: "Livraison sécurisée partout au Maroc" },
  { icon: "◇", title: "Service Personnalisé", desc: "Conseils d'experts pour chaque occasion" },
  { icon: "▪", title: "3 Boutiques", desc: "Maarif, Morocco Mall, Parc Mohammedia" },
];

const WhyUsSection = () => (
  <section className="py-24 px-6 bg-muted/30">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16 scroll-reveal">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">Pourquoi Nous</p>
        <h2 className="font-display text-4xl sm:text-5xl text-ivory font-light">Notre Engagement</h2>
      </div>

      <div className="stagger-children grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <div key={f.title} className="bg-card border border-gold/10 p-8 text-center hover:border-gold/30 transition-colors shadow-sm">
            <div className="text-3xl text-gold mb-4 font-display">{f.icon}</div>
            <h3 className="font-display text-xl text-ivory mb-3">{f.title}</h3>
            <p className="font-body text-sm text-ivory/40 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
