import React, { useEffect, useState } from 'react'

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
            if(login.password == 'admin12345'){
            localStorage.setItem('adminlog', 1)
            alert('Login successfully')
        }
        else{
            alert('Incorrect Password')
        }
    }
        else {
            alert("Sorry !! invalid Credentials")
        }
    }
    return (
        


                <div>

                    <body id="signup">
                        <main class="container1">
                            <div class="back"></div>
                            <div class="brand">
                                <div class="logo">
                                    <img
                                        height="64"
                                    />
                                    <h1>
                                        
                                        ADMIN PANEL
                                    </h1>
                                </div>
                            </div>

                            <div class="formWrapper">
                                <div class="form">
                                    <h2>ADMIN LOGIN</h2>
                                    <form onSubmit={onsubmit}>

                                        <div class="inputWrapper">
                                            <input
                                                type="text"
                                                name="name"
                                                value={login.name}
                                                onChange={changehandleSubmit}
                                                required
                                            />
                                            <label for="">UserName</label>
                                        </div>



                                        <div class="inputWrapper">
                                            <input
                                                type="password"
                                                name="password"
                                                value={login.password}
                                                onChange={changehandleSubmit}
                                                required
                                            />
                                            <label for="password">Password</label>
                                        </div>

                                        <input

                                            type="submit"
                                            id='login'

                                        />
                                    </form>


                                </div>
                            </div>
                        </main>
                    </body>
                </div>
           
            )

}

            export default AdminLogin