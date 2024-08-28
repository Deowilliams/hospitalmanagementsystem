import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DoctorProfile.css';

const DoctorProfile = () => {
  const [doctor, setDoctor] = useState(null);
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
        const response = await fetch('http://localhost:5000/api/doctors/me', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        const data = await response.json();
        
        if (response.ok) {
          setDoctor(data);
        } else {
          console.error('Server responded with an error:', data.message);
          setError(data.message || 'An error occurred while fetching the doctor profile.');
        }
      } catch (error) {
        console.error('Fetch profile error:', error.message);
        setError('An error occurred while fetching the doctor profile. Please check your internet connection and try again.');
      }
    };

    fetchProfile();
  }, [navigate]);

  if (error) {
    return <div className="doctor-profile-error">Error: {error}</div>;
  }

  if (!doctor) {
    return <div className="doctor-profile-loading">Loading...</div>;
  }

  return (
    <div className="doctor-profile-container">
      <div className="doctor-profile-content">
        <img className="doctor-profile-picture" src={doctor.profilePhoto} alt="Doctor Profile" />
        <h1 className="doctor-profile-name">Dr. {doctor.name}</h1>
        <p className="doctor-profile-specialization">Specialization: {doctor.specialistType}</p>
        {doctor.gender && <p className="doctor-profile-gender">Gender: {doctor.gender}</p>}
        {doctor.contact && <p className="doctor-profile-contact">Contact: {doctor.contact}</p>}
        {doctor.address && <p className="doctor-profile-address">Address: {doctor.address}</p>}
      </div>
    </div>
  );
};

export default DoctorProfile;
