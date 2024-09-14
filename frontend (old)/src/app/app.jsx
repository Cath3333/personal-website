import Image from "next/image";
import { useState } from 'react';
// import './App.css';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import Navbar2 from './components/Navbar2'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Projects from './pages/projects.jsx'
import Experiences from './pages/experiences.jsx'


export default function App() {
  return (
    <>
     {/* <main className="dark text-foreground bg-background"> */}
      {/* <Navbar2/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/experiences" element={<Experiences/>} />
        </Routes>
      </Router>
      {/* </main> */}
    </>
  );
}
