import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Features from './Pages/Features';
import NotFound from './Pages/NotFound';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from '@mui/material';

function App() {
  return (
    <>
      <GlobalStyles/>
      <CssBaseline />
      <HashRouter>
        <GAListener />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/ferramentas' element={<Features />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
