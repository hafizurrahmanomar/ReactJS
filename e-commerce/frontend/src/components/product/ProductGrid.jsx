import axios from 'axios';

import { useEffect, useState } from 'react';
import { useProducts } from '../../api/hooks';

import { ProductCard } from './ProductCard';

const ProductsEmptyState = () => <h1>No products to display</h1>;

export const ProductGrid = () => {
  // const { products } = useProducts();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/products')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.length === 0 ? (
        <ProductsEmptyState />
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
};
