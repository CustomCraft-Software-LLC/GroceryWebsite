import React from 'react';
import Layout from '../components/layout';
import { Typography, Button, Stack, styled } from '@mui/material';

const CenteredStack = styled(Stack)({
	alignItems: 'center',
	justifyContent: 'center',
	minHeight: '100vh',
});

const NotFound = () => (
	<Layout>
		<CenteredStack spacing={2}>
			<Typography variant="h4" color="#FF0000">
				404: Not Found
			</Typography>
			<Button href="/" variant="contained" color="primary">
				Go Home
			</Button>
		</CenteredStack>
	</Layout>
);

export default NotFound;
