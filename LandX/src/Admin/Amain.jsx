import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './Amain.css'
import AdminDashboard from './AdminDashboard';
import Doctors from './Doctors';
import Patients from './Patients';
import Sidebar from './Sidebar';
import Schedule from './Schedule';
import Appointments from './Appointments';

const Layout = ({ children }) => {
  const location = useLocation();
  const showSidebar = location.pathname.startsWith('/admin');

  return (
    <div style={{ display: 'flex' }}>
      {showSidebar && <Sidebar />}
      <div style={{ flex: 1, padding: '20px' }}>
        {children}
      </div>
    </div>
  );
};

const Amain = () => (
  <div class="bgm">
  <Layout >
    <Routes>
      <Route path="/dashboard" element={<AdminDashboard />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/patients" element={<Patients />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/" element={<Navigate to="/admin/dashboard" />} />
     
    </Routes>
  </Layout>
  </div>
);

export default Amain;
