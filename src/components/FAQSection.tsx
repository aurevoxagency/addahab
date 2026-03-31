import { useState } from "react";

const faqs = [
  { q: "Livrez-vous partout au Maroc ?", a: "Oui, nous assurons la livraison partout au Maroc avec un service rapide et sécurisé." },
  { q: "Quels types d'or proposez-vous ?", a: "Nous proposons de l'or 18 carats et 21 carats, certifié et garanti." },
  { q: "Comment puis-je passer commande ?", a: "Vous pouvez nous contacter via WhatsApp, Instagram, ou directement en boutique." },
  { q: "Proposez-vous des bijoux sur mesure ?", a: "Oui, nous offrons un service de création sur mesure pour vos pièces uniques." },
  { q: "Où sont situées vos boutiques ?", a: "Nous avons trois boutiques à Casablanca : Maarif (Ibnou Nafiss), Morocco Mall et Parc Mohammedia." },
  { q: "Acceptez-vous les retours ?", a: "Nous proposons un service d'échange sous conditions. Contactez-nous pour plus de détails." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">Questions</p>
          <h2 className="font-display text-4xl sm:text-5xl text-ivory font-light">FAQ</h2>
        </div>

        <div className="stagger-children space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gold/10 hover:border-gold/20 transition-colors">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-body text-ivory/80 text-sm sm:text-base">{faq.q}</span>
                <span className={`text-gold text-lg transition-transform duration-300 ${openIndex === i ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              <div className={`faq-content px-5 ${openIndex === i ? "open" : ""}`}>
                <p className="font-body text-sm text-ivory/50 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
