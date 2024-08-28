
import React, { useState } from "react";
import './Schedule.css'
import Table from './Table';
import ScheduleLinks from "./ScheduleLinks";
import Container from "../Container";

const Schedule = () => {


    const [hidden, setHidden] = useState(false);
  const [day, setDay] = useState("Monday");


  return (
    <section  className="schedule" id="schedule">
      <h2 style={{fontWeight:"450"}}> 
          DOCTORS<span style={{fontWeight:"650"}}> AVAILABILITY</span>
      </h2>
      
      <p>
        
       
        
      </p>
      <Container>
        <ScheduleLinks setDay={setDay} day={day} />
        <Table day={day} />
      </Container>
    </section>
  )
}

export default Schedule


