import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../context/Context';
import axios from "axios"
 import jwt_decode from "jwt-decode";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faCheckSquare, faUserLock } from '@fortawesome/fontawesome-free-solid'


import { useState } from 'react';

import "./login.css"

const  Login = () => {

  const {dispatch} = useContext(AuthContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 

const login = async() => {
const response = await axios.post("http://localhost:9005/api/v1/login", {email, password})
console.log(response)
const token = response.data.result.accessToken;
const decoded = jwt_decode(token);
console.log(decoded)

dispatch({type: "LOGIN", payload: response.data.result.accessToken})



}


  const handleSubmit = async (e) => {
    e.preventDefault();
    login()
  };


  return (
    <div className='app__Login-container'>
      
      <div className='app__Login-details'>
        <h2 className='app__Login-title'>Fintech.africa</h2>

        <h2 className='app__Login-subtitle'>Hi, Welcome back</h2>
        <form onSubmit={handleSubmit}>
        <div>

        <div className='inputField'>
          <label className='app__Login-Label'>Email</label>
          <input id="email"  value={email} name="email" onChange={(e) => setEmail(e.target.value)} title="Email" placeholder="✉️ Enter your email"/>
          {/* <div className='app__login-icons'>
          <FontAwesomeIcon icon="fa-solid fa-envelope" />
          </div> */}
        </div>
         
          

          <div className='inputField'>
          <label className='app__Login-Label'>Password</label>
          <input id="password" value={password} name="password" type="password" onChange={(e) => setPassword(e.target.value)} title="Password" placeholder="🔒 Enter your password"/>
          {/* <div className='app__login-passwordIcon'>
          <FontAwesomeIcon icon="fa-solid fa-lock"/>
          </div> */}
          </div>

          
        </div>
        
        <a href='#' className='app__forgotPassword'>Forgot password?</a>

        <div className='app__login-buttonDiv'>
        <button className="app__login-Button" type ="submit"> 
            Login
        </button>
        </div>
        
        </form>
        <span>Don't have an accout? < a href="#" className='app__create-account'>create an account</a></span>
       
      </div>
      <div className='app__Login-banner'></div>
      </div>
  )
}

export default Login;