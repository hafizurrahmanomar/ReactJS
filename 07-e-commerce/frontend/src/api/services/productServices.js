import { http } from '../../common/http';

export const getProducts = async (categories) => {
  const query = categories
    .map((category) => `category=${category.toLowerCase()}`)
    .join('&');
  const res = await http.get(`/api/products?${query}`);
  return res.data;
};

export const addProduct = (product) => http.post('/api/products', product);

export const updateProduct = (productId, product) =>
  http.put(`/api/products/${productId}`, product);
