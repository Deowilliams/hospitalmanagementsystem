import React, { useState } from 'react';
import './DprescriptionManagement.css';

const DprescriptionManagement = () => {
    const [prescriptions, setPrescriptions] = useState([]);
    const [newPrescription, setNewPrescription] = useState({ patientName: '', medicine: '', dosage: '' });
  
    const handleAddPrescription = () => {
      // Add new prescription to the list (and to the backend in a real scenario)
      setPrescriptions([...prescriptions, newPrescription]);
      setNewPrescription({ patientName: '', medicine: '', dosage: '' });
    };
  
    return (
      <div className="dpage prescription-management">
        <h2>Prescription Management</h2>
        <div className="dadd-prescription">
          <input
            type="text"
            placeholder="Patient Name"
            value={newPrescription.patientName}
            onChange={e => setNewPrescription({ ...newPrescription, patientName: e.target.value })}
          />
          <br></br>
          <input
            type="text"
            placeholder="Medicine"
            value={newPrescription.medicine}
            onChange={e => setNewPrescription({ ...newPrescription, medicine: e.target.value })}
          />
          <br></br>
          <input
            type="text"
            placeholder="Dosage"
            value={newPrescription.dosage}
            onChange={e => setNewPrescription({ ...newPrescription, dosage: e.target.value })}
          />
          <button onClick={handleAddPrescription}>Add Prescription</button>
        </div>
        <div className="dprescription-list">
          {prescriptions.map((prescription, index) => (
            <div key={index} className="prescription">
              <h3>{prescription.patientName}</h3>
              <p>Medicine: {prescription.medicine}</p>
              <p>Dosage: {prescription.dosage}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default DprescriptionManagement
