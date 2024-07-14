import { ProductCard } from './ProductCard';

const ProductsEmptyState = () => <h1>No products to display</h1>;

export const ProductGrid = ({ error, isLoading, products }) => {
  if (error) {
    return <div className="text-red-600">{'Failed to load data :('}</div>;
  }

  if (isLoading) {
    return <div>Loading....</div>;
  }

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
