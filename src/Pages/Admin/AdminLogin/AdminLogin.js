import React, { useEffect, useState } from 'react'
import './AdminLogin.css'
import img1 from "../../../Assets/image_2023_11_10T12_08_55_676Z.png"
function AdminLogin() {
    const [login, setLogin] = useState({
        name: '',
        password: ''
    })
    const changehandleSubmit = (a) => {
        setLogin({ ...login, [a.target.name]: a.target.value })

    }
    useEffect(() => {
        console.log(login);
    })



    const onsubmit = (b) => {
        b.preventDefault()
        if (login.name == 'admin') {
            if (login.password == 'admin12345') {
                localStorage.setItem('adminlog', 1)
                alert('Login successfully')
            }
            else {
                alert('Incorrect Password')
            }
        }
        else {
            alert("Sorry !! invalid Credentials")
        }
    }
    return (
        <div className='admin-login-bg'>
            <div className="row">
               
                <div className="col">
               
                    <h1 className='admin-login-text1'> <img src={img1}/>
                        welcome To<br/><span className='admin-login-text2'>
                            ADMIN PANEL</span>
                    </h1>

                </div>


                <div className='col'>
                  
                    <h2 className='admin-login-text3'>ADMIN LOGIN</h2>
                    <hr className='admin-login-hr'/>
                    <form onSubmit={onsubmit} className='admin-login-form'>

                        <div class="">
                            <input
                                type="text"
                                name="name"
                                value={login.name}
                                onChange={changehandleSubmit}
                                required
                                placeholder='USERNAME'
                            />
                            
                        </div>



                        <div class="inputWrapper">
                            <input
                                type="password"
                                name="password"
                                value={login.password}
                                onChange={changehandleSubmit}
                                placeholder='PASSWORD'
                                required
                            />
                          
                        </div>

                        <button

                            type="submit"
                            id='login'
                            className='className="btn btn-primary btn-sm rounded-start-pill rounded-end-pill btn1 align-items-center admin-login-btn11"'

                        >LOGIN</button>
                    </form>
</div>

                </div>

            </div>
   

    )

}

export default AdminLogin