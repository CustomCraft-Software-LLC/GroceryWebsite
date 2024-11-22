import React, { useState } from 'react';
import { Box, Stack, Typography, TextField } from '@mui/material';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import Layout from '../components/Layout';

const Products = () => {
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <Box sx={{ padding: 4 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Our Products
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
          <TextField
            label="Search Products"
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ maxWidth: 400 }}
          />
        </Box>

        <Stack direction="row" spacing={4} justifyContent="center" flexWrap="wrap">
          {filteredProducts.map((product, index) => (
            <Stack item key={index} sx={{ width: 'calc(25% - 16px)', marginBottom: 4 }}>
              <ProductCard product={product} />
            </Stack>
          ))}
        </Stack>
      </Box>
    </Layout>
  );
};

export default Products;