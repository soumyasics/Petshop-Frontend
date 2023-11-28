import catDogImg from "../../../Assets/dog-cat-look.jpg";
import UserNavbar from "../UserNavbar/UserNavbar";
import { useEffect, useState } from "react";
import ShopContainer from "../../../Components/ExploreComponents/ShopContainer.jsx";
import PetContainer from "../../../Components/PetComponents/PetContainer.jsx";
import Footer from "../../Common/Footer/Footer.jsx";
import NewsLetter from "../../Common/NewsLetter/NewsLetter.jsx";
import axiosInstance from "../../../BaseURL.js";
import "./Explore.css";
import NavbarUpdated from "../../Common/NavbarUpdated/NavbarUpdated.jsx";
import AccessoiresContainer from "../../../Components/AccessoriesContainer/AccessoriesContainer.jsx";
import FoodContainer from "../../../Components/UserPetFood/UserFood.jsx";
import HomeContainer from "../../../Components/HomesContainer/HomeContainer.jsx";
import { useNavigate } from "react-router-dom";

const ExplorePage = () => {
  const [activeSection, setActiveSection] = useState("shops");
  const [shopsData, setShopsData] = useState([]);
  const [homesData, setHomesData] = useState([]);

  const [petsData, setPetsData] = useState([]);
  const [accessoriesData, setAccessoriesData] = useState([]);
  const [allDogs, setAllDogs] = useState([]);
  const [allCats, setAllCats] = useState([]);
  const [petSectionActive, setPetSectionActive] = useState(false);
  const [foodData, setFoodData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const isUserLogin = localStorage.getItem("petshop-user") || null;
    if (!isUserLogin) {
      navigate("/user/login");
    }
  }, []);
  const getShopsData = () => {
    axiosInstance
      .post("shop/shopViewAll")
      .then((res) => {
        if (res.status === 200) {
          if (res?.data?.data) {
            setShopsData(res.data.data);
          } else {
            console.log("no data, check getShopsData in explore page");
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getAccessoiresData = () => {
    axiosInstance
      .get("getAllAccessories")
      .then((res) => {
        if (res.status === 200) {
          if (res?.data?.data) {
            console.log("got accessa", accessoriesData);
            setAccessoriesData(res.data.data);
          } else {
            console.log("no data, check getShopsData in explore page");
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getPetsData = () => {
    axiosInstance
      .post("/pet/viewAllPetsForUsers")
      .then((res) => {
        if (res.status === 200) {
          if (res?.data?.data) {
            setPetsData(res.data.data);
          } else {
            console.log("no data");
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAllFoodData = () => {
    axiosInstance
      .post("food/getAllFoods")
      .then((res) => {
        if (res.status === 200) {
          if (res?.data?.data) {
            setFoodData(res.data.data);
          } else {
            console.log("no data, check getShopsData in explore page");
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getAllHomeData = () => {
    console.log("fun called");
    axiosInstance
      .post("pethomes/viewPetHomes")
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          if (res?.data?.data) {
            setHomesData(res.data.data);
            console.log("home", homesData);
          } else {
            console.log("no data, check getShopsData in explore page");
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getShopsData();
  }, []);

  const handleAllPetBtnClick = () => {
    setActiveSection("pets");
    setPetSectionActive(true);
    getPetsData();
  };

  const handlePetExploreBtn = () => {
    setActiveSection("shops");
    setPetSectionActive(false);
  };

  const handleAllDogsBtnClick = () => {
    setActiveSection("explore-dogs");
    getPetsData();
    const allDogs = petsData.filter((pet) => pet.type === "dog");
    setAllDogs(allDogs);
  };

  const handleAllCatsBtnClick = () => {
    setActiveSection("explore-cats");
    getPetsData();
    const allCats = petsData.filter((pet) => pet.type === "cat");
    setAllCats(allCats);
  };

  const handleAccessoiresBtnClick = () => {
    setActiveSection("accessories");
    getAccessoiresData();
  };

  const handlePetFoodBtnClick = () => {
    setActiveSection("food");
    getAllFoodData();
  };
  const handlePetHomeBtnClick = () => {
    setActiveSection("home");
    getAllHomeData();
  };
  return (
    <>
      <NavbarUpdated />
      <div className="explore-page-container">
        <div className="explore-header-section">
          <img src={catDogImg} alt="cat-dog" />
        </div>
        <div>
          <div className="explore-body-container">
            {!petSectionActive ? (
              <div className="explore-btn-container">
                <button
                  className={`${activeSection === "shops" ? "active" : ""}`}
                  onClick={() => setActiveSection("shops")}
                >
                  Shops
                </button>
                <button
                  className={`${activeSection === "pets" ? "active" : ""}`}
                  onClick={handleAllPetBtnClick}
                >
                  Pets
                </button>
                <button
                  className={`${activeSection === "food" ? "active" : ""}`}
                  onClick={handlePetFoodBtnClick}
                >
                  Food
                </button>
                <button
                  className={`${activeSection === "home" ? "active" : ""}`}
                  onClick={handlePetHomeBtnClick}
                >
                  Pet Homes
                </button>
                <button
                  className={`${
                    activeSection === "accessories" ? "active" : ""
                  }`}
                  onClick={handleAccessoiresBtnClick}
                >
                  Accessories
                </button>
              </div>
            ) : (
              <div className="explore-btn-container">
                <button
                  className={`${
                    activeSection === "pet-explore" ? "active" : ""
                  }`}
                  onClick={handlePetExploreBtn}
                >
                  Explore
                </button>
                <button
                  className={`${activeSection === "pets" ? "active" : ""}`}
                  onClick={handleAllPetBtnClick}
                >
                  All Pets
                </button>
                <button
                  className={`${
                    activeSection === "explore-dogs" ? "active" : ""
                  }`}
                  onClick={handleAllDogsBtnClick}
                >
                  Dogs
                </button>
                <button
                  className={`${
                    activeSection === "explore-cats" ? "active" : ""
                  }`}
                  onClick={handleAllCatsBtnClick}
                >
                  Cats
                </button>
              </div>
            )}
          </div>
          <div className="explore-component-rendering">
            {activeSection === "shops" &&
              (shopsData.length > 0 ? (
                <ShopContainer shopsData={shopsData} />
              ) : (
                <h1> No shops found</h1>
              ))}
            {activeSection === "pets" &&
              (petsData.length > 0 ? (
                <PetContainer petsData={petsData} />
              ) : (
                <h1> No Pets found</h1>
              ))}
            {activeSection === "food" &&
              (foodData.length > 0 ? (
                <FoodContainer foodData={foodData} />
              ) : (
                <h1> Pet food not found</h1>
              ))}
            {activeSection === "accessories" &&
              (accessoriesData.length > 0 ? (
                <AccessoiresContainer accData={accessoriesData} />
              ) : (
                <h1> No Accessoires found</h1>
              ))}
            {activeSection === "home" &&
              (homesData.length > 0 ? (
                <HomeContainer accData={homesData} />
              ) : (
                <h1> No homes found</h1>
              ))}
            {activeSection === "explore-dogs" &&
              (petsData.length > 0 ? (
                <PetContainer petsData={allDogs} />
              ) : (
                <h1> No Dogs found</h1>
              ))}
            {activeSection === "explore-cats" &&
              (petsData.length > 0 ? (
                <PetContainer petsData={allCats} />
              ) : (
                <h1> No cats found</h1>
              ))}
          </div>
        </div>
      </div>

      <NewsLetter />
      <Footer />
    </>
  );
};
export default ExplorePage;
