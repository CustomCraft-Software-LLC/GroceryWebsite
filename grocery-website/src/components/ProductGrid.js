import React from 'react';
import { Typography, Stack } from '@mui/material';
import ProductCard from './ProductCard';

const ProductGrid = ({ title, products }) => {
  return ( 
    <div>
      <Typography 
        variant="h3" 
        sx={{ mb: 3, fontWeight: 'bold' }}
      >
        {title}
      </Typography>
      <Stack container spacing={3}>
        {products.map((product, index) => (
          <Stack item xs={12} sm={6} md={3} key={index}>
            <ProductCard {...product} />
          </Stack>
        ))}
      </Stack>
    </div>
  );
}

export default ProductGrid;