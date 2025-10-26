import { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Shop from './components/Shop';
import Cart from './components/Cart';
import AuthModals from './components/AuthModals';
import Blog from './components/Blog';

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [authModal, setAuthModal] = useState(null); // 'signin' | 'signup' | null
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  const cartCount = useMemo(() => cart.reduce((sum, i) => sum + i.qty, 0), [cart]);

  const addToCart = (item) => {
    setCart((prev) => {
      const idx = prev.findIndex((p) => p.id === item.id);
      if (idx > -1) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + 1 };
        return copy;
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const updateQty = (id, delta) => {
    setCart((prev) => {
      const copy = prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i));
      return copy;
    });
  };

  const removeFromCart = (id) => setCart((prev) => prev.filter((i) => i.id !== id));

  const fakeAuth = (email) => {
    setUser({ email });
    setAuthModal(null);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setCartOpen(true)}
        onOpenAuth={(type) => setAuthModal(type)}
        user={user}
        onSignOut={() => setUser(null)}
      />
      <main>
        <Hero onCTAShop={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })} />
        <Shop onAddToCart={addToCart} />
        <Blog />
      </main>
      <Cart
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onUpdateQty={updateQty}
        onRemove={removeFromCart}
      />
      <AuthModals
        mode={authModal}
        onClose={() => setAuthModal(null)}
        onSignIn={(email) => fakeAuth(email)}
        onSignUp={(email) => fakeAuth(email)}
      />
      <footer className="border-t border-white/5 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-400">© {new Date().getFullYear()} StarkWorks Retail. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-neutral-400">
            <a href="#shop" className="hover:text-white">Shop</a>
            <a href="#accessories" className="hover:text-white">Accessories</a>
            <a href="#blogs" className="hover:text-white">Blogs</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
