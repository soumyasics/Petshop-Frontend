// 01-11-2023 Build by Anand R P
import { useState } from "react";
import loginDog from "../../Assets/Images/login-dog-img.png";
import zookeper from "../../Assets/Images/zookeper-logo.png";
import "./UserLoginPage.css";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }
    console.log(email, password);
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
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </form>

            <div className="remember-me-container">
              <div>
                <input type="checkbox" name="remember-me" />
                <label for="remember-me">Remember me</label>
              </div>
              <p>Forgot Password?</p>
            </div>

            <p className="dont-have-account">
              Don't have an account? <span>Sign Up</span>
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
