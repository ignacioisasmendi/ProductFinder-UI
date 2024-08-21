import ProductCard from '../components/ProductCard'
import ProductTable from '../components/ProductTable';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import NavBar from '../components/Navbar';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function Home () {

  return (
    <Container maxWidth='false'>
      <Box
        sx={{display:"flex", flexDirection:"column", marginY:"40px"}}>
        <Typography variant='h2' align='center' color="primary">
          Product Finder
        </Typography>
        <NavBar></NavBar> 
        <ProductTable></ProductTable>
      </Box>
    </Container>
  );
}
