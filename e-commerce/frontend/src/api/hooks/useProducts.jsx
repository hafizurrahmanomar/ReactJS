<<<<<<< HEAD
import { useEffect, useState } from 'react';
import { getProducts } from '../services';

export function useProducts() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getProducts()
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  return {
    error,
    isLoading,
=======
import { getProducts } from '../services';

export function useProducts() {
  const products = getProducts();

  return {
>>>>>>> 172e670bb5f93e459b718db341e3dd2a34895a8b
    products,
  };
}
