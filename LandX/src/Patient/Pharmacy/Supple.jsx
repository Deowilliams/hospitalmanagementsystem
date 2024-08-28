import React, { useState } from 'react';
import './Supple.css';
import NavBar from '../NavBar';

const Supple = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);

  const handleSearch = async () => {
    // Example fake API URL - replace with the actual API endpoint if needed
    const apiUrl = `https://dummyjson.com/image/400x200?type=webp&text=I+am+a+webp+image=${searchQuery}`;
    
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <NavBar/>
    <div className="fitness-tracker-container">
      <h1 style={{ color: "LIGHTBLUE", fontSize: "60px" }}>
        E<span style={{ color: "white" }}>-PHARMACY</span>
      </h1>
      
      
      <div className="zactivity-list">
        <h1 style={{ color: "lightblue" }}>MEDICINES</h1>
        <ul style={{ backgroundColor: "#c66565", color: "white" }}>
          {products.map(product => (
            <li key={product.id} style={{ margin: '10px 0' }}>
              <div style={{ backgroundColor: "#0000008d", padding: '10px', borderRadius: '5px' }}>
                <h4 style={{ color: "white" }}>{product.title}</h4>
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="zactivity-container">
        <div className="zactivity" style={{ backgroundImage: "url('https://example.com/pain-relief.jpg')", backgroundSize: "cover" }}>
          <div style={{ backgroundColor: "#0000008d", height: "80px", width: "175px" ,borderRadius:"10PX"}}>
            <h2 style={{ color: "white" }}>Pain Relief Tablets</h2>
          </div>
          <a href="https://example.com/pain-relief"><i className="fa-solid fa-kit-medical" style={{ fontSize: "90px", color: "lightblue" }}></i></a>
        </div>

        <div className="zactivity" style={{ backgroundImage: "url('https://example.com/cough-syrup.jpg')", backgroundSize: "cover" }}>
          <div style={{ backgroundColor: "#0000008d", height: "80px", width: "175px" ,borderRadius:"10PX"}}>
            <h2 style={{ color: "white" }}>Cough Syrup</h2>
          </div>
          <a href="https://example.com/cough-syrup"><i className="fa-solid fa-kit-medical" style={{ fontSize: "90px", color: "lightblue" }}></i></a>
        </div>

        <div className="zactivity" style={{ backgroundImage: "url('https://example.com/vitamins.jpg')", backgroundSize: "cover" }}>
          <div style={{ backgroundColor: "#0000008d", height: "80px", width: "175px" ,borderRadius:"10PX"}}>
            <h2 style={{ color: "white" }}>Vitamins</h2>
          </div>
          <a href="https://example.com/vitamins"><i className="fa-solid fa-kit-medical" style={{ fontSize: "90px", color: "lightblue" }}></i></a>
        </div>

        <div className="zactivity" style={{ backgroundImage: "url('https://example.com/antibiotics.jpg')", backgroundSize: "cover" }}>
          <div style={{ backgroundColor: "#0000008d", height: "80px", width: "175px" ,borderRadius:"10PX"}}>
            <h2 style={{ color: "white" }}>Antibiotics</h2>
          </div>
          <a href="https://example.com/antibiotics"><i className="fa-solid fa-kit-medical" style={{ fontSize: "90px", color: "lightblue" }}></i></a>
        </div>

        <div className="zactivity" style={{ backgroundImage: "url('https://example.com/allergy-medicine.jpg')", backgroundSize: "cover" }}>
          <div style={{ backgroundColor: "#0000008d", height: "80px", width: "175px" ,borderRadius:"10PX"}}>
            <h2 style={{ color: "white" }}>Allergy Medicine</h2>
          </div>
          <a href="https://example.com/allergy-medicine"><i className="fa-solid fa-kit-medical" style={{ fontSize: "90px", color: "lightblue" }}></i></a>
        </div>

        {/* Repeat similar structure for additional medicines if needed */}
      </div><br /><br /><br /><br /><br />
      
      <div style={{ backgroundColor: "black", backgroundSize: "cover" }} className="zsummary">
        <h2 style={{ color: "yellow" }}> ⚠️NOTE: Kindly follow the prescribed dosage by your healthcare provider</h2>
        <h3 style={{ color: "red" }}>OVERUSE CAN LEAD TO SERIOUS HEALTH ISSUES...</h3>
      </div>
    </div>
    </div>
  );
}

export default Supple;
