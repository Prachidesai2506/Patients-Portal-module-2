// AppointmentDashboard.js

import React, { useState , useEffect } from 'react';
import axios from 'axios';
import logo1 from './medisync.png'
import Logout from './shutdown.png'

const AppointmentDashboard = () => {
  const [id_no, setid] = useState('');
  const [name, setname] = useState('');
  const [date, setdate] = useState('');
  const [time, settime] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState(''); // State to store selected doctor

  async function submit(e) {
    e.preventDefault();
    try {
      axios.post("http://localhost:3000/appointment", {id_no, name, date, time, doctor: selectedDoctor})
        .then(res => {
          if (res.data === "exist") {
            alert("User already exists");
          } else {
            alert("Appointment successfully done");
          }
        })
        .catch(e => {
          alert("Wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  const [loading, setLoading] = useState(true);
  const [docdata, setdocdata] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/getdocdata')
      .then(response => {
        setdocdata(response.data);
        setLoading(false); // Data fetching is complete
      })
      .catch(err => console.log(err));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <header>
        <img src={logo1} alt="l" />
        <h1>MEDIsync</h1>
        <p><img className='logout' src={Logout} alt="" />logout</p>
      </header>
      <br />
      <div className="appointment-dashboard-container">
        <h1>Search Doctors</h1>
        <form id="form" role="search">
          <input type="search" id="query" name="q" placeholder="Search Doctors here..." aria-label="Search through site content" />
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
              <td><input type="text" value={name} onChange={(e) => { setname(e.target.value) }} /></td>
            </tr>
            <tr>
              <th>Date</th>
              <td><input type="date" value={date} onChange={(e) => { setdate(e.target.value) }} /></td>
            </tr>
            <tr>
              <th>Time</th>
              <td><input type="time" value={time} onChange={(e) => { settime(e.target.value) }} /></td>
            </tr>
            <tr>
              <th>Select Doctor</th>
              <td>
                <select value={selectedDoctor} onChange={(e) => setSelectedDoctor(e.target.value)}>
                  <option value="">Select Doctor</option>
                  {docdata.map(docd => (
                    <option key={docd.id} value={docd.name}>{docd.name}</option>
                  ))}
                </select>
              </td>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
        <button type="submit" className='regsubmit' id='apply' onClick={submit}>Apply</button>
      </div>
      <div>
        <h2>Doctors List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Speciality</th>
              <th>Degree</th>
              <th>Area</th>
            </tr>
          </thead>
          <tbody>
            {docdata.map(docd => (
              <tr key={docd.id}>
                <td>{docd.name}</td>
                <td>{docd.phone}</td>
                <td>{docd.speciality}</td>
                <td>{docd.degree}</td>
                <td>{docd.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <br />
      </div>
    </div>
  );
};

export default AppointmentDashboard;
