import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/mockData';
import { useStore } from '../context/StoreContext';

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id)) || products[0];
  const [activeImage, setActiveImage] = useState(product.gallery[0]);
  const [variant, setVariant] = useState(product.variants[0]);
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const wished = wishlist.some((item) => item.id === product.id);

  return (
    <div className="glass mx-auto grid max-w-6xl gap-8 rounded-3xl p-6 md:grid-cols-2">
      <div>
        <div className="overflow-hidden rounded-xl">
          <img src={activeImage} alt={product.name} className="h-96 w-full cursor-zoom-in object-cover transition duration-500 hover:scale-110" />
        </div>
        <div className="mt-3 flex gap-2">
          {product.gallery.map((g) => <img onMouseEnter={() => setActiveImage(g)} key={g} src={g} className="h-20 w-20 cursor-pointer rounded object-cover" />)}
        </div>
      </div>
      <div>
        <p className="text-sm text-cyan-300">{product.category} / {product.subCategory}</p>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="my-2 text-slate-300">{product.description}</p>
        <p className="text-cyan-300">${product.price}</p>
        <select className="mt-4 rounded bg-slate-900 p-2" value={variant} onChange={(e) => setVariant(e.target.value)}>
          {product.variants.map((v) => <option key={v}>{v}</option>)}
        </select>
        <div className="mt-4 flex gap-2">
          <button className="rounded bg-cyan-400 px-4 py-2 font-semibold text-slate-900" onClick={() => addToCart(product, variant)}>Add to cart</button>
          <button className="rounded border border-white/30 px-4 py-2" onClick={() => toggleWishlist(product)}>{wished ? 'Wishlisted' : 'Add to wishlist'}</button>
        </div>
      </div>
    </div>
  );
}
