import Footer from "../Common/Footer/Footer";
import NewsLetter from "../Common/NewsLetter/NewsLetter";
import UserNavbar from "../Users/UserNavbar/UserNavbar";
import catDogImg from "../../Assets/dog-cat-look.jpg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../.../../../BaseURL";
import PetAdoptionCard from "./PetAdoptionCard";
import "./PetMoreInfo.css";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import NavbarUpdated from "../Common/NavbarUpdated/NavbarUpdated";
import { act } from "react-dom/test-utils";

const PetMoreInfo = () => {
  const [petData, setPetData] = useState(null);
  const { id } = useParams();
  const [isAddedWishlist, setIsAddedWishlist] = useState(false);
  const [activeUserData, setActiveUserData] = useState(null);
  const [wishlistId, setWishlistId] = useState(null);

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
      .get("/pet/getPetDataById/" + id)
      .then((res) => {
        console.log(res);
        setPetData(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const checkAlreadyWishlisted = (getUserData) => {
    console.log("alr", getUserData?._id);
    axiosInstance
      .post("/user/checkPetWishlisted/" + getUserData?._id, {
        petid: id,
      })
      .then((res) => {
        console.log("already wishlitsed ", res.data.data[0]._id);
        console.log("flag ", res.data.flag);
        setWishlistId(res.data.data[0]._id);
        if (res.status === 200) {
          setIsAddedWishlist(res.data.flag);
        }
      })
      .catch((err) => {
        console.log("error ", err);
      });
  };

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
    console.log("get user data", getUserData);
    if (getUserData) {
      checkAlreadyWishlisted(getUserData);
      getPetDataById();
    } else {
      console.log("user not logged in");
    }
  }

  useEffect(() => {
    initialFunctions();
  }, []);

  const addWishlist = () => {
    const data = {
      petid: id,
      itemtype: petData?.type,
      ownertype: "user",
      userid: activeUserData?._id,
    };

    axiosInstance
      .post(`user/addToWishlist/${data.userid}`, data)
      .then((res) => {
        console.log("my res", res);
        if (res.status === 200) {
          console.log("res dataaa", res.data.data._id);
          const wishlistDocumentId = res?.data?.data?._id;
          if (wishlistDocumentId) {
            setWishlistId(wishlistDocumentId);
          }
          alert("Pet Added to wishlist");
          setIsAddedWishlist(true);
        }
      })
      .catch((err) => {
        console.log("error -1", err);
      });
  };
  const removeWishlist = () => {
    if (!wishlistId) {
      console.log("wishlist id not found");
      return;
    }
    axiosInstance
      .delete(`/user/removeWishlistById/${wishlistId}`)
      .then((res) => {
        console.log("my res", res);
        if (res.status === 200) {
          alert("Pet Removed from wishlist");
          setIsAddedWishlist(false);
        }
      })
      .catch((err) => {
        console.log("error -1", err);
      });
  };

  const handleWishlistToggle = () => {
    if (!isAddedWishlist) {
      addWishlist();
    } else {
      removeWishlist();
    }
  };

  return (
    <div>
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
            <div
              className="pet-more-info-wishlist-icon"
              onClick={handleWishlistToggle}
            >
              {isAddedWishlist ? <FaHeart /> : <FaRegHeart />}
            </div>
          </div>
        </>
      </div>
      <div className="pet-adopt-photo-gallery">
        <h2 className="">My Photo Gallery</h2>
        <div className="pet-adopt-gallary-container">
          <img
            src={`${petData?.type === "cat" ? catImages.cat1 : dogImages.dog1}`}
            alt="placeholder"
          />
          <img
            src={`${petData?.type === "cat" ? catImages.cat2 : dogImages.dog2}`}
            alt="placeholder"
          />
          <img
            src={`${petData?.type === "cat" ? catImages.cat3 : dogImages.dog3}`}
            alt="placeholder"
          />
          <img
            src={`${petData?.type === "cat" ? catImages.cat4 : dogImages.dog4}`}
            alt="placeholder"
          />
          <img
            src={`${petData?.type === "cat" ? catImages.cat5 : dogImages.dog5}`}
            alt="placeholder"
          />
          <img
            src={`${petData?.type === "cat" ? catImages.cat6 : dogImages.dog6}`}
            alt="placeholder"
          />
          <img
            src={`${petData?.type === "cat" ? catImages.cat7 : dogImages.dog7}`}
            alt="placeholder"
          />
          <img
            src={`${petData?.type === "cat" ? catImages.cat8 : dogImages.dog8}`}
            alt="placeholder"
          />
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};
export default PetMoreInfo;
