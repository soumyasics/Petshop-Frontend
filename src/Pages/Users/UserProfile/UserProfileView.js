import React, { useEffect, useState } from 'react'
import DogPic from  '../../../Assets/black-man-and-dog.jpg'
// import ReCAPTCHA from "react-google-recaptcha";
import './UserProfileView.css'
import axios from 'axios';
// 

function UserProfileView() {
    const [profile, setprofile] = useState();
    useEffect(() => {
        // const storedUser = localStorage.getItem("users");
        // const id = localStorage.getItem("florlogid");
        // console.log(id);
    
        axios.post().then((res) => {                   //profile api is added
            setprofile(res.data.data);
        });
      }, []);
      useEffect(() => {
        console.log(profile);
      });
  return (
    <div>
          <div className="profile-view-page-container">
      <div className="profile-view-box">
        <div className="profile-header-img1"></div>

        <div className="profile-view-container">
          <form className="profile-view-form-section">
            <div className="profile-name-view">
              <div>
                <label htmlFor="">First Name</label>
                <br />
                <input
                  type="text"
                  name="fname"
                //   value={userInfo.fname}
                //   onChange={handleInputChanges}
                  placeholder="First Name"
                />
              </div>
              <div>
                <label htmlFor="">Last Name</label>
                <br />
                <input
                  type="text"
                  name="lname"
                //   onChange={handleInputChanges}
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="profile-view-section">
              <label>Email</label>

              <input
                type="email"
                placeholder="Email"
                name="email"
                // onChange={handleInputChanges}
              />

              <label> Password</label>
              <input
                type="Password"
                placeholder="Enter your Password."
                name="password"
                // onChange={handleInputChanges}
              />

              <label>Address</label>
              <input type="text" placeholder="Enter your Address." />
              <label> Gender </label>

              <div className="profile-view-gender-container">
                <input type="radio" name="gender" value="male" />
                <label> Male </label>
                <input type="radio" name="gender" value="female" />
                <label> Female </label>
                <input type="radio" name="gender" value="other" />
                <label> Other </label>
              </div>
{/* 
              <ReCAPTCHA
                sitekey="6LcffvEoAAAAAFeyKMNHX0TIGyDHhHjp0Al1Z2u2"
                ref={captchaRef}
              /> */}

              <div className="profile-view-btn-container">
                <button>Back</button>
                <input
                  type="submit"
                  value="Save Changes"
                //   onClick={handleSubmitEditProfile}
                />
              </div>
            </div>
          </form>

          <div className="profile-view-right-section">
            <img src={DogPic} alt="man-and-dog" />
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default UserProfileView