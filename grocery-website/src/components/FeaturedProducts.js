import React from 'react';
import { Box, Typography, CardMedia } from '@mui/material';

const FeaturedProducts = () => {
	return (
		<Box sx={{ textAlign: 'center', mb: 8 }}>
			<Typography variant="h2" sx={{ fontWeight: 'bold', mb: 3 }}>
				Featured Products
			</Typography>
			<CardMedia
				component="img"
				image="https://via.placeholder.com/600x300"
				alt="Featured Products"
				sx={{
					width: '100%',
					maxWidth: 700,
					height: 'auto',
					margin: '0 auto',
					borderRadius: 4,
					boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
				}}
			/>
			<Typography
				variant="body1"
				sx={{ textAlign: 'center', maxWidth: 700, margin: '20px auto' }}
			>
				Discover our customer favorites, handpicked for quality and
				freshness. From crisp apples to farm-fresh milk, experience the
				difference today.
			</Typography>
		</Box>
	);
};

export default FeaturedProducts;
