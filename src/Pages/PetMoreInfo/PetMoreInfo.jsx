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
      <NavbarUpdated />
      <div className="explore-header-section">
        <img src={catDogImg} alt="cat-dog" />
      </div>
      <div className="pet-more-info-container">
        {petData ? (
          <PetAdoptionCard petData={petData} />
        ) : (
          <div>Loading...</div>
        )}

        <div className="pet-adopt-photo-gallery">
          <h2 className="">My Photo Gallery</h2>
          <div className="pet-adopt-gallary-container">
            <img
              src="https://t4.ftcdn.net/jpg/01/99/00/79/360_F_199007925_NolyRdRrdYqUAGdVZV38P4WX8pYfBaRP.jpg"
              alt="placeholder"
            />
            <img
              src="https://t4.ftcdn.net/jpg/01/99/00/75/360_F_199007588_xYEG7WHU5776617DURpzPzwPD9y9Jik6.jpg"
              alt="placeholder"
            />
            <img
              src="https://as1.ftcdn.net/v2/jpg/01/99/00/78/1000_F_199007800_t4m2okwWCJ9U0chl75zxERWwovDatxLc.jpg"
              alt="placeholder"
            />
            <img
              src="https://i2-prod.irishmirror.ie/incoming/article26185096.ece/ALTERNATES/s615/0_I220209_151028_100570909oTextTRMRMMGLPICT000255932810o.jpg"
              alt="placeholder"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwaQjLLcXKSIuWnWq16hq11LsURY2jXVCl6_D9sK9g2PqEFRz2FIL7JtwDGyHmMGJXSsM&usqp=CAU"
              alt="placeholder"
            />
            <img
              src="https://media.graphassets.com/resize=height:360,width:1280/output=format:webp/ZBGEL9QYSyqE4PJwcCP9?width=1280"
              alt="placeholder"
            />
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};
export default PetMoreInfo;
