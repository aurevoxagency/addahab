const MarqueeStrip = () => {
  const text = "✦ Livraison partout au Maroc ✦ 3 Boutiques à Casablanca ✦ Or 18K & 21K ✦ Montres de luxe ";
  const repeated = (text + " ").repeat(6);

  return (
    <div className="bg-white border-y border-gold/20 py-4 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap text-gold font-body text-sm tracking-[0.3em] uppercase">
        {repeated}{repeated}
      </div>
    </div>
  );
};

export default MarqueeStrip;
