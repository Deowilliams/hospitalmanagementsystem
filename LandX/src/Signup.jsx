import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css"
const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [userType, setUserType] = useState('patient'); // Default to 'patient'
    const [specialistType, setSpecialistType] = useState(''); // For doctors
    const [height, setHeight] = useState(''); // For patients
    const [bloodGroup, setBloodGroup] = useState(''); // For patients
    const [gender, setGender] = useState('');
    const [age, setAge] = useState(''); // For patients
    const [problem, setProblem] = useState(''); // For patients
    const [contact, setContact] = useState('');
    const [address, setAddress] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setRegistrationSuccess(false);

        const endpoint = userType === 'patient' 
            ? 'http://localhost:5000/api/patients/register' 
            : 'http://localhost:5000/api/doctors/register';

        const body = userType === 'patient' 
            ? { email, password, name, height, bloodGroup, gender, age, problem, contact, address }
            : { email, password, name, specialistType, gender, contact, address };

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            const data = await response.json();
            console.log('Signup response:', data);

            if (response.ok) {
                setRegistrationSuccess(true); // Show success message
            } else {
                console.error('Signup failed:', data.message);
                setError(data.message || 'An error occurred during signup');
            }
        } catch (error) {
            console.error('Fetch error:', error);
            setError('An error occurred during signup.');
        }
    };

    const handleGoToLogin = () => {
        navigate('/');
    };

    return (
        <div className="signup-container">
            <h2 class="heading">Signup</h2>
            {error && <p className="error">{error}</p>}
            {registrationSuccess ? (
                <div>
                    <p>Registration successful!</p>
                    <button onClick={handleGoToLogin}>Go to Login</button>
                </div>
            ) : (
                <form onSubmit={handleSignupSubmit}>
                    <div >
                        <label>Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            class="vat"
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                             class="vat"
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                             class="vat"
                        />
                    </div>
                    <br></br>
                    <div>
                        <label>User Type:</label>
                        <select
                            value={userType}
                            onChange={(e) => setUserType(e.target.value)}
                             class="selector"
                             style={{height:"40px",width:"340px",textAlign:"center"}}
                        >
                            <option value="patient">Patient</option>
                            <option value="doctor">Doctor</option>
                        </select>
                        <br></br>
                    </div>

                    {userType === 'doctor' && (
                        <div>
                            <label>Specialist Type:</label>
                            <input
                                type="text"
                                value={specialistType}
                                onChange={(e) => setSpecialistType(e.target.value)}
                                required
                                 class="vat"
                            />
                        </div>
                    )}

                    {userType === 'patient' && (
                        <>
                            <div>
                                <label>Height:</label>
                                <input
                                    type="text"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                    required
                                     class="vat"
                                />
                            </div>
                            <div>
                                <label>Blood Group:</label>
                                <input
                                    type="text"
                                    value={bloodGroup}
                                    onChange={(e) => setBloodGroup(e.target.value)}
                                    required
                                     class="vat"
                                />
                            </div>
                            <div>
                                <label>Age:</label>
                                <input
                                    type="number"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    required
                                     class="vat"
                                />
                            </div>
                            <div>
                                <label>Problem:</label>
                                <input
                                    type="text"
                                    value={problem}
                                    onChange={(e) => setProblem(e.target.value)}
                                    required
                                     class="vat"
                                />
                            </div>
                        </>
                    )}

                    <div>
                        <label>Gender:</label>
                        <input
                            type="text"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            required
                             class="vat"
                        />
                    </div>
                    <div>
                        <label>Contact:</label>
                        <input
                            type="text"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            required
                             class="vat"
                        />
                    </div>
                    <div>
                        <label>Address:</label>
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                             class="vat"
                        />
                    </div>
                    <button type="submit" class="signB2 signB22" >Signup</button>
                </form>
            )}
        </div>
    );
};

export default Signup;
