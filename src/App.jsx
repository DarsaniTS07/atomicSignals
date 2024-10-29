import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/routes';
import { colors, createTheme, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import store from './Redux/Store';

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
    <Provider store={store}>
     <Router>
      <ThemeProvider theme={theme}>
          <Routes/>
          </ThemeProvider>
     </Router>
     </Provider>
    </>
  )
}

export default App
