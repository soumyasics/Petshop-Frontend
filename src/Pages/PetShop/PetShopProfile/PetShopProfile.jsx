import imgUploadPlaceholder from "../../../Assets/PlaceholderImage.png";
import uploadImageIcon from "../../../Assets/upload-img-icon.png";
import { InputGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "axios";
import Footer from "../../Common/Footer/Footer";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PetShopProfile.css";
import PetShopNavbar from "../Common/PetShopNavbar";
import axiosInstance from "../../../BaseURL";
import NavbarUpdated from "../../Common/NavbarUpdated/NavbarUpdated";
import CommonNavbar from "../../Common/CommonNavbar";
const PetShopProfile = ({imgUrl}) =>{
  
  const [activeShopImage, setIsActiveShopImage] = useState(null);
  const fileInputRef = useRef(null);

  const id = JSON.parse(localStorage.getItem("shop-info"))
  console.log("loc", id._id);
  const [isDisabled, setDisabled] = useState(true)

  const [shopInfo, setShopInfo] = useState({
    // ownerFirstName: "",
    // ownerLastName: "",
    // ownername: "",
    // shopname: "",
    // street: "",
    // city: "",
    // district: "",
    // mobile: "",
    // email: "",
    // password: "",
    // licenceno: "",
    // regno: "",
    // ownershipId: "",
    // description: "",
    // openingtime: "",
    // closingtime: "",
    // img: null,
  });
  const navigate = useNavigate();

  const [userInfo2, setprofile2] = useState({
    shopInfo

  });

  const editData = () => {
    console.log("call");
    setDisabled(false)
  }

  const changehandleSubmit = (a) => {
    if (a.target.name=="img") {
      console.log("file",a.target.files[0]);
      setShopInfo({
        ...shopInfo,img: a.target.files[0]
      })
    }
    else{
    console.log("onchange", a.target.value);
    setShopInfo({ ...shopInfo, [a.target.name]: a.target.value });
     }
  };

  const submitt = (b) => {
    console.log("submitted",shopInfo);

    b.preventDefault();

    // setErrors(Validation(userInfo))


    axiosInstance
      .post(`/shop/shopEditById/${id._id}`, shopInfo

      )
      .then((result) => {
        console.log("data entered", result);

        if (result.data.status == 200) {
          alert("Updation Sucessfully");
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
    console.log(id._id);

    axiosInstance.get(`/shop/getShopDataById/${id._id}`).then((res) => {                   //profile api is added
      setShopInfo(res.data.data);
      console.log(res);
      // console.log(shopInfo.img.filename);
      // shopInfo.ownerFirstName=shopInfo.own
    });
  }, []);

 useEffect(()=>{
  console.log(shopInfo);

 },[shopInfo])
 const handleImageBtnClick = () => {
  if (fileInputRef && fileInputRef.current) {
    fileInputRef.current.click();
  }
};


  return (
    <>
        {/* <NavbarUpdated/> */}
      {/* <div className="petshop-profile-header-img">
        <img
          className="petshop-profile-placeholder-img"
          // src={activeShopImage ? activeShopImage : imgUploadPlaceholder}
          src={shopInfo.img?(`${imgUrl}/${shopInfo.img.filename}`):null}
          alt="upload-img"
        />
      <img
          className="add-pet-upload-img-icon"
          src={uploadImageIcon}
          alt="upload-img-icon"
          onClick={handleImageBtnClick}
        />

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          
          onChange={changehandleSubmit}
          />
      </div> */}

      <div className="petshop-profile-form-container">
        <h2>{shopInfo.shopname}</h2>
        <Form
          id="petshop-profile-form"
          noValidate
          // validated={validated}
          onSubmit={submitt}
        >
          <div className="petshop-profile-name-container">
            {/* <InputGroup className="mb-3 petshop-profile-user-input">
              <Form.Label>Owner First Name</Form.Label>

              <Form.Control
                placeholder="First Name"
                type="text"
                name="ownerFirstName"
                value={shopInfo.ownerFirstName}
                onChange={changehandleSubmit}
                                required
              />
              <Form.Control.Feedback type="invalid">
                Owner Name is required
              </Form.Control.Feedback>
            </InputGroup> */}

            <InputGroup className="mb-3 petshop-profile-user-input">
              <Form.Label> Owner Name</Form.Label>

              <Form.Control
                placeholder="Last Name"
                aria-label="lastname"
                type="text"
                name="ownername"
                value={shopInfo.ownername}
                onChange={changehandleSubmit}
                required
                disabled={(isDisabled)? "disabled" : ""}

              />
              <Form.Control.Feedback type="invalid">
                Owner Last Name is required
              </Form.Control.Feedback>
            </InputGroup>
          </div>

          <InputGroup className="mb-3 petshop-profile-user-input">
            <Form.Label> Shop Name</Form.Label>

            <Form.Control
              placeholder="Shop Name"
              aria-label="shop-name"
              type="text"
              name="shopname"
              value={shopInfo.shopname}
              onChange={changehandleSubmit}
              required
              disabled={(isDisabled)? "disabled" : ""}

            />
            <Form.Control.Feedback type="invalid">
              Shop Name is required
            </Form.Control.Feedback>
          </InputGroup>
          <InputGroup className="mb-3 petshop-profile-user-input">
            <Form.Label> E Mail</Form.Label>

            <Form.Control
              placeholder="Email"
              aria-label="email"
              type="email"
              name="email"
              value={shopInfo.email}
              onChange={changehandleSubmit}
              required
              disabled={(isDisabled)? "disabled" : ""}

            />
            <Form.Control.Feedback type="invalid">
              Email is required
            </Form.Control.Feedback>
          </InputGroup>
          <InputGroup className="mb-3 petshop-profile-user-input">
            <Form.Label> Password</Form.Label>

            <Form.Control
              placeholder="password"
              minLength="6"
              aria-label="password"
              type="password"
              name="password"
              value={shopInfo.password}
              onChange={changehandleSubmit}
              required
              disabled={(isDisabled)? "disabled" : ""}

            />
            <Form.Control.Feedback type="invalid">
              Minimum 6 characters password required
            </Form.Control.Feedback>
          </InputGroup>
          <InputGroup className="mb-3 petshop-profile-user-input">
            <Form.Label> City</Form.Label>

            <Form.Control
              placeholder="city"
              aria-label="city"
              type="text"
              name="city"
              value={shopInfo.city}
              required
              disabled={(isDisabled)? "disabled" : ""}

              onChange={changehandleSubmit}
              />
            <Form.Control.Feedback type="invalid">
              City is required.
            </Form.Control.Feedback>
          </InputGroup>
          <InputGroup className="mb-3 petshop-profile-user-input">
            <Form.Label> Street</Form.Label>

            <Form.Control
              placeholder="street"
              aria-label="street"
              type="text"
              name="street"
              value={shopInfo.street}
              onChange={changehandleSubmit}
              required
              disabled={(isDisabled)? "disabled" : ""}

            />
            <Form.Control.Feedback type="invalid">
              Street is required.
            </Form.Control.Feedback>
          </InputGroup>
          <InputGroup className="mb-3 petshop-profile-user-input">
            <Form.Label> District</Form.Label>

            <Form.Control
              placeholder="district"
              aria-label="district"
              type="text"
              name="district"
              value={shopInfo.district}
              onChange={changehandleSubmit}
              required
              disabled={(isDisabled)? "disabled" : ""}

            />
            <Form.Control.Feedback type="invalid">
              District is required.
            </Form.Control.Feedback>
          </InputGroup>
          <InputGroup className="mb-3 petshop-profile-user-input">
            <Form.Label> Contact</Form.Label>

            <Form.Control
              type="number"
              minLength="10"
              placeholder="Contact"
              aria-label="contact"
              name="mobile"
              value={shopInfo.mobile}
              onChange={changehandleSubmit}
              required
              disabled={(isDisabled)? "disabled" : ""}

            />
            <Form.Control.Feedback type="invalid">
              10 Digit Phone Number is required.
            </Form.Control.Feedback>
          </InputGroup>
          <InputGroup className="mb-3 petshop-profile-user-input">
            <Form.Label> License Number</Form.Label>

            <Form.Control
              placeholder="License Number"
              aria-label="License Number"
              name="licenceno"
              value={shopInfo.licenceno}
              onChange={changehandleSubmit}
              required
              disabled={(isDisabled)? "disabled" : ""}

            />
            <Form.Control.Feedback type="invalid">
              License Number is required.
            </Form.Control.Feedback>
          </InputGroup>
          <InputGroup className="mb-3 petshop-profile-user-input">
            <Form.Label> Description</Form.Label>

            <Form.Control
              placeholder="description"
              aria-label="description"
              name="description"
              value={shopInfo.description}
              onChange={changehandleSubmit}
              required
              disabled={(isDisabled)? "disabled" : ""}

            />
            <Form.Control.Feedback type="invalid">
              Description is required.
            </Form.Control.Feedback>
          </InputGroup>
          <InputGroup className="mb-3 petshop-profile-user-input">
            <Form.Label> Registration Number</Form.Label>

            <Form.Control
              placeholder="Registration Number"
              aria-label="Registration Number"
              name="regno"
              value={shopInfo.regno}
              disabled={(isDisabled)? "disabled" : ""}

              onChange={changehandleSubmit}
              required
            />
            <Form.Control.Feedback type="invalid">
              Registration is required.
            </Form.Control.Feedback>
          </InputGroup>
          {/* <InputGroup className="mb-3 petshop-profile-user-input">
            <Form.Label> Ownership ID</Form.Label>

            <Form.Control
              placeholder="Ownership Id"
              aria-label="Ownwership Id"
              aria-describedby="basic-addon1"
              type="text"
              name="ownershipId"
              value={shopInfo.ownershipId}
              onChange={changehandleSubmit}
              required
            />

            <Form.Control.Feedback type="invalid">
              Ownership ID is required.
            </Form.Control.Feedback>
          </InputGroup> */}
          <InputGroup className="mb-3 petshop-profile-user-input">
            <Form.Label> Shop Opening Time</Form.Label>

            <Form.Control
              placeholder="Opening Time"
              aria-label="Opening Time"
              aria-describedby="basic-addon1"
              type="text"
              name="opentime"
              disabled={(isDisabled)? "disabled" : ""}

              value={shopInfo.opentime}
              onChange={changehandleSubmit}
              required
            />

            <Form.Control.Feedback type="invalid">
              Opening Time is required.
            </Form.Control.Feedback>
          </InputGroup>
          <InputGroup className="mb-3 petshop-profile-user-input">
            <Form.Label> Shop Closing Time </Form.Label>

            <Form.Control
              placeholder="Clsoing Time"
              aria-label="Closing Time"
              aria-describedby="basic-addon1"
              type="text"
              name="closingtime"
              value={shopInfo.closingtime}
              onChange={changehandleSubmit}
              required
              disabled={(isDisabled)? "disabled" : ""}

            />

            <Form.Control.Feedback type="invalid">
              Closing Time is required.
            </Form.Control.Feedback>
          </InputGroup>

          <div className="profile-view-btn-container">
                  {
                    isDisabled ? <button>Back</button> : <button
                      onClick={submitt}>update</button>
                  }

                  <button type="button" onClick={editData}>Edit</button>

                </div>
        </Form>
      </div>
      <Footer />
    </>
  );
};

export default PetShopProfile;
