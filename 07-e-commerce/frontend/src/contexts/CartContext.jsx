import { createContext } from 'react';

import { useCart } from '../hooks';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
