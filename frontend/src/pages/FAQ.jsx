import { faqs } from '../data/mockData';

export default function FAQ() {
  return (
    <div className="mx-auto max-w-4xl space-y-3">
      {faqs.map((f) => (
        <details key={f.q} className="glass rounded-xl p-4">
          <summary className="cursor-pointer font-semibold">{f.q}</summary>
          <p className="mt-2 text-slate-300">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
