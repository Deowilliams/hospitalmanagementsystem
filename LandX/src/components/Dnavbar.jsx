import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dnavbar.css';

const Dnavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="dnavbar">
      <div className="dnavbar-brand">
        <img src='https://cdn-icons-png.flaticon.com/128/1988/1988521.png' alt='img' className='dnavimg' />
        <h1 style={{color:"#bdf4da",fontWeight:"300",fontSize:"50px"}}>Med<span>Track</span></h1>
      </div>
      <div className="dmenu-icon" onClick={toggleMenu}>
        <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={isOpen ? "dnav-links open" : "dnav-links"}>
        <li><Link to="/dmain/">Profile</Link></li>
        <li><Link to="/dmain/appointment">Appointments</Link></li>
        <li><Link to="/dmain/appointmentrequest">Appointment Requests</Link></li>
        <li><Link to="/dmain/dprescriptionmanagement">Prescription</Link></li>
        <li><Link to="/dmain/dpatient">Patients</Link></li>
        <li><Link to="/"><i class="fa-solid fa-right-from-bracket"></i></Link></li>
      </ul>
    </nav>
  );
}

export default Dnavbar;
