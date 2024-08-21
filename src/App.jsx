import './App.css'
import Home from './pages/Home'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system", 
      "BlinkMacSystemFont", 
      "sans-serif"
    ].join(','),
    fontWeightMedium: 500,
  },
  palette: {
    primary: {
      main: "#1975d2"
    },
    background: {
      default: "#F6F8FA"
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


