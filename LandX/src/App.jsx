import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Pmain from './Patient/Pmain';
import Dmain from './components/Dmain';
import Amain from './Admin/Amain';
import Signup from './Signup';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/signup/patient" element={<Signup userType="patient" />} />
        <Route path="/signup/doctor" element={<Signup userType="doctor" />} />
        <Route path='/pmain/*' element={<Pmain />} />
        <Route path='/dmain/*' element={<Dmain />} />
        <Route path='/admin/*' element={<Amain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
