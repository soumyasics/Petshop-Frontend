import Footer from "../../Common/Footer/Footer";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import React, { useEffect, useState } from "react";
import "./ShopMoreInfo.css";
import axiosInstance from "../../../BaseURL";
import { useParams } from "react-router-dom";
import ShopMoreInfocard from "./ShopMoreInfocard";
import catDogImg from "../../../Assets/dog-cat-look.jpg";

const ShopMoreInfo = () => {
  const [shopData, setShopData] = useState(null);
  const [seeProducts, setSeeProducts] = useState(true);
  const [shopHaveProducts, setShopHaveProducts] = useState(false);
  const { id } = useParams();

  const dogImages = {
    dog1: "https://t4.ftcdn.net/jpg/01/99/00/79/360_F_199007925_NolyRdRrdYqUAGdVZV38P4WX8pYfBaRP.jpg",
    dog2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXNLmXV0woRopoocQJBw77BVs6pLVmlVutjw&usqp=CAU",
    dog3: "https://as1.ftcdn.net/v2/jpg/01/99/00/78/1000_F_199007800_t4m2okwWCJ9U0chl75zxERWwovDatxLc.jpg",
    dog4: "https://i2-prod.irishmirror.ie/incoming/article26185096.ece/ALTERNATES/s615/0_I220209_151028_100570909oTextTRMRMMGLPICT000255932810o.jpg",
    dog5: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwaQjLLcXKSIuWnWq16hq11LsURY2jXVCl6_D9sK9g2PqEFRz2FIL7JtwDGyHmMGJXSsM&usqp=CAU",
    dog6: "https://media.graphassets.com/resize=height:360,width:1280/output=format:webp/ZBGEL9QYSyqE4PJwcCP9?width=1280",
  };
  const catImages = {
    cat1: "https://img.freepik.com/free-photo/view-adorable-kitten-with-simple-background_23-2150758084.jpg",
    cat2: "https://img.freepik.com/free-photo/view-adorable-kitten-with-simple-background_23-2150758086.jpg",
    cat3: "https://img.freepik.com/premium-photo/kitten-stands-path-grass_931576-4324.jpg",
    cat4: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFgfxYytaBbPNuUIEvW6XJVzRxP7ruelzSOqh3xrNReITRSyEP7R4oh9oyW8m2pZscRtI&usqp=CAU",
    cat5: "https://wallpaperaccess.com/full/1209272.jpg",
    cat6: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTelD_aDc_VlHKsekYmFy9YxCOzSjIuK2BfmA&usqp=CAU",
  };

  const getShopDatabyId = () => {
    axiosInstance
      .get("/shop/getShopDataById/" + id)
      .then((res) => {
        console.log("shoop res", res);
        setShopData(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("Get Request completed.");
      });
  };

  useEffect(() => {
    getShopDatabyId();
  }, []);

  const petData = {
    type: "cat",
  };

  return (
    <>
      <AdminNavbar />
      <div className="explore-header-section">
        <img src={catDogImg} alt="cat-dog" />
      </div>
      <div className="pet-more-info-container">
        {shopData ? (
          <ShopMoreInfocard
            seeProducts={seeProducts}
            setSeeProducts={setSeeProducts}
            shopData={shopData}
          />
        ) : (
          <div>Loading...</div>
        )}
      </div>
      {seeProducts && (
        <div className="pet-adopt-photo-gallery">
          <h2 className="">Our Pets </h2>
          <div className="pet-adopt-gallary-container">
            <img src={dogImages.dog1} alt="placeholder" />
            <img src={dogImages.dog2} alt="placeholder" />
            <img src={catImages.cat2} alt="placeholder" />
            <img src={catImages.cat3} alt="placeholder" />
            <img src={catImages.cat4} alt="placeholder" />
            <img src={dogImages.dog6} alt="placeholder" />
            <img src={dogImages.dog5} alt="placeholder" />
            <img src={dogImages.dog4} alt="placeholder" />
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};
export default ShopMoreInfo;
