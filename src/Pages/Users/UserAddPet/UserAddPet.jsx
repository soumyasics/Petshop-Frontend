import uploadImgIcon from "../../../Assets/upload-img-icon.png";
import Footer from "../../Common/Footer/Footer";
import addPetImgPlaceholder from "../../../Assets/add-pet-img-placeholder.png";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import NavbarUpdated from "../../Common/NavbarUpdated/NavbarUpdated";
import "./UserAddPet.css";
import axiosInstance from "../../../BaseURL";

const UserAddPet = () => {
  const [activeImage, setActiveImage] = useState(null);
  const [validated, setValidated] = useState(false);

  const fileInputRef = useRef(null);
  const [petInfo, setPetInfo] = useState({
    ownerid: "",
    shopid: "",
    petname: "",
    type: "",
    age: "",
    breed: "",
    gender: "",
    insurancenumber: "",
    description: "",
    price: "",
    img: null,
  });

  useEffect(() => {
    const petshopInfo =
      JSON.parse(localStorage.getItem("petshop-user")) || null;
    if (!petshopInfo) {
      console.log("Login first");
      return;
    }
    if (petshopInfo?._id) {
      setPetInfo({
        ...petInfo,
        ownerid: petshopInfo._id,
      });
    } else {
      console.log("login first");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("pet info", petInfo);
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
    const {
      petname,
      type,
      age,
      breed,
      gender,
      insurancenumber,
      description,
      price,
    } = petInfo;

    if (
      !petname ||
      !type ||
      !age ||
      !breed ||
      !gender ||
      !insurancenumber ||
      !description ||
      !price
    ) {
      console.log("All fields are required.");
      return;
    }
    sendToServer(petInfo);
  };
  const sendToServer = (petInfo) => {
    axiosInstance
      .post("pet/addPet", petInfo, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert("Pet added Successfully");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      })
      .catch((err) => {
        console.log("err", err);
        if (err.response.status !== 200) {
          alert("Pet not added");
        }
      })
      .finally(() => {
        console.log("finally");
      });
  };

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setPetInfo({
      ...petInfo,
      [name]: value,
    });
  };
  const handleGenderChange = (e) => {
    setPetInfo({
      ...petInfo,
      gender: e.target.value,
    });
  };

  const handleTypeChange = (e) => {
    setPetInfo({
      ...petInfo,
      type: e.target.value,
    });
  };

  const handleImgBtnClick = () => {
    if (fileInputRef && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (e) => {
    const newPetImage = e.target.files[0];
    setPetInfo({
      ...petInfo,
      img: e.target.files[0],
    });
    // Image Reading
    const reader = new FileReader();
    reader.onloadend = () => {
      setActiveImage(reader.result);
    };
    if (newPetImage) {
      reader.readAsDataURL(newPetImage);
    } else {
      setActiveImage(null);
    }
  };

  return (
    <>
      <NavbarUpdated />
      <div className="add-pet-form-container-2">
        <h2>Add Pet </h2>
        <Form
          className="add-pet-form-2"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <div className="add-pet-name-container-2">
            <InputGroup className="mb-3">
              <Form.Label>Pet Name</Form.Label>

              <Form.Control
                className="add-pet-user-input-2"
                placeholder="Pet Name"
                type="text"
                onChange={handleChanges}
                name="petname"
                value={petInfo.petname}
                required
              />
              <Form.Control.Feedback type="invalid">
                Pet Name is required
              </Form.Control.Feedback>
            </InputGroup>

            <InputGroup className="mb-3">
              <Form.Label>Pet Type</Form.Label>
              <Form.Select
                aria-label="Default select example"
                className="add-pet-user-input-2"
                name="type"
                onChange={handleTypeChange}
                value={petInfo.type}
                required
              >
                <option value="">Pet Type</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Pet Type is required
              </Form.Control.Feedback>
            </InputGroup>
          </div>
          <div className="add-pet-photo-2">
            <label>Pet Image </label>
            <div className="pet-img-placeholder">
              <img
                src={activeImage ? activeImage : addPetImgPlaceholder}
                alt="placeholder"
              />
              <img
                className="add-pet-upload-img-icon-2"
                src={uploadImgIcon}
                alt="upload icon"
                onClick={handleImgBtnClick}
              />
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                name="img"
                className="add-pet-img-upload"
                onChange={handleImageChange}
              />
            </div>
          </div>
          <div className="mb-3 mt-3">
            <Form.Label>Shop/Owner Name </Form.Label>

            <Form.Control
              className="add-pet-user-input-2"
              placeholder="Insurance Number"
              type="text"
              onChange={handleChanges}
              name="insurancenumber"
              value={petInfo.insurancenumber}
              required
            />
            <Form.Control.Feedback type="invalid">
              Pet Insurance Number is required
            </Form.Control.Feedback>
          </div>

          <div className="add-pet-desc">
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                value={petInfo.description}
                name="description"
                onChange={handleChanges}
                rows={3}
                placeholder="Tell us about your pet"
                required
              />
              <Form.Control.Feedback type="invalid">
                Pet Description is required
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="add-pet-name-container-2">
            <InputGroup className="mb-3">
              <Form.Label>Pet Age</Form.Label>

              <Form.Control
                className="add-pet-user-input-2"
                placeholder="Pet Age"
                onChange={handleChanges}
                value={petInfo.age}
                type="number"
                name="age"
                required
              />
              <Form.Control.Feedback type="invalid">
                Pet age is required
              </Form.Control.Feedback>
            </InputGroup>

            <InputGroup className="mb-3">
              <Form.Label>Pet Breed</Form.Label>
              <Form.Control
                className="add-pet-user-input-2"
                placeholder="Pet Breed"
                type="text"
                name="breed"
                value={petInfo.breed}
                onChange={handleChanges}
                price={petInfo.breed}
                required
              />
              <Form.Control.Feedback type="invalid">
                Pet Breed is required
              </Form.Control.Feedback>
            </InputGroup>
          </div>

          <div className="add-pet-name-container-2">
            <InputGroup className="mb-3">
              <Form.Label>Pet Price</Form.Label>

              <Form.Control
                className="add-pet-user-input-2"
                placeholder="Pet Price"
                onChange={handleChanges}
                value={petInfo.price}
                type="number"
                name="price"
                required
              />
              <Form.Control.Feedback type="invalid">
                Pet Price is required
              </Form.Control.Feedback>
            </InputGroup>

            <InputGroup className="mb-3">
              <Form.Label>Pet Gender</Form.Label>
              <Form.Select
                aria-label="Default select example"
                className="add-pet-user-input-2"
                name="gender"
                value={petInfo.gender}
                onChange={handleGenderChange}
                required
              >
                <option value="">Pet Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Pet Gender is required
              </Form.Control.Feedback>
            </InputGroup>
          </div>

          <div className="add-pet-submit-btn">
            <Button variant="primary" type="submit">
              Add Pet
            </Button>
          </div>
        </Form>
      </div>
      <Footer />
    </>
  );
};
export default UserAddPet;
