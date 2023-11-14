import React from 'react'
import { useState } from "react";
import loginDog from "../../../Assets/Group 115.png";
import zookeper from "../../../Assets/zookeper-logo.png";
import { Form } from "react-bootstrap";
import axiosInstance from '../../../BaseURL';
import { BsCheckCircle } from "react-icons/bs";
import './UserForgotPwdAftrReq.css'
import UserNavbar from '../UserNavbar/UserNavbar';
// Done by Soumya on Nov 6
function UserForgotPwdAftrReq() {
 
     
     
      return (
        <>
         <UserNavbar/>
          <div className="userForgotPwdAftrreq-page-container">
            <div className="userForgotPwdAftrreq-page-left-section">
              <div className="userForgotPwdAftrreq-form-container">
                
             <div className='userForgotPwdAftrreq-check-container'> <BsCheckCircle className='userForgotPwdAftrreq-check'></BsCheckCircle></div> 
             <div class="userForgotPwdAftrreq-text1">Password link sent</div>
                <div class="userForgotPwdAftrreq-text2">Please check your inbox</div>
                <form  >
                 
                
                  
                </form>
    
    
    
                
              </div>
            </div>
            <div className="userForgotPwdAftrreq-page-right-section">
              <img src={loginDog} alt="dog-img" />
            </div>
          </div>
        </>
      )
 
}

export default UserForgotPwdAftrReq