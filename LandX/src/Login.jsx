import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css"
import C from './Patient/C';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('patient'); // Default to 'patient'
    const [error, setError] = useState('');
    const [adminPasskey, setAdminPasskey] = useState('');
    const navigate = useNavigate();

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (userType === 'admin') {
            // Admin login handling
            handleAdminLogin();
            return;
        }

        // Determine the endpoint based on user type
        const endpoint = userType === 'patient' 
            ? 'http://localhost:5000/api/patients/login' 
            : 'http://localhost:5000/api/doctors/login';

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            console.log('Login response:', data);

            if (response.ok) {
                // Save the JWT token in localStorage
                localStorage.setItem('token', data.token);
                // Navigate to the respective main page based on the user type
                if (userType === 'patient') {
                    navigate('/pmain');
                } else {
                    navigate('/dmain');
                }
            } else {
                console.error('Login failed:', data.message);
                setError(data.message || 'An error occurred while logging in');
            }
        } catch (error) {
            console.error('Fetch error:', error);
            setError('An error occurred while logging in.');
        }
    };

    const handleSignupRedirect = () => {
        // Navigate to the respective signup form based on the user type
        const signupPath = userType === 'patient' ? '/signup/patient' : '/signup/doctor';
        navigate(signupPath);
    };

    const handleAdminLogin = () => {
        if (adminPasskey === '1234') {
            navigate('/admin');
        } else {
            setError('Invalid admin passkey');
        }
    };

    return (
        <div style={{height:"2000px"}}>
            <div class="cutout1">
                <div class="cutout">
            <h1 class="ditt">Your <span style={{fontWeight:"600"}}>Health</span> is our <span style={{fontWeight:"600"}}> Priority</span> </h1>
           

               




            <div class="gog">
            <div class="gog1" id="gog1">
            
            <div class="slider">
            <div class="gog3" id="gog31">
             <br></br><br></br><br></br><br></br>
            <i class="fa-solid fa-truck-medical" style={{marginLeft:"100px",fontSize:"85px"}}></i>
            </div>


            <div class="gog3"  id="gog31">
            <br></br><br></br><br></br><br></br>
            <i class="fa-solid fa-heart-circle-bolt" style={{marginLeft:"100px",fontSize:"85px"}}></i>
            </div>

            <div class="gog3"  id="gog31">
            <br></br><br></br><br></br><br></br>
            <i class="fa-solid fa-baby" style={{marginLeft:"100px",fontSize:"85px"}}></i>
            </div>

            <div class="gog3"  id="gog31">
            <br></br><br></br><br></br><br></br>
            <i class="fa-solid fa-disease" style={{marginLeft:"100px",fontSize:"85px"}}></i>
            </div>

            <div class="gog3"  id="gog31">
            <br></br><br></br><br></br><br></br>
            <i class="fa-solid fa-bed-pulse" style={{marginLeft:"100px",fontSize:"85px"}}></i>
            </div>

            <div class="gog3"  id="gog31">
            <br></br><br></br><br></br><br></br>
            <i class="fa-regular fa-flask" style={{marginLeft:"100px",fontSize:"85px"}}></i>
            </div>
            <div class="gog3"  id="gog31">
            <br></br><br></br><br></br><br></br>
            <i class="fa-regular fa-flask" style={{marginLeft:"100px",fontSize:"85px"}}></i>
            </div>
            <div class="gog3"  id="gog31">
            <br></br><br></br><br></br><br></br>
            <i class="fa-regular fa-flask" style={{marginLeft:"100px",fontSize:"85px"}}></i>
            </div>
            </div>


          </div>
          </div>

         
          <h4 style={{marginLeft:"540px",fontSize:"70px",fontWeight:"450",color:"black"}}>Med<span style={{color:"lightgreen"}}>Track<i class="fa-solid fa-heart-pulse"></i></span></h4>







            </div>
          
            </div>
            <br></br><br></br><br></br>
            <div style={{display:"flex"}}>
        <div className="login-container">
            <h2 class="heading">Med<span style={{color:"lightgreen"}}>Track</span></h2>
            
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleLoginSubmit}>
              
                <div>
                    <label style={{marginLeft:"100px"}}>User Type </label>
                    <select
                        value={userType}
                        onChange={(e) => setUserType(e.target.value)}
                        style={{height:"40px",width:"140px",textAlign:"center"}}
                        class="selector"
                    >
                        <option value="patient">Patient</option>
                        <option value="doctor">Doctor</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <br></br>
                {userType !== 'admin' && (
                    <>
                    <div class="boxt">
                        <div>
                           
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                class="vot"
                                placeholder='Enter your email'
                            />
                        </div>
                        <br></br>
                        <div>
                           
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                class="vot"
                                placeholder='Password'
                            />
                        </div>
                        </div>
                    </>
                )}

                {userType === 'admin' && (
                    <div>
                       
                        <input
                            type="password"
                            value={adminPasskey}
                            onChange={(e) => setAdminPasskey(e.target.value)}
                            required
                            class="vot"
                            placeholder='enter passkey'
                        />
                    </div>
                )}
                <br></br>
                <button type="submit" class="loginB loginB1">Login</button>
            </form>
            <div className="signup-link" >
                <p>Don't have an account?</p>
                <button onClick={handleSignupRedirect} class="signB signB1">Sign Up</button>
            </div>
            </div>
            <C/>
           </div>
            </div>
    );
};

export default Login;
