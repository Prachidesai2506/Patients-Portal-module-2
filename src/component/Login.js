import React, { useState } from 'react';

import axios from 'axios';
import { useNavigate, Link } from "react-router-dom"
import doctor from './doctor(2).png';
import patient from './patient(1).png';
// import './index.css';
// import Main from './main'
import Medisync from './medisync.png'

function PatientPortal() {

    const history=useNavigate();
    const [email1, setEmail1] = useState('');
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [password1, setpassword1] = useState('');

    async function submit(e){
       e.preventDefault();
       try{
        console.log(email, password)
        await axios.post("http://localhost:3000/",{email,password}).then(res=>{
            console.log("User have not yet registered")
            if(res.data=="exist")
            {
               history("/home",{state:{id:email}})
            }
           else if(res.data=="notexist")
            {
               alert("User have not yet registered")
               console.log("User have not yet registered")
            }
        })
        .catch(e=>{
            alert("wrong details")
            console.log(e);
        })
       }
       catch(e){
           console.log(e)
       }
    }

    return (

        <div className='main'>
            <div className='logo'>
                <img src={Medisync} alt="" className='medilogo' />
                <h1 className='mainlogo'>MEDIsync</h1>
                <p class='slogan'>Wellness in Your Hands, Anytime, Anywhere !!!</p>
            </div>
            <div className='loginarea'>
                <div className='logon'>
                    <div className='switch'>
                        {/* <button className='s' id='doctor' >
                            <img src={doctor} alt="doctor" className='doc' /><p>Doctor</p>
                        </button> */}
                        <button className='s' id='patient' >
                            <img src={patient} alt="patient" className='pat' /><p>Patient</p>
                        </button>
                        
                    </div>
                    <form action="POST">
                        <h1 className='login'>Login</h1>
                        <div className='data_pat' >
                            <input type="email" placeholder='email' value={email} onChange={(e) => {setEmail(e.target.value)}} />
                            <br />
                            <input type="password" placeholder='password' value={password} onChange={(e) => {setpassword(e.target.value)}} />
                        </div>
                        <div className='data_doc' >
                            <input type="email" placeholder='email' value={email1} onChange={(e) => {setEmail1(e.target.value)}} />
                            <br />
                            <input type="password" placeholder='password' value={password1} onChange={(e) =>{setpassword1(e.target.value)} }/>
                        </div>

                        <Link to="/home"><button className='submit' onClick={submit}>Login</button></Link>
                        <div className="reg">

                            <Link to="/signup" className='register'>Not yet Registered?</Link>
                            <br />
                            <Link>Forgot Password</Link>
                            <br />
                            <Link to="/doclogin">Doctor</Link>
                            <br />
                            <Link>Admin</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default PatientPortal;
// ReactDOM.render(<Login/>,document.getElementById('log'))