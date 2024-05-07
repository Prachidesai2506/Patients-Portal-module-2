import React, { useEffect, useState } from 'react';
import logo1 from './medisync.png';
import Logout from './shutdown.png';
import axios from 'axios';

const AppointmentList = () => {
  const [loading, setLoading] = useState(true);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/getappointments')
      .then(response => {
        setAppointments(response.data);
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
        <a href="/"><p><img className='logout' src={Logout} alt="" />logout</p></a>
      </header>
      <h2>Appointment List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Patient Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => (
            <tr key={appointment.id}>
              <td>{appointment.id_no}</td>
              <td>{appointment.name}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td><button className='submit' id='accept_app'>Accept</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentList;
