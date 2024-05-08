
import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom/client';
// import './index.css';
import { useNavigate, Link } from "react-router-dom"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios';
import patient from './doctor(2).png';



function Docregistration() {

  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  const history = useNavigate();
  async function submit(e) {
    e.preventDefault();
    try {
      console.log(email, password)
      axios.post("http://localhost:3000/docsignup", { email, password }).then(res => {
        if (res.data == "already exist") {
          alert("User already exist")
          history("/home", { state: { id: email } })
          
         
        }
        else if (res.data == "notexist") {
          alert("Successfully Registered")
          history("/home", { state: { id: email } })
           
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
  return (<div>
    <div className='navbar'>
      <h1 id='bar'>MEDIsync</h1>
    </div>
    <h2>REGISTRATION FORM</h2>
    <div className='register-area'>

      <div className="patimage"><img src={patient} alt="patient" className="PatImage" /></div>
      <h3>Personal Details :</h3>
      <form action="">

        <input type="email" placeholder='email' onChange={(e) => { setEmail(e.target.value) }} />
        <input type="password" placeholder='password' onChange={(e) => { setpassword(e.target.value) }} />



        <Link to='home'><button className='regsubmit' onClick={submit} id='patalign'>submit</button></Link>
        {/* <Link to='/'> <input className='regsubmit' type='submit' onClick={submit}/>Sub</Link> */}
        <Link to='/doclogin'><button className='regsubmit' id='patalign'>Login</button></Link>
      </form>
    </div>

    <footer id='footer'>
      <p>MEDIsync the app to reach Wellness !!</p>
      <p>contact : 901609****</p>
    </footer>
  </div>
  );
}

export default Docregistration;