export function FilterSection() {
  // Hero button
  const categories = [
    "Laptops",
    "Gaming",
    "Accessories",
    "Peripherals",
    "Storage",
    "Components",
    "Monitors",
    "Printers",
  ];
  return (
    <div>
        {categories.map((category) => (
          <button key={category}>{category}</button>
        ))}
      </div>
    
  );
}
