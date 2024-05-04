import React, { useState } from 'react';
import logo1 from './medisync.png';
import Logout from './shutdown.png';

const AppointmentList = () => {
  // Sample initial appointments data
  const [appointments, setAppointments] = useState([
    { id: 1, patientName: 'John Doe', date: '2024-04-05', time: '10:00 AM' },
    { id: 2, patientName: 'Jane Smith', date: '2024-04-07', time: '11:30 AM' },
    { id: 3, patientName: 'Alice Johnson', date: '2024-04-08', time: '02:00 PM' },
  ]);

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
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => (
            <tr key={appointment.id}>
              <td>{appointment.id}</td>
              <td>{appointment.patientName}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentList;
