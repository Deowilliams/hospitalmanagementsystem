
import React from "react";
import Output from "./Output";
import './Results.css'


const Results = ({ training }) => (
  <div  className="results">
    {training === "FirstClass" && (
      <Output
        title="Dr.HENRY RICHARDS"
        info="Evidence has shown that practicing and improving fitness has positive effects on human body."
        img="https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg"
      />
    )}

    {training === "SecondClass" && (
      <Output
        title="DR.WILLIAM BRADE "
        info="In children and adolescents, the effects of practicing regular physical activity can give a positive base for a healthy future life. Aerobic training especially it has been shown in improving cardiovascular fitness."
        img="https://static.vecteezy.com/system/resources/thumbnails/028/287/384/small_2x/a-mature-indian-male-doctor-on-a-white-background-ai-generated-photo.jpg"
      />
    )}
    {training === "ThirdClass" && (
      <Output
        title="Dr.MOHAMMED "
        info="In children and adolescents, the effects of practicing regular physical activity can give a positive base for a healthy future life. Aerobic training especially it has been shown in improving cardiovascular fitness."
        img="https://media.istockphoto.com/id/1434687315/photo/online-medical-consultation-hispanic-doctor-looking-at-web-camera-and-smiling-waving-hand.jpg?s=612x612&w=0&k=20&c=DI2caExZNqoVLE2lTLsOHkLnHbL7_d1Itdv4Uu3FD9Q="
      />
    )}

    {training === "FourthClass" && (
      <Output
        title="Dr.YUVRAJ "
        info="In children and adolescents, the effects of practicing regular physical activity can give a positive base for a healthy future life. Aerobic training especially it has been shown in improving cardiovascular fitness."
        img="https://img.freepik.com/free-photo/confident-indian-doctor-adjusting-glasses-while-using-smartphone_1262-14181.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722643200&semt=ais_hybrid"
      />
    )}
  </div>
);


export default Results;
