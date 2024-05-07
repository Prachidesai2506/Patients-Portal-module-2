import React, { useState } from 'react';
import logo1 from './medisync.png';
import Logout from './shutdown.png';
import axios from 'axios';
const ProfileSection = () => {
  // State for storing personal data
  

  const [name, setname] = useState('')
const [email, setemail] = useState('')
const [phone, setphone] = useState('')
const [address, setaddress] = useState('')
const [degree, setdegree] = useState('')
const [college, setcollege] = useState('')
const [year, setyear] = useState('')
const [file, setfile] = useState('')
const [speciality, setspeciality] = useState('')
  // Event handler to update patient information
  async function submit(e) {
    e.preventDefault();
    try {
      axios.post("http://localhost:3000/doctor_profile", {name,email,phone,address,degree,speciality,college,year}).then(res => {
        if (res.data == "exist") {
          alert("User already exist")
          
        }
        else {
          alert("Data successfully stored")
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
    <div>
        <header>
        <img src={logo1} alt="l"  />
        <h1>MEDIsync</h1>
        <p><img className='logout' src={Logout} alt="" />logout</p></header>
      <h2>Doctor Profile</h2>
      <form>
        {/* Personal Data Inputs */}
        <label> 
          Name  :
          <input type="text" className='doc_data' name="name" value={name} onChange={(e) => { setname(e.target.value) }} />
        </label>
        <br />
        <label>
          Email :
          <input type="email" className='doc_data' name="email" value={email} onChange={(e) => { setemail(e.target.value) }} />
        </label>
        <br />
        <label>
          Phone :
          <input type="tel" className='doc_data' name="phone" value={phone} onChange={(e) => { setphone(e.target.value) }} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" className='doc_data' name="address"value={address} onChange={(e) => { setaddress(e.target.value) }} />
        </label>
        <br />
        {/* Degree Data Inputs */}
        <h3>Degree Information</h3>
        <label>
          Degree:
          <input type="text" className='doc_data' name="degree" value={degree} onChange={(e) => { setdegree(e.target.value) }} />
        </label>
        <br />
        <label>
          Speciality:
          <input type="text" className='doc_data' name="speciality" value={speciality} onChange={(e) => { setspeciality(e.target.value) }} />
        </label>
        <br />
        <label>
          College:
          <input type="text" className='doc_data' name="college" value={college} onChange={(e) => { setcollege(e.target.value) }} />
        </label>
        <br />
        <label>
          Year:
          <input type="text" className='doc_data' name="year" value={year} onChange={(e) => { setyear(e.target.value) }} />
        </label>
        <br />
        <label>
          Certificate:
          <input type="file" name="file" value={file} onChange={(e) => { setfile(e.target.value) }} />
        </label>
        <br />
        <button className='regsubmit' type="submit" onClick={submit} id='doc_save'>Save</button>
      <br />
      </form>
      <br />
    </div>
  );
};

export default ProfileSection;
