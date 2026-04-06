import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

export default function ProductCard({ product, listMode = false }) {
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const wished = wishlist.some((p) => p.id === product.id);

  return (
    <div className={`glass overflow-hidden rounded-2xl ${listMode ? 'flex' : ''}`}>
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} className={`${listMode ? 'w-52' : 'w-full'} h-52 object-cover transition duration-500 hover:scale-105`} />
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`} className="text-lg font-semibold hover:text-cyan-300">{product.name}</Link>
        <p className="text-sm text-slate-300">{product.brand} · ⭐ {product.rating}</p>
        <p className="mt-2 text-cyan-300">${product.price}</p>
        <div className="mt-4 flex gap-2">
          <button className="rounded bg-cyan-400 px-3 py-2 text-xs font-bold text-slate-900" onClick={() => addToCart(product, product.variants[0])}>Add to cart</button>
          <button className="rounded border border-white/30 px-3 py-2 text-xs" onClick={() => toggleWishlist(product)}>{wished ? 'Wishlisted' : 'Wishlist'}</button>
        </div>
      </div>
    </div>
  );
}
