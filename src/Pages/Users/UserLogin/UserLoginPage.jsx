// 01-11-2023 Build by Anand R P
import { useState } from "react";
import loginDog from "../../../Assets/login-dog-img.png";
import zookeper from "../../../Assets/zookeper-logo.png";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import "./UserLoginPage.css";
import axiosInstance from "../../../BaseURL";
import { Link } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleSubmit = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }
    const credentials = { email, password, role: "user" };
    sendDataToServer(credentials);

  };

  const sendDataToServer = (credentials) => {
    axiosInstance.post(`/user/userLogin`, credentials).then((res) => {
      if (res.status === 200) {
        alert("Login successful");
        localStorage.setItem("petshop-token", res.data.token);
        setTimeout(() => {
          navigate("/");
        }, 1000)
      } else {
        alert("Login failed");
      }
    }).catch((err) => {
      console.log(err);
      if (err.response.status === 404 || err.response.status === 401) {
        alert("Please verify your email and password");
      }
    })
  };

  const handleForgotPassword = () => {};

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="login-page-logo-container">
        <img src={zookeper} alt="zookeper-logo" />
        <p>ZOOKEPER</p>
      </div>
      <div className="login-page-container">
        <div className="login-page-left-section">
          <div className="login-form-container">
            <h1>
              YAY, WE LOVE <br /> YOUR PETS
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
                <label> Password: </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  className="login-eye-div"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                </div>
              </div>
            </form>

            <div className="remember-me-container">
              <div>
                <input type="checkbox" name="remember-me" />
                <label for="remember-me">Remember me</label>
              </div>
              <Link to="/user-forgot-password-req"> <p onClick={handleForgotPassword} style={{color:'white'}}>Forgot Password?</p></Link>
            </div>

            <p className="dont-have-account">
              Don't have an account?  <Link to="/user-reg"><span  style={{color:'white'}}>Sign Up</span></Link>
            </p>

            <div className="signin-btn-container">
              <button onClick={handleSubmit} className="signin-btn">
                SIGN IN
              </button>
            </div>
          </div>
        </div>
        <div className="login-page-right-section">
          <img src={loginDog} alt="dog-img" />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
