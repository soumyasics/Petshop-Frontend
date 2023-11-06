import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";
import dogAndMan from "../../../Assets/black-man-and-dog.jpg";
import "./UserProfileEdit.css";
const UserProfile = () => {
  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    address: "",
    gender: "male",
  });

  const captchaRef = useRef(null);
  const handleSubmitEditProfile = (e) => {
    e.preventDefault();

    captchaVerify();
    if (userInfo.email) {
      if (!validateEmail(userInfo.email)) {
        alert("Please provide valid email id.");
        return;
      }
    }
    console.log("user info", userInfo);
  };

  const captchaVerify = () => {
    const captchaValue = captchaRef.current.getValue();
    if (!captchaValue) {
      alert("Please check the CAPTCHA to verify");
      return;
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChanges = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  return (
    <div className="profile-edit-page-container">
      <div className="profile-edit-box">
        <div className="profile-header-img"></div>

        <div className="profile-edit-container">
          <form className="profile-edit-form-section">
            <div className="profile-name-edit">
              <div>
                <label>First Name</label>
                <br />
                <input
                  type="text"
                  name="firstname"
                  value={userInfo.firstname}
                  onChange={handleInputChanges}
                  placeholder="First Name"
                />
              </div>
              <div>
                <label htmlFor="">Last Name</label>
                <br />
                <input
                  type="text"
                  name="lastname"
                  value={userInfo.lastname}
                  onChange={handleInputChanges}
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="profile-edit-section">
              <label>Email</label>

              <input
                type="email"
                placeholder="Email"
                name="email"
                value={userInfo.email}
                onChange={handleInputChanges}
              />

              <label> Mobile Number</label>
              <input
                type="number"
                placeholder="Mobile Number"
                name="mobile"
                value={userInfo.mobile}
                onChange={handleInputChanges}
              />

              <label>Address</label>
              <input
                type="text"
                name="address"
                value={userInfo.address}
                onChange={handleInputChanges}
                placeholder="Enter your Address."
              />
              <label> Gender </label>

              <div className="profile-edit-gender-container">
                <input
                  type="radio"
                  name="gender"
                  onChange={handleInputChanges}
                  defaultChecked
                  value="male"
                />
                <label> Male </label>
                <input
                  type="radio"
                  name="gender"
                  onChange={handleInputChanges}
                  value="female"
                />
                <label> Female </label>
                <input
                  type="radio"
                  name="gender"
                  onChange={handleInputChanges}
                  value="other"
                />
                <label> Other </label>
              </div>

              <ReCAPTCHA
                sitekey="6LcffvEoAAAAAFeyKMNHX0TIGyDHhHjp0Al1Z2u2"
                ref={captchaRef}
              />

              <div className="profile-edit-btn-container">
                <button>Back</button>
                <input
                  type="submit"
                  value="Save Changes"
                  onClick={handleSubmitEditProfile}
                />
              </div>
            </div>
          </form>

          <div className="profile-edit-right-section">
            <img src={dogAndMan} alt="man-and-dog" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
