import zookeeperLogo from "../../../Assets/zookeper-logo.png";
import {useNavigate} from 'react-router-dom';
import "./PetShopNavbar.css";
const PetShopNavbar = () => {
  const navigate = useNavigate();
  const navigateAddPet = () => {
    navigate("/petshop/add-pet");
  }
  return (
    <>
      <div className="add-pet-navbar">
        <div className="add-pet-logo">
          <img src={zookeeperLogo} alt="zookeeper logo" />
          <p>ZOOKEPER</p>
        </div>
        <div className="add-pet-btn-containers">
          <button onClick={navigateAddPet}>Add Pet</button>
          <button>All Pets</button>
          <button>All Users</button>
          <select>
            <option value="icon">Profile</option>
          </select>
        </div>
      </div>
    </>
  );
};
export default PetShopNavbar;
