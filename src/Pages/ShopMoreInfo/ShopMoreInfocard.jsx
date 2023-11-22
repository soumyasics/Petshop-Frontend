import "./ShopMoreInfocard.css";
import { useState, useEffect } from "react";
const ShopMoreInfocard = ({ seeProducts, setSeeProducts, shopData }) => {
  const [buttonContent, setButtonContent] = useState("See Our Products");

  if (!shopData) {
    return (
      <>
        <h1> Sorry, Some Issues on fetching shop data.. </h1>
      </>
    );
  }

  const {
    city,
    closingtime,
    description,
    email,
    img,
    mobile,
    openingtime,
    ownername,
    regno,
    shopname,
  } = shopData;

  const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:4000/";
  const shopPlaceholderImg =
    "https://cwdaust.com.au/wpress/wp-content/uploads/2015/04/placeholder-store.png";

  return (
    <>
      <div className="pet-adoption-card-container">
        <div className="pet-adoption-card-top">
          <div className="pet-adoption-card-container-left">
            <img
              src={
                img?.filename
                  ? `${BASE_URL}${img.filename}`
                  : shopPlaceholderImg
              }
              alt="shop-card"
            />
          </div>
          <div className="pet-adoption-card-container-right">
            <h2>
               {shopname}
            </h2>
            <p>
              {" "}
              <span>Owner Name: </span> {ownername}
            </p>
            <p>
              {" "}
              <span>Email: </span> {email}
            </p>
            <p>
              {" "}
              <span>Reg No: </span> {regno}
            </p>
            <p>
              {" "}
              <span>Mobile </span> {mobile}
            </p>

            <p>
              {" "}
              <span>City: </span> {city}
            </p>
          </div>
        </div>
        <div className="pet-adoption-card-footer">
          <h2>About Shop</h2>
          <p>{description}</p>
          <p className="pet-adoption-card-footer-contact">
            {" "}
            If you have any douts or need more information, please{" "}
            <span> Contact us </span>
          </p>
          {/* <button className="petshop-see-products-btn" onClick={() => {
            setSeeProducts(!seeProducts);
            setButtonContent(seeProducts ? "See Our Products" : "Close");
          }}>
            {buttonContent}
          </button> */}
        </div>
      </div>
    </>
  );
};
export default ShopMoreInfocard;
