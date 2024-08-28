import React, { useRef, useState, useEffect } from 'react';
import './Camera.css';
import NavBar from './NavBar';
const Camera = () => {
    const videoRef = useRef(null);
    const [hasCamera, setHasCamera] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Request camera access on component mount
        const getCameraStream = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (err) {
                setHasCamera(false);
                setError(err.message);
            }
        };

        getCameraStream();

        // Clean up function to stop video stream when component unmounts
        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                const stream = videoRef.current.srcObject;
                const tracks = stream.getTracks();
                tracks.forEach(track => track.stop());
            }
        };
    }, []);

    return (
        <div>
            <NavBar/>
        <div style={{display:"flex"}}>
            <br></br><br></br>
        <div className="camera-container">
            {!hasCamera ? (
                <p>No camera access: {error}</p>
            ) : (
                <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    width="100%"
                    height="auto"
                    className="camera-video"
                />
            )}
        </div>

        <div className="camera-container1">
          <h1 style={{color:"white",fontWeight:"300",marginLeft:"10px"}}>Welcome to Tele<span style={{color:"lightgreen",fontWeight:"300"}}>Medicine</span></h1>
          <br></br>
          <h2 style={{color:"white",fontWeight:"250",marginLeft:"10px"}}>Med Track Provides the free consultancy for common ,seasonal medical irritations.</h2>
        </div>
        </div>
        </div>
    );
};

export default Camera;
