// import React from 'react';
// import './UserProfile.css';

// const UserProfile = () => {
//   return (
//     <div className="user-profile">
//        <i class="fa-solid fa-user" style={{fontSize:"70px",marginLeft:"25px",color:"rgb(190, 255, 233)"}}></i>
//       <h1 style={{fontFamily:"'Orbitron', sans-serif"}}>USER PROFILE</h1>
//       <div className="profile-details">
//         <div className="profile-item">
//           <span className="label" >Name:</span>
//           <span className="value" >Arun</span>
//         </div>
//         <div className="profile-item">
//           <span className="label" >Age:</span>
//           <span className="value" >19</span>
//         </div>
//         <div className="profile-item">
//           <span className="label" >Blood:</span>
//           <span className="value" >A+ve</span>
//         </div>
//         <div className="profile-item">
//           <span className="label">Gender:</span>
//           <span className="value" >Male</span>
//         </div>
        
//       </div>
//     </div>
//   )
// }

// export default UserProfile

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = () => {
  const [patient, setPatient] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const response = await fetch('http://localhost:5000/api/patients/me', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        const data = await response.json();
        
        if (response.ok) {
          setPatient(data);
        } else {
          console.error('Server responded with an error:', data.message);
          setError(data.message || 'An error occurred while fetching the patient profile.');
        }
      } catch (error) {
        console.error('Fetch profile error:', error.message);
        setError('An error occurred while fetching the patient profile. Please check your internet connection and try again.');
      }
    };

    fetchProfile();
  }, [navigate]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!patient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-profile">
      <i className="fa-solid fa-user" style={{fontSize:"70px",marginLeft:"25px",color:"rgb(190, 255, 233)"}}></i>
      <h1 style={{fontFamily:"'Orbitron', sans-serif"}}>USER PROFILE</h1>
      <div className="profile-details">
        <div className="profile-item">
          <span className="label">Name:</span>
          <span className="value">{patient.name}</span>
        </div>
        <div className="profile-item">
          <span className="label">Age:</span>
          <span className="value">{patient.age}</span>
        </div>
        <div className="profile-item">
          <span className="label">Blood:</span>
          <span className="value">{patient.bloodGroup}</span>
        </div>
        <div className="profile-item">
          <span className="label">Gender:</span>
          <span className="value">{patient.gender}</span>
        </div>
        {/* Add more fields as needed */}
      </div>
    </div>
  );
};

export default UserProfile;
