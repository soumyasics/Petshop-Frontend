import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";
import dogAndMan from "../../../Assets/black-man-and-dog.jpg";
import "./UserProfileEdit.css";
const UserProfile = () => {
  const captchaRef = useRef(null);

  const handleSubmitEditProfile = (e) => {
    e.preventDefault();
    const captchaValue = captchaRef.current.getValue();
    if (!captchaValue) {
      alert("Please check the CAPTCHA to verify");
      return;
    }
    console.log(captchaValue);
  };

  return (
    <div className="profile-edit-page-container">
      <div className="profile-edit-box">
        <div className="profile-header-img"></div>

        <div className="profile-edit-container">
          <form className="profile-edit-form-section">
            <div className="profile-name-edit">
              <div>
                <label htmlFor="">First Name</label>
                <br />
                <input type="text" placeholder="First Name" />
              </div>
              <div>
                <label htmlFor="">Last Name</label>
                <br />
                <input type="text" placeholder="Last Name" />
              </div>
            </div>

            <div className="profile-edit-section">
              <label htmlFor="">Email</label>

              <input type="email" placeholder="Email" />

              <label htmlFor=""> Password</label>
              <input type="Password" placeholder="Enter your Password." />

              <label htmlFor="">Address</label>
              <input type="text" placeholder="Enter your Address." />
              <label htmlFor=""> Gender </label>

              <div className="profile-edit-gender-container">
                <input type="radio" name="gender" value="male" />
                <label htmlFor=""> Male </label>
                <input type="radio" name="gender" value="female" />
                <label htmlFor=""> Female </label>
                <input type="radio" name="gender" value="other" />
                <label htmlFor=""> Other </label>
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
