import React from 'react'
import { useState } from "react";
import loginDog from "../../../Assets/Group 115.png";
import zookeper from "../../../Assets/zookeper-logo.png";
import { Form } from "react-bootstrap";
import axiosInstance from '../../../BaseURL';
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import './UserForgotPwd.css'
// Done by Soumya on Nov 3
function UserForgotPwd() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [passwordMatches, setPasswordMatches] = useState(false);

  const handleSubmit = () => {
    checkPwd()
    if (!email || !password || !newPassword) {
      alert("Please enter all the fields");
      return;
    }
    
    const credentials = { email, password, newPassword };
    sendDataToServer(credentials);

    console.log(credentials);
  };

  const sendDataToServer = (credentials) => {
    if(!passwordMatches)
    return;
  else{
    axiosInstance.post(`/userForgotPassword`, credentials).then((res) => {
      if (res.data.status === 200) {
        alert("Password Reset successful");
      } else {
        alert("Password Reset failed");
      }
    });
  }
  };

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };
  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };
  const checkPwd = () => {
    if (password != newPassword) {
      alert("password doesn't matches")
     
    } else {
     setPasswordMatches(true)
    }
  }
  return (
    <>
      <div className="userForgotPwd-page-logo-container">
        <img src={zookeper} alt="zookeper-logo" />
        <p>ZOOKEPER</p>
      </div>
      <div className="userForgotPwd-page-container">
        <div className="userForgotPwd-page-left-section">
          <div className="userForgotPwd-form-container">
            <h1>
              Reset Your<br />Password
            </h1>
            <form>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label>New Password: </label>
                <input
                  type={showPassword1 ? "text" : "password"}
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  className="userForgotPwd-eye-div"
                  onClick={togglePasswordVisibility1}
                >
                  {showPassword1 ? <AiFillEye /> : <AiFillEyeInvisible />}
                </div>
              </div>

              <div>
                <label>Confirm Password: </label>
                <input
                  type={showPassword2 ? "text" : "password"}
                  placeholder="Enter your password"
                  onChange={(e) => {
                    setNewPassword(e.target.value)
                    
                  }}
                />
                <div
                  className="userForgotPwd-eye-div"
                  onClick={togglePasswordVisibility2}
                >
                  {showPassword2 ? <AiFillEye /> : <AiFillEyeInvisible />}
                </div>
              </div>
            </form>



            <div className="userForgotPwd-signin-btn-container">
              <button onClick={handleSubmit} className="userForgotPwd-signin-btn">
                Reset
              </button>
            </div>
          </div>
        </div>
        <div className="userForgotPwd-page-right-section">
          <img src={loginDog} alt="dog-img" />
        </div>
      </div>
    </>
  )
}

export default UserForgotPwd