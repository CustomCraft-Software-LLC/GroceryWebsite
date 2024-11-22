import React from 'react';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { Container, Typography, Stack } from '@mui/material';
import products from '../data/products';

const Index = () => (
  <Layout>
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" sx={{ mb: 4 }}>
        Welcome to Our Grocery Store
      </Typography>
      <Stack spacing={4} alignItems="center">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Stack>
    </Container>
  </Layout>
);

export default Index;