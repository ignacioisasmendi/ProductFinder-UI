import ProductCard from '../components/ProductCard'
import ProductTable from '../components/ProductTable';
import Container from '@mui/material/Container';
import SearchBar from '../components/SearchBar';
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
        <SearchBar></SearchBar> 
        <ProductTable></ProductTable>
      </Box>
    </Container>
  );
}
