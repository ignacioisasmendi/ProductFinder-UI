import { Stack, Typography } from '@mui/material';
import Item from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import React from 'react';


export default function ProductDetails ({details}) {
  return (
    <Box borderRadius={4} padding={2}  marginBottom={2} sx={{ bgcolor: 'black.main', boxShadow: 4 }}>
      <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="center" spacing={{ xs: 0.5 , xl: 4 }}>
        <Typography variant="body1" color="white.main"><strong>Products found:</strong> {details.productsFound}</Typography>
        <Typography variant="body1" color="white.main"><strong>MercadoLibre products found:</strong> {details.productsFoundML}</Typography>
      </Stack>
    </Box>
  );
}
