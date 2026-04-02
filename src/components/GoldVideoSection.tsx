import videoAsset from "@/assets/855854-hd_1280_720_24fps.mp4";

const GoldVideoSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Video background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoAsset} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Black to Gold gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-gold/15" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light tracking-wider mb-4 gold-gradient-text">
          L'essence de l'or
        </h2>
        <p className="font-body text-lg sm:text-xl text-ivory/80 tracking-[0.2em] uppercase">
          Pur luxe et élégance
        </p>
      </div>
    </section>
  );
};

export default GoldVideoSection;
