import React from 'react';
import { Box, Grid, Typography, CardMedia } from '@mui/material';

const Benefits = () => {
  const benefits = [
    {
      title: 'Quality You Can Trust',
      description:
        'Our products are sourced from top-rated suppliers, ensuring freshness and exceptional quality every time.',
      img: 'https://via.placeholder.com/150',
    },
    {
      title: 'Competitive Pricing',
      description:
        'We offer unbeatable prices to help your business thrive while maintaining top-quality standards.',
      img: 'https://via.placeholder.com/150',
    },
    {
      title: 'Fast & Reliable Delivery',
      description:
        'Count on us for timely deliveries, so your shelves are always stocked and ready for customers.',
      img: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <Box sx={{ mb: 8 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
        Why Choose FreshMart?
      </Typography>
      <Grid container spacing={4}>
        {benefits.map((benefit, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Box
              sx={{
                textAlign: 'center',
                p: 4,
                borderRadius: 2,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                backgroundColor: 'background.paper',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CardMedia
                component="img"
                image={benefit.img}
                alt={benefit.title}
                sx={{ width: 80, height: 80, margin: '0 auto', mb: 2 }}
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                {benefit.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {benefit.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Benefits;