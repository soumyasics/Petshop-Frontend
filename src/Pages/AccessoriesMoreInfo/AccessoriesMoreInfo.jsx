import Footer from "../Common/Footer/Footer";
import NewsLetter from "../Common/NewsLetter/NewsLetter";
import UserNavbar from "../Users/UserNavbar/UserNavbar";
import catDogImg from "../../Assets/dog-cat-look.jpg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../../BaseURL";
import PetAdoptionCard from "./PetAdoptionCard";
import "./PetMoreInfo.css";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import NavbarUpdated from "../Common/NavbarUpdated/NavbarUpdated";
import { act } from "react-dom/test-utils";
import { Toast, ToastContainer } from "react-bootstrap";

const AccessoriesMoreInfo = () => {
  const [petData, setPetData] = useState(null);
  const { id } = useParams();
  const [isAddedWishlist, setIsAddedWishlist] = useState(false);
  const [activeUserData, setActiveUserData] = useState(null);
  const [wishlistId, setWishlistId] = useState(null);

  // toast code here
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [toastColor, setToastColor] = useState("dark");

  const dogImages = {
    dog1: "https://t4.ftcdn.net/jpg/01/99/00/79/360_F_199007925_NolyRdRrdYqUAGdVZV38P4WX8pYfBaRP.jpg",
    dog2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXNLmXV0woRopoocQJBw77BVs6pLVmlVutjw&usqp=CAU",
    dog3: "https://as1.ftcdn.net/v2/jpg/01/99/00/78/1000_F_199007800_t4m2okwWCJ9U0chl75zxERWwovDatxLc.jpg",
    dog4: "https://i2-prod.irishmirror.ie/incoming/article26185096.ece/ALTERNATES/s615/0_I220209_151028_100570909oTextTRMRMMGLPICT000255932810o.jpg",
    dog5: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwaQjLLcXKSIuWnWq16hq11LsURY2jXVCl6_D9sK9g2PqEFRz2FIL7JtwDGyHmMGJXSsM&usqp=CAU",
    dog6: "https://media.graphassets.com/resize=height:360,width:1280/output=format:webp/ZBGEL9QYSyqE4PJwcCP9?width=1280",
    dog7: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSseboz4KKwNSX0BkIDAQZHBZ3IM5SCI4NvD7Rn8PoHDwom5gWaTb6QS4_JmbvsGvECZ5Y&usqp=CAU",
    dog8: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Rkcmymt9-a-tYG5M9gFE8l4Qofv2WvV2ew&usqp=CAU",
  };
  const catImages = {
    cat1: "https://img.freepik.com/free-photo/view-adorable-kitten-with-simple-background_23-2150758084.jpg",
    cat2: "https://img.freepik.com/free-photo/view-adorable-kitten-with-simple-background_23-2150758086.jpg",
    cat3: "https://img.freepik.com/premium-photo/kitten-stands-path-grass_931576-4324.jpg",
    cat4: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFgfxYytaBbPNuUIEvW6XJVzRxP7ruelzSOqh3xrNReITRSyEP7R4oh9oyW8m2pZscRtI&usqp=CAU",
    cat5: "https://wallpaperaccess.com/full/1209272.jpg",
    cat6: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTelD_aDc_VlHKsekYmFy9YxCOzSjIuK2BfmA&usqp=CAU",
    cat7: "https://wallpapers.com/images/hd/cute-cats-pictures-ofp9qyt72qck6jqg.jpg",
    cat8: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2D4ByOGrdFnc7GI1MftweTK5wXzTmhiD9Dw&usqp=CAU",
  };

  const getPetDataById = () => {
    axiosInstance
      .post(`/shop/viewPAccessById/${id}`)
      .then((res) => {
        console.log(res);
        setPetData(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const checkAlreadyWishlisted = (getUserData) => {
  //   axiosInstance
  //     .post("/user/checkPetWishlisted/" + getUserData?._id, {
  //       petid: id,
  //     })
  //     .then((res) => {
  //       setWishlistId(res.data.data[0]._id);
  //       if (res.status === 200) {
  //         setIsAddedWishlist(res.data.flag);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log("error ", err);
  //     });
  // };

  const getUserDataFromLs = () => {
    const userData = JSON.parse(localStorage.getItem("petshop-user")) || null;
    if (userData) {
      setActiveUserData(userData);
      return userData;
    }
    return null;
  };

  async function initialFunctions() {
    const getUserData = getUserDataFromLs();
    if (getUserData) {
     // checkAlreadyWishlisted(getUserData);
      getPetDataById();
    } else {
      console.log("user not logged in");
    }
  }

  useEffect(() => {
    initialFunctions();
  }, []);

  
  return (
    <div>
      <ToastContainer className="pet-adoption-card-toast" position="middle-top">
        <Toast
          className="toast-msg"
          bg={toastColor}
          onClose={() => setShowAlert(false)}
          show={showAlert}
          animation={true}
          delay={1000}
          autohide
        >
          <Toast.Body>{alertMsg}</Toast.Body>
        </Toast>
      </ToastContainer>
      {/* <UserNavbar /> */}
      <NavbarUpdated />
      <div className="explore-header-section">
        <img src={catDogImg} alt="cat-dog" />
      </div>
      <div className="pet-more-info-container">
        <>
          {petData ? (
            <PetAdoptionCard petData={petData} />
          ) : (
            <div>Loading...</div>
          )}

          <div className="pet-more-info-container-right">
           
          </div>
        </>
      </div>
      <div className="pet-adopt-photo-gallery">
        <h2 className="">My Photo Gallery</h2>
        <div className="pet-adopt-gallary-container">
  
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};
export default AccessoriesMoreInfo;
