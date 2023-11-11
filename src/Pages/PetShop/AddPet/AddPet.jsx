import zookeeperLogo from "../../../Assets/zookeper-logo.png";
import { CgProfile } from "react-icons/cg";
import imgUploadPlaceholder from "../../../Assets/PlaceholderImage.png";
import uploadImageIcon from "../../../Assets/upload-img-icon.png";
import "./AddPet.css";
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
        <img className="add-pet-placeholder-img" src={imgUploadPlaceholder} alt="women" />
        <img className="add-pet-upload-img-icon" src={uploadImageIcon} alt="upload-img-iconn" />
      </div>

      <div className="add-pet-form-container">
        <h2>Add a shop</h2>
        <form > 


        </form>
      </div>
    </>
  );
};
export default AddPet;
