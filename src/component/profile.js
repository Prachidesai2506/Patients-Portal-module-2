import React, { useState } from 'react';
import logo1 from './medisync.png';
import Logout from './shutdown.png';
import axios from 'axios';
const Profile = () => {
  // State to manage patient information
  // const [patient, setPatient] = useState([]);
const [files, setfiles] = useState('')
const [fname, setfname] = useState('')
const [lname, setlname] = useState('')
const [Age, setage] = useState('')
const [Gender, setgender] = useState('')
  // Event handler to update patient information
  async function submit(e) {
    e.preventDefault();
    try {
      axios.post("http://localhost:3000/profile_data", {fname,lname,Age,Gender}).then(res => {
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
              
              value={fname} onChange={(e) => { setfname(e.target.value) }}
              className='profiledata'
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={lname} onChange={(e) => { setlname(e.target.value) }}
              className='profiledata'
            />
          </label>
          <br />
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={Age} onChange={(e) => { setage(e.target.value) }}
              className='profiledata'
            />
          </label>
          <br />
          <label>
            Gender:
            <select name="gender" value={Gender} onChange={(e) => { setgender(e.target.value) }} >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
          <br />

          <label>
       <h3>Add your documents here !!</h3>
       <input type="file" value={files} onChange={(e) => { setfiles(e.target.value) }}/>
       <button className='regsubmit' onClick={submit}>submit</button>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Profile;
