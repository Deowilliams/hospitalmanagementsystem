import React from 'react';
import './Mywork.css';
import docii from './docii.png';
import Piechart from './Piechart';
import './SearchBar.css';
import SearchBar from './SearchBar';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Classes from './OurClasses/Classes';
import Schedule from './Schedule/Schedule';
const data = [

  { id: 0, value: 97, label: 'OUTGOING' },
  { id: 1, value: 81, label: 'BOOKED' },
  { id: 2, value: 22, label: 'VACANCY' },
  
];


const Mywork = () => {
  return (

    
    <div >
      <NavBar/>
       <SearchBar/>
       <br></br>
           <div class="fog1" id="fog1">
            
            <div class="slider">
            <div class="fog3" id="fog31">
            <h3 style={{marginLeft:"10px"}}>Emergency Department</h3>
            <i class="fa-solid fa-truck-medical" style={{marginLeft:"130px",fontSize:"65px"}}></i>
            </div>


            <div class="fog3"  id="fog32">
            <h3 style={{marginLeft:"10px"}}>Cardio Care</h3>
            <i class="fa-solid fa-heart-circle-bolt" style={{marginLeft:"130px",fontSize:"65px"}}></i>
            </div>

            <div class="fog3"  id="fog33">
            <h3 style={{marginLeft:"10px"}}>Pediatracy Care</h3>
            <i class="fa-solid fa-baby" style={{marginLeft:"130px",fontSize:"65px"}}></i>
            </div>

            <div class="fog3"  id="fog34">
            <h3 style={{marginLeft:"10px"}}>Cancer Treatment</h3>
            <i class="fa-solid fa-disease" style={{marginLeft:"130px",fontSize:"65px"}}></i>
            </div>

            <div class="fog3"  id="fog35">
            <h3 style={{marginLeft:"10px"}}>Transplant Surgeries</h3>
            <i class="fa-solid fa-bed-pulse" style={{marginLeft:"130px",fontSize:"65px"}}></i>
            </div>

            <div class="fog3"  id="fog36">
            <h3 style={{marginLeft:"10px"}}>Advanced Laboratory</h3>
            <i class="fa-regular fa-flask" style={{marginLeft:"130px",fontSize:"65px"}}></i>
            </div>
            </div>
            
            </div>
            <br></br>
            <div class="general">
             <p style={{fontSize:"80px",fontWeight:"350",marginLeft:"50px",color:"rgb(219, 255, 243)"}}>WE CARE FOR YOUR<span style={{fontSize:"80px",fontWeight:"560",marginLeft:"50px",color:"rgb(125, 231, 187)"}}>HEALTH</span></p>
             <div style={{display:"flex"}}>
               <div class="appointment">
                 <h2 style={{color:"white",fontWeight:"400"}}>Book an Appointment</h2>
                 <h4 style={{color:"white",fontWeight:"300"}}>Staggered in Office-Appointments</h4>
                 <i class="fa-solid fa-calendar-check" style={{color:"white",fontSize:"70px"}}></i>
                 <div >
                  <br></br>
                  <a href="/pmain/appointmenT">  <button class="abutton abutton1">BOOK APPOINTMENT</button></a>
                 </div>
               </div>


               <div class="appointment">
               <h2 style={{color:"white",fontWeight:"400"}}>General Appointment</h2>
                 <h4 style={{color:"white",fontWeight:"300"}}>9:30 am to 7:45 pm ,plan accordingly</h4>
                 <i class="fa-solid fa-clock-rotate-left" style={{color:"white",fontSize:"70px"}}></i>
                
               </div >


               <div class="appointment">
               <h2 style={{color:"white",fontWeight:"400"}}>Telemedicine Apointment</h2>
                 <h4 style={{color:"white",fontWeight:"300"}}>Video visits for many common condition</h4>
                 <i class="fa-solid fa-laptop-medical" style={{color:"white",fontSize:"70px"}}></i>
                 <div >
                  <br></br>
                 <button class="abutton abutton1"><a href="/pmain/camera" style={{textDecoration:"none",color:"#377d6b"}}>CONNECT</a></button>
                 </div>
               </div>
                 </div>
                <br></br><br></br><br></br>
             
             
            </div>
            <br></br>
            <div > 
                <h1 style={{fontSize:"50px",marginLeft:"50px",fontWeight:"400",color:"rgb(13, 85, 57)"}}>LIVE <span style={{fontWeight:"600"}}>DATA</span></h1>
                <h1 style={{fontSize:"27px",marginLeft:"50px",fontWeight:"300",color:"black"}}><span style={{fontWeight:"500"}}><i class="fa-solid fa-arrow-right-long"></i></span>The Following pi-chart shows the details of the doctors appointments <span style={{fontWeight:"500"}}>available.</span></h1>
                <Piechart/>
               </div>
               <br></br><br></br>
            <br></br><br></br>
            <br></br><br></br>
             <div>
              <Classes/>
             </div>
               
            <br></br><br></br>
            <br></br><br></br>
            <br></br><br></br>
        <div class="booking">
            <div style={{display:"flex"}}>
          <h2 style={{marginLeft:"10PX"}}>E - Pharmacy</h2>
          </div>
          <div class="banner">
            <div style={{display:"flex"}}>
            <div style={{marginLeft:"20px"}}>
            <img src={docii} style={{height:"380px",width:"300px",fontWeight:"360"}}></img>
            </div>
            <div>
            <p style={{marginLeft:"20px",fontSize:"40px",fontWeight:"460"}}>
              Your Presciption for affordable
              Health Solutions. . .
            </p>
            <p style={{marginLeft:"20px",fontSize:"25px",fontWeight:"290",color:"white"}}>Kindly follow the instructions of the Doctor,on usage of dosage.
            Avoid taking medications on your own .</p>
           <a href="/pmain/supple"> <button class="Button Button1"><i class="fa-solid fa-cart-shopping"></i>Shop</button></a>
            </div>
              
            </div>
          </div>
        </div>
        <br></br><br></br>
        <Schedule/>
        <Footer/>
    </div>
  )
}

export default Mywork