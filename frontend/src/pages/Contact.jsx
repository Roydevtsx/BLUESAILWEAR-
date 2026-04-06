import { useState } from 'react';
import { useStore } from '../context/StoreContext';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const { notify } = useStore();

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    notify('Contact message sent successfully. We will reply soon.', 'system');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={submit} className="glass mx-auto max-w-3xl space-y-3 rounded-2xl p-6">
      <h1 className="text-2xl font-bold">Contact Us</h1>
      <input required value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} className="w-full rounded bg-slate-900 p-3" placeholder="Name" />
      <input required type="email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} className="w-full rounded bg-slate-900 p-3" placeholder="Email" />
      <textarea required value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))} className="w-full rounded bg-slate-900 p-3" placeholder="Message" rows="5" />
      <button className="rounded bg-cyan-400 px-4 py-2 text-slate-900">Send Message</button>
    </form>
  );
}
