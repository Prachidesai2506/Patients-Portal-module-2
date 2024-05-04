import React from 'react';
import profile_pic from './patient(1).png'
import logo1 from './medisync.png'
import appointment from './doctor-consultation.png'
import history_d from './health-report.png'
import help from './help-desk.png'
import Logout from './shutdown.png';
import medicines from './medicine.png';
import { Link } from "react-router-dom";
import { useLocation} from "react-router-dom"
function main(){
  return(  
    <div>
       <header>
        <img src={logo1} alt="l"  />
        <h1>MEDIsync</h1>
        <Link to='/'><p><img className='logout' src={Logout} alt="" />logout</p></Link></header>
        <br />
        {/* <h3>Hello {window.location.state.id}  </h3> */}
        <p className='slogan'>Welcome to the Medisync app which is your personal portal where you can store your old medical history and keep update with
    your Medical condition. So stay updated and stay healthy. </p>
   <div className='mainbar'>
  
    <div className='navs' id='profile'><img src={profile_pic} alt="" className='images'/><Link to="/profile_data"><p className='nav_title'>Profile</p></Link> </div>
    <div className='navs' id='appointment'> <img src={appointment} alt="" className='images' /><Link to="/appointment"><p className='nav_title'>Appointment Allocation</p></Link></div>
    <div className='navs' id='history'><img src={history_d} alt="" className='images'/><Link to="/medical_data"><p className='nav_title'>Medical History </p></Link></div>
    <div className='navs' id='help'><img src={help} alt="" className='images' /><Link to="/help"><p className='nav_title'>Help</p></Link></div>

  </div>
  <div className='navs' id='medicines'><img src={medicines} alt="" className='images' /><Link to="/medicines"><p className='nav_title'>Medicines</p></Link></div>
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
