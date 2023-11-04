import React, { useEffect, useState } from "react";
import "./UserReg.css";
import img1 from "../../../Assets/RegHead.jpg";
import img2 from "../../../Assets/captcha.png";
import img3 from "../../../Assets/regPro.jpg";
import img5 from '../../../Assets/regCover.jpeg'
import axios from "axios";

function UserReg() {
  const [register, setRegister] = useState({
    fname: "",
    lname: "",
    email: "",
    contact: "",
    password: "",
    city: "",
    street: "",
    district: "",
    gender: "",
  });
  // 
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const changeCaptchaChecked = (e) => {
    setCaptchaChecked(e.target.checked);
  };
  const changehandleSubmit = (a) => {
    setRegister({ ...register, [a.target.name]: a.target.value });
  };
  useEffect(() => {
    console.log(register);
  });
  // kj
  const submitt = (b) => {
    console.log("submitted");
    b.preventDefault();
    if (!captchaChecked) {
      alert("Please check the CAPTCHA to verify");
      return; // Do not proceed if the CAPTCHA is not checked
    }
    axios
      .post("http:localhost3000/petshop_api/register", register)
      .then((result) => {
        console.log("data entered", result);
        if (result.status == 200) {
          alert("Register Sucessfully");
          // navigate("/Reclogin");
        } else {
          alert("Register Failed...");
        }                
      })
      .catch((error) => {
        console.log("err", error);
      });
  };
// jmg
  return (
    <div>
    <div className="user-reg-cover" >
  
    
      <div class="user-reg-container" >
        <form onSubmit={submitt} class="row g-3 user-reg-form-1">
          <div className="user-reg-image-front">
            <img src={img1} style={{ maxWidth: "35rem", marginLeft: "5rem" }} />
            <h2  className='user-reg-form'style={{ fontSize: "2rem", fontWeight: "3rem" }}>
              New Profile
            </h2>
          </div>
          <div className="row">
            <div className="col-7">
              <div className="row">
                <div class="col-md-6">
                  <label for="user-reg-validationDefault01" class="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="user-reg-validationDefault01"
                    // value="Mark"
                    name="fname"
                    onChange={changehandleSubmit}
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="user-reg-validationDefault02" class="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="user-reg-validationDefault02"
                    // value="Otto"
                    name="lname"
                    onChange={changehandleSubmit}
                    required
                  />
                </div>
              </div>
              <div class="col-md-12">
                <label for="user-reg-validationDefault03" class="form-label">
                  Mobile Number
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="user-reg-validationDefault03"
                  name="contact"
                  onChange={changehandleSubmit}
                  required
                />
              </div>
              <div class="col-md-12">
                <label for="user-reg-validationDefault03" class="form-label">
                  Password 
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="user-reg-validationDefault03"
                  name="password"
                  onChange={changehandleSubmit}
                  required
                />
              </div>
              <div class="col-md-12">
                <label for="user-reg-validationDefault04" class="form-label">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  class="form-control"
                  id="user-reg-validationDefault04"
                  onChange={changehandleSubmit}
                  required
                />
              </div>{" "}
              <div class="col-md-12">
                <label for="user-reg-validationDefault03" class="form-label">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  class="form-control"
                  id="user-reg-validationDefault03"
                  onChange={changehandleSubmit}
                  required
                />
              </div>
              <div class="col-md-12">
                <label for="user-reg-validationDefault03" class="form-label">
                  Street
                </label>
                <input
                  type="text"
                  name="street"
                  class="form-control"
                  id="user-reg-validationDefault03"
                  onChange={changehandleSubmit}
                  required
                />
              </div>
              <div class="col-md-12">
                <label for="user-reg-validationDefault03" class="form-label">
                  District
                </label>
                <input
                  type="text"
                  name="district"
                  class="form-control"
                  id="user-reg-validationDefault03"
                  onChange={changehandleSubmit}
                  required
                />
              </div>
            </div>
            <div className="col-5">
              <img
                src={img3}
                height={190}
                width={190}
                style={{ borderRadius: "15rem" }}
                className="user-reg-imgcircle"
              />
            </div>
          </div>

          <label for="validationDefault04" class="form-label">
            Gender
          </label>
          <div class="form-check col-md-6">
            <input
              style={{ padding: "10px" }}
              class="form-check-input"
              type="radio"
              name="gender"
              id="flexRadioDefault1"
              value="male"
              checked={register.gender === "male"}
              onChange={changehandleSubmit}
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Male
            </label>
          </div>
          <div class="form-check col-md-6">
            <input
              style={{ padding: "10px" }}
              class="form-check-input"
              type="radio"
              name="gender"
              id="flexRadioDefault2"
              value="female"
              checked={register.gender === "female"}
              onChange={changehandleSubmit}
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Female
            </label>
          </div>

          <div className="user-reg-container-captcha col-md-4">
            <div className="user-reg-Container-innerCheckbox">
              <input
                style={{
                  padding: "15px",
                  marginLeft: "1rem",
                  marginTop: "1.5rem",
                }}
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                name="captchaChecked" // Add a name to the checkbox
                onChange={changeCaptchaChecked} // Add an onChange event handler
              />
              <label
                class="form-check-label"
                for="flexCheckDefault"
                style={{
                  color: "black",
                  fontSize: "1rem",
                  marginLeft: "1rem",
                  marginTop: "1.5rem",
                }}
              >
                Click To Verify
              </label>
            </div>
            <div className="user-reg-Container-innerCaptcha">
              <img
                src={img2}
                style={{
                  maxWidth: "3rem",
                  marginLeft: "1rem",
                  marginTop: "1rem",
                }}
              />
            </div>
          </div>

          <div className="col-md-4"></div>
          <div class="col-6">
            <button class="btn btn-primary" type="submit">
              back
            </button>
          </div>
          <div class="col-6">
            <button class="btn btn-primary" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
      </div>
      </div>
  );
}

export default UserReg;
