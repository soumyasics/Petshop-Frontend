import { Button, Modal, Toast, ToastContainer } from "react-bootstrap";
import { useState } from "react";
import { useUserData } from "../../Context/UserContext";
import axiosInstance from "../../BaseURL.js";
import "./UserOrderCard.css";

const UserOrderCard = ({
  petData,
  userAction,
  setUserAction,
  orderStatus,
  orderId,
}) => {
  const [buttonContent, setButtonContent] = useState("");
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

  if (!petData) {
    return (
      <>
        <h1> Some Issues on fetching pet data.. </h1>
      </>
    );
  }
  const dogPlaceholderImg = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9L2cU1Xxu_XDcW-C0DueoXMgQ4W6qQO7xJ7K6gVw-IA&s`;
  const catPlaceholderImg = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQednHyOH85OzO39f2ofViDcrVrF0U1JAWL0lN4KGPbyiO89GJgEy2oERXSIJ9M6cEDVuY&usqp=CAU`;

  const sendDataToServer = () => {
    const data = {
      petid: petData?._id,
      itemtype: petData?.type,
      ownertype: "user",
      shopid: petData?.shopid,
      userid: activeUserData?._id,
    };

    axiosInstance
      .post("user/addOrder", data)
      .then((res) => {
        if (res.status === 200) {
          setToastColor("success");
          setShowAlert(true);
          setAlertMsg(`${petname} Adoption Confirmed`);
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
          setAlertMsg(`${petname} Adoption Failed`);
          setIsAdopted(true);
        }
      });
  };
  const confirmAdoption = () => {
    handleClose();
    sendDataToServer();
  };
  const removeWishlist = () => {
    axiosInstance
      .delete("/user/removeWishlistById/" + orderId)
      .then((res) => {
        console.log("my res", res);
        if (res.status === 200) {
          setToastColor("primary");
          setShowAlert(true);
          setAlertMsg(`Pet Removed from Wishlist`);
          setTimeout(() => {
            setUserAction(!userAction);
          }, 1000);
        }
      })
      .catch((err) => {
        console.log("error -1", err);
      });
  };
  return (
    <div
      className="pet-adoption-card-container pet-adoption-card-container-2"
      id="pet-adoption-card-container-2"
    >
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
      <div className={`pet-adoption-card-footer`} id="pet-order-status-text">
        <p>
          Order Status:{" "}
          <span
            className={`${
              orderStatus === "accepted"
                ? "green-color-text"
                : orderStatus === "rejected"
                ? "red-color-text"
                : "blue-color-text"
            }`}
          >
            {orderStatus}.
          </span>
        </p>
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
export default UserOrderCard;
