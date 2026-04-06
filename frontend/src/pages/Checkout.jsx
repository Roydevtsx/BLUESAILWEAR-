import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

export default function Checkout() {
  const [form, setForm] = useState({ email: '', address: '', payment: 'COD' });
  const { checkoutAuth, notify } = useStore();
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (!form.email || !form.address) return;
    checkoutAuth(form.email);
    notify(`Order placed via ${form.payment}`, 'order');
    navigate('/order-tracking');
  };

  return (
    <form onSubmit={submit} className="glass mx-auto max-w-xl space-y-4 rounded-2xl p-6">
      <h1 className="text-2xl font-bold">Checkout</h1>
      <input required placeholder="Email" className="w-full rounded bg-slate-900 p-3" onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
      <textarea required placeholder="Address" className="w-full rounded bg-slate-900 p-3" onChange={(e) => setForm((f) => ({ ...f, address: e.target.value }))} />
      <select className="w-full rounded bg-slate-900 p-3" onChange={(e) => setForm((f) => ({ ...f, payment: e.target.value }))}>
        <option value="COD">Cash on Delivery</option>
        <option value="STRIPE">Custom Stripe</option>
        <option value="SSLCOMMERZ">SSLCommerz</option>
      </select>
      <button className="rounded bg-cyan-400 px-4 py-2 font-semibold text-slate-900">Place Order</button>
    </form>
  );
}
