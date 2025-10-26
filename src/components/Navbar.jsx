import { ShoppingCart, User, LogOut } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart, onOpenAuth, user, onSignOut }) {
  return (
    <header className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded bg-gradient-to-br from-emerald-400 to-cyan-500" />
          <span className="font-semibold tracking-wide">StarkWorks</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
          <a href="#shop" className="hover:text-white">Shop</a>
          <a href="#armours" className="hover:text-white">Armours</a>
          <a href="#accessories" className="hover:text-white">Accessories</a>
          <a href="#blogs" className="hover:text-white">Blogs</a>
        </nav>
        <div className="flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-3">
              <span className="hidden sm:block text-sm text-neutral-300">{user.email}</span>
              <button
                onClick={onSignOut}
                className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm hover:bg-white/5"
              >
                <LogOut size={16} /> Sign out
              </button>
            </div>
          ) : (
            <button
              onClick={() => onOpenAuth('signin')}
              className="hidden sm:inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm hover:bg-white/5"
            >
              <User size={16} /> Sign in
            </button>
          )}
          <button
            onClick={onOpenCart}
            className="relative inline-flex items-center gap-2 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 px-3 py-2 text-sm hover:bg-emerald-500/20"
          >
            <ShoppingCart size={18} />
            <span className="hidden sm:block">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 h-5 min-w-[20px] rounded-full bg-emerald-400 text-neutral-900 text-xs font-semibold grid place-items-center px-1">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
