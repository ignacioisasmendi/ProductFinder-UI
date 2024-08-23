import { AppBar, Box} from '@mui/material';
import SearchInput from '../shared/SearchInput/SearchInput.jsx';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import amazon from '../assets/icons/amazon.svg';
import bestBuy from '../assets/icons/bestBuy.svg';


export default function SearchBar () {
  return (
    <Box
      sx={{
          display: 'flex',
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
      <SearchInput></SearchInput>
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
    </Box>
  );
}
