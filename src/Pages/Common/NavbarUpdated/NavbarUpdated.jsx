import zookeeper from "../../../Assets/zookeper-logo.png";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RiLoginBoxLine } from "react-icons/ri";
import { useUserData } from "../../../Context/UserContext";
import "./NavbarUpdated.css";
const NavbarUpdated = () => {
  const [activePage, setActivePage] = useState("home");
  const [isLoggin, setIsLoggin] = useState(false);
  const navigate = useNavigate();
  const { activeUserData} = useUserData();
  const redirectHome = () => {
    setActivePage("home");
    navigate("/");
  };
  const redirectExplore = () => {
    setActivePage("explore");
    navigate("/explore");
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
  const redirectGallery = () => {
    setActivePage("gallery");
    // navigate("/gallery");
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
    console.log('basee url', BASE_URL)
 if (activeUserData?.img?.filename) {
      setNavbarProfileImg(`${BASE_URL}${activeUserData?.img?.filename}`);
    }
  }, [activeUserData]);

  const logoutUser = () => {
    localStorage.removeItem("petshop-token");
    setIsLoggin(false);
    navigate("/user/login");
  };
  return (
    <div className="navbar-updated-container">
      <div onClick={redirectHome} className="navbar-updated-logo-container">
        <img src={zookeeper} alt="zookeeper" />
        <p> ZOOKEPER</p>
      </div>
      <ul className="navbar-updated-links-container">
        <li
          class={`${activePage === "home" ? "active" : ""}`}
          onClick={redirectHome}
        >
          Home
        </li>
        <li
          class={`${activePage === "explore" ? "active" : ""}`}
          onClick={redirectExplore}
        >
          Explore
        </li>
        <li
          class={`${activePage === "about" ? "active" : ""}`}
          onClick={redirectAbout}
        >
          About
        </li>
        <li
          class={`${activePage === "gallery" ? "active" : ""}`}
          onClick={redirectGallery}
        >
          Gallery
        </li>
        <li
          class={`${activePage === "petshop" ? "active" : ""}`}
          onClick={redirectPetshop}
        >
          Pet Shop
        </li>
      </ul>
      <div className="navbar-updated-search-container">
        <>
          {isLoggin ? (
            <>
              <FaSearch />
              <img
                onClick={logoutUser}
                src={navbarProifleImg}
                alt="placeholder"
              />
            </>
          ) : (
            <div
              className="navbar-updated-login-container"
              onClick={redirectLogin}
            >
              <RiLoginBoxLine />
              <li class="navbar-updated-login-btn"> Login</li>
            </div>
          )}
        </>
      </div>
    </div>
  );
};
export default NavbarUpdated;
