import React, { useContext, useState } from 'react';

import { Badge, Box, Drawer, IconButton } from '@mui/material';

import { ShoppingCartIcon } from '../../common/icons';

import { CartContext } from '../../contexts';
import { CartItemList } from './CartItemList';

export const Cart = () => {
  const { cart } = useContext(CartContext);
  const [openCart, setOpenCart] = useState(false);

  return (
    <>
      <IconButton
        size="large"
        color="inherit"
        onClick={() => setOpenCart(true)}
      >
        <Badge badgeContent={cart.length} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>

      <Drawer anchor="right" open={openCart} onClose={() => setOpenCart(false)}>
        <Box sx={{ display: 'flex', mt: '80px', width: 400 }}>
          <CartItemList />
        </Box>
      </Drawer>
    </>
  );
};
