import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

const links = ['Home', 'Shop', 'Cart', 'Checkout', 'Order Tracking', 'Order History', 'Profile', 'Contact', 'FAQ', 'Admin'];

export default function Navbar() {
  const { cart } = useStore();

  return (
    <nav className="fixed top-0 z-50 w-full px-6 py-4">
      <div className="glass mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-5 py-3">
        <Link to="/" className="text-xl font-bold tracking-[0.2em]">BLUESAILWEAR</Link>
        <div className="hidden gap-4 text-sm lg:flex">
          {links.map((link) => {
            const path = link.toLowerCase().replace(/ /g, '-');
            return (
              <Link key={link} to={`/${path === 'home' ? '' : path}`} className="text-slate-200 transition hover:text-cyan-300">
                {link}
              </Link>
            );
          })}
          <span className="rounded-full bg-cyan-400/20 px-2 text-cyan-200">Cart: {cart.reduce((sum, i) => sum + i.qty, 0)}</span>
        </div>
      </div>
    </nav>
  );
}
