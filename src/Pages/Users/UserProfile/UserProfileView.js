import React, { useEffect, useState } from 'react'
import DogPic from '../../../Assets/black-man-and-dog.jpg'
// import ReCAPTCHA from "react-google-recaptcha";
import './UserProfileView.css'
import axios from 'axios';
import axiosInstance from '../../../BaseURL';
import { useNavigate } from 'react-router-dom';

import Validation from "../UserRegistration/Validation";

function UserProfileView() {
  const navigate = useNavigate()

  const id = JSON.parse(localStorage.getItem("petshop-user"))
  console.log("loc", id._id);
  const [isDisabled, setDisabled] = useState(true)
  const [errors, setErrors] = useState({});
  const [isSubmit, setisSubmit] = useState(false);
  const [userInfo, setprofile] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    city: '',
    street: '',
    district: ''

  });
  const [userInfo2, setprofile2] = useState({
    userInfo

  });
  const editData = () => {
    console.log("call");
    setDisabled(false)
  }

  const changehandleSubmit = (a) => {
    // if (a.target.name=="img") {
    //   console.log("file",a.target.files[0]);
    //   setprofile({
    //     ...userInfo,img: a.target.files[0]
    //   })
    // }
    // else{
    console.log("onchange", a.target.value);
    setprofile2({ ...userInfo2, [a.target.name]: a.target.value });
    // }
  };

  const submitt = (b) => {
    console.log("submitted");

    b.preventDefault();

    // setErrors(Validation(userInfo))


    axiosInstance
      .post(`user/userProfileEdit/${id._id}`, userInfo2

      )
      .then((result) => {
        console.log("data entered", result);

        if (result.data.status == 200) {
          alert("Register Sucessfully");
          //  navigate("/user/login");
        } else {
          alert("Registration Failed...");

        }
      })
      .catch((error) => {
        console.log("err", error);
      });

  };


  useEffect(() => {

    axiosInstance.post(`/user/userViewProfile/${id._id}`).then((res) => {                   //profile api is added
      setprofile(res.data.data);
    });
  }, []);

  useEffect(() => {
    console.log(userInfo2);
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
                    name="firstname"
                    //   value={userInfo.fname}
                    onChange={changehandleSubmit}
                    disabled={(isDisabled) ? "disabled" : ""}
                    placeholder={userInfo.firstname}
                  />
                </div>
                <div>
                  <label htmlFor="">Last Name</label>
                  <br />
                  <input
                    type="text"
                    name="lastname"
                    disabled={(isDisabled) ? "disabled" : ""}

                    onChange={changehandleSubmit}
                    placeholder={userInfo.lastname}
                  />
                </div>
              </div>

              <div className="profile-view-section">
                <label>Email</label>
                <input
                  type="text"
                  placeholder={userInfo.email}
                  name="email"
                  disabled={(isDisabled) ? "disabled" : ""}

                  onChange={changehandleSubmit}
                />


                <label> Street</label>
                <input
                  type="text"
                  placeholder={userInfo.street}
                  name="street"
                  disabled={(isDisabled) ? "disabled" : ""}

                  onChange={changehandleSubmit}
                />

                <label>city</label>
                <input type="text"
                  disabled={(isDisabled) ? "disabled" : ""}
                  name="city" placeholder={userInfo.city} />
                <label> mobile </label>
                <input type="text"
                  onChange={changehandleSubmit}
                  disabled={(isDisabled) ? "disabled" : ""}

                  name="mobile" placeholder={userInfo.mobile} />

                <label> District </label>
                <input type="text"
                  name="district"
                  disabled={(isDisabled)? "disabled" : ""}
                  placeholder={userInfo.district} />
                <div className="profile-view-btn-container">
                  {
                    isDisabled ? <button>Back</button> : <button
                      onClick={submitt}>update</button>
                  }

                  <button type="button" onClick={editData}>Edit</button>

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