import React, { useState } from 'react';
import { Box, Button, Drawer } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { useProducts } from '../../api/hooks/useProducts';
import { ProductForm } from './ProductForm';

const productPlaceholder = {
  id: '',
  name: '',
  price: 0,
  quantity: 0,
  image: '',
  categories: [],
};

export const ProductDashboard = () => {
  const { isLoading, products, addOrUpdateProduct, refreshProducts } =
    useProducts();
  const [openForm, setOpenForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(productPlaceholder);

  const getFormattedRows = () =>
    products.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      categories: product.categories,
      quantity: product.quantity,
      data: product,
    }));

  const onCloseForm = () => setOpenForm(false);

  const onAddProduct = (product) => {
    if (product.price < 10) {
      alert('Price can not be less than 10$');
      return;
    }
    addOrUpdateProduct(product).then(() => {
      onCloseForm();
      refreshProducts();
    });
  };

  return (
    <Box sx={{ minHeight: 400, width: '100%', py: 2 }}>
      <Box py={2}>
        <Button variant="contained" onClick={() => setOpenForm(true)}>
          Add Product
        </Button>
      </Box>
      <DataGrid
        columns={[
          {
            field: 'id',
            headerName: 'ID',
            width: 90,
          },
          {
            field: 'name',
            headerName: 'Product Name',
            flex: 1,
            minWidth: 150,
          },
          { field: 'quantity', headerName: 'Quantity', width: 150 },
          { field: 'price', headerName: 'Price', width: 150 },
          { field: 'vendor', headerName: 'Vendor', width: 150 },
          { field: 'category', headerName: 'Category', width: 150 },
          {
            field: 'actions',
            renderCell: ({ row }) => (
              <Box>
                <Button
                  onClick={() => {
                    setSelectedProduct(row.data);
                    setOpenForm(true);
                  }}
                >
                  Edit
                </Button>
              </Box>
            ),
          },
        ]}
        loading={isLoading}
        rows={getFormattedRows()}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5, 10]}
      />

      <Drawer anchor="right" open={openForm} onClose={onCloseForm}>
        <Box sx={{ width: 600, px: 2, py: 2 }}>
          <ProductForm
            productPlaceholder={selectedProduct}
            onSubmit={onAddProduct}
            onClose={onCloseForm}
          />
        </Box>
      </Drawer>
    </Box>
  );
};
