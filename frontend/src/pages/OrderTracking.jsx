import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { trackingStages } from '../data/mockData';

const labels = {
  processing: 'Processing',
  shipped: 'Shipped',
  out_for_delivery: 'Out for Delivery',
  delivered: 'Delivered',
};

export default function OrderTracking() {
  const [params] = useSearchParams();
  const { orders, advanceOrderStatus } = useStore();
  const orderId = Number(params.get('order'));

  const order = useMemo(() => orders.find((o) => o.id === orderId) || orders[0], [orders, orderId]);

  useEffect(() => {
    if (!order || order.status === 'delivered') return;
    const timer = setInterval(() => advanceOrderStatus(order.id), 6000);
    return () => clearInterval(timer);
  }, [order, advanceOrderStatus]);

  if (!order) {
    return <div className="glass mx-auto max-w-2xl rounded-xl p-4">No order found. Place an order first.</div>;
  }

  return (
    <div className="glass mx-auto max-w-3xl rounded-2xl p-6">
      <h1 className="mb-2 text-2xl font-bold">Live Order Tracking</h1>
      <p className="mb-6 text-sm text-slate-300">Order {order.orderNo} · {new Date(order.createdAt).toLocaleString()}</p>
      <div className="space-y-3">
        {trackingStages.map((stage, i) => {
          const active = i <= order.stage;
          return (
            <div key={stage} className="flex items-center gap-3">
              <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full ${active ? 'bg-cyan-400 text-slate-900' : 'bg-white/10'}`}>{i + 1}</span>
              <p className={active ? 'text-white' : 'text-slate-400'}>{labels[stage]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
