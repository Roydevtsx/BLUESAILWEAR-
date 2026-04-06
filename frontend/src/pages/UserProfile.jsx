import { useStore } from '../context/StoreContext';

export default function UserProfile() {
  const { user, wishlist, notifications } = useStore();
  return (
    <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
      <div className="glass rounded-xl p-4">
        <h2 className="font-bold">Profile</h2>
        <p>{user?.name}</p><p>{user?.email}</p>
      </div>
      <div className="glass rounded-xl p-4">
        <h2 className="font-bold">Wishlist</h2>
        {wishlist.map((w) => <p key={w.id}>{w.name}</p>)}
      </div>
      <div className="glass rounded-xl p-4">
        <h2 className="font-bold">Notifications</h2>
        {notifications.map((n) => <p key={n.id}>{n.text}</p>)}
      </div>
    </div>
  );
}
