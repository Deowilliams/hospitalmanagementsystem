import React, { useState, useEffect } from 'react';
import './Dpatient.css';

const Dpatient = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newPatient, setNewPatient] = useState({
    name: '',
    age: '',
    condition: ''
  });

  useEffect(() => {
   
    fetch('https://reqres.in/api/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        
        const transformedData = data.data.map(user => ({
          id: user.id,
          name: user.first_name + ' ' + user.last_name,
          age: Math.floor(Math.random() * (60 - 20 + 1)) + 20, 
          condition: 'Condition Example' 
        }));
        setPatients(transformedData);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPatient(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    setPatients(prevPatients => [
      ...prevPatients,
      {
        id: prevPatients.length + 1,
        ...newPatient
      }
    ]);
    setNewPatient({
      name: '',
      age: '',
      condition: ''
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="dpage patients">
      <h2>Patients</h2>
      <form onSubmit={handleSubmit} className="dpatient-form">
        <h3>Add New Patient</h3>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={newPatient.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Ages:
          <input
            type="number"
            name="age"
            value={newPatient.age}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          prob:
          <input
            type="text"
            name="condition"
            value={newPatient.condition}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Add Patient</button>
      </form>
      {patients.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Condition</th>
            </tr>
          </thead>
          <tbody>
            {patients.map(patient => (
              <tr key={patient.id}>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.condition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No patients found.</p>
      )}
    </div>
  );
};

export default Dpatient;

// import React, { useState, useEffect } from 'react';
// import './Dpatient.css';

// const Dpatient = () => {
//   const [patients, setPatients] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [newPatient, setNewPatient] = useState({
//     name: '',
//     age: '',
//     condition: ''
//   });

//   useEffect(() => {
//     const fetchPatients = async () => {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         setError('No token found');
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await fetch('http://localhost:5000/api/patients/all', {
//           method: 'GET',
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json'
//           }
//         });

//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         setPatients(data);
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };

//     fetchPatients();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewPatient(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
   
//     setPatients(prevPatients => [
//       ...prevPatients,
//       {
//         id: prevPatients.length + 1,
//         ...newPatient
//       }
//     ]);
//     setNewPatient({
//       name: '',
//       age: '',
//       condition: ''
//     });
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <div className="dpage patients">
//       <h2>Patients</h2>
//       <form onSubmit={handleSubmit} className="dpatient-form">
//         <h3>Add New Patient</h3>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={newPatient.name}
//             onChange={handleInputChange}
//             required
//           />
//         </label>
//         <label>
//           Age:
//           <input
//             type="number"
//             name="age"
//             value={newPatient.age}
//             onChange={handleInputChange}
//             required
//           />
//         </label>
//         <label>
//           Condition:
//           <input
//             type="text"
//             name="condition"
//             value={newPatient.condition}
//             onChange={handleInputChange}
//             required
//           />
//         </label>
//         <button type="submit">Add Patient</button>
//       </form>
//       {patients.length > 0 ? (
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Age</th>
//               <th>Condition</th>
//             </tr>
//           </thead>
//           <tbody>
//             {patients.map(patient => (
//               <tr key={patient._id}>
//                 <td>{patient.name}</td>
//                 <td>{patient.age}</td>
//                 <td>{patient.problem}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No patients found.</p>
//       )}
//     </div>
//   );
// };

// export default Dpatient;

