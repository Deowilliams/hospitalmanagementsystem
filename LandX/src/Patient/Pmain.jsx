import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Mywork from './Mywork';
import './Whole.css';
import './Pmain.css';
import Chatbox from './Chatbox';
import Camera from './Camera';
import Supple from './Pharmacy/Supple'
import SlidingPage from './Help/SlidingPage';
import MainD from './Dashboard/MainD';
import NavBar from './NavBar';
import ContactPage from './ContactPage'
import BookingPage from './BookingPage';
import AppointmenT from './AppointmenT';


const Pmain = () => {
  return (
    <div>
      
     
      
      <Routes>
        <Route path="/" element={<Mywork />} />
        <Route path="/slidingpage" element={<SlidingPage />} />
        <Route path="/dashboard" element={<MainD />} />
        <Route path="/camera" element={<Camera />} />
        <Route path="/supple" element={<Supple />} />
        <Route path="/contactpage" element={<ContactPage />} />
        <Route path="/appointmenT" element={<AppointmenT />} />
      </Routes>
      <Chatbox />
    </div>
  );
}

export default Pmain;
