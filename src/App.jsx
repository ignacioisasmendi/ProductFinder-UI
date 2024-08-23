import './App.css'
import Home from './pages/Home'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  typography: {
    fontFamily: [
      "PoppinsRegular",
      "PoppinsSemiBold",
      "PoppinsBold", 
    ].join(','),
    fontWeightMedium: 500,
  },
  palette: {
    primary: {
      main: "#1975d2",
      light: "#8EBDED",
    },
    background: {
      default: "#F6F8FA",
      light: "#f5f7f9"
    },  
    black: {
      main: "#000000",
    },
    white: {
      main: "#FFFFFF",
    }
  }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home></Home>
    </ThemeProvider>
  )
} 


