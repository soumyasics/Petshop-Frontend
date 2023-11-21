import React, { useEffect, useState } from 'react'
import DogPic from  '../../../Assets/black-man-and-dog.jpg'
// import ReCAPTCHA from "react-google-recaptcha";
import './UserProfileView.css'
import axios from 'axios';
import axiosInstance from '../../../BaseURL';
// 

function UserProfileView() {
  const id=JSON.parse(localStorage.getItem("petshop-user"))
  console.log("loc",id._id);
  const [isDisabled,setDisabled]=useState(true)
    const [userInfo, setprofile] = useState({
      firstname:"",
      lastname:"",
      email:"",
      mobile:"",
      city:'',
      street:'',
      district:''

    });
    useEffect(() => {
        
        axiosInstance.post(`/user/userViewProfile/${id._id}`).then((res) => {                   //profile api is added
            setprofile(res.data.data);
        });
      }, []);
      
      useEffect(() => {
        console.log(userInfo);
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
                disabled={(isDisabled)? "disabled" : ""}
                  placeholder={userInfo.firstname}
                />
              </div>
              <div>
                <label htmlFor="">Last Name</label>
                <br />
                <input
                  type="text"
                  name="lname"
                //   onChange={handleInputChanges}
                  placeholder={userInfo.lastname}
                />
              </div>
            </div>

            <div className="profile-view-section">
              <label>Email</label>

           

              <label> Street</label>
              <input
                type="text"
                placeholder={userInfo.email}
                name="email"
                // onChange={handleInputChanges}
              />

              <label>city</label>
              <input type="text"  placeholder={userInfo.city} />
              <label> mobile </label>
              <input type="text" 
              name="mobile"  placeholder={userInfo.mobile} />

<label> district </label>
              <input type="text" 
              name="district"  placeholder={userInfo.district} />
              <div className="profile-view-btn-container">
                {
                  isDisabled?<button>Back</button>:<button>update</button>
                }
                
                <button type="button">Edit</button>          
                <button/>
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