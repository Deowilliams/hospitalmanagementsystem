import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Pmain from './Patient/Pmain';
import App from './App';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
