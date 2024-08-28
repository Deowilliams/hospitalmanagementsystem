
import React from "react";
import './LinksContainer.css'

const LinksContainer = ({ setTraining, training }) => (
  <div  className="linksContainer">
    <button
      className={training === "FirstClass" ? "active" : ""}
      onClick={() => setTraining("FirstClass")}
    >
      <i class="fa-solid fa-user-doctor" id="icon"></i> CARDIO SPEACLIST
    </button>
    <button
      className={training === "SecondClass" ? "active" : ""}
      onClick={() => setTraining("SecondClass")}
    >
          <i class="fa-solid fa-user-doctor" id="icon"></i> ORTHO SPEACIALIST
    </button>
    <button
      className={training === "ThirdClass" ? "active" : ""}
      onClick={() => setTraining("ThirdClass")}
    >
            <i class="fa-solid fa-user-doctor" id="icon"></i> GASTRO SPEACIALIST
    </button>
    <button
      className={training === "FourthClass" ? "active" : ""}
      onClick={() => setTraining("FourthClass")}
    >
          <i class="fa-solid fa-user-doctor" id="icon"></i> ONCOL SPEACLIST
    </button>
    
  </div>
);


export default LinksContainer;
