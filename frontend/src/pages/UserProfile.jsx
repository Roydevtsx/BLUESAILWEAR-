import { useState } from 'react';
import { useStore } from '../context/StoreContext';

export default function UserProfile() {
  const { user, setUser, wishlist, notifications } = useStore();
  const [name, setName] = useState(user?.name || '');

  const save = () => {
    if (!user) return;
    setUser({ ...user, name });
  };

  return (
    <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
      <div className="glass rounded-xl p-4">
        <h2 className="font-bold">Profile</h2>
        <p className="text-sm text-slate-300">{user?.email}</p>
        <input value={name} onChange={(e) => setName(e.target.value)} className="mt-2 w-full rounded bg-slate-900 p-2" />
        <button onClick={save} className="mt-2 rounded bg-cyan-400 px-3 py-1 text-slate-900">Save</button>
      </div>
      <div className="glass rounded-xl p-4">
        <h2 className="font-bold">Wishlist ({wishlist.length})</h2>
        {wishlist.length ? wishlist.map((w) => <p key={w.id}>{w.name}</p>) : <p className="text-sm text-slate-400">No wishlist items yet.</p>}
      </div>
      <div className="glass rounded-xl p-4">
        <h2 className="font-bold">Recent Notifications</h2>
        {notifications.slice(0, 5).map((n) => <p key={n.id}>{n.text}</p>)}
      </div>
    </div>
  );
}
