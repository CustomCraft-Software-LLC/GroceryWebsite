import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Stack, IconButton } from '@mui/material';

const Socials = () => {
	const socials = [
		{
			name: 'Facebook',
			url: 'https://www.facebook.com',
			icon: <FacebookIcon />,
		},
		{
			name: 'Instagram',
			url: 'https://www.instagram.com',
			icon: <InstagramIcon />,
		},
		{
			name: 'Twitter',
			url: 'https://www.twitter.com',
			icon: <TwitterIcon />,
		},
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com',
			icon: <LinkedInIcon />,
		},
	];

	return (
		<Box sx={{ mt: 6, textAlign: 'center' }}>
			<Stack
				sx={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'row',
				}}
			>
				{socials.map((social) => (
					<IconButton
						key={social.name}
						color="primary"
						href={social.url}
						target="_blank"
						rel="noopener noreferrer"
						sx={{
							backgroundColor: '#FFFFFF',
							m: 2,
							'&:hover': {
								backgroundColor: '#F0F0F0',
							},
						}}
					>
						{social.icon}
					</IconButton>
				))}
			</Stack>
		</Box>
	);
};

export default Socials;
