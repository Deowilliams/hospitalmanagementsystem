import React, { useState } from "react";
import './Table.css'



const Table = ({ day }) => {
  return (
    <table className="tab">
      <tbody>
        <tr>
          <td>Cardiologist</td>
          <td>
            <span className={day === "Monday" ? "" : "hidden"}>
              10:00AM - 11:30AM
            </span>
          </td>
          <td>
            <span className={day === "Tuesday" ? "" : "hidden"}>
              2:00PM - 3:30PM
            </span>
          </td>
          <td> Dr. G. Stewart</td>
        </tr>
        <tr>
          <td>Gastrologist</td>
          <td>
            <span className={day === "Friday" ? "" : "hidden"}>
              10:00AM - 11:30AM
            </span>
          </td>
          <td>
            <span className={day === "Thursday" ? "" : "hidden"}>
              2:00PM - 3:30PM
            </span>
          </td>
          <td>Dr.C. Harris</td>
        </tr>
        <tr>
          <td>ENT</td>
          <td>
            <span className={day === "Tuesday" ? "" : "hidden"}>
              10:00AM - 11:30AM
            </span>
          </td>
          <td>
            <span className={day === "Monday" ? "" : "hidden"}>
              2:00PM - 3:30PM
            </span>
          </td>
          <td>Dr. E.James</td>
        </tr>
        <tr>
          <td>Physiotheraphy </td>
          <td>
            <span className={day === "Wednesday" ? "" : "hidden"}>
              10:00AM - 11:30AM
            </span>
          </td>
          <td>
            <span className={day === "Friday" ? "" : "hidden"}>
              2:00PM - 3:30PM
            </span>
          </td>
          <td>Dr. T. Daigle</td>
        </tr>
        <tr>
          <td>General ward</td>
          <td>
            <span className={day === "Thursday" ? "" : "hidden"}>
              10:00AM - 11:30AM
            </span>
          </td>
          <td>
            <span className={day === "Wednesday" ? "" : "hidden"}>
              2:00PM - 3:30PM
            </span>
          </td>
          <td>dr. D. Bowers</td>
        </tr>
      </tbody>
    </table>
  )
}


export default Table;
