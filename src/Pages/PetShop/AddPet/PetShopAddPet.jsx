import PetShopNavbar from "../Common/PetShopNavbar";
import uploadImgIcon from "../../../Assets/upload-img-icon.png";
import Footer from "../../Common/Footer/Footer";
import addPetImgPlaceholder from "../../../Assets/add-pet-img-placeholder.png";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useState, useRef } from "react";
import "./PetShopAddPet.css";

const PetShopAddPet = () => {
  const [activeImage, setActiveImage] = useState(null);
  const fileInputRef = useRef(null);
  const [petInfo, setPetInfo] = useState({
    name: "a",
    type: "dog",
    age: "a",
    gender: "male",
    breed: "a",
    description: "a",
    image: null,
    price: "1000",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("pet info", petInfo);
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
      image: e.target.files[0],
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
      <PetShopNavbar />
      <div className="add-pet-form-container-2">
        <h2>Add Pet </h2>
        <form action="add-pet-form-2">
          <div className="add-pet-name-container-2">
            <InputGroup className="mb-3">
              <Form.Label>Pet Name</Form.Label>

              <Form.Control
                className="add-pet-user-input-2"
                placeholder="Pet Name"
                type="text"
                onChange={handleChanges}
                name="name"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <Form.Label>Pet Type</Form.Label>
              <Form.Select
                aria-label="Default select example"
                className="add-pet-user-input-2"
                name="type"
                onChange={handleTypeChange}
              >
                <option value="">Pet Type</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="other">Other</option>
              </Form.Select>
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
                className="add-pet-img-upload"
                onChange={handleImageChange}
              />
            </div>
          </div>
          <div className="mb-3 mt-3">
            <Form.Label>Shop/Owner Name </Form.Label>

            <Form.Control
              className="add-pet-user-input-2"
              placeholder="Pet Breed"
              type="text"
              name="breed"
            />
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
              />
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
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <Form.Label>Pet Breed</Form.Label>
              <Form.Control
                className="add-pet-user-input-2"
                placeholder="Pet Breed"
                type="text"
                name="breed"
                onChange={handleChanges}
                price={petInfo.breed}
              />
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
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <Form.Label>Pet Gender</Form.Label>
              <Form.Select
                aria-label="Default select example"
                className="add-pet-user-input-2"
                name="gender"
                onChange={handleGenderChange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Form.Select>
            </InputGroup>
          </div>

          <div className="add-pet-submit-btn">
            <Button onClick={handleSubmit} variant="primary" type="submit">
              Add Pet
            </Button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};
export default PetShopAddPet;
