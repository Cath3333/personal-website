import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import NavBar from "./components/NavBar.jsx";
import Background from './components/Background.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Experience from './pages/Experience.jsx';
import './global.css';

const theme = createTheme({
  typography: {
    fontFamily: 'Josefin Sans, Arial, sans-serif',
    fontWeight: 300,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontWeight: 300,
          color: '#ffffff', 
        },
      },
    },
  },
});

function AppRoutes() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      {!isHomePage && (
        <div className="absolute top-0 w-full">
          <NavBar />
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="test">
        <Background />
        <Router>
          <AppRoutes />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;