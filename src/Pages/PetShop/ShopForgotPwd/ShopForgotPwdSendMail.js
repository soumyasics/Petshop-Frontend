import React from 'react'
import { BsCheckCircle } from "react-icons/bs";
import './SopForgotPwdMailSend.css'
import check1 from "../../../Assets/check1.svg"
function ShopForgotPwdSendMail() {
  return (
    <div>
<div className="shopForgotPwdAftrreq-page-container">
            <div className="shopForgotPwdAftrreq-page-left-section">
              <div className="shopForgotPwdAftrreq-form-container">
                
             <div className='shopForgotPwdAftrreq-check-container'>  <img src={check1} className='shopForgotPwdAftrreq-check'/>
</div> 
             <div class="shopForgotPwdAftrreq-text1">Password link sent</div>
                <div class="shopForgotPwdAftrreq-text2">Please check your inbox</div>
                
    
    
    
                
              </div>
            </div>
            <div className="shopForgotPwdAftrreq-page-right-section">
             
            </div>
          </div>

    </div>
  )
}

export default ShopForgotPwdSendMail