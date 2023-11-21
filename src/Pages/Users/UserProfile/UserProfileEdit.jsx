import { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";
import dogAndMan from "../../../Assets/black-man-and-dog.jpg";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../BaseURL";
import "./UserProfileEdit.css";
const UserProfile = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    district: "",
    street: "",
  });

  useEffect(() => {
    // isUserLogin();
  }, []);

  function isUserLogin() {
    const userToken = localStorage.getItem("petshop-token") || null;
    if (userToken) {
      axiosInstance
        .get("/user/user-data", {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        })
        .then((res) => {
          let newObj = {
            firstname: res?.data?.userData?.firstname,
            lastname: res?.data?.userData?.lastname,
            email: res?.data?.userData?.email,
            mobile: res?.data?.userData?.mobile,
            district: res?.data?.userData?.district,
            street: res?.data?.userData?.street,
            gender: res?.data?.userData?.user?.gender,
          };

          if (res?.data?.status === 200) {
            setUserInfo(newObj);
            console.log("worked");
            console.log("no", newObj);
          }
        })
        .catch((err) => {
          console.log("error", err);
        });
    } else {
      alert("login first");
    }
  }

  const captchaRef = useRef(null);
  const handleSubmitEditProfile = (e) => {
    e.preventDefault();

    const captchaValue = captchaVerify();
    if (!captchaValue) {
      alert("Please verify captcha");
      return;
    }

    if (userInfo?.email) {
      if (!validateEmail(userInfo.email)) {
        alert("Please provide valid email id.");
        return;
      }
    }

    const userToken = localStorage.getItem("petshop-token") || null;

    if (userToken) {
      editProfileData(userToken);
    } else {
      alert("login first");
    }
  };

  const editProfileData = (userToken) => {
    axiosInstance
      .patch("/user/userProfileEdit", userInfo, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (res?.data?.status === 200) {
          alert(res?.data?.message);
          // isUserLogin();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const captchaVerify = () => {
    const captchaValue = captchaRef.current.getValue();
    return captchaValue;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const redirectHome = () => {
    navigate('/');
  }

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

              <label>District</label>
              <input
                type="text"
                name="district"
                value={userInfo.district}
                onChange={handleInputChanges}
                placeholder="Enter your district."
              />
              <label>Street</label>
              <input
                type="text"
                name="street"
                value={userInfo.street}
                onChange={handleInputChanges}
                placeholder="Enter your street."
              />

              <ReCAPTCHA
                sitekey="6LcffvEoAAAAAFeyKMNHX0TIGyDHhHjp0Al1Z2u2"
                ref={captchaRef}
              />

              <div className="profile-edit-btn-container">
                <button onClick={redirectHome}>Back</button>
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
