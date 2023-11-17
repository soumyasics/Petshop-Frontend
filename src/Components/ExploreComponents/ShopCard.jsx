import "./ShopContainer.css";
import { RiStarSLine } from "react-icons/ri";
import { RiStarSFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ShopCard = ({ shopData }) => {
  const { shopname, rating, img, openingtime, closingtime, _id } = shopData;
  console.log("shop", shopData);
  const navigate = useNavigate();
  const BASE_URL = "http://localhost:4000";
  const redirectToShopMoreInfo = (id) => {
    navigate(`/petshop/more-info/${id}`);
  };

  return (
    <>
      <div className="explore-shop-card">
        <div className="shop-top-container">
          <div className="explore-shop-card-left">
            <img src={`${BASE_URL}/${img?.filename}`} alt="shop-card" />
          </div>
          <div className="explore-shop-card-right">
            <h3>{shopname}</h3>
            <div className="shop-rating-container">
              <button>{rating > 0 ? <RiStarSFill /> : <RiStarSLine />}</button>
              <button>{rating > 1 ? <RiStarSFill /> : <RiStarSLine />}</button>
              <button>{rating > 2 ? <RiStarSFill /> : <RiStarSLine />}</button>
              <button>{rating > 3 ? <RiStarSFill /> : <RiStarSLine />}</button>
              <button>{rating > 4 ? <RiStarSFill /> : <RiStarSLine />}</button>
            </div>
            <p>{`Open Till ${openingtime} - ${closingtime}`}</p>
          </div>
        </div>
        <div className="explore-card-footer">
          <button
            onClick={() => {
              redirectToShopMoreInfo(_id);
            }}
          >
            MORE INFO
          </button>
        </div>
      </div>
    </>
  );
};
export default ShopCard;
