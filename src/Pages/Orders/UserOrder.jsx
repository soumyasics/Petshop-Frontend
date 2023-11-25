import React from "react";
import { useState, useEffect } from "react";
import axiosInstance from "../../BaseURL";
import NavbarUpdated from "../Common/NavbarUpdated/NavbarUpdated";
import NewsLetter from "../Common/NewsLetter/NewsLetter";
import Footer from "../Common/Footer/Footer";
import UserOrderCard from "./UserOrderCard";
import "./UserOrder.css";

function UserOrder() {
  const [userAction, setUserAction] = useState(false);
  const [petData, setPetData] = useState([]);

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
      .post("/user/viewAllOrdersByUserId/" + id)
      .then((res) => {
        setPetData(res.data.data);
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

      <h1 className="wishlist-heading"> Your Orders</h1>
      <div className="user-wishlist-container">
        {/* <WishlistCard /> */}
        {petData.length > 0 ? (
          petData.map((item) => {
            return (
              <UserOrderCard
                key={item._id}
                orderId={item._id}
                userAction={userAction}
                setUserAction={setUserAction}
                petData={item.petid}
              />
            );
          })
        ) : (
          <h1> Order is empty.</h1>
        )}
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
}

export default UserOrder;
