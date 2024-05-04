// MedicalHistory.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import logo1 from './medisync.png';
import Logout from './shutdown.png';

const MedicalHistory = () => {
  // State to manage medical history information
  const [medicalHistory, setMedicalHistory] = React.useState([
    { date: '2022-01-01', diagnosis: 'Fever', treatment: 'Prescribed medication' },
    { date: '2022-02-15', diagnosis: 'Flu', treatment: 'Rest and fluids' },
    // Add more medical history entries as needed
  ]);

  return (
    <div>
      <header>
        <img src={logo1} alt="l" />
        <h1>MEDIsync</h1>
        <Link to="/"><p><img className='logout' src={Logout} alt="" />logout</p></Link>
      </header>
      <br />
      <div className="medical-history-container">
        <h1>Medical History</h1>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Diagnosis</th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody>
            {medicalHistory.map((entry, index) => (
              <tr key={index}>
                <td>{entry.date}</td>
                <td>{entry.diagnosis}</td>
                <td>{entry.treatment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MedicalHistory;
