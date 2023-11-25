import zookeeper from "../../../Assets/zookeper-logo.png";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { LuListOrdered } from "react-icons/lu";
import { RiLoginBoxLine } from "react-icons/ri";
import { useUserData } from "../../../Context/UserContext";
import { FaHeart } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import "./PetShopNav.css";

const PetShoNav = ({ imgUrl }) => {
  const [activePage, setActivePage] = useState("home");
  const [isLoggin, setIsLoggin] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const selectRef = useRef(null);

  const navigate = useNavigate();
  // const { activeUserData } = useUserData();
  const redirectHome = () => {
    setActivePage("home");
    navigate("/petshop");
  };
  const redirectExplore = () => {
    setActivePage("pets");
    navigate("/petshop/view-mypets");
  };
  const redirectAbout = () => {
    setActivePage("accessories");
    navigate("/petshop/view-myaccessories");
  };
  const redirectPethomes = () => {
    navigate("/petshop/view-mypethomes");
    setActivePage("pethome");
  };

  const redirectpetfood = () => {
    navigate("/petshop/view-mypetfood");
    setActivePage("petfood");
  };
  const redirectPethome = () => {
    setActivePage("gallery");
    navigate("/petshop/view-pethome");
  };
  const [navbarProifleImg, setNavbarProfileImg] = useState(
    "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
  );

  useEffect(() => {
    const token = localStorage?.getItem("petshop-token") || null;
    if (token) {
      setIsLoggin(true);
    } else {
      setIsLoggin(false);
    }
    const shopInfo = JSON.parse(localStorage.getItem("petshop-info"));

    const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:4000/";
    if (shopInfo?.img?.filename) {
      setNavbarProfileImg(`${BASE_URL}${shopInfo?.img?.filename}`);
    }
  }, []);

  const handleDropdown = () => {
    setOpenDropdown((openDropdown) => !openDropdown);
    if (selectRef?.current) {
      setTimeout(() => {
        selectRef.current.focus();
      }, 0);
    }
  };

  const handleLogout = () => {
    if (localStorage.getItem("petshop-token")) {
      localStorage.removeItem("petshop-token");
    }
    setIsLoggin(false);
    navigate("/petshop/login");
  };
  const redirectPetshopOrders = () => {
    setActivePage("petorder");
    navigate("/petshop/orders");
  };
  return (
    <div className="navbar-updated-container">
      <div onClick={redirectHome} className="navbar-updated-logo-container">
        <img src={zookeeper} alt="zookeeper" />
        <p> ZOOKEPER</p>
      </div>
      <ul className="navbar-updated-links-container">
        <li
          className={`${activePage === "home" ? "active" : ""}`}
          onClick={redirectHome}
        >
          Home
        </li>
        <li
          className={`${activePage === "pets" ? "active" : ""}`}
          onClick={redirectExplore}
        >
          Pets
        </li>
        <li
          className={`${activePage === "about" ? "active" : ""}`}
          onClick={redirectAbout}
        >
          Accessories
        </li>
        <li
          className={`${activePage === "gallery" ? "active" : ""}`}
          onClick={redirectPethome}
        >
          Pet Home
        </li>
        <li
          className={`${activePage === "petfood" ? "active" : ""}`}
          onClick={redirectpetfood}
        >
          Pet Food
        </li>
        <li
          className={`${activePage === "petorder" ? "active" : ""}`}
          onClick={redirectPetshopOrders}
        >
          Orders
        </li>
      </ul>
      <div className="navbar-updated-search-container">
        <>
          {isLoggin ? (
            <>
              <img
                onClick={handleDropdown}
                src={
                  navbarProifleImg
                    ? navbarProifleImg
                    : "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
                }
                alt="placeholder"
                id="navbar-profile-img"
              />

              <div
                className="navbar-options-dropdown"
                ref={selectRef}
                style={{ display: openDropdown ? "block" : "none" }}
              >
                <div>
                  <span>
                    <LuListOrdered />
                  </span>
                  <p> Profile </p>
                </div>

                <div onClick={handleLogout}>
                  <span>
                    <BiLogOut />
                  </span>{" "}
                  <p> Logout</p>
                </div>
              </div>
            </>
          ) : (
            <div
              className="navbar-updated-login-container"
              onClick={handleLogout}
            >
              <RiLoginBoxLine />
              <li className="navbar-updated-login-btn"> Login</li>
            </div>
          )}
        </>
      </div>
    </div>
  );
};
export default PetShoNav;
