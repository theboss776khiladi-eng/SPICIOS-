import { marqueeData, HeroBack } from "./constantData.js";

const HeroSection = () => {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-end">
        <div
          className="hero-bg absolute inset-0"
          style={{
            backgroundImage:
              HeroBack,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 md:pb-28 w-full">
          <div className="max-w-2xl">
            <p className="text-saffron-light text-sm font-medium tracking-widest uppercase mb-4">
              Est. 2026 · Farm to Kitchen
            </p>
            <h1 className="font-serif text-5xl md:text-7xl text-white leading-[1.1] mb-6">
              Spices grown
              <br />
              with intention.
            </h1>
            <p className="text-white/70 text-lg max-w-md mb-8 leading-relaxed">
              From our fields to your kitchen. Sourced, dried, and packed by
              hand — no middlemen, no compromise.
            </p>
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-saffron text-forest-dark font-semibold rounded-full hover:bg-saffron-light transition-colors text-sm tracking-wide"
            >
              Explore the Collection
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <div className="bg-forest-dark py-3 overflow-hidden">
        <div className="marquee-track flex whitespace-nowrap text-sand text-xs font-medium tracking-widest uppercase">
          {marqueeData.map((e, idx) => {
            return (
              <>
                <span key={idx} className="mx-8">
                  {e}
                </span>
                <span key={idx} className="mx-8">
                  ·
                </span>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default HeroSection;
