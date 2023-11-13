import zookeeperLogo from "../../../Assets/zookeper-logo.png";
import "./PetShopNavbar.css";
const PetShopNavbar = () => {
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
            <option value="icon">Profile</option>
          </select>
        </div>
      </div>
    </>
  );
};
export default PetShopNavbar;
