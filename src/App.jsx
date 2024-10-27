import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/routes';
import { colors, createTheme, ThemeProvider } from '@mui/material';

function App() {


  const theme = createTheme({
   palette:{
    primary:{
      main:'#49C792'
    }
   },
    typography:{
      fontFamily:'poppins'
    },
    
  })

  return (
    <>
     <Router>
      <ThemeProvider theme={theme}>
          <Routes/>
          </ThemeProvider>
     </Router>
    </>
  )
}

export default App
