import React from 'react'
import PetShopNavbar from "../Common/PetShopNavbar";
import uploadImgIcon from "../../../Assets/upload-img-icon.png";
import Footer from "../../Common/Footer/Footer";
import addPetImgPlaceholder from "../../../Assets/add-pet-img-placeholder.png";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import "../AddAccessories/Addaccessories.css";
import axiosInstance from "../../../BaseURL";
import PetShoNav from "../PetShopNav/PetShopNav";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ShopEditAccessories= ({imgUrl}) => {
    const [
      activeImage, setActiveImage] = useState(null);
    const [validated, setValidated] = useState(false);
    const {id} = useParams()
    const fileInputRef = useRef(null);
    const [petInfo, setPetInfo] = useState({img:{filename:''}});
    const navigate = useNavigate();
  
    useEffect(() => {
console.log(id);
        axiosInstance.post(`/shop/viewPAccessById/${id}`)
        .then((res)=>{
          console.log(res);
  
          setPetInfo(res.data.data)
          if(res.data.data.img!=null){
             setActiveImage(`${imgUrl}/${res.data.data.img.filename}`);
          }
         
          console.log(res.data.data.img);

      })
      },  []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("pet info", petInfo);
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
  

   
    sendToServer(petInfo);
  };
  const sendToServer = (petInfo) => {
    console.log("pet info",petInfo);
   
    axiosInstance
      .post(`/shop/editAccessById/${id}`, petInfo, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert( "Pet added Successfully");
          navigate("/petshop/view-mypets")
         
        }
      }).catch((err) => {
        console.log('err', err);
      if (err.response.status !== 200) {
            alert("Pet not added");
        }
      }).finally(() => {
        console.log('finally');
      })
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

    console.log(newPetImage);

    if (newPetImage) {
      reader.readAsDataURL(newPetImage);
    } else {
      setActiveImage(null);
    }
  };

  
    return (
      <>
    
            <div className="add-pet-accessories-form-container-2">
                <h2>Edit Accessory </h2>
                <Form
                    className="add-pet-accessories-form-2"
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                >
                    <div className="add-pet-accessories-name-container-2">
                        <InputGroup className="mb-3">
                            <Form.Label>Home Type</Form.Label>

                            <Form.Control
                                className="add-pet-accessories-user-input-2"
                                placeholder="Accessory Type"
                                type="text"
                                onChange={handleChanges}
                                name="type"
                                value={petInfo
                                    .type}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                            Accessory Type is required
                            </Form.Control.Feedback>
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <Form.Label>Target Pet Type</Form.Label>
                            <Form.Select
                                aria-label="Default select example"
                                className="add-pet-accessories-user-input-2"
                                name="targetpet"
                                onChange={handleTypeChange}
                                value={petInfo.targetpet}
                                required
                            >
                                <option value="">Target Pet Type</option>
                                <option value="dog">Dog</option>
                                <option value="cat">Cat</option>
                                <option value="birds">Birds</option>

                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                Target Pet Type is required
                            </Form.Control.Feedback>
                        </InputGroup>
                    </div>
                    <div className="add-pet-accessories-photo-2">
                        <label>Pet Accessory Image </label>
                        <div className="pet-img-placeholder">
                         
                            <img
                                src={`${activeImage ? activeImage : addPetImgPlaceholder}`}  alt="placeholder"
                            />
                            {console.log(activeImage)}
                            <img
                                className="add-pet-accessories-upload-img-icon-2"
                                src={uploadImgIcon}
                                alt="upload icon"
                                onClick={handleImgBtnClick}
                            />
                            <input
                                type="file"
                                accept="image/*"
                                ref={fileInputRef}
                                name="img"
                                className="add-pet-accessories-img-upload"
                                onChange={handleImageChange}
                            />
                        </div>
                    </div>
                    <div className="mb-3 mt-3">
                        <Form.Label>brand Name </Form.Label>

                        <Form.Control
                            className="add-pet-accessories-user-input-2"
                            placeholder="Brand Name"
                            type="text"
                            onChange={handleChanges}
                            name="brand"
                            value={petInfo.brand}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Brand is required
                        </Form.Control.Feedback>
                    </div>

                    <div className="add-pet-accessories-desc">
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
                                placeholder="Tell us about the pet home"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Accessory Description is required
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>
                    <div className="add-pet-accessories-name-container-2">
                        <InputGroup className="mb-3">
                            <Form.Label>Material</Form.Label>

                            <Form.Control
                                className="add-pet-accessories-user-input-2"
                                placeholder="Material made up of"
                                onChange={handleChanges}
                                value={petInfo.material}
                                type="text"
                                name="material"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                 material is required
                            </Form.Control.Feedback>
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <Form.Label>Accessory Price</Form.Label>

                            <Form.Control
                                className="add-pet-accessories-user-input-2"
                                placeholder="Pet Home Price"
                                onChange={handleChanges}
                                value={petInfo.price}
                                type="number"
                                name="price"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Accessory Price is required
                            </Form.Control.Feedback>
                        </InputGroup>
                    </div>

                    <div className="add-pet-accessories-name-container-2">
                        <InputGroup className="mb-3">
                            <Form.Label>Accessory Length</Form.Label>

                            <Form.Control
                                className="add-pet-accessories-user-input-2"
                                placeholder="Pet Home Lenth"
                                onChange={handleChanges}
                                value={petInfo.length}
                                type="text"
                                name="length"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                               Length is required
                            </Form.Control.Feedback>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <Form.Label>Accessory Breadth</Form.Label>

                            <Form.Control
                                className="add-pet-accessories-user-input-2"
                                placeholder="Pet Home Breadth"
                                onChange={handleChanges}
                                value={petInfo.breadth}
                                type="text"
                                name="breadth"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                               breadth is required
                            </Form.Control.Feedback>
                        </InputGroup>
                        {/* <InputGroup className="mb-3">
                            <Form.Label>Breadth</Form.Label>

                            <Form.Control
                                className="add-pet-accessories-user-input-2"
                                placeholder="Pet Home Breadth"
                                onChange={handleChanges}
                                value={accessoryInfo.breadth}
                                type="text"
                                name="breadth"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Breadth is required
                            </Form.Control.Feedback>
                        </InputGroup> */}
                    </div>

                    <div className="add-pet-accessories-submit-btn">
                        <Button variant="primary" type="submit">
                            Update Accessory
                        </Button>
                    </div>
                </Form>
            </div>
            <Footer />
        </>
    );
  };
export default ShopEditAccessories