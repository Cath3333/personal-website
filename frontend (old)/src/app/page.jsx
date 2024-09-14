"use client"; 
import * as React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import ReactDOM from 'react-dom/client'

import Image from "next/image";
import App from './app';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
   
      <App />
      
    </NextUIProvider>
    
  </React.StrictMode>,
)
