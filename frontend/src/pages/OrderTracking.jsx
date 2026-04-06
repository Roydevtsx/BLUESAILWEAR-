const timeline = ['Processing', 'Shipped', 'Out for Delivery', 'Delivered'];

export default function OrderTracking() {
  return (
    <div className="glass mx-auto max-w-3xl rounded-2xl p-6">
      <h1 className="mb-4 text-2xl font-bold">Live Order Tracking</h1>
      <div className="space-y-2">
        {timeline.map((s, i) => (
          <div key={s} className="flex items-center gap-3">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-400 text-slate-900">{i + 1}</span>
            <p>{s}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
