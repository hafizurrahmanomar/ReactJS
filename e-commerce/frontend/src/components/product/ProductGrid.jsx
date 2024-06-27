<<<<<<< HEAD
=======
import axios from 'axios';

import { useEffect, useState } from 'react';
>>>>>>> 172e670bb5f93e459b718db341e3dd2a34895a8b
import { useProducts } from '../../api/hooks';

import { ProductCard } from './ProductCard';

const ProductsEmptyState = () => <h1>No products to display</h1>;

export const ProductGrid = () => {
<<<<<<< HEAD
  const { error, isLoading, products } = useProducts();

  if (error) {
    return <div className="text-red-600">{'Failed to load data :('}</div>;
  }

  if (isLoading) {
    return <div>Loading....</div>;
  }
=======
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
>>>>>>> 172e670bb5f93e459b718db341e3dd2a34895a8b

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
