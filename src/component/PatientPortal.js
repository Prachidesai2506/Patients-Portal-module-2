import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import doctor from './doctor(2).png';
import patient from './patient(1).png';
import './index.css';
import Main from './main'
import Medisync from './medisync.png'

function PatientPortal(){
  
  const doclogin = () => {
    // const [displayblock, setdisplayblock] = useState(false);

    // // Function to toggle the state
    // const toggle = () => {
    //   setdisplayblock(!displayblock);
    }
  
  const patlogin = () => {};
const [email ,setEmail]=useState("");
const [password ,setpassword]=useState("");
const [Number ,setapplication]=useState("");
// const handleOnSubmit = async (e) => {
//   e.preventDefault();
 
//    axios.post('',{email,password})
//    .then(result => console.log(result))
//    .catch(err=> console.log(err))
//     }
   
  return(  
    
    <div className='main'>
    <div className='logo'>
      <img src={Medisync} alt="" className='medilogo' />
      <h1 className='mainlogo'>MEDIsync</h1>
      <p class='slogan'>Wellness in Your Hands, Anytime, Anywhere !!!</p>
    </div>
    <div className='loginarea'>
      <div className='logon'>
        <div className='switch'>
          <button className='s' id='doctor' onClick={doclogin} >
            <img src={doctor} alt="doctor" className='doc' /><p>Doctor</p>
          </button>
          <button className='s' id='patient' onClick={patlogin}>
            <img src={patient} alt="patient" className='pat' /><p>Patient</p>
          </button>
        </div>
        <h1 className='login'>Login</h1>
        <div className='data_pat' >
          <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <input type="number" placeholder='Application no' value={Number} onChange={(e) => setapplication(e.target.value)}/>
        </div>
        <div className='data_doc' >
          <input type="email" placeholder='email'  value={email} onChange={(e) => setEmail(e.target.value)}/>
          <br />
          <input type="password" placeholder='password' value={password} onChange={(e) => setpassword(e.target.value)}/>
        </div>
       
        <Link to="/mainpage"><button className='submit' type='submit' >Login</button></Link>
        <div className="reg">
        
        <Link to="/register" className='register'>Not yet Registered?</Link>
      <br />
        <Link>Forgot Password</Link>
        <br />
        <Link>Admin</Link>
        </div> 
</div>
    </div>
  </div>
   
  )
}

export default PatientPortal;
// ReactDOM.render(<Login/>,document.getElementById('log'))