import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import "./PetAdoptionCard.css";
const PetAdoptionCard = ({ petData }) => {
  const [show, setShow] = useState(false);
  const [buttonContent, setButtonContent] = useState("Adopt Me");
  const [isAdopted, setIsAdopted] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { age, breed, description, gender, img, petname, price, shopid, type } =
    petData;

  if (!petData) {
    return (
      <>
        <h1> Loading... </h1>
      </>
    );
  }
  const BASE_URL = "http://localhost:4000/";
  const dogPlaceholderImg = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9L2cU1Xxu_XDcW-C0DueoXMgQ4W6qQO7xJ7K6gVw-IA&s`;
  const catPlaceholderImg = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQednHyOH85OzO39f2ofViDcrVrF0U1JAWL0lN4KGPbyiO89GJgEy2oERXSIJ9M6cEDVuY&usqp=CAU`;

  const confirmAdoption = () => {
    handleClose();
    alert(`${petname} Adoption Confirmed`);
    setButtonContent("Adopted");
    setIsAdopted(true);
  };
  return (
    <div className="pet-adoption-card-container">
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
