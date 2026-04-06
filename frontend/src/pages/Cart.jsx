import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

export default function Cart() {
  const { cart, updateQty, removeFromCart } = useStore();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (!cart.length) {
    return (
      <div className="glass mx-auto max-w-2xl rounded-2xl p-6 text-center">
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
        <Link to="/shop" className="mt-3 inline-block rounded bg-cyan-400 px-4 py-2 font-semibold text-slate-900">Browse products</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl space-y-4">
      {cart.map((c) => (
        <div key={`${c.id}-${c.variant}`} className="glass flex items-center justify-between rounded-xl p-4">
          <div>
            <p>{c.name} ({c.variant})</p>
            <p className="text-sm text-slate-300">${c.price} each</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => updateQty(c.id, c.variant, c.qty - 1)} className="rounded border border-white/30 px-2">-</button>
            <span>{c.qty}</span>
            <button onClick={() => updateQty(c.id, c.variant, c.qty + 1)} className="rounded border border-white/30 px-2">+</button>
            <button onClick={() => removeFromCart(c.id, c.variant)} className="rounded bg-rose-400 px-2 py-1 text-xs text-slate-900">Remove</button>
          </div>
        </div>
      ))}
      <div className="glass rounded-xl p-4 text-right text-xl">Total: ${total.toFixed(2)}</div>
      <div className="text-right">
        <Link className="rounded bg-cyan-400 px-4 py-2 font-semibold text-slate-900" to="/checkout">Continue to Checkout</Link>
      </div>
    </div>
  );
}
