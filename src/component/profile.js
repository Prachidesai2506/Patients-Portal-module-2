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
const [files, setfiles] = useState('')
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
       <h3>Add your documents here !!</h3>
       <input type="text" value={files} onChange={(e) => { setfiles(e.target.value) }}/>
       <button className='regsubmit' >submit</button>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Profile;
