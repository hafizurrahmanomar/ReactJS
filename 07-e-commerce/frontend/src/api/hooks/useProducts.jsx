import { useCallback, useEffect, useState } from 'react';
import { addProduct, getProducts, updateProduct } from '../services';

export function useProducts() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const [selectedCategories, setSelectedCategories] = useState([]);

  const loadProducts = useCallback(() => {
    getProducts(selectedCategories)
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [selectedCategories]);

  useEffect(() => {
    setIsLoading(true);
    loadProducts();
  }, [loadProducts]);

  const refreshProducts = () => loadProducts();

  const addOrUpdateProduct = async (product) => {
    try {
      if (product.id) {
        await updateProduct(product.id, product);
        alert('Product updated successfully!');
      } else {
        await addProduct(product);
        alert('Product added successfully!');
      }
    } catch (error) {
      alert('Failed to add product');
    }
  };

  return {
    error,
    isLoading,
    products,
    selectedCategories,
    addOrUpdateProduct,
    refreshProducts,
    setSelectedCategories,
  };
}
