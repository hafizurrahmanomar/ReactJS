import clsx from 'clsx';

export function FilterSection({
  selectedCategories,
  updateFilters,
  clearFilters,
}) {
  const categories = [
    'Laptops',
    'Gaming',
    'Accessories',
    'Peripherals',
    'Storage',
    'Components',
    'Monitors',
    'Printers',
  ];

  return (
    <div className="py-4">
      <div className="flex mb-4">
        {categories.map((category) => (
          <button
            key={category}
            className={clsx(
              'hover:bg-gray-300  font-semibold py-2 px-4 rounded mr-2',
              selectedCategories.includes(category)
                ? 'bg-gray-700 text-gray-200'
                : 'bg-gray-200 text-gray-800'
            )}
            onClick={() => updateFilters(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <button
        className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  );
}
