import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import NavBar from './components/NavBar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Experience from './pages/Experience.jsx'
import './global.css';

function App() {
  return (
    <div class="test">
      {/* <NavBar/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/experience" element={<Experience/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
