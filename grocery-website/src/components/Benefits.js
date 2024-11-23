import React from 'react';
import { Box, Typography, CardMedia } from '@mui/material';

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
      {benefits.map((benefit, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            textAlign: { xs: 'center', sm: 'left' },
            mb: 6,
            p: { xs: 2, sm: 4 },
            borderRadius: 2,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        >
          <CardMedia
            component="img"
            image={benefit.img}
            alt={benefit.title}
            sx={{
              width: 100,
              height: 100,
              borderRadius: '50%',
              margin: { xs: '0 auto', sm: '0 20px 0 0' },
              mb: { xs: 2, sm: 0 },
            }}
          />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
              {benefit.title}
            </Typography>
            <Typography variant="body2">
              {benefit.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Benefits;