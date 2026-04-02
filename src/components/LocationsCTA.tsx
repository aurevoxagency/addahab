const locations = [
  { name: "Maarif", address: "Rue Ibnou Nafiss, Casablanca" },
  { name: "Morocco Mall", address: "Morocco Mall, Casablanca" },
  { name: "Parc Mohammedia", address: "Parc Mohammedia, Casablanca" },
];

const LocationsCTA = () => (
  <section id="contact" className="py-24 px-6 border-y border-gold/15 bg-white">
    <div className="max-w-7xl mx-auto text-center">
      <div className="scroll-reveal">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">Nos Boutiques</p>
        <h2 className="font-display text-4xl sm:text-5xl text-ivory font-light mb-16">Visitez-nous</h2>
      </div>

      <div className="stagger-children grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {locations.map((loc) => (
          <div key={loc.name} className="border border-gold/15 p-8 hover:border-gold/30 transition-colors">
            <div className="w-3 h-3 border border-gold rotate-45 mx-auto mb-4" />
            <h3 className="font-display text-2xl text-gold mb-2">{loc.name}</h3>
            <p className="font-body text-sm text-ivory/40">{loc.address}</p>
          </div>
        ))}
      </div>

      <div className="scroll-reveal">
        <p className="font-display text-2xl sm:text-3xl text-ivory/70 italic mb-8">
          Visitez-nous ou commandez en ligne
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/212XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-body text-sm tracking-widest uppercase transition-all border border-gold/20 bg-white text-gold hover:bg-gold hover:text-white"
          >
            <span>WhatsApp</span>
          </a>
          <a
            href="https://instagram.com/addahab.bijouterie.officiel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gold text-white font-body text-sm tracking-widest uppercase hover:brightness-110 transition-all"
          >
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default LocationsCTA;
