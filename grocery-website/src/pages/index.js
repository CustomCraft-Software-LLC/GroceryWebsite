import React from 'react';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { Grid, Container, Typography } from '@mui/material';
import products from '../data/products';

const IndexPage = () => (
  <Layout>
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
        Welcome to Our Grocery Store
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  </Layout>
);

export default IndexPage;