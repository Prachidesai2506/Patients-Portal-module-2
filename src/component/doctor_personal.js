import React, { useState } from 'react';
import logo1 from './medisync.png';
import Logout from './shutdown.png';
const ProfileSection = () => {
  // State for storing personal data
  const [personalData, setPersonalData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  // State for storing degree data
  const [degreeData, setDegreeData] = useState({
    degree: '',
    college: '',
    year: '',
  });

  // Handler for updating personal data
  const handlePersonalDataChange = (e) => {
    const { name, value } = e.target;
    setPersonalData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for updating degree data
  const handleDegreeDataChange = (e) => {
    const { name, value } = e.target;
    setDegreeData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can do something with the collected data, like sending it to a server or storing it locally
    console.log("Personal Data:", personalData);
    console.log("Degree Data:", degreeData);
  };

  return (
    <div>
        <header>
        <img src={logo1} alt="l"  />
        <h1>MEDIsync</h1>
        <p><img className='logout' src={Logout} alt="" />logout</p></header>
      <h2>Doctor Profile</h2>
      <form onSubmit={handleSubmit}>
        {/* Personal Data Inputs */}
        <label>
          Name:
          <input type="text" name="name" value={personalData.name} onChange={handlePersonalDataChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={personalData.email} onChange={handlePersonalDataChange} />
        </label>
        <br />
        <label>
          Phone:
          <input type="tel" name="phone" value={personalData.phone} onChange={handlePersonalDataChange} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" name="address" value={personalData.address} onChange={handlePersonalDataChange} />
        </label>
        <br />
        {/* Degree Data Inputs */}
        <h3>Degree Information</h3>
        <label>
          Degree:
          <input type="text" name="degree" value={degreeData.degree} onChange={handleDegreeDataChange} />
        </label>
        <br />
        <label>
          College:
          <input type="text" name="college" value={degreeData.college} onChange={handleDegreeDataChange} />
        </label>
        <br />
        <label>
          Year:
          <input type="text" name="year" value={degreeData.year} onChange={handleDegreeDataChange} />
        </label>
        <br />
        <label>
          Certificate:
          <input type="file" name="file" value={degreeData.file} onChange={handleDegreeDataChange} />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default ProfileSection;
