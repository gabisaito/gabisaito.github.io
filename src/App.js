import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Features from './Pages/Features';
import NotFound from './Pages/NotFound';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { GlobalStyles } from '@mui/material';
import TheoryPage from "./Pages/Theory";
import QuizPage from "./Pages/Quiz";
import FinancialManagementPage from "./Pages/Management";
import NewsPage from "./Pages/News";

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
          <Route path='/trilha-teorica' element={<TheoryPage />} />
          <Route path='/praticar-quiz-modulo-1' element={<QuizPage />} />
          <Route path='/gestao-financeira' element={<FinancialManagementPage />} />
          <Route path='/noticias' element={<NewsPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
    </>
  );
}

export default App;
