
import React, { useState } from "react";
import LinksContainer from "./LinksContainer";
import Results from "./Results";
import Container from "../Container";
import './Classes.css'

const Classes = ({ text }) => {
  const [training, setTraining] = useState("FirstClass");

  return (
    <section className="ourClasses" id="ourClasses">
      <h2 style={{fontWeight:"350"}}> 
        OUR <span style={{fontWeight:"650"}}>DOCTORS</span>
      </h2>
    
      <p>
       The Speaclized Doctor for each 
        <br />
         Category
      </p>
      <div style={{marginLeft:"210px"}}>
      <Container>
        <LinksContainer setTraining={setTraining} training={training} />
        <Results training={training} />
      </Container>
      </div>
    </section>
  );
};

export default Classes;
