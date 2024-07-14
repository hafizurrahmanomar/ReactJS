import React from 'react';
import { Outlet } from 'react-router-dom';

import { Navbar } from '../components/navbar';
import { Box, Container } from '@mui/material';
import { CartProvider } from '../contexts';

export const Layout = () => {
  return (
    <CartProvider>
      <Box>
        <Navbar />
        <Container>
          <Outlet />
        </Container>
      </Box>
    </CartProvider>
  );
};
