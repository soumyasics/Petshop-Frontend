import React from 'react'
import './ShopForgotPwd.css'
import CommonNavbar from '../../Common/CommonNavbar'
function shopForgotPwd() {
    return (
        <div>
            <CommonNavbar/>
            <div className='shop-forgot-pwd-first'>
                <div className='shop-forgot-pwd-sec'>
                    <h3 className='shop-forgot-pwd-h1'>ZOOKEEPER</h3>
                    <h2 className='shop-forgot-pwd-h2'>Forgot password</h2>
                    <div className='shop-forgot-pwd-div2'>
                        Enter your email for the verification proccess,
                        we will send 4 digits code to your email.
                    </div>
                    <input type="text" className=' form-control shop-forgot-pwd-input1' />
                    <div className='shop-forgot-pwd-div3'>
                        <button type="submit" className='shop-forgot-pwd-button'>CONTINUE</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default shopForgotPwd