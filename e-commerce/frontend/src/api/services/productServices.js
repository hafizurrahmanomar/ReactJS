import { http } from '../../common/http';

export const getProducts = async () => {
  const res = await http.get('/api/products');
  return res.data;
};
