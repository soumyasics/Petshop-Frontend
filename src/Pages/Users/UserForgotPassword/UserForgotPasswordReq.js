import React from 'react'
import { useState } from "react";
import loginDog from "../../../Assets/Group 115.png";
import zookeper from "../../../Assets/zookeper-logo.png";
import { Form } from "react-bootstrap";
import axiosInstance from '../../../BaseURL';
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import './UserForgotPwdReq.css'
// Done by Soumya on Nov 4
function UserForgotPwdReq() {
  const [email, setEmail] = useState("");
  

  const handleSubmit = () => {
   
    if (!email ) {
      alert("Please enter Your Mail Id");
      return;
    }
    
    const credentials = { email};
    sendDataToServer(credentials);

    console.log(credentials);
  };

  const sendDataToServer = (credentials) => {
    
    axiosInstance.post(`/userForgotPasswordReq`, credentials).then((res) => {
      if (res.data.status === 200) {
        alert("Request send successful");
      } else {
        alert("Sorry !! Some Internal Issues");
      }
    });
  
  };

 
  return (
    <>
      <div className="userForgotPwdreq-page-logo-container">
        <img src={zookeper} alt="zookeper-logo" />
        <p>ZOOKEPER</p>
      </div>
      <div className="userForgotPwdreq-page-container">
        <div className="userForgotPwdreq-page-left-section">
          <div className="userForgotPwdreq-form-container">
            <h1>
            Password Reset
            </h1>
            <div class="userForgotPwdreq-text1">To reset your password, enter the email address you use to sign in to iofrm</div>
            <form>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="userForgotPwdreq-signin-btn-container">
              <button onClick={handleSubmit} className="userForgotPwdreq-signin-btn">
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