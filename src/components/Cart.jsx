import { X, Plus, Minus, ShoppingCart } from 'lucide-react';

export default function Cart({ open, onClose, items, onUpdateQty, onRemove }) {
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/60 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
      />
      <aside className={`absolute right-0 top-0 h-full w-full max-w-md bg-neutral-950 border-l border-white/10 transform transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-16 px-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold"><ShoppingCart size={18} className="text-emerald-300"/> Cart</div>
          <button onClick={onClose} className="rounded-md p-2 hover:bg-white/5"><X size={18} /></button>
        </div>
        <div className="h-[calc(100%-8rem)] overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center text-neutral-400 mt-20">Your cart is empty.</div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 border border-white/10 rounded-xl p-3">
                <div className={`h-14 w-14 rounded-lg bg-gradient-to-br ${item.color}`} />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{item.name}</p>
                    <button onClick={() => onRemove(item.id)} className="text-sm text-neutral-400 hover:text-white">Remove</button>
                  </div>
                  <p className="text-sm text-neutral-400">${(item.price/100).toFixed(2)}k</p>
                  <div className="mt-2 inline-flex items-center rounded-md border border-white/10">
                    <button onClick={() => onUpdateQty(item.id, -1)} className="p-2 hover:bg-white/5"><Minus size={14} /></button>
                    <span className="px-3 text-sm">{item.qty}</span>
                    <button onClick={() => onUpdateQty(item.id, 1)} className="p-2 hover:bg-white/5"><Plus size={14} /></button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="h-16 px-6 border-t border-white/10 flex items-center justify-between">
          <span className="text-neutral-400">Subtotal</span>
          <span className="font-semibold text-emerald-300">${(subtotal/100).toFixed(2)}k</span>
        </div>
        <div className="px-6 pb-6">
          <button className="w-full rounded-md bg-emerald-400 text-neutral-900 font-semibold px-4 py-3 hover:bg-emerald-300">Checkout</button>
        </div>
      </aside>
    </div>
  );
}
