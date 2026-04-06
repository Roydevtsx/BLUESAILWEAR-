import { useMemo, useState } from 'react';
import { faqs } from '../data/mockData';

export default function FAQ() {
  const [query, setQuery] = useState('');
  const items = useMemo(() => faqs.filter((f) => `${f.q} ${f.a}`.toLowerCase().includes(query.toLowerCase())), [query]);

  return (
    <div className="mx-auto max-w-4xl space-y-3">
      <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search FAQ" className="w-full rounded-xl bg-slate-900 p-3" />
      {items.map((f) => (
        <details key={f.q} className="glass rounded-xl p-4">
          <summary className="cursor-pointer font-semibold">{f.q}</summary>
          <p className="mt-2 text-slate-300">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
