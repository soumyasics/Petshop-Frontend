import PetShopNavbar from "../Common/PetShopNavbar";
import uploadImgIcon from "../../../Assets/upload-img-icon.png";
import Footer from "../../Common/Footer/Footer";
import addPetImgPlaceholder from "../../../Assets/add-pet-img-placeholder.png";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import "./AddFood.css";
import axiosInstance from "../../../BaseURL";
// Add Pet Home done by Sumya on 18/11
const AddFood = () => {
    const [activeImage, setActiveImage] = useState(null);
    const [validated, setValidated] = useState(false);

    const fileInputRef = useRef(null);
    const [foodInfo, setFoodInfo] = useState({

        shopid: "",
        flavour: "",
        brand: "",
        agerange: "",
        quantity: "",
        description: "",
        price: "",
        targetpet:"",
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
            setFoodInfo({
                ...foodInfo,
                shopid: petshopInfo._id,
            })
        } else {
            console.log("login first");
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("accessory  info", foodInfo);
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        setValidated(true);
        const {
            shopid,
            targetpet,
            brand,
            flavour,
            quantity,
            agerange,
            description,
            price,
            img
        } = foodInfo;

        if (
            !targetpet ||
            !agerange ||
            !quantity ||
            !flavour ||
            !brand ||
            !description ||
            !price
        ) {
            console.log("All fields are required.");
            return;
        }
        sendToServer(foodInfo);
    };
    const sendToServer = (foodInfo) => {

        axiosInstance
            .post("/shop/addFood", foodInfo, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                    alert("Food Item added Successfully");
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000)
                }
            }).catch((err) => {
                console.log('err', err);
                if (err.response.status !== 200) {
                    alert("Food not added");
                }
            }).finally(() => {
                console.log('finally');
            })
    };

    const handleChanges = (e) => {
        const { name, value } = e.target;
        console.log("tes",e.target.value);
        setFoodInfo({
            ...foodInfo,
            [name]: value,
        });
    };
    const handleGenderChange = (e) => {
        setFoodInfo({
            ...foodInfo,
            gender: e.target.value,
        });
    };

    const handleTypeChange = (e) => {
        setFoodInfo({
            ...foodInfo,
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
        setFoodInfo({
            ...foodInfo,
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
            <div className="add-pet-food-form-container-2">
                <h2>Add Food </h2>
                <Form
                    className="add-pet-food-form-2"
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                >
                    <div className="add-pet-food-name-container-2">
                        <InputGroup className="mb-3">
                            <Form.Label>Flavour</Form.Label>

                            <Form.Control
                                className="add-pet-food-user-input-2"
                                placeholder="Flavour Type"
                                type="text"
                                onChange={handleChanges}
                                name="flavour"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                            Flavour Type is required
                            </Form.Control.Feedback>
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <Form.Label>Target Pet Type</Form.Label>
                            <Form.Select
                                aria-label="Default select example"
                                className="add-pet-food-user-input-2"
                                name="targetpet"
                                onChange={handleTypeChange}
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
                    <div className="add-pet-food-photo-2">
                        <label>Pet Food Image </label>
                        <div className="pet-img-placeholder">
                            <img
                                src={activeImage ? activeImage : addPetImgPlaceholder}
                                alt="placeholder"
                            />
                            <img
                                className="add-pet-food-upload-img-icon-2"
                                src={uploadImgIcon}
                                alt="upload icon"
                                onClick={handleImgBtnClick}
                            />
                            <input
                                type="file"
                                accept="image/*"
                                ref={fileInputRef}
                                name="img"
                                className="add-pet-food-img-upload"
                                onChange={handleImageChange}
                            />
                        </div>
                    </div>
                    <div className="mb-3 mt-3">
                        <Form.Label>brand Name </Form.Label>

                        <Form.Control
                            className="add-pet-food-user-input-2"
                            placeholder="Brand Name"
                            type="text"
                            onChange={handleChanges}
                            name="brand"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Brand is required
                        </Form.Control.Feedback>
                    </div>

                    <div className="add-pet-food-desc">
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="description"
                                onChange={handleChanges}
                                rows={3}
                                placeholder="Tell us about the pet home"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                 Description is required
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>
                    <div className="add-pet-food-name-container-2">
                        <InputGroup className="mb-3">
                            <Form.Label>Age Range</Form.Label>

                            <Form.Control
                                className="add-pet-food-user-input-2"
                                placeholder="Age Range "
                                onChange={handleChanges}
                                type="text"
                                name="agerange"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                            age range is required
                            </Form.Control.Feedback>
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <Form.Label>Food Price</Form.Label>

                            <Form.Control
                                className="add-pet-food-user-input-2"
                                placeholder="Food Price"
                                onChange={handleChanges}
                                type="number"
                                name="price"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Food Price is required
                            </Form.Control.Feedback>
                        </InputGroup>
                    </div>

                    <div className="add-pet-food-name-container-2">
                        <InputGroup className="mb-3">
                            <Form.Label>Food Quantity</Form.Label>

                            <Form.Control
                                className="add-pet-food-user-input-2"
                                placeholder="Quantity"
                                onChange={handleChanges}
                                type="text"
                                name="quantity"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                            quantity is required
                            </Form.Control.Feedback>
                        </InputGroup>
                       
                        {/* <InputGroup className="mb-3">
                            <Form.Label>Breadth</Form.Label>

                            <Form.Control
                                className="add-pet-food-user-input-2"
                                placeholder="Pet Home Breadth"
                                onChange={handleChanges}
                                value={foodInfo.breadth}
                                type="text"
                                name="breadth"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Breadth is required
                            </Form.Control.Feedback>
                        </InputGroup> */}
                    </div>

                    <div className="add-pet-food-submit-btn">
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
export default AddFood;
