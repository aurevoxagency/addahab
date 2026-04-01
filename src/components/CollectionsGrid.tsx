import img1 from "@/assets/pexels-ucantereyagi-14189761.jpg";
import img2 from "@/assets/pexels-the-glorious-studio-3584518-12427695.jpg";
import img3 from "@/assets/pexels-raana-jenab-594484578-32479490.jpg";
import img4 from "@/assets/pexels-johndetochka-33299091.jpg";
import img5 from "@/assets/pexels-gizemtos-2150298361-31513715.jpg";
import img6 from "@/assets/pexels-cottonbro-6835477.jpg";

const collections = [
  { name: "Bagues", icon: "💍", image: img4 },
  { name: "Colliers", icon: "📿", image: img2 },
  { name: "Bracelets", icon: "⌚", image: img3 },
  { name: "Boucles d'oreilles", icon: "✨", image: img6 },
  { name: "Montres", icon: "⏱", image: img5 },
  { name: "Sets de mariage", icon: "💎", image: img1 },
];

const CollectionsGrid = () => (
  <section id="collections" className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16 scroll-reveal">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">Nos Créations</p>
        <h2 className="font-display text-4xl sm:text-5xl text-ivory font-light">Collections</h2>
      </div>

      <div className="stagger-children grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {collections.map((item) => (
          <div
            key={item.name}
            className="collection-card group relative aspect-[4/3] flex items-end p-6 cursor-pointer overflow-hidden border border-gold/15"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay gradient for text visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
            
            {/* Decorative corner */}
            <div className="absolute top-4 right-4 w-10 h-10 border-t border-r border-gold/20 transition-all group-hover:border-gold/50 group-hover:w-14 group-hover:h-14 z-20" />
            <div className="absolute bottom-4 left-4 w-10 h-10 border-b border-l border-gold/20 transition-all group-hover:border-gold/50 group-hover:w-14 group-hover:h-14 z-20" />

            {/* Center icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl opacity-20 group-hover:opacity-40 transition-opacity z-10">
              {item.icon}
            </div>

            <div className="relative z-10">
              <h3 className="font-display text-2xl text-ivory group-hover:text-gold transition-colors">
                {item.name}
              </h3>
              <div className="w-8 h-px bg-gold/40 mt-2 group-hover:w-16 transition-all" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CollectionsGrid;
