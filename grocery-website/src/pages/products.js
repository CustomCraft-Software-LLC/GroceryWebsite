import React, { useState } from 'react';
import { Box, Stack, Typography, TextField } from '@mui/material';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

const ProductsPage = () => {
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Our Products
      </Typography>
      
      <TextField
        label="Search Products"
        variant="outlined"
        fullWidth
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ maxWidth: 400, margin: '0 auto 20px' }}
      />

      <Stack container spacing={4} justifyContent="center">
        {filteredProducts.map((product, index) => (
          <Stack item key={index}>
            <ProductCard product={product} />
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default ProductsPage;