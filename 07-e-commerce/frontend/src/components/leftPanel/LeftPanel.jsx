import { useProducts } from '../../api/hooks';

import { ProductGrid } from '../product';
import { FilterSection } from './FilterSection';

export function LeftPanel() {
  const {
    error,
    isLoading,
    products,
    selectedCategories,
    setSelectedCategories,
  } = useProducts();

  const updateFilters = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter(
          (selectedCategory) => selectedCategory !== category
        )
      );
      return;
    }
    setSelectedCategories((prev) => Array.from(new Set([...prev, category])));
  };

  const clearFilters = () => {
    setSelectedCategories([]);
  };

  return (
    <div>
      <FilterSection
        selectedCategories={selectedCategories}
        updateFilters={updateFilters}
        clearFilters={clearFilters}
      />
      <ProductGrid error={error} isLoading={isLoading} products={products} />
    </div>
  );
}
