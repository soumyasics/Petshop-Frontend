import Footer from "../Common/Footer/Footer";
import NewsLetter from "../Common/NewsLetter/NewsLetter";
import UserNavbar from "../Users/UserNavbar/UserNavbar";
import catDogImg from "../../Assets/dog-cat-look.jpg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../.../../../BaseURL";
import PetAdoptionCard from "./PetAdoptionCard";
import "./PetMoreInfo.css";
import NavbarUpdated from "../Common/NavbarUpdated/NavbarUpdated";

const PetMoreInfo = () => {
  const [petData, setPetData] = useState(null);
  const { id } = useParams();

  const getPetDataById = () => {
    axiosInstance
      .get("/pet/getPetDataById/" + id)
      .then((res) => {
        console.log(res);
        setPetData(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("Get Request completed.");
      });
  };

  useEffect(() => {
    getPetDataById();
  }, []);
  return (
    <div>
      {/* <UserNavbar /> */}
      <NavbarUpdated/>
      <div className="explore-header-section">
        <img src={catDogImg} alt="cat-dog" />
      </div>
      <div className="pet-more-info-container">
        {petData ? (
          <PetAdoptionCard petData={petData} />
        ) : (
          <div>Loading...</div>
        )}
          
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};
export default PetMoreInfo;
