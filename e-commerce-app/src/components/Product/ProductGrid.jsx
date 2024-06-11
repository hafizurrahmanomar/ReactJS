import PropTypes from 'prop-types';

import { ProductCard } from './ProductCard';
import './ProductGrid.css'

const ProductsEmptyState = ()=> <h1>Display No Product</h1>;

// Products received
function ProductGrid({ products }) {
  const renderProducts = () => {
    if (products.length === 0) {
      return <ProductsEmptyState />;
    }
    return products.map((product) => (
      <ProductCard
        key={product.id} productName={product.name} productPrice={product.price} />
    ));
  };

  return <div className="productGrid">{renderProducts()} </div>;

}
// npm propTypes
ProductCard.propTypes={
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.string.isRequired,
      name:PropTypes.string.isRequired,
      price:PropTypes.number.isRequired,
      image:PropTypes.string,
      categories:PropTypes.arrayOf(PropTypes.string),
    })
  )

  
}

export { ProductGrid }