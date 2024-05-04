import React from 'react';

// import './index.css';
import profile from './doctor(2).png';
import logo1 from './medisync.png';
import Logout from './shutdown.png';
import appointment from './doctor-consultation.png';
import history from './patient(1).png';
import help from './help-desk.png';
import { Link } from 'react-router-dom';

function main(){
  return(  
    <div>
       <header>
        <img src={logo1} alt="l"  />
        <h1>MEDIsync</h1>
        <p><img className='logout' src={Logout} alt="" />logout</p></header>
        <br />
        <p className='slogan'>Welcome to the Medisync app which is your personal portal where you can store your old medical history and keep update with
    your Medical condition. So stay updated and stay healthy. </p>
   <div className='mainbar'>
  
    <div className='navs' id='profile'><img src={profile} alt="" className='images'/><Link to="/doctor_profile"><p className='nav_title'>Profile</p></Link> </div>
    <div className='navs' id='appointment'> <img src={appointment} alt="" className='images' /><Link to="/docappoint"><p className='nav_title'>Appointment List</p></Link></div>
    <div className='navs' id='history'><img src={history} alt="" className='images'/><Link to="/medical"><p className='nav_title'>Patients Details</p></Link></div>
    <div className='navs' id='help'><img src={help} alt="" className='images' /><Link to="/help"><p className='nav_title'>Help</p></Link></div>
  
  </div>
  <hr />
  <div className="about">
    <ul><h3>All about our Web Application</h3></ul>
    <br />
    <li>The Patient's are allowed to view their medical history.</li>
    <li>The Patient's are allowed to get their appoinments booked in an online mode.</li>
    <li>Doctors can view patients medical history.</li>
    <li>Doctors can float the patients prescription and about their medical health.</li>
    <li>Patients can keep track of their health condtion.</li>
    <br />
  </div>
  <footer id='footer'>
<p>MEDIsync the app to reach Wellness !!</p>
<p>contact : 1234567890</p>
    </footer>
    </div>
  
   
  )
}
export default main;
