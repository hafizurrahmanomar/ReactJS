import { getProducts } from '../services';

export function useProducts() {
  const products = getProducts();

  return {
    products,
  };
}
