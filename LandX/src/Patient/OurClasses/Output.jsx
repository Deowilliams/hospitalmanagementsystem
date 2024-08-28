
import React from "react";
import './Output.css'
const Output = ({ title, info, img }) => (
  <div className="output">
    <img src={img} alt="class" />
    <h2>{title}</h2>
    <p>{info}</p>
    <button text="View All Schedules" />
  </div>
);


export default Output;
