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

const ExplorePage = () => {
  const [activeSection, setActiveSection] = useState("shops");
  const [shopsData, setShopsData] = useState([]);
  const [petsData, setPetsData] = useState([]);
  const [allDogs, setAllDogs] = useState([]);
  const [allCats, setAllCats]  = useState([]);
  const [petSectionActive, setPetSectionActive] = useState(false);

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

  const getPetsData = () => {
    axiosInstance
      .post("/pet/viewAllPets")
      .then((res) => {
        if (res.status === 200) {
          console.log("peets ", res?.data?.data);
          if (res?.data?.data) {
            setPetsData(res.data.data);
          } else {
            console.log("no data");
          }
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("get pets data completd");
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

  return (
    <>
      {/* <UserNavbar /> */}
      <NavbarUpdated/>
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
                  onClick={() => setActiveSection("food")}
                >
                  Food
                </button>
                <button
                  className={`${activeSection === "homes" ? "active" : ""}`}
                  onClick={() => setActiveSection("homes")}
                >
                  Pet Homes
                </button>
                <button
                  className={`${
                    activeSection === "accessories" ? "active" : ""
                  }`}
                  onClick={() => setActiveSection("accessories")}
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
