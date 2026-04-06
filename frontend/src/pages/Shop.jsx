import { useMemo, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/mockData';

export default function Shop() {
  const [filters, setFilters] = useState({ category: 'All', brand: 'All', maxPrice: 999, rating: 0 });
  const [listMode, setListMode] = useState(false);

  const filtered = useMemo(
    () =>
      products.filter((p) =>
        (filters.category === 'All' || p.category === filters.category) &&
        (filters.brand === 'All' || p.brand === filters.brand) &&
        p.price <= filters.maxPrice &&
        p.rating >= filters.rating,
      ),
    [filters],
  );

  return (
    <div className="mx-auto max-w-7xl space-y-4">
      <div className="glass flex flex-wrap gap-3 rounded-2xl p-4">
        <select onChange={(e) => setFilters((f) => ({ ...f, category: e.target.value }))} className="rounded bg-slate-900 px-3 py-2">
          <option>All</option><option>Clothes</option><option>Shoes</option><option>Jewelry</option>
        </select>
        <select onChange={(e) => setFilters((f) => ({ ...f, brand: e.target.value }))} className="rounded bg-slate-900 px-3 py-2">
          <option>All</option><option>BlueSail Signature</option><option>Tide Motion</option><option>Moon Pearl</option>
        </select>
        <input type="range" min="50" max="300" defaultValue="300" onChange={(e) => setFilters((f) => ({ ...f, maxPrice: Number(e.target.value) }))} />
        <input type="number" min="0" max="5" step="0.1" placeholder="Min rating" onChange={(e) => setFilters((f) => ({ ...f, rating: Number(e.target.value || 0) }))} className="w-24 rounded bg-slate-900 px-3 py-2" />
        <button onClick={() => setListMode((v) => !v)} className="ml-auto rounded bg-cyan-400 px-3 py-2 text-slate-900">{listMode ? 'Grid' : 'List'}</button>
      </div>

      <div className={`grid gap-6 ${listMode ? 'grid-cols-1' : 'md:grid-cols-3'}`}>
        {filtered.map((p) => <ProductCard key={p.id} product={p} listMode={listMode} />)}
      </div>
    </div>
  );
}
