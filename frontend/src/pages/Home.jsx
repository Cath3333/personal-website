import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Button} from "@nextui-org/react";

const IntroText = () => {
    const [visible, setVisible] = useState(false);
  
    useEffect(() => {
      const link = document.createElement('link');
      link.href = 'https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&display=swap';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
  
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => {
        clearTimeout(timer);
        document.head.removeChild(link);
      };
    }, []);
  
    return (
        
      <div
        className="absolute text-center top-[70%] 
                left-1/2 transform -translate-x-1/2 
                -translate-y-1/2 text-white transition-opacity duration-1000"
        style={{ opacity: visible ? 1 : 0,
            fontFamily: "'Josefin Sans', sans-serif"
        }}
      >
        <div
        style={{
            fontWeight: 300,
            fontSize: '3rem',
            textShadow: '2px 2px 8px rgba(0,0,0,0.1)',
            pointerEvents: 'none'
        }}>
            <div
        >Welcome! This is Cath :)</div>
        <p style={{
            fontSize: '1.5rem'
        }}>Passionate developer, designer, artist at UPenn.</p>
        </div>
        <Link to="/about">
        <Button className="relative justify-center overflow-visible 
                        border border-white mt-8 py-2 px-8 rounded-full text-sm 
                        font-light cursor-pointer transition-all 
                        duration-300 ease-in-out z-10"
          > Learn more</Button>
          </Link>
      </div>
      
      
    );
  };


const Home = () => {
  return (
    <div>
      <IntroText />
      <div style={{
        position: 'absolute',
        top: '10px',
        width: '100%',
        textAlign: 'center',
        zIndex: '100',
        display: 'block',
        color: 'white',
        fontFamily: "'Josefin Sans', sans-serif",
        fontWeight: 300
      }}>
        Drag your cursor to interact with the sky!
        
      </div>
    </div>
  );
};

export default Home;