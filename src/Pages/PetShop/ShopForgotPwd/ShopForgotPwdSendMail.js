import React, { useState } from 'react'
import { BsCheckCircle } from "react-icons/bs";
import './SopForgotPwdMailSend.css'
import check1 from "../../../Assets/check1.svg"
import CommonNavbar from '../../Common/CommonNavbar'
import axiosInstance from '../../../BaseURL';


function ShopForgotPwdSendMail() {
  const [email, setEmail] = useState("");

  return (
    <div>
      <CommonNavbar />
      <div className='shop-forgot-pwd-send-first'>
        <div className='shop-forgot-pwd-send-sec'>
          <h3 className='shop-forgot-pwd-send-h1'>ZOOKEEPER</h3>
          <div className='shopForgotPwdAftrreq-check-container'>  <img src={check1} className='shopForgotPwdAftrreq-check' />
          </div>
          <div class="shopForgotPwdAftrreq-text1"><p className='shop-forgot-color'>Password link sent Succesfully</p></div>
          <div class="shopForgotPwdAftrreq-text2">Please check your inbox</div>


        </div>
      </div>
      <input type="text" className=' form-control shop-forgot-pwd-input1' />
      <div className='shop-forgot-pwd-div3'>
        <button type="submit" className='shop-forgot-pwd-button'>CONTINUE</button>
      </div>
    </div>


  )
}

export default ShopForgotPwdSendMail