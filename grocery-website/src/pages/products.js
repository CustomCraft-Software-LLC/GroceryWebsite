import React, { useState } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import Layout from '../components/layout';

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

        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>
          <TextField
            label="Search Products"
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ maxWidth: 400, width: '100%' }}
          />
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 4,
          }}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))
          ) : (
            <Typography
              variant="body1"
              sx={{
                textAlign: 'center',
                gridColumn: '1 / -1',
                color: 'text.secondary',
              }}
            >
              No products match your search.
            </Typography>
          )}
        </Box>
      </Box>
    </Layout>
  );
};

export default Products;