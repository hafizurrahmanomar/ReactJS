const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// In-memory array to store products
let products = [
  {
    id: 1,
    name: 'Gaming Laptop',
    price: 1500,
    image: 'https://via.placeholder.com/150',
    categories: ['Laptops', 'Gaming'],
  },
  {
    id: 2,
    name: 'Wireless Mouse',
    price: 50,
    image: 'https://via.placeholder.com/150',
    categories: ['Accessories', 'Peripherals'],
  },
  {
    id: 3,
    name: 'Mechanical Keyboard',
    price: 100,
    image: 'https://via.placeholder.com/150',
    categories: ['Accessories', 'Peripherals'],
  },
  {
    id: 4,
    name: 'External Hard Drive',
    price: 120,
    image: 'https://via.placeholder.com/150',
    categories: ['Storage', 'Accessories'],
  },
  {
    id: 5,
    name: 'Graphics Card',
    price: 500,
    image: 'https://via.placeholder.com/150',
    categories: ['Components', 'Gaming'],
  },
  {
    id: 6,
    name: 'Portable SSD',
    price: 200,
    image: 'https://via.placeholder.com/150',
    categories: ['Storage', 'Accessories'],
  },
  {
    id: 7,
    name: 'Gaming Monitor',
    price: 300,
    image: 'https://via.placeholder.com/150',
    categories: ['Monitors', 'Gaming'],
  },
  {
    id: 8,
    name: 'All-in-One Printer',
    price: 150,
    image: 'https://via.placeholder.com/150',
    categories: ['Peripherals', 'Printers'],
  },
];

// Get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Get a product by ID
app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});

// Create a new product
app.post('/api/products', (req, res) => {
  const newProduct = {
    id: products.length ? products[products.length - 1].id + 1 : 1,
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price,
    vendor: req.body.vendor,
    category: req.body.category,
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Update an existing product
app.put('/api/products/:id', (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });

  product.name = req.body.name || product.name;
  product.quantity = req.body.quantity || product.quantity;
  product.price = req.body.price || product.price;
  product.vendor = req.body.vendor || product.vendor;
  product.category = req.body.category || product.category;

  res.json(product);
});

// Delete a product
app.delete('/api/products/:id', (req, res) => {
  const productIndex = products.findIndex(
    (p) => p.id === parseInt(req.params.id)
  );
  if (productIndex === -1)
    return res.status(404).json({ message: 'Product not found' });

  const deletedProduct = products.splice(productIndex, 1);
  res.json(deletedProduct);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
