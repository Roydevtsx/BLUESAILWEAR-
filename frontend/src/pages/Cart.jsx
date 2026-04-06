import { useStore } from '../context/StoreContext';

export default function Cart() {
  const { cart } = useStore();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  return (
    <div className="mx-auto max-w-4xl space-y-4">
      {cart.map((c, i) => (
        <div key={i} className="glass flex items-center justify-between rounded-xl p-4">
          <p>{c.name} ({c.variant})</p>
          <p>${c.price}</p>
        </div>
      ))}
      <div className="glass rounded-xl p-4 text-right text-xl">Total: ${total}</div>
    </div>
  );
}
