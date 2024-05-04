import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import './index.css';

import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Link } from 'react-router-dom';
import doctor from './doctor(2).png';
import patient from './patient(1).png';
import reportWebVitals from './reportWebVitals';

function Patregis() {
  const doclogin = () => {};

  const patlogin = () => {};

  return (<div>
    <div className='navbar'>
    <h1 id='bar'>MEDIsync</h1>
     </div>
     <h2>REGISTRATION FORM</h2>
     <div className='register-area'>
       
       <div className="patimage"><img src={patient} alt="patient" className="PatImage"/></div>
       <h3>Personal Details :</h3>
       <form action="">
       <input type="text" placeholder='name' />
       <input type="email" placeholder='email'/>
       <input type="number" placeholder='number'/>
       <input type="Date" placeholder='birthdate'/>
       <input type="text" placeholder='location(city)'/>
 
       <h3>Medical Details</h3>
       <input type="Date" placeholder='last physical checkup'/>
       <input type="text" placeholder='major illness'/>
       <input type="text" placeholder='family doctor' />
       <input type="text" placeholder='allergies' />
       <input type="text" placeholder='chronic diseases'/>
       
       <p>Are you under any medication?</p>
       <input type="radio" />yes
     <br />
       <input type="radio" />No
 <br />
     <Link to='/'> <button class='regsubmit'>Submit</button></Link>
     </form>
     </div>
   
    <footer id='footer'>
<p>MEDIsync the app to reach Wellness !!</p>
<p>contact : 901609****</p>
    </footer>
    </div>
   );
}

export default Patregis;