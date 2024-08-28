// src/NavBar.js
import React from 'react';
import './NavBar.css'; 
import './Mywork.css';
import Login from '../Login';
import { Link } from 'react-router-dom';

const NavStyle = {
  
    color : 'white',
    fontWeight:"300"
  
};

const NavBar = () => {
  return (
    <div >
      
      <div>
        <p>
        </p>
      </div>
    <nav className="navbar ">
      <div className="navbar-brand">
        <h1 style={{color:"#bdf4da",fontWeight:"300"}}>Med<span style={NavStyle}>Track<i class="fa-solid fa-heart-pulse"></i></span></h1>
      </div>
      <ul className="navbar-menu">
        <li><Link to="/pmain/">Home</Link></li>

       
        <li><Link to="/pmain/slidingpage">Help</Link> </li>

        <li><Link to="/pmain/dashboard">Planner</Link></li>
        <li><Link to="/pmain/contactpage"><i class="fa-solid fa-phone"></i></Link></li>
        
        <li><Link to="/"><i class="fa-solid fa-right-from-bracket"></i></Link></li>
  

      </ul>
    </nav>
    </div>
  );
};

export default NavBar;
