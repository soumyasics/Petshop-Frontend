import { useState } from "react";
import axiosInstance from "../../BaseURL";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import "./PetShopLogin.css";

const PetShopLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "remember-me") {
      setIsChecked(!isChecked);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
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

    const credentials = { email, password,isChecked,  role: "petshop" };
    sendDataToServer(credentials);
  };

  const sendDataToServer = (credentials) => {
    axiosInstance.post('/petshopLogin', credentials).then((res) => {
        console.log("response", res);
    })
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="petshop-login-page">
      <h1>Pet shop Login </h1>
      <form action="">
        <input
          className="credentials"
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <div className="petshop-password-container">
          <input
            className="credentials"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <div className="pet-eye-login-div" onClick={togglePasswordVisibility}>
            {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
          </div>
        </div>
        <div className="petshop-login-remember-me">
          <div>
            <input type="checkbox" name="remember-me" onChange={handleChange} />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <p>Forgot Password</p>
        </div>
        <input type="submit" onClick={handleSubmit} value="Login" />
      </form>
    </div>
  );
};
export default PetShopLogin;
