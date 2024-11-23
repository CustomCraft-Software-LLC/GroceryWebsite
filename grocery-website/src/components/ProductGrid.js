import React from 'react';
import { Typography, Stack } from '@mui/material';
import ProductCard from './ProductCard';

const ProductGrid = ({ title, products }) => {
  return (
    <div>
      <Typography 
        variant="h3" 
        sx={{ mb: 3, fontWeight: 'bold', textAlign: 'center' }}
      >
        {title}
      </Typography>
      <Stack
        direction="column"
        spacing={3}
        sx={{
          '@media (min-width:600px)': {
            flexDirection: 'row',
            flexWrap: 'wrap',
          },
        }}
      >
        {products.map((product, index) => (
          <Stack
            key={index}
            sx={{
              width: '100%',
              '@media (min-width:600px)': {
                width: '50%',
              },
              '@media (min-width:900px)': {
                width: '25%',
              },
            }}
          >
            <ProductCard {...product} />
          </Stack>
        ))}
      </Stack>
    </div>
  );
}

export default ProductGrid;