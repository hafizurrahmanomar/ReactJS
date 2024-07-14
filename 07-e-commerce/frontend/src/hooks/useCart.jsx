import { useState } from 'react';

export const useCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (cart.find((cartItem) => cartItem.id === product.id)) {
      alert('already added!');
      return;
    }
    setCart((previousState) => [...previousState, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((cartItem) => cartItem.id !== productId));
  };

  return { cart, addToCart, removeFromCart };
};
