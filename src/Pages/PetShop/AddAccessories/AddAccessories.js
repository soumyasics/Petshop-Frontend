import PetShopNavbar from "../Common/PetShopNavbar";
import uploadImgIcon from "../../../Assets/upload-img-icon.png";
import Footer from "../../Common/Footer/Footer";
import addPetImgPlaceholder from "../../../Assets/add-pet-img-placeholder.png";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import "./Addaccessories.css";
import axiosInstance from "../../../BaseURL";
// Add Pet Home done by Sumya on 18/11
const AddAccessories = () => {
    const [activeImage, setActiveImage] = useState(null);
    const [validated, setValidated] = useState(false);

    const fileInputRef = useRef(null);
    const [accessoryInfo, setAccessoryInfo] = useState({

        shopid: "",
        type: "",
        brand: "",
        material: "",
        breadth: "",
        length: "",
        description: "",
        price: "",
        img: null
        });

    useEffect(() => {
        const petshopInfo =
            JSON.parse(localStorage.getItem("petshop-info")) || null;
        if (!petshopInfo) {
            console.log("Login first");
            return;
        }
        if (petshopInfo?.shopname && petshopInfo?._id) {
            setAccessoryInfo({
                ...accessoryInfo,
                shopid: petshopInfo._id,
            })
        } else {
            console.log("login first");
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("accessory  info", accessoryInfo);
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        setValidated(true);
        const {
            shopid,
            type,
            brand,
            material,
            breadth,
            length,
            description,
            price,
            img
        } = accessoryInfo;

        if (
            !type ||
            !length ||
            !breadth ||
            !material ||
            !brand ||
            !description ||
            !price
        ) {
            console.log("All fields are required.");
            return;
        }
        sendToServer(accessoryInfo);
    };
    const sendToServer = (accessoryInfo) => {

        axiosInstance
            .post("/shop/addAccessory", accessoryInfo, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                    alert("Accessory added Successfully");
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000)
                }
            }).catch((err) => {
                console.log('err', err);
                if (err.response.status !== 200) {
                    alert("Accessory  not added");
                }
            }).finally(() => {
                console.log('finally');
            })
    };

    const handleChanges = (e) => {
        const { name, value } = e.target;
        console.log("tes",e.target.value);
        setAccessoryInfo({
            ...accessoryInfo,
            [name]: value,
        });
    };
    const handleGenderChange = (e) => {
        setAccessoryInfo({
            ...accessoryInfo,
            gender: e.target.value,
        });
    };

    const handleTypeChange = (e) => {
        setAccessoryInfo({
            ...accessoryInfo,
            targetpet: e.target.value,
        });
    };

    const handleImgBtnClick = () => {
        if (fileInputRef && fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleImageChange = (e) => {
        const newPetImage = e.target.files[0];
        setAccessoryInfo({
            ...accessoryInfo,
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
            <PetShopNavbar />
            <div className="add-pet-accessories-form-container-2">
                <h2>Add Accessory </h2>
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
                                value={accessoryInfo.type}
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
                                value={accessoryInfo.targetpet}
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
                                src={activeImage ? activeImage : addPetImgPlaceholder}
                                alt="placeholder"
                            />
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
                            value={accessoryInfo.brand}
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
                                value={accessoryInfo.description}
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
                                value={accessoryInfo.material}
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
                                value={accessoryInfo.price}
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
                                value={accessoryInfo.length}
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
                                value={accessoryInfo.breadth}
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
                            Add Accessory
                        </Button>
                    </div>
                </Form>
            </div>
            <Footer />
        </>
    );
};
export default AddAccessories;
