import zookeeperLogo from "../../../Assets/zookeper-logo.png";
import imgUploadPlaceholder from "../../../Assets/PlaceholderImage.png";
import uploadImageIcon from "../../../Assets/upload-img-icon.png";
import { InputGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Footer from "../../Common/Footer/Footer";
import { useState, useRef } from "react";
import axiosInstance from "../../../BaseURL";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import "./PetShopReg.css";
import PetShopNavbar from "../Common/PetShopNavbar";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
const PetShopRegistration = () => {
  const [activeShopImage, setIsActiveShopImage] =
    useState(imgUploadPlaceholder);
  const fileInputRef = useRef(null);

  const [shopInfo, setShopInfo] = useState({
    ownerFirstName: "",
    ownerLastName: "",
    shopName: "",
    street: "",
    city: "",
    district: "",
    mobile: "",
    email: "",
    password: "",
    licenseNumber: "",
    registrationNumber: "",
    ownershipId: "",
    description: "",
    shopImage: null,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setShopInfo({ ...shopInfo, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const newShopImage = e.target.files[0];
    setShopInfo({
      ...shopInfo,
      shopImage: e.target.files[0],
    });
    // Image Reading
    const reader = new FileReader();
    reader.onloadend = () => {
      setIsActiveShopImage(reader.result);
    };
    if (newShopImage) {
      reader.readAsDataURL(newShopImage);
    } else {
      setIsActiveShopImage(imgUploadPlaceholder);
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
      shopName,
      street,
      city,
      district,
      mobile,
      email,
      password,
      licenseNumber,
      registrationNumber,
      ownershipId,
      description,
    } = shopInfo;
    if (
      !ownerFirstName ||
      !shopName ||
      !street ||
      !city ||
      !district ||
      !mobile ||
      !email ||
      !password ||
      !licenseNumber ||
      !registrationNumber ||
      !ownershipId ||
      !description
    ) {
      console.log("All fields are required.")
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
    const formData = new FormData();

    formData.append(
      "ownername",
      `${shopInfo.ownerFirstName} ${shopInfo.ownerLastName}`
    );
    formData.append("shopname", shopInfo.shopName);
    formData.append("city", shopInfo.city);
    formData.append("street", shopInfo.street);
    formData.append("email", shopInfo.email);
    formData.append("password", shopInfo.password);
    formData.append("licenceno", shopInfo.licenseNumber);
    formData.append("regno", shopInfo.registrationNumber);
    formData.append("mobile", shopInfo.mobile);
    formData.append("ownershipid", shopInfo.ownershipId);
    formData.append("district", shopInfo.district);
    formData.append("description", shopInfo.description);
    formData.append("img", shopInfo.shopImage);

    axiosInstance
      .post("/shopRegistration", formData)
      .then((res) => {
        console.log("response", res);
        if (res.status === 200) {
          alert("Registration successful");
          setTimeout(() => {
            navigate("/petshop/login");
          }, 1500);
        }
      })
      .catch((err) => {
        console.log("error", err);
        alert("Registration Failed");
      });
  };

  return (
    <>
      <PetShopNavbar />

      <div className="add-pet-header-img">
        <img
          className="add-pet-placeholder-img"
          src={activeShopImage}
          alt="women"
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
              name="shopName"
              value={shopInfo.shopName}
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
              name="licenseNumber"
              value={shopInfo.licenseNumber}
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
              name="registrationNumber"
              value={shopInfo.registrationNumber}
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
