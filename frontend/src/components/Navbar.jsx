import { Link } from 'react-router-dom';

const links = ['Home', 'Shop', 'Cart', 'Checkout', 'Order Tracking', 'Order History', 'Profile', 'Contact', 'FAQ'];

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full px-6 py-4">
      <div className="glass mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-5 py-3">
        <Link to="/" className="text-xl font-bold tracking-[0.2em]">BLUESAILWEAR</Link>
        <div className="hidden gap-4 text-sm lg:flex">
          {links.map((link) => (
            <Link key={link} to={`/${link.toLowerCase().replace(/ /g, '-') === 'home' ? '' : link.toLowerCase().replace(/ /g, '-')}`} className="text-slate-200 transition hover:text-cyan-300">
              {link}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
