import { useEffect, useState } from 'react';

export default function PromoPopup() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;
  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm rounded-2xl border border-cyan-300/30 bg-slate-900/90 p-5 backdrop-blur-lg">
      <p className="text-sm text-cyan-300">LIMITED OFFER</p>
      <h3 className="my-2 text-lg font-bold">Get 15% OFF first order</h3>
      <button className="mt-2 rounded bg-cyan-400 px-3 py-2 text-sm font-semibold text-slate-900" onClick={() => setOpen(false)}>Claim</button>
    </div>
  );
}
