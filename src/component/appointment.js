// AppointmentDashboard.js

import React, { useState } from 'react';
import axios from 'axios';
import logo1 from './medisync.png'
import Logout from './shutdown.png'
const AppointmentDashboard = () => {
  // State to manage appointment data
  // const [appointments, setAppointments] = useState([
  //   { id: 1, patientName: 'John Doe', date: '2022-03-01', time: '10:00 AM' ,Doctor: ''},
  //   { id: 2, patientName: 'Jane Smith', date: '2022-03-02', time: '02:30 PM' },
  //   // Add more appointment entries as needed
  // ]);

  const [id_no, setid] = useState('');
  const [name, setname] = useState('');
  const [date, setdate] = useState('');
  const [time, settime] = useState('');

  async function submit(e) {
    e.preventDefault();
    try {
      axios.post("http://localhost:3000/appointment", {id_no,name,date,time}).then(res => {
        if (res.data == "exist") {
          alert("User already exist")
          
        }
        else {
          alert("appointment successfully done")
          // alert("Your Application No is : "+id_no)
        }
      })
        .catch(e => {
          alert("wrong details")
          console.log(e);
        })
    }
    catch (e) {
      console.log(e)
    }
  }
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
            <td><input type="text" value={id_no} onChange={(e) => { setid(e.target.value) }} /></td>
            </tr>
            <tr>
            <th>Patient Name</th>
            <td><input type="text" value={name} onChange={(e) => { setname(e.target.value) }}/></td>
            </tr>
            <tr>
            <th>Date</th>
            <td><input type="date" value={date} onChange={(e) => { setdate(e.target.value) }}/></td>
            </tr>
             <tr>
            <th>Time</th>
            <td><input type="time" value={time} onChange={(e) => { settime(e.target.value) }}/></td>
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
      <button type="submit" className='regsubmit' id='apply' onClick={submit}>Apply</button>

    </div>
    </div>
  );
};

export default AppointmentDashboard;
