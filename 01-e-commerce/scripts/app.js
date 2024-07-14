'use strict';

const products = [
  {
    id: 1,
    name: 'Gaming Laptop',
    price: 1500,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Wireless Mouse',
    price: 50,
    image: 'https://via.placeholder.com/150',
  },
];
let cart = [];

/** 
 * ternary operator (?)
 * arrow function
 * 

const isProductExistInCart = (productId) =>
  cart.findIndex((product) => product.id === productId) !== -1;

function isProductExistInCart(productId) {
  const productIndex = cart.findIndex(function (product) {
    return product.id === productId ? true : false;
  });
  return productIndex !== -1;
}

*/

function isProductExistInCart(productId) {
  const productIndex = cart.findIndex(function (product) {
    if (product.id === productId) {
      return true;
    } else {
      return false;
    }
  });
  if (productIndex === -1) {
    return false;
  }
  return true;
}

function renderCart() {
  const cartItemList = document.getElementById('cart-items');
  cartItemList.innerHTML = '';
  cart.forEach(function (product) {
    const cartItemElement = document.createElement('li');
    cartItemElement.innerText = `${product.name} - $${product.price} x ${1}`;

    cartItemList.appendChild(cartItemElement);
  });
}

function getProductImageElement({ productImage, productName }) {
  const productImageElement = document.createElement('img');
  productImageElement.src = productImage;
  productImageElement.alt = productName;
  productImageElement.classList.add('w-full', 'mb-4');
  return productImageElement;
}

function getProductNameElement(productName) {
  const productNameElement = document.createElement('h3');
  productNameElement.innerText = productName;
  productNameElement.classList.add('text-lg', 'font-semibold');
  return productNameElement;
}

function getProductPriceElement(productPrice) {
  const productPriceElement = document.createElement('p');
  productPriceElement.textContent = `$${productPrice}`;
  productPriceElement.classList.add('text-gray-700');
  return productPriceElement;
}

function getAddToCartButton(product) {
  const addToCartBtn = document.createElement('button');
  addToCartBtn.innerText = 'Add to Cart';
  addToCartBtn.classList.add(
    'bg-blue-500',
    'hover:bg-blue-700',
    'text-white',
    'font-bold',
    'py-2',
    'px-4',
    'rounded',
    'mt-2'
  );
  addToCartBtn.addEventListener('click', function () {
    if (isProductExistInCart(product.id)) {
      alert('This product is already in the cart.');
      return;
    }
    cart.push(product);
    renderCart();
  });
  return addToCartBtn;
}

function getProductCard(product) {
  const card = document.createElement('div');
  card.classList.add('bg-white', 'p-4', 'rounded', 'shadow');

  const productImage = getProductImageElement({
    productImage: product.image,
    productName: product.name,
  });
  card.appendChild(productImage);

  const productName = getProductNameElement(product.name);
  card.appendChild(productName);

  const productPrice = getProductPriceElement(product.price);
  card.appendChild(productPrice);

  const addToCartButton = getAddToCartButton(product);
  card.appendChild(addToCartButton);

  return card;
}

function renderProducts() {
  const productListContainer = document.getElementById('product-list');
  productListContainer.innerHTML = '';
  products.forEach(function (product) {
    const productCard = getProductCard(product);
    productListContainer.appendChild(productCard);
  });
}

renderProducts();
