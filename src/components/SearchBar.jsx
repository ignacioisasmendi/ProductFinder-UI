import { AppBar, Box} from '@mui/material';
import SearchInput from '../shared/SearchInput/SearchInput.jsx';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import amazon from '../assets/icons/amazon.svg';
import bestBuy from '../assets/icons/bestBuy.svg';
import { useState } from 'react';



export default function SearchBar ({setResults}) {
  const [searchQuery, setSearchQuery] = useState(''); // State to hold input value

  const handleInputChange = (event) => {    
    setSearchQuery(event.target.value); 
  };


  const fetchData = async () => {
      try {
          console.log("fetching data....");
          const response = await fetch(`http://localhost:5005/api/products/search?query=${searchQuery}`);
          const data = await response.json();
          setResults(data);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };

  
  return (
    <Box
      sx={{
          display: 'flex',
          flexDirection: {xs: 'column', md: 'row'},
          justifyContent  : 'center',
          alignItems: 'center',
          backgroundColor:"#fff",
          gap:2,
          borderRadius:"10px",
          boxShadow: "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
          marginY:"10px",
          paddingX:3,
          paddingY:2,
        }}>
      <Box 
        className="search-container"
        width={{xs:'100%', md:'auto'}}>
        <input
          className="search-input"
          placeholder="Search"
          value={searchQuery} // Controlled input value
          onChange={handleInputChange} // Event handler to update state
        />
        <div className="underline"></div>
      </Box>
      <Box display={'flex'} gap={3}>
        <Box>
          <Checkbox defaultChecked />
          <img className="icon" src={amazon} alt="amazon-icon" />
        </Box>
        <Box>
          <Checkbox defaultChecked />
          <img className="icon" src={bestBuy} alt="mercadoLibre-icon" />
        </Box>
      </Box>
      <Button variant="contained" color="primary" onClick={fetchData}>
        Search
      </Button>
    </Box>
  );
}
