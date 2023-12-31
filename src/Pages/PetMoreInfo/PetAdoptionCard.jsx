import { Button, Modal, Toast, ToastContainer } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useUserData } from "../../Context/UserContext";
import axiosInstance from "../../BaseURL.js";
import "./PetAdoptionCard.css";
const PetAdoptionCard = ({ petData }) => {
  const [activeUserData2, setActiveUserData2] = useState("");
  const [buttonContent, setButtonContent] = useState("Adopt Me");
  const [isAdopted, setIsAdopted] = useState(false);
  // toast code here
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [toastColor, setToastColor] = useState("dark");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { activeUserData } = useUserData();
  const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:4000/";

  const { age, breed, description, gender, img, petname, price, shopid, type } =
    petData;

  const dogPlaceholderImg = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9L2cU1Xxu_XDcW-C0DueoXMgQ4W6qQO7xJ7K6gVw-IA&s`;
  const catPlaceholderImg = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQednHyOH85OzO39f2ofViDcrVrF0U1JAWL0lN4KGPbyiO89GJgEy2oERXSIJ9M6cEDVuY&usqp=CAU`;

  const getUserDataFromLs = () => {
    const userData = JSON.parse(localStorage.getItem("petshop-user")) || null;
    if (userData) {
      return userData;
    }
    console.log("login for loading wishlists");
    return null;
  };

  useEffect(() => {
    const getUserData = getUserDataFromLs();
    if (getUserData) {
      setActiveUserData2(getUserData);
    }
  }, []);
  const sendDataToServer = () => {
    const data = {
      petid: petData?._id,
      itemtype: petData?.type,
      ownertype: "user",
      shopid: petData?.shopid || null,
      ownerid: petData?.ownerid || null,
      userid: activeUserData2?._id,
    };

    axiosInstance
      .post("user/addOrder", data)
      .then((res) => {
        if (res.status === 200) {
          setToastColor("success");
          setShowAlert(true);
          setAlertMsg(`${petname} Adoption Request Send Successfully`);
          setButtonContent("Adopted");
          setIsAdopted(true);
        } else {
          console.log("response is not 200", res);
        }
      })
      .catch((err) => {
        console.log("error son add order", err);
        if (err.response.status === 500) {
          setToastColor("danger");
          setShowAlert(true);
          setAlertMsg(`${petname} Adoption Request Failed`);
          setIsAdopted(true);
        }
      });
  };
  const confirmAdoption = () => {
    handleClose();
    sendDataToServer();
  };

  if (!petData) {
    return (
      <>
        <h1> Some Issues on fetching pet data.. </h1>
      </>
    );
  }
  return (
    <div className="pet-adoption-card-container">
      <ToastContainer className="pet-adoption-card-toast" position="middle-top">
        <Toast
          className="toast-msg"
          bg={toastColor}
          onClose={() => setShowAlert(false)}
          show={showAlert}
          animation={true}
          delay={2000}
          autohide
        >
          <Toast.Body>{alertMsg}</Toast.Body>
        </Toast>
      </ToastContainer>
      <div className="pet-adoption-card-top">
        <div className="pet-adoption-card-container-left">
          <img
            src={
              img?.filename
                ? `${BASE_URL}${img.filename}`
                : type === "cat"
                ? catPlaceholderImg
                : dogPlaceholderImg
            }
            alt="pet-card"
          />
        </div>
        <div className="pet-adoption-card-container-right">
          <h2>
            {" "}
            <span> Meet </span> {petname}
          </h2>
          <p>
            {" "}
            <span>Type: </span> {type}
          </p>
          <p>
            {" "}
            <span>Gender: </span> {gender}
          </p>
          <p>
            {" "}
            <span>Age: </span> {age}
          </p>
          <p>
            {" "}
            <span>Breed: </span> {breed}
          </p>
          <p>
            {" "}
            <span>Price: </span> {price}
          </p>
        </div>
      </div>
      <div className="pet-adoption-card-footer">
        <h2>About Me</h2>
        <p>{description}</p>
        <p className="pet-adoption-card-footer-contact">
          {" "}
          If you have any douts or need more information, please{" "}
          <span> Contact us </span>
        </p>
        <button
          onClick={handleShow}
          disabled={isAdopted}
          className={`adobpt-me-btn ${isAdopted ? "btn-disabled" : ""}`}
        >
          {buttonContent}
        </button>
      </div>

      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm {petname} Adoption</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Congratulations! You are about to make a wonderful decision by
              adopting {petname}!
            </p>
            <p>
              By clicking the "Pay ₹ {price}" button, you confirm your decision
              to adopt {petname}.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={confirmAdoption}>
              Pay ₹ {price}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};
export default PetAdoptionCard;
