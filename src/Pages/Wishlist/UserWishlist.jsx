import React from "react";
import { useState, useEffect } from "react";
import axiosInstance from "../../BaseURL";
import NavbarUpdated from "../Common/NavbarUpdated/NavbarUpdated";
import NewsLetter from "../Common/NewsLetter/NewsLetter";
import Footer from "../Common/Footer/Footer";
import "./UserWishlist.css";
import WishlistCard from "./WishlistCard";
import { useNavigate } from "react-router-dom";
function UserWishlist() {
  const navigate = useNavigate();
  useEffect(() => {
    const isUserLogin = localStorage.getItem("petshop-user") || null;
    if (!isUserLogin) {
      navigate("/user/login");
    }
  }, []);
  const [allWishlists, setAllWishlists] = useState([]);
  const [userAction, setUserAction] = useState(false);
  const getUserDataFromLs = () => {
    const userData = JSON.parse(localStorage.getItem("petshop-user")) || null;
    if (userData) {
      return userData;
    }
    console.log("login for loading wishlists");
    return null;
  };

  const getWishList = (id) => {
    axiosInstance
      .post("/user/viewAllWishlistByUserId/" + id)
      .then((res) => {
        console.log("wishlist respons", res.data.data);
        setAllWishlists(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  async function initialFunctions() {
    const getUserData = getUserDataFromLs();
    if (getUserData) {
      getWishList(getUserData._id);
    }
  }

  useEffect(() => {
    initialFunctions();
  }, [userAction]);

  return (
    <>
      <NavbarUpdated />

      <h1 className="wishlist-heading"> Your Wishlists</h1>
      <div className="user-wishlist-container">
        {/* <WishlistCard /> */}
        {allWishlists.length > 0 ? (
          allWishlists.map((item) => {
            return (
              <WishlistCard
                key={item._id}
                wishlistId={item._id}
                userAction={userAction}
                setUserAction={setUserAction}
                petData={item.petid}
              />
            );
          })
        ) : (
          <h1> Wishlist is empty.</h1>
        )}
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
}

export default UserWishlist;
