import { useContext } from 'react';
import { CartContext } from '../../contexts';

export function RightPanel() {
  const { cart } = useContext(CartContext);

  return (
    <div className="mb-8">
      <h1 className="text-xl font-semibold mb-2">Cart</h1>
      <ul>
        {cart.map((cartItem) => (
          <li
            key={cartItem.id}
          >{`${cartItem.name} - $${cartItem.price} x 1`}</li>
        ))}
      </ul>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Checkout
      </button>
    </div>
  );
}
