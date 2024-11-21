import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

const ProductCard = ({ product }) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="140"
      image={product.image}
      alt={product.name}
    />
    <CardContent>
      <Typography variant="h5" gutterBottom >
        {product.name}
      </Typography>
      <Typography variant="body2">
        ${product.price}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Add to Cart</Button>
    </CardActions>
  </Card>
);

export default ProductCard;