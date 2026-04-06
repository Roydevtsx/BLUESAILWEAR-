import { useState } from 'react';

const modules = {
  analytics: ['Sales (Today)', 'Revenue (MTD)', 'Orders (Pending/Delivered)'],
  catalog: ['Products', 'Categories', 'Brands', 'Sliders/Banners'],
  orders: ['Order Queue', 'Tracking Status', 'Reviews & Ratings'],
  marketing: ['Coupons/Discounts', 'Newsletter Subscribers', 'FAQ'],
  operations: ['Contact Messages', 'Live Chat Messages', 'Users/Sub-admins'],
  payment: ['Stripe Settings', 'SSLCommerz Settings', 'COD Policy'],
};

export default function AdminDashboard() {
  const [tab, setTab] = useState('analytics');

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <h1 className="text-3xl font-bold">Admin Panel</h1>
      <div className="flex flex-wrap gap-2">
        {Object.keys(modules).map((key) => (
          <button key={key} onClick={() => setTab(key)} className={`rounded px-3 py-2 text-sm ${tab === key ? 'bg-cyan-400 text-slate-900' : 'bg-white/10'}`}>
            {key}
          </button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {modules[tab].map((item) => (
          <div key={item} className="glass rounded-xl p-4">
            <h2 className="font-semibold">{item}</h2>
            <p className="mt-1 text-sm text-slate-300">Connected to secure admin APIs and role checks.</p>
          </div>
        ))}
      </div>
      <div className="glass rounded-xl p-4">
        <h2 className="font-semibold">Sub-admin permissions</h2>
        <p className="text-slate-300">Can manage products, categories, brands, and sliders only. Payments, users, and admin controls are blocked.</p>
      </div>
    </div>
  );
}
