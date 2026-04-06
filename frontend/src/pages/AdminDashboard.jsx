const cards = [
  'Sales Analytics',
  'Revenue Analytics',
  'Order Volume',
  'Payment Overview',
  'Users & Sub-admins',
  'Coupons & Discounts',
  'FAQ & Contacts',
  'Newsletter & Live Chat',
  'Slider/Banner Manager',
];

export default function AdminDashboard() {
  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <h1 className="text-3xl font-bold">Admin Panel</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((c) => (
          <div key={c} className="glass rounded-xl p-4">
            <h2 className="font-semibold">{c}</h2>
            <p className="mt-1 text-sm text-slate-300">Manage module via secured API endpoints.</p>
          </div>
        ))}
      </div>
      <div className="glass rounded-xl p-4">
        <h2 className="font-semibold">Sub-admin role scope</h2>
        <p className="text-slate-300">Allowed: products, categories, brands, sliders. Restricted: payments, users, admin control.</p>
      </div>
    </div>
  );
}
