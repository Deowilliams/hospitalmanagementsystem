import React, { useState, useEffect } from 'react';
import './BookingPage.css'; // Include the custom styling
import NavBar from './NavBar';

const BookingPage = () => {
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');
    const [timeSlots, setTimeSlots] = useState([]);
    const [userContact, setUserContact] = useState('');
    const [confirmationMessage, setConfirmationMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        // Simulate fetching doctors from an API
        const fetchDoctors = () => {
            const simulatedDoctors = [
                { _id: '1', name: 'Smith', department: 'Cardiology' },
                { _id: '2', name: 'Johnson', department: 'Neurology' },
                { _id: '3', name: 'Williams', department: 'Orthopedics' },
            ];
            setDoctors(simulatedDoctors);
        };
        fetchDoctors();
    }, []);

    useEffect(() => {
        if (appointmentDate && selectedDoctor) {
            // Simulate fetching time slots based on selected doctor and date
            const fetchTimeSlots = () => {
                const simulatedTimeSlots = [
                    '09:00 AM',
                    '10:00 AM',
                    '11:00 AM',
                    '01:00 PM',
                    '02:00 PM',
                    '03:00 PM',
                ];
                setTimeSlots(simulatedTimeSlots);
            };
            fetchTimeSlots();
        }
    }, [appointmentDate, selectedDoctor]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/appointments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    doctor: selectedDoctor,
                    date: appointmentDate,
                    time: appointmentTime,
                    contact: userContact,
                }),
            });
            const result = await response.json();
            if (response.ok) {
                setConfirmationMessage(`Appointment booked successfully with Dr. ${result.doctor}.`);
                setErrorMessage('');
            } else {
                setConfirmationMessage('');
                setErrorMessage(result.message || 'Your request for appointment has been submitted');
            }
        } catch (error) {
            console.error('Error booking appointment:', error);
            setConfirmationMessage('');
            setErrorMessage('Your request for appointment has been submitted');
        }
    };

    return (
        <div>
            <NavBar />
            <div className="booking-container">
                <h1>Appointment Booking</h1>
                <form onSubmit={handleSubmit}> 
                    <div className="form-group">
                        <label htmlFor="contact">Problem:</label>
                        <input
                            type="text"
                            id="contact"
                            value={userContact}
                            onChange={(e) => setUserContact(e.target.value)}
                            required
                        />
                    </div> 
                    <div className="form-group">
                        <label htmlFor="date">Appointment Date:</label>
                        <input
                            type="date"
                            id="date"
                            value={appointmentDate}
                            onChange={(e) => setAppointmentDate(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="doctor">Select Doctor:</label>
                        <select
                            id="doctor"
                            value={selectedDoctor}
                            onChange={(e) => setSelectedDoctor(e.target.value)}
                            required
                        >
                            <option value="">Select a doctor</option>
                            {doctors.map((doctor) => (
                                <option key={doctor._id} value={doctor.name}>
                                    Dr. {doctor.name} - {doctor.department}
                                </option>
                            ))}
                        </select>
                    </div>  <div className="form-group">
                        <label htmlFor="time">Appointment Time:</label>
                        <select
                            id="time"
                            value={appointmentTime}
                            onChange={(e) => setAppointmentTime(e.target.value)}
                            required
                        >
                            <option value="">Select a time slot</option>
                            {timeSlots.map((slot, index) => (
                                <option key={index} value={slot}>
                                    {slot}
                                </option>
                            ))}
                        </select>
                    </div>
                   
                  
                   
                    <button className="button101" type="submit">Book Appointment</button>
                </form>
                {confirmationMessage && <p className="confirmation-message">{confirmationMessage}</p>}
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
        </div>
    );
};

export default BookingPage;
