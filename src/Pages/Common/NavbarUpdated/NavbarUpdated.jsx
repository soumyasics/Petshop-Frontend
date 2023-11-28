import zookeeper from "../../../Assets/zookeper-logo.png";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { LuListOrdered } from "react-icons/lu";
import { RiLoginBoxLine } from "react-icons/ri";
import { useUserData } from "../../../Context/UserContext";
import { FaHeart } from "react-icons/fa";
import { MdOutlineRequestPage } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import "./NavbarUpdated.css";
const NavbarUpdated = () => {
  const [activePage, setActivePage] = useState("");
  const [isLoggin, setIsLoggin] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const selectRef = useRef(null);

  const navigate = useNavigate();
  const { activeUserData } = useUserData();

  useEffect(() => {
    if (activePage === "home") {
      navigate("/");
    } else if (activePage === "explore") {
      navigate("/explore");
    }
  }, [activePage, navigate]);

  const redirectHome = () => {
    setActivePage("home");
  };
  const redirectExplore = () => {
    setActivePage("explore");
  };
  const redirectAbout = () => {
    setActivePage("about");
    navigate("/about");
  };
  const redirectPetshop = () => {
    navigate("/petshop/signup");
    setActivePage("petshop");
  };

  const redirectLogin = () => {
    navigate("/user/login");
    setActivePage("login");
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
    const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:4000/";
    if (activeUserData?.img?.filename) {
      setNavbarProfileImg(`${BASE_URL}${activeUserData?.img?.filename}`);
    }
  }, [activeUserData]);

  const handleDropdown = () => {
    setOpenDropdown((openDropdown) => !openDropdown);
    if (selectRef?.current) {
      setTimeout(() => {
        selectRef.current.focus();
      }, 0);
    }
  };

  const redirectOrderRequest = () => {
    navigate("/user/received-order-requests");
  };

  const handleLogout = () => {
    if (localStorage.getItem("petshop-token")) {
      localStorage.removeItem("petshop-token");
    }
    setIsLoggin(false);
    navigate("/user/login");
  };

  const redirectUserWishlist = () => {
    navigate("/user/wishlist");
    setActivePage("wishlist");
  };
  const redirectUserOrder = () => {
    navigate("/user/order");
    setActivePage("order");
  };

  const redirectUserAddPet = () => {
    navigate("/user/add-pet");
    setActivePage("user-add-pet");
  };
  return (
    <div className="navbar-updated-container">
      <div onClick={redirectHome} className="navbar-updated-logo-container">
        <img src={zookeeper} alt="zookeeper" />
        <p> ZOOKEPER</p>
      </div>
      <ul className="navbar-updated-links-container">
        <li
          className={`${activePage === "home" && "active"}`}
          onClick={redirectHome}
        >
          Home
        </li>
        <li
          className={`${activePage === "explore" && "active"}`}
          onClick={redirectExplore}
        >
          Explore
        </li>
        <li
          className={`${activePage === "about" && "active"}`}
          onClick={redirectAbout}
        >
          About
        </li>
        <li
          className={`${activePage === "order" && "active"}`}
          onClick={redirectUserOrder}
        >
          Orders
        </li>
        <li
          className={`${activePage === "wishlist" ? "active" : ""}`}
          onClick={redirectUserWishlist}
        >
          Wishlist
        </li>
        <li
          className={`${activePage === "add-pet" ? "active" : ""}`}
          onClick={redirectUserAddPet}
        >
          Add Pet
        </li>
      </ul>
      <div className="navbar-updated-search-container">
        <>
          {isLoggin ? (
            <>
              <img
                onClick={handleDropdown}
                src={navbarProifleImg}
                alt="placeholder"
                id="navbar-profile-img"
              />

              <div
                className="navbar-options-dropdown"
                ref={selectRef}
                style={{ display: openDropdown ? "block" : "none" }}
              >
                <div onClick={redirectUserWishlist}>
                  <span>
                    <FaHeart />
                  </span>
                  <p>Wishlist</p>
                </div>
                <div onClick={redirectOrderRequest}>
                  <span>
                    <MdOutlineRequestPage />
                  </span>
                  <p>Request</p>
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
              onClick={redirectLogin}
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
export default NavbarUpdated;
