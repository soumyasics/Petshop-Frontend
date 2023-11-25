import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import "./PetShopRequest.css";
import { Button, Modal, Toast, ToastContainer } from "react-bootstrap";
import axiosInstance from "../../../BaseURL";

const PendingOrders = ({ petData, orderId, toggleState, setToggleState }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showCancelModel, setShowCancelModel] = useState(false);

  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [toastColor, setToastColor] = useState("success");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCancelClose = () => setShowCancelModel(false);
  const handleCancelShow = () => setShowCancelModel(true);

  console.log("peddd, pe", petData);
  if (!petData || petData.length === 0) {
    return "You don't have any pending orders.";
  }
  const {
    petname,
    type,
    breed,
    price,
    description,
    gender,
    img,
    age,
    shopid,
    _id,
  } = petData;

  const BASE_URL = "http://localhost:4000/";
  const dogPlaceholderImg = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9L2cU1Xxu_XDcW-C0DueoXMgQ4W6qQO7xJ7K6gVw-IA&s`;
  const catPlaceholderImg = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQednHyOH85OzO39f2ofViDcrVrF0U1JAWL0lN4KGPbyiO89GJgEy2oERXSIJ9M6cEDVuY&usqp=CAU`;

  const redirectToPetMoreInfo = (id) => {
    navigate(`/pet/more-info/${id}`);
  };

  const sendAcceptRequest = async () => {
    console.log("oid", orderId);
    if (!orderId) {
      console.log("OrderId not found");
      return;
    }
    try {
      const res = await axiosInstance.post("shop/acceptOrdersById/" + orderId);
      if (res.status === 200) {
        return true;
      }
      return false;
    } catch (error) {
      console.log("error on accept request", error);
    }
  };
  const handleConfirmRequest = async () => {
    const result = await sendAcceptRequest();
    if (result) {
      setAlertMsg(petname + "Adoption Request Accepted");
      setToastColor("success");
      setShowAlert(true);
      setToggleState(!toggleState);
    }
    handleClose();
  };

  const sendCancelRequest = async () => {
    if (!orderId) {
      console.log("OrderId not found");
      return;
    }
    try {
      const res = await axiosInstance.post("shop/rejectOrdersById/" + orderId);
      if (res.status === 200) {
        return true;
      }
      return false;
    } catch (error) {
      console.log("error on accept request", error);
    }
  };
  const handleCancelRequest = async () => {
    const result = await sendCancelRequest();
    if (result) {
      setAlertMsg(petname + "Adoption Request Canceled");
      setToastColor("warning");
      setShowAlert(true);
      setToggleState(!toggleState);
    }
    handleCancelClose();
  };

  return (
    <>
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
      <div className="explore-shop-card">
        <div className="shop-top-container">
          <div className="explore-shop-card-left">
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
          <div className="explore-shop-card-right">
            <h3>{petname}</h3>
            <p>{`Type:  ${type}`}</p>
            <p>{`Gender:  ${gender}`}</p>
            <p>{`Breed:  ${breed}`}</p>
            <p>{`Age:  ${age} years`}</p>
            <div className="shop-rating-container"></div>
          </div>
        </div>
        <div className="explore-card-footer">
          <button className="order-confirm-btn" onClick={handleShow}>
            Confirm
          </button>

          <button className="order-cancel-btn" onClick={handleCancelShow}>
            {" "}
            Cancel
          </button>
        </div>
      </div>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm {petname} Adoption</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Are you sure you want to Sell {petname} at cost of {price} rupees?
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleConfirmRequest}>
              {" "}
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={showCancelModel} onHide={handleCancelClose}>
          <Modal.Header closeButton>
            <Modal.Title>Cancel {petname} Adoption</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Are you sure you want to Cancel {petname} adoption request?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCancelClose}>
              Back
            </Button>
            <Button variant="primary" onClick={handleCancelRequest}>
              {" "}
              Cancel Request
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  );
};
export default PendingOrders;
