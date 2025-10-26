import { useMemo, useState } from 'react';
import { Shield, Star, Heart } from 'lucide-react';

const ARMOURS = [
  { id: 'mk2', name: 'Mark II Prototype', price: 18999, rating: 4.6, tag: 'Classic', color: 'from-slate-300 to-slate-500' },
  { id: 'mk5', name: 'Mark V Suitcase', price: 24999, rating: 4.8, tag: 'Portable', color: 'from-rose-300 to-rose-500' },
  { id: 'mk7', name: 'Mark VII Assault', price: 32999, rating: 4.9, tag: 'Assault', color: 'from-amber-300 to-amber-500' },
  { id: 'hulkbuster', name: 'Hulkbuster XL', price: 58999, rating: 5.0, tag: 'Heavy', color: 'from-emerald-300 to-emerald-500' },
];

const ACCESSORIES = [
  { id: 'arc', name: 'Arc Reactor Core', price: 2999, rating: 4.7, tag: 'Energy', color: 'from-cyan-300 to-cyan-500' },
  { id: 'repulsor', name: 'Palm Repulsor Kit', price: 1499, rating: 4.5, tag: 'Weapon', color: 'from-indigo-300 to-indigo-500' },
  { id: 'helmet', name: 'MK Helmet w/ HUD', price: 3499, rating: 4.8, tag: 'HUD', color: 'from-fuchsia-300 to-fuchsia-500' },
  { id: 'gauntlet', name: 'Nanotech Gauntlet', price: 2799, rating: 4.6, tag: 'Utility', color: 'from-teal-300 to-teal-500' },
];

const ArmourTypes = ['Classic', 'Portable', 'Assault', 'Heavy'];
const AccessoryTypes = ['Energy', 'Weapon', 'HUD', 'Utility'];

export default function Shop({ onAddToCart }) {
  const [armourFilter, setArmourFilter] = useState('All');
  const [accessoryFilter, setAccessoryFilter] = useState('All');

  const filteredArmours = useMemo(() => {
    if (armourFilter === 'All') return ARMOURS;
    return ARMOURS.filter((a) => a.tag === armourFilter);
  }, [armourFilter]);

  const filteredAccessories = useMemo(() => {
    if (accessoryFilter === 'All') return ACCESSORIES;
    return ACCESSORIES.filter((a) => a.tag === accessoryFilter);
  }, [accessoryFilter]);

  return (
    <section id="shop" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6">
        <header className="mb-12">
          <p className="text-emerald-300/80 text-xs tracking-widest uppercase mb-2">Catalogue</p>
          <h2 className="text-3xl md:text-4xl font-bold">Shop the Collection</h2>
          <p className="text-neutral-400 mt-2 max-w-2xl">Choose from studio-grade armours and compatible accessories. Every item is inspected for craftsmanship and fit.</p>
        </header>

        <div id="armours" className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold flex items-center gap-2"><Shield size={18} className="text-emerald-300"/> Armours</h3>
            <div className="flex flex-wrap gap-2">
              {['All', ...ArmourTypes].map((t) => (
                <button
                  key={t}
                  onClick={() => setArmourFilter(t)}
                  className={`rounded-full border px-3 py-1 text-sm ${armourFilter===t? 'bg-emerald-400 text-neutral-900 border-emerald-400':'border-white/10 hover:bg-white/5'}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <Grid products={filteredArmours} onAddToCart={onAddToCart} />
        </div>

        <div id="accessories" className="mb-2">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold flex items-center gap-2"><Heart size={18} className="text-emerald-300"/> Accessories</h3>
            <div className="flex flex-wrap gap-2">
              {['All', ...AccessoryTypes].map((t) => (
                <button
                  key={t}
                  onClick={() => setAccessoryFilter(t)}
                  className={`rounded-full border px-3 py-1 text-sm ${accessoryFilter===t? 'bg-emerald-400 text-neutral-900 border-emerald-400':'border-white/10 hover:bg-white/5'}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <Grid products={filteredAccessories} onAddToCart={onAddToCart} />
          <div className="mt-10 text-center text-neutral-400 text-sm">
            Looking for pro kits or custom fits? <a href="#" className="text-emerald-300 hover:text-emerald-200">Contact StarkWorks Pro</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Grid({ products, onAddToCart }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((p) => (
        <Card key={p.id} product={p} onAddToCart={onAddToCart} />)
      )}
    </div>
  );
}

function Card({ product, onAddToCart }) {
  return (
    <div className="group rounded-2xl border border-white/10 overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-950 hover:from-neutral-900/80 hover:to-neutral-950/80 transition">
      <div className={`h-40 bg-gradient-to-br ${product.color} relative`}>
        <div className="absolute top-3 right-3 text-xs bg-black/30 border border-white/10 rounded-full px-2 py-1">{product.tag}</div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold">{product.name}</h4>
          <div className="flex items-center gap-1 text-amber-300">
            <Star size={16} fill="currentColor" />
            <span className="text-sm text-neutral-300">{product.rating}</span>
          </div>
        </div>
        <p className="text-emerald-300 font-semibold mt-1">${(product.price/100).toFixed(2)}k</p>
        <div className="mt-4 flex items-center gap-3">
          <button
            onClick={() => onAddToCart(product)}
            className="flex-1 rounded-md bg-emerald-400 text-neutral-900 font-semibold px-3 py-2 hover:bg-emerald-300"
          >
            Add to Cart
          </button>
          <button className="rounded-md border border-white/10 px-3 py-2 hover:bg-white/5">Details</button>
        </div>
      </div>
    </div>
  );
}
