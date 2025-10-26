import Spline from '@splinetool/react-spline';

export default function Hero({ onCTAShop }) {
  return (
    <section className="relative h-[86vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/60 via-black/40 to-neutral-950/95" />
      <div className="relative h-full max-w-7xl mx-auto px-6 grid place-items-center">
        <div className="text-center">
          <p className="text-emerald-300/80 text-xs tracking-widest uppercase mb-3">StarkWorks Retail Division</p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Iron Man Armours & Tactical Accessories
          </h1>
          <p className="mt-4 text-neutral-300 max-w-2xl mx-auto">
            Legally acquired, ethically sourced, and meticulously engineered replicas for collectors and professionals. Built with aerospace-grade alloys aesthetics and smart fit systems.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={onCTAShop}
              className="pointer-events-auto inline-flex items-center justify-center rounded-md bg-emerald-400 text-neutral-900 font-semibold px-5 py-3 hover:bg-emerald-300 transition"
            >
              Shop Armours
            </button>
            <a
              href="#accessories"
              className="pointer-events-auto inline-flex items-center justify-center rounded-md border border-white/10 px-5 py-3 hover:bg-white/5"
            >
              Explore Accessories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
