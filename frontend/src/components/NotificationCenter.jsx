import { useStore } from '../context/StoreContext';

export default function NotificationCenter() {
  const { notifications, markNotificationsRead } = useStore();
  const unread = notifications.filter((n) => !n.seen).length;

  return (
    <div className="glass rounded-2xl p-4">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="font-semibold">Notifications {unread ? `(${unread} new)` : ''}</h3>
        <button onClick={markNotificationsRead} className="rounded border border-white/30 px-2 py-1 text-xs">Mark all read</button>
      </div>
      <div className="max-h-56 space-y-2 overflow-auto text-sm">
        {notifications.map((n) => (
          <div key={n.id} className={`rounded-lg p-2 ${n.seen ? 'bg-white/5' : 'bg-cyan-400/20'}`}>
            <p>{n.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
