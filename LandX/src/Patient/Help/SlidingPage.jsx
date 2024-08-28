// src/SlidingPage.js
import React, { useState } from 'react';
import './SlidingPage.css'; // Import CSS for styling
import NavBar from '../NavBar';
const SlidingPage = () => {
    const [currentPage, setCurrentPage] = useState(0);

    // Updated pages array with multiple paragraphs
    const pages = [
        {
            color: ' rgba(1, 27, 21, 0.575)',
            title: '    Appointment Types',
            paragraphs: [
                '      Primary Care Appointment: For general health issues or routine check-ups.',
                '      Specialist Appointment: For specific conditions that require a specialist.',
                '      Diagnostic Services: For tests or imaging such as X-rays or MRIs.'
            ]
        },
        {
            color: ' rgba(1, 27, 21, 0.575)',
            title: 'How to Prepare',
            paragraphs: [
                'Gather Necessary Information: Ensure you have all relevant details, including health insurance information and medical history.',
                'Prepare Documents: Bring identification, insurance cards, and any referral letters if needed.',
                'Understand Your Appointment: Know what type of appointment you are attending and any preparation required.'
            ]
        },
        {
            color: ' rgba(1, 27, 21, 0.575)',
            title: 'Day of the Appointment',
            paragraphs: [
                'Arrive Early: Get to the hospital at least 15 minutes before your appointment time.',
                'Check-In: Register at the reception or check-in desk upon arrival.',
                'Follow Instructions: Adhere to any instructions given by the hospital staff or healthcare provider.'
            ]
        }
    ];

    const handleNextPage = () => {
        setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => (prevPage - 1 + pages.length) % pages.length);
    };

    return (
        <div>
            <NavBar/>
            <br /><br />
            <div className="sliding-page">
                <div className="container" style={{ transform: `translateX(-${currentPage * 100}%)` }}>
                    {pages.map((page, index) => (
                        <div
                            key={index}
                            className="page"
                            style={{ backgroundColor: page.color }}
                        >
                            <h1>{page.title}</h1>
                            {page.paragraphs.map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                        </div>
                    ))}
                </div>
                <button className="nav-button prev" onClick={handlePrevPage}><i class="fa-solid fa-chevron-left"></i></button>
                <button className="nav-button next" onClick={handleNextPage}><i class="fa-solid fa-chevron-right"></i></button>
            </div>

            <div class="fact">
            <div class="boxen">
            <h1 style={{marginLeft:"10px",fontWeight:"400"}}>CONSULTANCY </h1>
            <p style={{marginLeft:"10px"}}>- Get free online Consultancy with your id</p>
            <p style={{marginLeft:"10px"}}>- Get free online Consultancy with your id</p>
            <i class="fa-solid fa-handshake-angle" style={{fontSize:"80px",marginLeft:"180px"}}></i><br></br>
            <button class="save"><a href="/pmain/camera" style={{textDecoration:"none",color:"rgba(0, 0, 0, 0.645)"}}>CONSULT</a></button>
           
            </div>

            <div class="boxen">

            <h1 style={{marginLeft:"10px",fontWeight:"400"}}>BLOOD BANK</h1>
            <p style={{marginLeft:"10px"}}>- Get Instant Blood donor on emergency</p>
            <p style={{marginLeft:"10px"}}>- PRIORITIZE</p>
            <i class="fa-solid fa-droplet" style={{fontSize:"80px",marginLeft:"180px"}}></i>
          <a href='https://ors.gov.in/ebloodbankportal/dashboard/portal/dashboard_details.jsp'> <button class="save">APPLY</button></a>
            </div>


            <div class="boxen">

            <h1 style={{marginLeft:"10px",fontWeight:"400"}}>DONATION</h1>
            <p style={{marginLeft:"10px"}}>- Donate your blood regularly...</p>
            <p style={{marginLeft:"10px"}}>- Donate your body Afterlife....</p>
            <i class="fa-solid fa-hand-holding-medical"  style={{fontSize:"80px",marginLeft:"180px"}}></i>
            <a href='https://notto.abdm.gov.in/'><button class="save">APPLY</button></a>
           </div>
            </div>
        </div>
    );
};

export default SlidingPage;
