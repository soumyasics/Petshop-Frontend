
import zookeeperLogo from "../../../Assets/zookeper-logo.png";
import { CgProfile } from "react-icons/cg";
import imgUploadPlaceholder from "../../../Assets/PlaceholderImage.png";
import uploadImageIcon from "../../../Assets/upload-img-icon.png";
import "./AddPet.css";
import { InputGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Footer from "../../Common/Footer/Footer";
const AddPet = () => {
  return (
    <>
      <div className="add-pet-navbar">
        <div className="add-pet-logo">
          <img src={zookeeperLogo} alt="zookeeper logo" />
          <p>ZOOKEPER</p>
        </div>
        <div className="add-pet-btn-containers">
          <button>Shops</button>
          <button>All Pets</button>
          <button>All Users</button>
          <select>
            <option value="icon">
              Profile
              <CgProfile />
            </option>
          </select>
        </div>
      </div>

      <div className="add-pet-header-img">
        <img
          className="add-pet-placeholder-img"
          src={imgUploadPlaceholder}
          alt="women"
        />
        <img
          className="add-pet-upload-img-icon"
          src={uploadImageIcon}
          alt="upload-img-iconn"
        />
      </div>

      <div className="add-pet-form-container">
        <h2>Add a shop</h2>
        <form id="add-pet-form">
          <div className="add-pet-name-container">
            <InputGroup className="mb-3 add-pet-user-input">
              <Form.Label> First Name</Form.Label>

              <Form.Control
                placeholder="First Name"
                aria-label="firstname"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="mb-3 add-pet-user-input">
              <Form.Label> Last Name</Form.Label>

              <Form.Control
                placeholder="Last Name"
                aria-label="lastname"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </div>

          <InputGroup className="mb-3 add-pet-user-input">
            <Form.Label> Shop Name</Form.Label>

            <Form.Control
              placeholder="Shop Name"
              aria-label="shop-name"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3 add-pet-user-input">
            <Form.Label> E Mail</Form.Label>

            <Form.Control
              placeholder="Email"
              aria-label="email"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3 add-pet-user-input">
            <Form.Label> Address</Form.Label>

            <Form.Control
              placeholder="Address"
              aria-label="address"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3 add-pet-user-input">
            <Form.Label> Contact</Form.Label>

            <Form.Control
              placeholder="Contact"
              aria-label="contact"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3 add-pet-user-input">
            <Form.Label> License Number</Form.Label>

            <Form.Control
              placeholder="License Number"
              aria-label="License Number"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3 add-pet-user-input">
            <Form.Label> Registration Number</Form.Label>

            <Form.Control
              placeholder="Registration Number"
              aria-label="Registration Number"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <div className="add-pet-name-container">
            <InputGroup className="mb-3 add-pet-user-input">
              <Form.Label> Open From</Form.Label>

              <Form.Control
                placeholder="Open From"
                aria-label="Open From"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="mb-3 add-pet-user-input">
              <Form.Label> Open Till</Form.Label>

              <Form.Control
                placeholder="Open Till"
                aria-label="Open Till"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3 add-pet-user-input">
              <Form.Label> Ownership ID</Form.Label>

              <Form.Control
                placeholder="Ownership Id"
                aria-label="Ownership Id"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </div>
          <div className="add-pet-btn-box">
            <input type="submit" value="Add Shop" />
          </div>
        </form>

      </div>
        <Footer />
    </>
  );
};
export default AddPet;

