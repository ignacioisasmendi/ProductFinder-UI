import { AppBar} from '@mui/material';
import SearchInput from '../shared/SearchInput';


export default function SearchBar () {
  return (
    <AppBar position="static"
      sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor:"#fff",
          borderRadius:"10px",
          marginY:"10px",
          paddingX:3,
          paddingY:2,
        }}>
      <SearchInput></SearchInput>
    </AppBar>
  );
}
