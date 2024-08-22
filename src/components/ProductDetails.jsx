import { Stack, Typography } from '@mui/material';
import Item from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import React from 'react';


export default function ProductDetails () {
  return (
    <Box borderRadius={4} padding={2}  marginBottom={2} sx={{ bgcolor: 'black.main', boxShadow: 4 }}>
      <Stack direction="row" justifyContent="center" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
        <Typography variant="body1" color="white.main"><strong>Products found:</strong> 140</Typography>
        <Typography variant="body1" color="white.main"><strong>MercadoLibre products found:</strong> 650</Typography>
      </Stack>
    </Box>
  );
}
