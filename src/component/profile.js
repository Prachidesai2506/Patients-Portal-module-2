import React, { useState } from 'react';
import logo1 from './medisync.png';
import Logout from './shutdown.png';

const Profile = () => {
  // State to manage patient information
  const [patient, setPatient] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    address: '',
    contactNumber: '',
    bt: '',
    lastPhysicalCheckup: '',
    majorIllness: '',
    allergies: '',
    chronicDiseases: '',
    historyOfIllness: '',
    currentMedicines: '',
    vaccinationReport: '',
  });

  // Event handler to update patient information
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatient({ ...patient, [name]: value });
  };

  return (
    <div>
      <header>
        <img src={logo1} alt="l" />
        <h1>MEDIsync</h1>
        <a href="/"><p><img className='logout' src={Logout} alt="" />logout</p></a>
      </header>
      <br />
      <div>
        <h1>Patient Profile</h1>
        <form>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={patient.firstName}
              onChange={handleInputChange}
              className='profiledata'
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={patient.lastName}
              onChange={handleInputChange}
              className='profiledata'
            />
          </label>
          <br />
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={patient.age}
              onChange={handleInputChange}
              className='profiledata'
            />
          </label>
          <br />
          <label>
            Gender:
            <select name="gender" value={patient.gender} onChange={handleInputChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
          <br />
          <label>
            Address:
            <textarea
              name="address"
              value={patient.address}
              onChange={handleInputChange}
              className='profiledata2'
            />
          </label>
          <br />
          <label>
            Contact Number:
            <input
              type="tel"
              name="contactNumber"
              value={patient.contactNumber}
              onChange={handleInputChange}
              className='profiledata'
            />
          </label>
          <br />
          <h1>Medical Information</h1>
          <label>
            Blood Type:
            <input
              type="text"
              name="bt"
              value={patient.bt}
              onChange={handleInputChange}
              className='profiledata'
            />
          </label>
          <br />
          <label>
            Last Physical Checkup:
            <input
              type="date"
              name="lastPhysicalCheckup"
              value={patient.lastPhysicalCheckup}
              onChange={handleInputChange}
              className='profiledata'
            />
          </label>
          <br />
          <label>
            Major Illness:
            <input
              type="text"
              name="majorIllness"
              value={patient.majorIllness}
              onChange={handleInputChange}
              className='profiledata'
            />
            <br />
            Medical Report If available: <input type="file" className='profiledata' />
          </label>
          <br />
          <label>
            Any Allergies:
            <input
              type="text"
              name="allergies"
              value={patient.allergies}
              onChange={handleInputChange}
              className='profiledata'
            />
            <br />
            Medical Report If available: <input type="file" className='profiledata' />
          </label>
          <br />
          <label>
            Any Chronic Diseases:
            <input
              type="text"
              name="chronicDiseases"
              value={patient.chronicDiseases}
              onChange={handleInputChange}
              className='profiledata'
            />
            <br />
            Medical Report If available: <input type="file" className='profiledata' />
          </label>
          <br />
          <label>
            Any History of Illness:
            <input
              type="text"
              name="historyOfIllness"
              value={patient.historyOfIllness}
              onChange={handleInputChange}
              className='profiledata'
            />
            <br />
            Medical Report If available: <input type="file" className='profiledata' />
          </label>
          <br />
          <label>
            State Medicines You Are Currently On:
            <input
              type="text"
              name="currentMedicines"
              value={patient.currentMedicines}
              onChange={handleInputChange}
              className='profiledata'
            />
            <br />
            Medical Report If available: <input type="file" className='profiledata' />
          </label>
          <br />
          <label>
            Vaccination Report If available:
            <input
              type="file"
              name="vaccinationReport"
              value={patient.vaccinationReport}
              onChange={handleInputChange}
              className='profiledata'
            />
          </label>
          <br />
          <button className='regsubmit' id='editprofile'>Edit</button>
        </form>
      </div>
      <div>
        <h2>Preview:</h2>
        {/* <p>
          {`Name: ${patient.firstName} ${patient.lastName}, Age: ${patient.age}, Gender: ${patient.gender}, Address: ${patient.address}, Contact: ${patient.contactNumber}`}
        </p> */}
      </div>
    </div>
  );
};

export default Profile;
