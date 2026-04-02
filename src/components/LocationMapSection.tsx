const LocationMapSection = () => (
  <section className="py-24 px-6 bg-gradient-to-b from-white to-muted/40">
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16 scroll-reveal">
        <div className="flex items-center gap-4 mb-6 justify-center">
          <div className="flex-1 h-px bg-gold/20 max-w-20" />
          <span className="text-gold/60 text-sm tracking-widest uppercase">Localisation</span>
          <div className="flex-1 h-px bg-gold/20 max-w-20" />
        </div>
        <h2 className="font-display text-4xl sm:text-5xl text-ivory font-light mb-4 gold-gradient-text">
          Visitez-nous
        </h2>
        <p className="font-body text-ivory/60 max-w-2xl mx-auto">
          Découvrez notre boutique à Casablanca et explorez nos collections en personne
        </p>
      </div>

      {/* Map Container */}
      <div className="rounded-lg overflow-hidden border border-gold/20 shadow-2xl bg-white">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.835377078034!2d-7.6339787!3d33.5836233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d3005bf1a9f5%3A0xbc5cd671e8bf187f!2sAddahab%20Bijouterie!5e0!3m2!1sfr!2sma!4v1775034511534!5m2!1sfr!2sma"
          width="100%"
          height="500"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Info below map */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Address */}
        <div className="text-center sm:text-left">
          <div className="flex items-center gap-3 mb-3 justify-center sm:justify-start">
            <div className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gold">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeWidth="1.5" />
                <circle cx="12" cy="10" r="3" strokeWidth="1.5" />
              </svg>
            </div>
            <h3 className="font-display text-gold tracking-wider">Adresse</h3>
          </div>
          <p className="font-body text-ivory/60 text-sm">
            Casablanca, Maroc
          </p>
        </div>

        {/* Phone */}
        <div className="text-center sm:text-left">
          <div className="flex items-center gap-3 mb-3 justify-center sm:justify-start">
            <div className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gold">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-display text-gold tracking-wider">Téléphone</h3>
          </div>
          <a href="tel:+212" className="font-body text-gold hover:text-gold/80 transition-colors text-sm">
            +212 (0) 5XX XXX XXX
          </a>
        </div>

        {/* Email */}
        <div className="text-center sm:text-left">
          <div className="flex items-center gap-3 mb-3 justify-center sm:justify-start">
            <div className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gold">
                <rect x="2" y="4" width="20" height="16" rx="2" strokeWidth="1.5" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-display text-gold tracking-wider">Email</h3>
          </div>
          <a href="mailto:contact@addahab.ma" className="font-body text-gold hover:text-gold/80 transition-colors text-sm">
            contact@addahab.ma
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default LocationMapSection;
