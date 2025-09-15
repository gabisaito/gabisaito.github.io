import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Features from './Pages/Features';
import NotFound from './Pages/NotFound';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { GlobalStyles } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  palette: {
    primary: {
      main: '#FBA63D', 
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Poppins, sans-serif',
          textTransform: 'none', 
        },
      },
    },
  },
});

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
       <GlobalStyles styles={{
          body: {
            fontFamily: 'Poppins, sans-serif !important',
          }
        }}/>
      <CssBaseline />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/ferramentas' element={<Features />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
    </>
  );
}

export default App;
