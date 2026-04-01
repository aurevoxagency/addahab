import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-black to-black/80">
      <div className="max-w-2xl mx-auto">
        {/* Decorative line */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gold/20" />
          <span className="text-gold/60 text-sm tracking-widest uppercase">Actualités</span>
          <div className="flex-1 h-px bg-gold/20" />
        </div>

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl text-ivory font-light mb-3 gold-gradient-text">
            Restez connectés
          </h2>
          <p className="font-body text-ivory/60 text-sm sm:text-base">
            Inscrivez-vous à notre newsletter pour recevoir les dernières collections et offres exclusives
          </p>
        </div>

        {/* Newsletter form */}
        <form onSubmit={handleSubmit} className="relative">
          <div className="flex gap-3 sm:gap-0">
            <input
              type="email"
              placeholder="Votre adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-black/50 border border-gold/30 text-ivory placeholder-ivory/40 font-body text-sm focus:outline-none focus:border-gold/70 transition-colors"
              required
            />
            <button
              type="submit"
              className="px-4 sm:px-8 py-3 sm:py-4 bg-gold text-black font-body text-sm font-semibold tracking-widest uppercase hover:brightness-110 transition-all whitespace-nowrap"
            >
              S'inscrire
            </button>
          </div>

          {/* Success message */}
          {submitted && (
            <div className="absolute -bottom-10 left-0 right-0 text-center text-gold text-sm font-body animate-pulse">
              Merci ! Un email de confirmation a été envoyé.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
