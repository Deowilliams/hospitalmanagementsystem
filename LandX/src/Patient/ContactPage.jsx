import React from 'react';
import './ContactPage.css';
import NavBar from './NavBar';
const ContactPage = () => {
    return (
        <div>
            <NavBar/>
            <br></br>
        <div className="contact-page">
            <h1 style={{color:" #7cd99f"}}>CONTACT US</h1>
            <p style={{color:"white"}}>THANK YOU!!!  for your interest in contacting us. We value your feedback and inquiries.</p>
            <br></br><br></br>
            <form className="contact-form">
                <label>NAME:</label>
                <input type="text" name="name" />

                <label >EMAIL:</label>
                <input type="email" name="email" />

                <label  >SUBJECT:</label>
                <input type="text" name="subject" />

                <label >MESSAGE:</label>
                <textarea name="message"></textarea>
                <br></br>
                <button type="submit" style={{color:"black"}}>SEND</button>
            </form>

            <div className="contact-info">
                <h2 style={{color:"lightgreen"}}>CONTACT INFO:</h2><br></br>
                <p style={{color:"white"}}>Email: medtrack@gmail.com</p>
                <p style={{color:"white"}}>Phone: 6369348617</p>
                <p style={{color:"white"}}>Address: COIMBATORE</p>
                
            </div>

           

            <div className="feedback-section">
                <h2 style={{color:"Lightgreen"}}>FEEDBACK:</h2>
                <p style={{color:"YELLOW"}}>We appreciate your feedback! Let us know how we're doing.</p>
                {/* Add feedback form or links here */}
                <form className="contact-form">
                <label style={{color:"black"}} >SUBJECT:</label>
                <input type="text" name="subject" />
                </form>
            </div>
        </div>
        </div>
    );
};

export default ContactPage;
