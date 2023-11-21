import React, { useState } from 'react'
import './ShopForgotPwd.css'
import axiosInstance from '../../../BaseURL';
import CommonNavbar from '../../Common/CommonNavbar'
import { useNavigate } from 'react-router-dom';


function ShopForgotPwd() {
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
      axiosInstance.post(`/shop/shopForgotPasswordreq`, credentials).then((res) => {
       console.log(res);
        if (res.data.status === 200) {
          alert("Request send successful");
     navigate('/petshop/forgot-pwd-mail-send')
        } else {
          alert("Sorry !! Some Internal Issues");
        }
      });
    
    };



    return (
        <div>
            <CommonNavbar/>
            <div className='shop-forgot-pwd-first'>
                <div className='shop-forgot-pwd-sec'>
                    <h3 className='shop-forgot-pwd-h1'>ZOOKEEPER</h3>
                    <h2 className='shop-forgot-pwd-h2'>Forgot password</h2>
                    <div className='shop-forgot-pwd-div2'>
                        Enter your registered email for the verification proccess,
                        we will send a link to reset your password to your email.
                    </div>
                    <input type="text"name="email"  onChange={(e) => setEmail(e.target.value)}
                     className=' form-control shop-forgot-pwd-input1' />
                    <div className='shop-forgot-pwd-div3'>
                        <button type="submit" onClick={handleSubmit} className='shop-forgot-pwd-button'>CONTINUE</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ShopForgotPwd