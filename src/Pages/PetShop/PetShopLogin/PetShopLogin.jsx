import { useState } from "react";
import axiosInstance from "../../../BaseURL";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./PetShopLogin.css";
import { Link } from "react-router-dom";

const PetShopLogin = () => {
  const navigate = useNavigate();
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

    const credentials = { email, password, isChecked, role: "petshop" };
    sendDataToServer(credentials);
  };

  const sendDataToServer = (credentials) => {
    axiosInstance
      .post("shop/shopLogin", credentials)
      .then((res) => {
        if (res.status === 200) {
          alert("Login Successful");
          const token = res?.data?.token || "";
          if (token) {
            localStorage.setItem("petshop-token", token);
            localStorage.setItem(
              "shop-info",
              JSON.stringify(res?.data?.shop)
            );
          }

          setTimeout(() => {
            navigate("/petshop");
          }, 1500);
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 404) {
          alert("Invalid Email or Password ");
        } else if (err.response.status === 401) {
          alert("Please Check your Email and password");
        } else {
          console.log("Some errors occured");
        }
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const redirectPetShopRegister = () => {
    navigate("../petshop/signup");
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

          <Link to="/petshop/forgot-pwd">
            <p>Forgot Password</p>
          </Link>
        </div>
        <div className="petshop-dont-have-account">
          <p>
            Don't have an account ?
            <span onClick={redirectPetShopRegister}>Signup</span>
          </p>
        </div>
        <input type="submit" onClick={handleSubmit} value="Login" />
      </form>
    </div>
  );
};
export default PetShopLogin;
