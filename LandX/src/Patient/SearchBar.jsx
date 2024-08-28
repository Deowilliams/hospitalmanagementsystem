import React, { useState } from 'react';
import axios from 'axios';
import './SearchBar.css'; 


const API_URL = 'https://66ba05ecfa763ff550fa84f5.mockapi.io/medtrack/rep/response'; 

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [doctorData, setDoctorData] = useState(null);

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get(API_URL);
            const foundDoctor = response.data.find(doctor => 
                doctor.name.toLowerCase().includes(query.toLowerCase())
            );
            setDoctorData(foundDoctor);
            setIsModalOpen(true);
        } catch (error) {
            console.error('Search error:', error);
            setDoctorData(null);
            setIsModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const modalContent = doctorData ? (
        <>
            <p><strong>Dr. {doctorData.name}</strong></p>
            <div style={{ textAlign: "justify" }}>
                <p>Contact: {doctorData.contact}</p>
                <p>Status: {doctorData.status}</p>
                <p>Department: {doctorData.department}</p>
            </div>
        </>
    ) : (
        <p>No doctor found with that name.</p>
    );

    return (
        <div className="search-container">
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search for Doctors and Departments . . . . . . . . ."
            />
            <button onClick={handleSearch} className="buttons">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="close-button" onClick={handleCloseModal} style={{ color: "darkgreen" }}>Close</button>
                        {modalContent}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchBar;
