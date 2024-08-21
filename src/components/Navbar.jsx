import { AppBar, Typography} from '@mui/material';


export default function NavBar () {
  return (
    <AppBar position="static"
      sx={{
          height:"64px",
          backgroundColor:"#fff",
          borderRadius:"10px",
          marginY:"10px",
        }}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Hola
      </Typography>
    </AppBar>
  );
}
