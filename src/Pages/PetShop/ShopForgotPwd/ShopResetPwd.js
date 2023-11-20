import React, { useEffect, useState } from 'react'
import CommonNavbar from '../../Common/CommonNavbar'
import './ShopResetPwd.css'
import axiosInstance from '../../../BaseURL';
import { useLocation } from 'react-router-dom';
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
function ShopResetPwd() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  let passwordMatches=false
  const location = useLocation();
  const navigate=useNavigate()


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
      alert("Password doesn't match !!")
    }
    else {
      sendDataToServer(credentials, e);
    }
    console.log(credentials);
  };

  const sendDataToServer = (credentials, e) => {

    axiosInstance.post(`/shop/shopForgotPassword`, credentials).then((res) => {
      console.log(res);
      if (res.data.status === 200) {
        alert("Password Reset successful");
        navigate('/petshop/login')
      } else {
        alert("Password Reset failed.");
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
    <div>
      <CommonNavbar />
      <div className='shop-reset-pwd-first'>
        <div className='shop-reset-pwd-sec'>
          <h3 className='shop-reset-pwd-h1'>ZOOKEEPER</h3>
          <h2 className='shop-reset-pwd-h2'>Reset Password</h2>
          <div className='shop-reset-pwd-div2'>
          Set the new password for your account so you can login and access all featuress.
          </div>
          <form onSubmit={handleSubmit}>
          
          <div>
               
                <input
                  type={showPassword1 ? "text" : "password"}
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  className=' form-control shop-reset-pwd-input1'
                />
                <div
                  className="userForgotPwd-eye-div"
                  onClick={togglePasswordVisibility1}
                >
                  {showPassword1 ? <AiFillEye /> : <AiFillEyeInvisible />}
                </div>
              </div>

              <div>
                <input
                  type={showPassword2 ? "text" : "password"}
                  placeholder="Confirm your password"
                  onChange={(e) => {
                    setNewPassword(e.target.value)

                  }}
                  className=' form-control shop-reset-pwd-input1'
                />
                <div
                  className="userForgotPwd-eye-div"
                  onClick={togglePasswordVisibility2}
                >
                  {showPassword2 ? <AiFillEye /> : <AiFillEyeInvisible />}
                </div>
              </div>

          
           <div className='shop-reset-pwd-div3'>
            <button type="submit" className='shop-reset-pwd-button'>CONTINUE</button>
          </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default ShopResetPwd