import axios from 'axios';

export const http = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 3000,
  headers: { 'Content-Type': 'application/json' },
});
