import { createContext, useContext, useMemo, useState } from 'react';

const StoreContext = createContext(null);

export function StoreProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'system', text: 'Welcome to BLUESAILWEAR ✨' },
  ]);
  const [user, setUser] = useState(null);

  const addToCart = (product, variant) => {
    setCart((prev) => [...prev, { ...product, variant, qty: 1 }]);
    notify(`Added ${product.name} to cart`, 'order');
  };

  const notify = (text, type = 'system') => {
    setNotifications((prev) => [{ id: Date.now(), type, text }, ...prev]);
  };

  const toggleWishlist = (product) => {
    setWishlist((prev) =>
      prev.some((p) => p.id === product.id)
        ? prev.filter((p) => p.id !== product.id)
        : [...prev, product],
    );
  };

  const checkoutAuth = (email) => {
    const autoUser = { id: Date.now(), email, name: email.split('@')[0] };
    setUser(autoUser);
    return autoUser;
  };

  const value = useMemo(
    () => ({
      cart,
      wishlist,
      notifications,
      user,
      setUser,
      addToCart,
      toggleWishlist,
      checkoutAuth,
      notify,
    }),
    [cart, wishlist, notifications, user],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export const useStore = () => useContext(StoreContext);
