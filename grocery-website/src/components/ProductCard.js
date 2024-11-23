import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import useTheme from '@mui/material/styles';

const ProductCard = ({ product }) => { 
  return ( 
    <Card sx={{ minWidth: 300 }}>
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
    </Card>
  );
}

export default ProductCard;