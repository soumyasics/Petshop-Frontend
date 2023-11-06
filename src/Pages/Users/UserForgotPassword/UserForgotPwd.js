import React, { useEffect } from 'react'
import { useState } from "react";
import loginDog from "../../../Assets/Group 115.png";
import zookeper from "../../../Assets/zookeper-logo.png";
import { Form } from "react-bootstrap";
import axiosInstance from '../../../BaseURL';
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import './UserForgotPwd.css'
import { useLocation } from 'react-router-dom';
import UserNavbar from '../UserNavbar/UserNavbar';

// Done by Soumya on Nov 3
function UserForgotPwd() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  let passwordMatches=false
  const location = useLocation();


  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setEmail(searchParams.get('id'));
    console.log("email", email);
  }, [])
  const checkPwd = () => {

    console.log("password == newPassword",password,newPassword)
     if (password == newPassword) {
 
      passwordMatches=true
     }
     else
     passwordMatches=false
 
   }
  const handleSubmit = async (e) => {
    e.preventDefault()
    checkPwd()

    console.log("fun ");

 
    if (!password || !newPassword) {
      alert("Please enter all the fields");
      return false;
    }
    const credentials = { email, password, newPassword };
  console.log("passwordMatches",passwordMatches);
    if (!passwordMatches){
      alert("no match")
    }
    else {
      sendDataToServer(credentials, e);
    }
    console.log(credentials);
  };

  const sendDataToServer = (credentials, e) => {

    axiosInstance.post(`/userForgotPassword`, credentials).then((res) => {
      console.log(res);
      if (res.data.status === 200) {
        alert("Password Reset successful");
      } else {
        alert("Password Reset failed");
      }
    });
  
  };

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };
  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };
  
  return (
    <>
         <UserNavbar/>
      <div className="userForgotPwd-page-container">
        <div className="userForgotPwd-page-left-section">
          <div className="userForgotPwd-form-container">
            <h1>
              Reset Your<br />Password
            </h1>
            <form onSubmit={handleSubmit}>


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




              <div className="userForgotPwd-signin-btn-container">
                <button type="submit" className="userForgotPwd-signin-btn">
                  Reset
                </button>

              </div>
            </form>
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