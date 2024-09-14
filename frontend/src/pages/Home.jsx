import React, { useState, useEffect } from 'react';
import Nav from '../components/NavBar.jsx';
import Background from '../components/Background.jsx';
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
        style={{
          position: 'absolute',
          textAlign: 'center',
          top: '70%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: visible ? 1 : 0,
          color: 'white',
          transition: 'opacity 1s ease-in-out',
        }}
      >
        <div
        style={{
            fontWeight: 300,
            fontSize: '3rem',
            fontFamily: "'Josefin Sans', sans-serif",
            textShadow: '2px 2px 8px rgba(0,0,0,0.1)',
            pointerEvents: 'none'
        }}>
            <div
        >Welcome! This is Cath :)</div>
        <p style={{
            fontSize: '1.5rem',
            // textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>Passionate developer, designer, artist at UPenn.</p>
        </div>
        <Button style={{
            position: 'relative',
            justifyContent: 'center',
            overflow: 'visible',
            border: '1.5px solid white',
            margin:'30px auto',
            padding: '10px 30px',
            borderRadius: '25px',
            fontSize: '0.9rem',
            fontFamily: "'Josefin Sans', sans-serif",
            fontWeight: 300,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            zIndex: 1
          }}
          > Learn more</Button>
          
      </div>
      
      
    );
  };


const Home = () => {
  return (
    <div>
      <Background/>
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