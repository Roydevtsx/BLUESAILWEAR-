import { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { api } from '../services/api';

export default function NewsletterBox() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { notify } = useStore();

  const submit = async (e) => {
    e.preventDefault();
    if (!email.includes('@')) return;

    setLoading(true);
    try {
      await api.subscribeNewsletter(email);
      notify(`Subscribed ${email} to newsletter`, 'system');
      setEmail('');
    } catch {
      notify('Newsletter service is unavailable. Please try again later.', 'system');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="glass mx-auto flex max-w-4xl flex-col gap-3 rounded-2xl p-5 md:flex-row">
      <div className="flex-1">
        <h3 className="text-lg font-bold">Join the BLUESAILWEAR newsletter</h3>
        <p className="text-sm text-slate-300">Early access to drops, private offers, and style stories.</p>
      </div>
      <input value={email} onChange={(e) => setEmail(e.target.value)} className="rounded bg-slate-900 px-3 py-2" placeholder="email@example.com" />
      <button disabled={loading} className="rounded bg-cyan-400 px-4 py-2 font-semibold text-slate-900 disabled:opacity-50">{loading ? 'Subscribing...' : 'Subscribe'}</button>
    </form>
  );
}
