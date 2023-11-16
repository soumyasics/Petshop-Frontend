import imgUploadPlaceholder from "../../../Assets/PlaceholderImage.png";
import uploadImageIcon from "../../../Assets/upload-img-icon.png";
import { InputGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "axios";
import Footer from "../../Common/Footer/Footer";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./PetShopReg.css";
import PetShopNavbar from "../Common/PetShopNavbar";
import axiosInstance from "../../../BaseURL";
const PetShopRegistration = () => {
  const [activeShopImage, setIsActiveShopImage] = useState(null);
  const fileInputRef = useRef(null);

  const [shopInfo, setShopInfo] = useState({
    ownerFirstName: "",
    ownerLastName: "",
    ownername: "",
    shopname: "",
    street: "",
    city: "",
    district: "",
    mobile: "",
    email: "",
    password: "",
    licenceno: "",
    regno: "",
    ownershipId: "",
    description: "",
    openingtime: "",
    closingtime: "",
    img: null,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setShopInfo({ ...shopInfo, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const newShopImage = e.target.files[0];
    setShopInfo({
      ...shopInfo,
      img: e.target.files[0],
    });
    // Image Reading
    const reader = new FileReader();
    reader.onloadend = () => {
      setIsActiveShopImage(reader.result);
    };
    if (newShopImage) {
      reader.readAsDataURL(newShopImage);
    } else {
      setIsActiveShopImage(null);
    }
  };
  const handleImageBtnClick = () => {
    if (fileInputRef && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const [validated, setValidated] = useState(false);

  const registerShop = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
    const {
      ownerFirstName,
      ownerLastName,
      shopname,
      street,
      city,
      district,
      mobile,
      email,
      password,
      licenceno,
      regno,
      ownershipId,
      description,
      openingtime,
      closingtime,
    } = shopInfo;
    if (
      !ownerFirstName ||
      !ownerLastName ||
      !shopname ||
      !street ||
      !city ||
      !district ||
      !mobile ||
      !email ||
      !password ||
      !licenceno ||
      !regno ||
      !ownershipId ||
      !description ||
      !openingtime ||
      !closingtime
    ) {
      console.log("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email");
      return;
    }

    if (password.length < 6) {
      console.log("Password must be at least 6 characters long");
      return;
    }

    sendDataToServer(shopInfo);
  };

  const sendDataToServer = (shopInfo) => {
    setShopInfo({
      ...shopInfo,
      ownername: shopInfo.ownerFirstName + " " + shopInfo.ownerLastName,
    });


    axiosInstance
      .post("shop/shopRegistration", shopInfo, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("response", res);
        if (res.status === 200) {
          alert("Registration successful");
          setTimeout(() => {
            navigate("/petshop/login");
          }, 500);
        }
      })
      .catch((err) => {
        console.log("error", err);
        if (err.response.status === 409) {
          alert("Email already exists");
        } else if (err.response.status === 400) {
          alert("Please fill all fields");
        } else if (err.response.status === 500) {
          alert("Server Error Please Try Again");
        } else {
          alert("Registration Failed");
        }
      });
  };

  return (
    <>
      <PetShopNavbar />

      <div className="add-pet-header-img">
        <img
          className="add-pet-placeholder-img"
          src={activeShopImage ? activeShopImage : imgUploadPlaceholder}
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
          onChange={handleImageChange}
        />
      </div>

      <div className="add-pet-form-container">
        <h2>Add a shop</h2>
        <Form
          id="add-pet-form"
          noValidate
          validated={validated}
          onSubmit={registerShop}
        >
          <div className="add-pet-name-container">
            <InputGroup className="mb-3 add-pet-user-input">
              <Form.Label>Owner First Name</Form.Label>

              <Form.Control
                placeholder="First Name"
                type="text"
                name="ownerFirstName"
                value={shopInfo.ownerFirstName}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Owner First Name is required
              </Form.Control.Feedback>
            </InputGroup>

            <InputGroup className="mb-3 add-pet-user-input">
              <Form.Label> Owner Last Name</Form.Label>

              <Form.Control
                placeholder="Last Name"
                aria-label="lastname"
                type="text"
                name="ownerLastName"
                value={shopInfo.ownerLastName}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Owner Last Name is required
              </Form.Control.Feedback>
            </InputGroup>
          </div>

          <InputGroup className="mb-3 add-pet-user-input">
            <Form.Label> Shop Name</Form.Label>

            <Form.Control
              placeholder="Shop Name"
              aria-label="shop-name"
              type="text"
              name="shopname"
              value={shopInfo.shopname}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Shop Name is required
            </Form.Control.Feedback>
          </InputGroup>
          <InputGroup className="mb-3 add-pet-user-input">
            <Form.Label> E Mail</Form.Label>

            <Form.Control
              placeholder="Email"
              aria-label="email"
              type="email"
              name="email"
              value={shopInfo.email}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Email is required
            </Form.Control.Feedback>
          </InputGroup>
          <InputGroup className="mb-3 add-pet-user-input">
            <Form.Label> Password</Form.Label>

            <Form.Control
              placeholder="password"
              minLength="6"
              aria-label="password"
              type="password"
              name="password"
              value={shopInfo.password}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Minimum 6 characters password required
            </Form.Control.Feedback>
          </InputGroup>
          <InputGroup className="mb-3 add-pet-user-input">
            <Form.Label> City</Form.Label>

            <Form.Control
              placeholder="city"
              aria-label="city"
              type="text"
              name="city"
              value={shopInfo.city}
              required
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              City is required.
            </Form.Control.Feedback>
          </InputGroup>
          <InputGroup className="mb-3 add-pet-user-input">
            <Form.Label> Street</Form.Label>

            <Form.Control
              placeholder="street"
              aria-label="street"
              type="text"
              name="street"
              value={shopInfo.street}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Street is required.
            </Form.Control.Feedback>
          </InputGroup>
          <InputGroup className="mb-3 add-pet-user-input">
            <Form.Label> District</Form.Label>

            <Form.Control
              placeholder="district"
              aria-label="district"
              type="text"
              name="district"
              value={shopInfo.district}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              District is required.
            </Form.Control.Feedback>
          </InputGroup>
          <InputGroup className="mb-3 add-pet-user-input">
            <Form.Label> Contact</Form.Label>

            <Form.Control
              type="number"
              minLength="10"
              placeholder="Contact"
              aria-label="contact"
              name="mobile"
              value={shopInfo.mobile}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              10 Digit Phone Number is required.
            </Form.Control.Feedback>
          </InputGroup>
          <InputGroup className="mb-3 add-pet-user-input">
            <Form.Label> License Number</Form.Label>

            <Form.Control
              placeholder="License Number"
              aria-label="License Number"
              name="licenceno"
              value={shopInfo.licenceno}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              License Number is required.
            </Form.Control.Feedback>
          </InputGroup>
          <InputGroup className="mb-3 add-pet-user-input">
            <Form.Label> Description</Form.Label>

            <Form.Control
              placeholder="description"
              aria-label="description"
              name="description"
              value={shopInfo.description}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Description is required.
            </Form.Control.Feedback>
          </InputGroup>
          <InputGroup className="mb-3 add-pet-user-input">
            <Form.Label> Registration Number</Form.Label>

            <Form.Control
              placeholder="Registration Number"
              aria-label="Registration Number"
              name="regno"
              value={shopInfo.regno}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Registration is required.
            </Form.Control.Feedback>
          </InputGroup>
          <InputGroup className="mb-3 add-pet-user-input">
            <Form.Label> Ownership ID</Form.Label>

            <Form.Control
              placeholder="Ownership Id"
              aria-label="Ownwership Id"
              aria-describedby="basic-addon1"
              type="text"
              name="ownershipId"
              value={shopInfo.ownershipId}
              onChange={handleChange}
              required
            />

            <Form.Control.Feedback type="invalid">
              Ownership ID is required.
            </Form.Control.Feedback>
          </InputGroup>
          <InputGroup className="mb-3 add-pet-user-input">
            <Form.Label> Shop Opening Time</Form.Label>

            <Form.Control
              placeholder="Opening Time"
              aria-label="Opening Time"
              aria-describedby="basic-addon1"
              type="text"
              name="openingtime"
              value={shopInfo.openingtime}
              onChange={handleChange}
              required
            />

            <Form.Control.Feedback type="invalid">
              Opening Time is required.
            </Form.Control.Feedback>
          </InputGroup>
          <InputGroup className="mb-3 add-pet-user-input">
            <Form.Label> Shop Closing Time </Form.Label>

            <Form.Control
              placeholder="Clsoing Time"
              aria-label="Closing Time"
              aria-describedby="basic-addon1"
              type="text"
              name="closingtime"
              value={shopInfo.closingtime}
              onChange={handleChange}
              required
            />

            <Form.Control.Feedback type="invalid">
              Closing Time is required.
            </Form.Control.Feedback>
          </InputGroup>

          <div className="add-pet-btn-box">
            <input type="submit" value="Add Shop" />
          </div>
        </Form>
      </div>
      <Footer />
    </>
  );
};
export default PetShopRegistration;
