import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dnavbar from './Dnavbar';
import DoctorProfile from './DoctorProfile';
import Appointment from './Appointment';
import Appointmentrequest from './Appointmentrequest';
import Dpatient from './Dpatient';
import Dmessaging from './Dmessaging';
import DprescriptionManagement from './DprescriptionManagement';
import './Dmain.css';

const Dmain = () => {
  const [acceptedAppointments, setAcceptedAppointments] = useState([]);

  const addAcceptedAppointment = (appointment) => {
    setAcceptedAppointments([...acceptedAppointments, appointment]);
  };

  return (
    <div className="dmain-content">
      <br></br>
      <Dnavbar />
      <Routes>
        <Route path="/" element={<DoctorProfile />} />
        <Route path="/appointment" element={<Appointment acceptedAppointments={acceptedAppointments} />} />
        <Route path="/appointmentrequest" element={<Appointmentrequest addAcceptedAppointment={addAcceptedAppointment} />} />
        <Route path="/dpatient" element={<Dpatient />} />
        <Route path="/dmessaging" element={<Dmessaging />} />
        <Route path="/dprescriptionmanagement" element={<DprescriptionManagement />} />
      </Routes>
    </div>
  );
};

export default Dmain;
