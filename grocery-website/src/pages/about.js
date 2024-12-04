import React from 'react';
import { Typography, Container, Box, CardMedia } from '@mui/material';
import Layout from '../components/layout';

const About = () => {
	return (
		<Layout>
			<Container sx={{ my: 6 }}>
				<Box sx={{ textAlign: 'center', mb: 6 }}>
					<Typography variant="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
						About Us
					</Typography>
					<Typography
						variant="body1"
						sx={{ maxWidth: 700, mx: 'auto' }}
					>
						FreshMart provides fresh, affordable, and sustainable
						grocery products for our community. Learn more about our
						story and mission.
					</Typography>
				</Box>

				<Box sx={{ mb: 6 }}>
					<Typography
						variant="h2"
						sx={{ fontWeight: 'bold', textAlign: 'center', mb: 3 }}
					>
						Our Story
					</Typography>
					<Typography variant="body1" sx={{ mb: 3 }}>
						Since 1995, FreshMart has grown from a small family
						store into a trusted destination for fresh produce,
						supporting local farmers and healthy lifestyles.
					</Typography>
					<CardMedia
						component="img"
						image="https://via.placeholder.com/800x400"
						alt="Our story"
						sx={{ width: '100%', borderRadius: 4, boxShadow: 2 }}
					/>
				</Box>

				<Box sx={{ mb: 6 }}>
					<Typography
						variant="h2"
						sx={{ fontWeight: 'bold', textAlign: 'center', mb: 3 }}
					>
						Our Mission
					</Typography>
					<Typography variant="body1">
						We make healthy food accessible by prioritizing quality
						and sustainability. FreshMart is committed to freshness,
						affordability, and care every day.
					</Typography>
				</Box>

				<Box
					sx={{
						textAlign: 'center',
						py: 6,
						px: 4,
						color: 'white',
						borderRadius: 2,
						mt: 6,
					}}
				>
					<Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
						Experience Freshness
					</Typography>
					<Typography
						variant="body1"
						sx={{ maxWidth: 600, mx: 'auto' }}
					>
						Visit FreshMart today for quality, affordability, and
						care. Your satisfaction is our priority.
					</Typography>
				</Box>
			</Container>
		</Layout>
	);
};

export default About;
