
import React from "react";
import './ScheduleLinks.css'

const ScheduleLinks = ({ setDay , day}) => {
  return (
    <div className="links" >
      <button className={day === 'Monday' ? 'active' : ''} onClick={() => setDay("Monday")}>
        Monday
      </button>
      <span>/</span>
      <button className={day === 'Tuesday' ? 'active' : ''} onClick={() => setDay("Tuesday")}>
        Tuesday
      </button>
      <span>/</span>
      <button className={day === 'Wednesday' ? 'active' : ''} onClick={() => setDay("Wednesday")}>
        Wednesday
      </button>
      <span>/</span>
      <button className={day === 'Thursday' ? 'active' : ''} onClick={() => setDay("Thursday")}>
        Thursday
      </button>
      <span>/</span>
      <button className={day === 'Friday' ? 'active' : ''} onClick={() => setDay("Friday")}>
        Friday
      </button>
    </div>
  );
};

export default ScheduleLinks;

