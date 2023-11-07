import catDogImg from "../../../Assets/dog-cat-look.jpg";
import UserNavbar from "../UserNavbar/UserNavbar";
import {useState} from 'react';
import ShopContainer from "../../../Components/ExploreComponents/ShopContainer.jsx";
import "./Explore.css";

const ExplorePage = () => {
  const [activeSection, setActiveSection] = useState("shops");
  return (
    <>
      <UserNavbar />
      <div className="explore-page-container">
        <div className="explore-header-section">
          <img src={catDogImg} alt="cat-dog" />
        </div>
        <div>
          <div className="explore-body-container">
            <div className="explore-btn-container">
              <button>Shops</button>
              <button>Pets</button>
              <button>Food</button>
              <button>Pet Homes</button>
              <button>Accessories</button>
            </div>
          </div>
          <div className="explore-component-rendering">
              <ShopContainer />
          </div>
        </div>
      </div>
    </>
  );
};
export default ExplorePage;
