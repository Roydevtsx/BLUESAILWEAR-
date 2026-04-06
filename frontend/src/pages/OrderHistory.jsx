import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

export default function OrderHistory() {
  const { orders } = useStore();

  if (!orders.length) {
    return (
      <div className="glass mx-auto max-w-4xl rounded-2xl p-6">
        <h1 className="text-2xl font-bold">Order History</h1>
        <p className="mt-2 text-slate-300">No orders yet.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl space-y-3">
      {orders.map((o) => (
        <div key={o.id} className="glass rounded-xl p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-bold">{o.orderNo}</h2>
            <span className="capitalize text-cyan-300">{o.status.replace(/_/g, ' ')}</span>
          </div>
          <p className="text-sm text-slate-300">{o.items.length} item(s) · ${o.total.toFixed(2)}</p>
          <Link to={`/order-tracking?order=${o.id}`} className="mt-2 inline-block text-sm text-cyan-300">Track order</Link>
        </div>
      ))}
    </div>
  );
}
