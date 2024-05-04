// import logo from './logo.svg';
// import './App.css';
// import Home from "./component/Home"
import Login from "./component/Login"
import Signup from "./component/Signup"
import Main from './component/main';
import Profile_data from "./component/profile";
import Appointment from './component/appointment';
import Medical_data from './component/medicalhistory';
import Help from './component/help';
import Doctor1 from './component/doctor_personal';
import Doctor2 from './component/medicalrecord';
import Doctor3 from './component/docappoint';
import Medicines from './component/medicines';
import Doclogin from './component/doclogin';
import Doctordash from './component/doctor_dashboard';
import Docsignup from './component/docsignup';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {useState} from 'react';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Main/>}/>
          {/* <Route path="mainpage" element={<Main/>}/> */}
        <Route path="profile_data" element={<Profile_data/>} />
        <Route path="appointment" element={<Appointment/>}/>
        <Route path="medical_data" element={<Medical_data/>}/>
        <Route path="help" element={<Help/>}/>
        <Route path="doctor_profile" element={<Doctor1/>}></Route>
        <Route path="medi" element={<Doctor2/>}></Route>
        <Route path="docappoint" element={<Doctor3/>}></Route>
        <Route path="medicines" element={<Medicines/>}></Route>
        <Route path="doclogin" element={<Doclogin/>}></Route>
        <Route path="docdash" element={<Doctordash/>}></Route>
        <Route path="docsignup" element={<Docsignup/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
