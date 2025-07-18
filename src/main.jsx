import { StrictMode } from 'react'
import React from "react";
import { createRoot } from 'react-dom/client'
import AuthProvider from "./context/AuthProvider";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
  </StrictMode>,
)
