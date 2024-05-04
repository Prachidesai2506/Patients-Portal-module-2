// AppointmentDashboard.js

import React, { useState } from 'react';
import logo1 from './medisync.png'
import Logout from './shutdown.png'
const AppointmentDashboard = () => {
  // State to manage appointment data
  const [appointments, setAppointments] = useState([
    { id: 1, patientName: 'John Doe', date: '2022-03-01', time: '10:00 AM' ,Doctor: ''},
    { id: 2, patientName: 'Jane Smith', date: '2022-03-02', time: '02:30 PM' },
    // Add more appointment entries as needed
  ]);

  return (
    <div >
       <header>
        <img src={logo1} alt="l"  />
        <h1>MEDIsync</h1>
        <p><img className='logout' src={Logout} alt="" />logout</p></header>
        <br />
        <div className="appointment-dashboard-container">
<h1>Search Doctors</h1>
{/* <h4>Sea</h4> */}
        <form id="form" role="search">
  <input type="search" id="query" name="q"
   placeholder="Search Doctors here... "
   aria-label="Search through site content"/>
  <button className='search'>Search</button>
</form>
 
      <h1>Appointment Allocation Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Application no</th>
            <td><input type="text" /></td>
            </tr>
            <tr>
            <th>Patient Name</th>
            <td><input type="text" /></td>
            </tr>
            <tr>
            <th>Date</th>
            <td><input type="date" /></td>
            </tr>
             <tr>
            <th>Time</th>
            <td><input type="time" /></td>
            </tr>
            <tr>
            <th>Select Doctor</th>
            <td><select name="" id="">
              <option value="1">Dr smith</option>
              <option value="2">Dr Dhruvil</option>
              </select></td>
          </tr>
        </thead>
        <tbody>
        
        </tbody>
      </table>
      <button type="submit" className='regsubmit' id='apply'>Apply</button>

    </div>
    </div>
  );
};

export default AppointmentDashboard;
