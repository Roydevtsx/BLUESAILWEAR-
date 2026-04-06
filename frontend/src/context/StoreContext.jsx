import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { trackingStages } from '../data/mockData';

const StoreContext = createContext(null);

const boot = (key, fallback) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch {
    return fallback;
  }
};

export function StoreProvider({ children }) {
  const [cart, setCart] = useState(() => boot('bsw_cart', []));
  const [wishlist, setWishlist] = useState(() => boot('bsw_wishlist', []));
  const [notifications, setNotifications] = useState(() => boot('bsw_notifications', [{ id: 1, type: 'system', text: 'Welcome to BLUESAILWEAR ✨' }]));
  const [orders, setOrders] = useState(() => boot('bsw_orders', []));
  const [user, setUser] = useState(() => boot('bsw_user', null));

  useEffect(() => localStorage.setItem('bsw_cart', JSON.stringify(cart)), [cart]);
  useEffect(() => localStorage.setItem('bsw_wishlist', JSON.stringify(wishlist)), [wishlist]);
  useEffect(() => localStorage.setItem('bsw_notifications', JSON.stringify(notifications.slice(0, 50))), [notifications]);
  useEffect(() => localStorage.setItem('bsw_orders', JSON.stringify(orders)), [orders]);
  useEffect(() => localStorage.setItem('bsw_user', JSON.stringify(user)), [user]);

  const notify = (text, type = 'system') => setNotifications((prev) => [{ id: Date.now(), type, text, seen: false }, ...prev]);

  const addToCart = (product, variant) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id && item.variant === variant);
      if (existing) {
        return prev.map((item) => (item.id === product.id && item.variant === variant ? { ...item, qty: item.qty + 1 } : item));
      }
      return [...prev, { ...product, variant, qty: 1 }];
    });
    notify(`Added ${product.name} (${variant}) to cart`, 'order');
  };

  const updateQty = (id, variant, qty) => {
    if (qty <= 0) {
      setCart((prev) => prev.filter((item) => !(item.id === id && item.variant === variant)));
      return;
    }
    setCart((prev) => prev.map((item) => (item.id === id && item.variant === variant ? { ...item, qty } : item)));
  };

  const removeFromCart = (id, variant) => setCart((prev) => prev.filter((item) => !(item.id === id && item.variant === variant)));

  const toggleWishlist = (product) => {
    setWishlist((prev) =>
      prev.some((p) => p.id === product.id)
        ? prev.filter((p) => p.id !== product.id)
        : [...prev, product],
    );
  };

  const checkoutAuth = (email, name = '') => {
    const autoUser = { id: user?.id || Date.now(), email, name: name || email.split('@')[0] };
    setUser(autoUser);
    notify(`Account ready for ${autoUser.email}`, 'system');
    return autoUser;
  };

  const placeOrder = ({ payment, address }) => {
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const order = {
      id: Date.now(),
      orderNo: `BSW-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${Math.floor(Math.random() * 9000 + 1000)}`,
      items: cart,
      address,
      payment,
      total,
      stage: 0,
      status: trackingStages[0],
      createdAt: new Date().toISOString(),
    };
    setOrders((prev) => [order, ...prev]);
    setCart([]);
    notify(`Order ${order.orderNo} placed via ${payment}`, 'order');
    return order;
  };

  const advanceOrderStatus = (orderId) => {
    setOrders((prev) =>
      prev.map((order) => {
        if (order.id !== orderId || order.stage >= trackingStages.length - 1) return order;
        const nextStage = order.stage + 1;
        const updated = { ...order, stage: nextStage, status: trackingStages[nextStage] };
        notify(`Order ${order.orderNo} is now ${updated.status.replace(/_/g, ' ')}`, 'order');
        return updated;
      }),
    );
  };

  const markNotificationsRead = () => setNotifications((prev) => prev.map((n) => ({ ...n, seen: true })));

  const value = useMemo(
    () => ({
      cart,
      wishlist,
      notifications,
      user,
      orders,
      setUser,
      addToCart,
      updateQty,
      removeFromCart,
      toggleWishlist,
      checkoutAuth,
      placeOrder,
      advanceOrderStatus,
      markNotificationsRead,
      notify,
    }),
    [cart, wishlist, notifications, user, orders],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export const useStore = () => useContext(StoreContext);
