import React, { useState } from 'react';
import './Appointmentrequest.css';

const AppointmentRequest = ({ addAcceptedAppointment }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [requests, setRequests] = useState([
    { id: 1, patientName: 'John Doe', date: '2024-08-01', time: '10:00 AM' },
    { id: 2, patientName: 'Jane Smith', date: '2024-08-02', time: '11:00 AM' },
  ]);

  const handleAccept = (id) => {
    const request = requests.find(r => r.id === id);
    addAcceptedAppointment(request);
    setRequests(requests.filter(r => r.id !== id));
  };

  const handleReject = (id) => {
    setRequests(requests.filter(r => r.id !== id));
  };

  const filteredRequests = requests.filter(request =>
    request.patientName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dpage appointment-requests">
      <h2>Appointment Requests</h2>
      <input
        type="text"
        placeholder="Search by patient name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="dsearch-bar"
      />
      {filteredRequests.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.map(request => (
              <tr key={request.id}>
                <td>{request.patientName}</td>
                <td>{request.date}</td>
                <td>{request.time}</td>
                <td>
                  <button className='bton1 accept' onClick={() => handleAccept(request.id)}>Accept</button>
                  <button className='bton1 reject' onClick={() => handleReject(request.id)}>Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No appointment requests found.</p>
      )}
    </div>
  );
};

export default AppointmentRequest;
