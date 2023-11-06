import React from 'react'
import { useState } from "react";
import loginDog from "../../../Assets/Group 115.png";
import zookeper from "../../../Assets/zookeper-logo.png";
import { Form } from "react-bootstrap";
import axiosInstance from '../../../BaseURL';
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import './UserForgotPwdReq.css'
import UserNavbar from '../UserNavbar/UserNavbar';
import UserForgotPwdAftrReq from './UserForgotPwdAftrReq';
import { useNavigate } from 'react-router-dom';

// Done by Soumya on Nov 4
function UserForgotPwdReq() {
  const [email, setEmail] = useState("");
  const navigate=useNavigate()
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email ) {
      alert("Please enter Your Mail Id");
      return;
    }
    
    const credentials = { email};
    sendDataToServer(credentials,e);

    console.log(credentials);
  };

  const sendDataToServer = (credentials,e) => {
    e.preventDefault();
    console.log(credentials);
    axiosInstance.post(`/userForgotPasswordReq`, credentials).then((res) => {
     console.log(res);
      if (res.data.status === 200) {
        alert("Request send successful");
   navigate('/user-forgot-password-aftr-req')
      } else {
        alert("Sorry !! Some Internal Issues");
      }
    });
  
  };

 
  return (
    <>
    <UserNavbar/>
    
      <div className="userForgotPwdreq-page-container">
        <div className="userForgotPwdreq-page-left-section">
          <div className="userForgotPwdreq-form-container">
            <h1>
            Password Reset
            </h1>
            <div class="userForgotPwdreq-text1">To reset your password, enter the email address you use to sign in to iofrm</div>
            <form  >
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="userForgotPwdreq-signin-btn-container">
              <button type='submit' onClick={handleSubmit} className="userForgotPwdreq-signin-btn">
            Send Reset Link
              </button>
            </div>
              
            </form>



            
          </div>
        </div>
        <div className="userForgotPwdreq-page-right-section">
          <img src={loginDog} alt="dog-img" />
        </div>
      </div>
    </>
  )
}

export default UserForgotPwdReq