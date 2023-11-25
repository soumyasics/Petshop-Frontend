import PetShopNavbar from "../Common/PetShopNavbar";
import uploadImgIcon from "../../../Assets/upload-img-icon.png";
import Footer from "../../Common/Footer/Footer";
import addPetImgPlaceholder from "../../../Assets/add-pet-img-placeholder.png";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import "./AddPetHome.css";
import axiosInstance from "../../../BaseURL";
// Add Pet Home done by Sumya on 18/11
const AddPetHome = () => {
    const [activeImage, setActiveImage] = useState(null);
    const [validated, setValidated] = useState(false);

    const fileInputRef = useRef(null);
    const [pethomeInfo, setPethomeInfo] = useState({

        shopid: "",
        type: "",
        brand: "",
        material: "",
        breadth: "",
        length: "",
        description: "",
        price: "",
        img: null,
        targetpet: ""
    });

    useEffect(() => {
        const petshopInfo =
            JSON.parse(localStorage.getItem("petshop-info")) || null;
        if (!petshopInfo) {
            console.log("Login first");
            return;
        }
        if (petshopInfo?.shopname && petshopInfo?._id) {
            setPethomeInfo({
                ...pethomeInfo,
                shopid: petshopInfo._id,
            })
        } else {
            console.log("login first");
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("pet home info", pethomeInfo);
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
            img,
            targetpet
        } = pethomeInfo;

        if (
            !type ||
            !targetpet ||
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
        sendToServer(pethomeInfo);
    };
    const sendToServer = (pethomeInfo) => {

        axiosInstance
            .post("/shop/addPetHome", pethomeInfo, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                    alert("Pet Home added Successfully");
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000)
                }
            }).catch((err) => {
                console.log('err', err);
                if (err.response.status !== 200) {
                    alert("Pet Home not added");
                }
            }).finally(() => {
                console.log('finally');
            })
    };

    const handleChanges = (e) => {
        const { name, value } = e.target;
        console.log("tes",e.target.value);
        setPethomeInfo({
            ...pethomeInfo,
            [name]: value,
        });
    };
    const handleGenderChange = (e) => {
        setPethomeInfo({
            ...pethomeInfo,
            gender: e.target.value,
        });
    };

    const handleTypeChange = (e) => {
        setPethomeInfo({
            ...pethomeInfo,
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
        setPethomeInfo({
            ...pethomeInfo,
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
            <div className="add-pet-home-form-container-2">
                <h2>Add PetHome </h2>
                <Form
                    className="add-pet-home-form-2"
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                >
                    <div className="add-pet-home-name-container-2">
                        <InputGroup className="mb-3">
                            <Form.Label>Home Type</Form.Label>

                            <Form.Control
                                className="add-pet-home-user-input-2"
                                placeholder="Home Type"
                                type="text"
                                onChange={handleChanges}
                                name="type"
                                value={pethomeInfo.type}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Home Type is required
                            </Form.Control.Feedback>
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <Form.Label>Target Pet Type</Form.Label>
                            <Form.Select
                                aria-label="Default select example"
                                className="add-pet-home-user-input-2"
                                name="targetpet"
                                onChange={handleTypeChange}
                                value={pethomeInfo.targetpet}
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
                    <div className="add-pet-home-photo-2">
                        <label>Pet Home Image </label>
                        <div className="pet-img-placeholder">
                            <img
                                src={activeImage ? activeImage : addPetImgPlaceholder}
                                alt="placeholder"
                            />
                            <img
                                className="add-pet-home-upload-img-icon-2"
                                src={uploadImgIcon}
                                alt="upload icon"
                                onClick={handleImgBtnClick}
                            />
                            <input
                                type="file"
                                accept="image/*"
                                ref={fileInputRef}
                                name="img"
                                className="add-pet-home-img-upload"
                                onChange={handleImageChange}
                            />
                        </div>
                    </div>
                    <div className="mb-3 mt-3">
                        <Form.Label>brand Name </Form.Label>

                        <Form.Control
                            className="add-pet-home-user-input-2"
                            placeholder="Brand Name"
                            type="text"
                            onChange={handleChanges}
                            name="brand"
                            value={pethomeInfo.brand}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Brand is required
                        </Form.Control.Feedback>
                    </div>

                    <div className="add-pet-home-desc">
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={pethomeInfo.description}
                                name="description"
                                onChange={handleChanges}
                                rows={3}
                                placeholder="Tell us about the pet home"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Pet Home Description is required
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>
                    <div className="add-pet-home-name-container-2">
                        <InputGroup className="mb-3">
                            <Form.Label>Material</Form.Label>

                            <Form.Control
                                className="add-pet-home-user-input-2"
                                placeholder="Material made up of"
                                onChange={handleChanges}
                                value={pethomeInfo.material}
                                type="text"
                                name="material"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Pet material is required
                            </Form.Control.Feedback>
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <Form.Label>Pet Home Price</Form.Label>

                            <Form.Control
                                className="add-pet-home-user-input-2"
                                placeholder="Pet Home Price"
                                onChange={handleChanges}
                                value={pethomeInfo.price}
                                type="number"
                                name="price"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Pet Price is required
                            </Form.Control.Feedback>
                        </InputGroup>
                    </div>

                    <div className="add-pet-home-name-container-2">
                        <InputGroup className="mb-3">
                            <Form.Label>Pet Home Length</Form.Label>

                            <Form.Control
                                className="add-pet-home-user-input-2"
                                placeholder="Pet Home Lenth"
                                onChange={handleChanges}
                                value={pethomeInfo.length}
                                type="text"
                                name="length"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                               Length is required
                            </Form.Control.Feedback>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <Form.Label>Pet Home Breadth</Form.Label>

                            <Form.Control
                                className="add-pet-home-user-input-2"
                                placeholder="Pet Home Breadth"
                                onChange={handleChanges}
                                value={pethomeInfo.breadth}
                                type="text"
                                name="breadth"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Pet Price is required
                            </Form.Control.Feedback>
                        </InputGroup>
                        {/* <InputGroup className="mb-3">
                            <Form.Label>Breadth</Form.Label>

                            <Form.Control
                                className="add-pet-home-user-input-2"
                                placeholder="Pet Home Breadth"
                                onChange={handleChanges}
                                value={pethomeInfo.breadth}
                                type="text"
                                name="breadth"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Breadth is required
                            </Form.Control.Feedback>
                        </InputGroup> */}
                    </div>

                    <div className="add-pet-home-submit-btn">
                        <Button variant="primary" type="submit">
                            Add Pet Home
                        </Button>
                    </div>
                </Form>
            </div>
            <Footer />
        </>
    );
};
export default AddPetHome;
