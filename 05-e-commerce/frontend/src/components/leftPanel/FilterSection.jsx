export function FilterSection() {
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
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded mr-2"
          >
            {category}
          </button>
        ))}
      </div>
      <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
        Clear Filters
      </button>
    </div>
  );
}
