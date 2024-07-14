import { createContext } from 'react';

import { useCart } from '../hooks';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { cart, addToCart } = useCart();

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
