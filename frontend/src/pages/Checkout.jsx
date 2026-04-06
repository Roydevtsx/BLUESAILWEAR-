import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

export default function Checkout() {
  const [form, setForm] = useState({ email: '', name: '', address: '', payment: 'COD' });
  const { cart, checkoutAuth, placeOrder } = useStore();
  const navigate = useNavigate();
  const total = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.qty, 0), [cart]);

  const submit = (e) => {
    e.preventDefault();
    if (!form.email || !form.address || !cart.length) return;
    checkoutAuth(form.email, form.name);
    const order = placeOrder({ payment: form.payment, address: form.address });
    navigate(`/order-tracking?order=${order.id}`);
  };

  return (
    <form onSubmit={submit} className="glass mx-auto max-w-xl space-y-4 rounded-2xl p-6">
      <h1 className="text-2xl font-bold">Checkout</h1>
      <input required placeholder="Email" value={form.email} className="w-full rounded bg-slate-900 p-3" onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
      <input placeholder="Full Name" value={form.name} className="w-full rounded bg-slate-900 p-3" onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
      <textarea required placeholder="Shipping Address" value={form.address} className="w-full rounded bg-slate-900 p-3" onChange={(e) => setForm((f) => ({ ...f, address: e.target.value }))} />
      <select className="w-full rounded bg-slate-900 p-3" value={form.payment} onChange={(e) => setForm((f) => ({ ...f, payment: e.target.value }))}>
        <option value="COD">Cash on Delivery</option>
        <option value="STRIPE">Custom Stripe</option>
        <option value="SSLCOMMERZ">SSLCommerz</option>
      </select>
      <div className="rounded border border-white/20 p-3 text-sm text-slate-300">Order total: <span className="font-bold text-cyan-300">${total.toFixed(2)}</span></div>
      <button disabled={!cart.length} className="rounded bg-cyan-400 px-4 py-2 font-semibold text-slate-900 disabled:opacity-40">Place Order</button>
      {!cart.length && <p className="text-sm text-rose-300">Add products to cart before checkout.</p>}
    </form>
  );
}
