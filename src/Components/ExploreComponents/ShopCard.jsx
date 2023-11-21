import "./ShopContainer.css";
import { RiStarSLine } from "react-icons/ri";
import { RiStarSFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const ShopCard = ({ shopData }) => {
  const { shopname, rating, img, openingtime, closingtime, _id } = shopData;

  const shopPlaceholderImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVpYb71ibWzzSXTuWVI7QHirljFek9RRkImlzmrBXC4Q&s";
  const [shopImage, setShopImage] = useState(shopPlaceholderImg);

  useEffect(() => {
    if (img?.filename) {
      const BASE_URL = "http://localhost:4000";
      setShopImage(`${BASE_URL}/${img?.filename}`);
    }
  }, []);
  const navigate = useNavigate();
  const redirectToShopMoreInfo = (id) => {
    navigate(`/petshop/more-info/${id}`);
  };

  return (
    <>
      <div className="explore-shop-card">
        <div className="shop-top-container">
          <div className="explore-shop-card-left">
            <img src={shopImage} alt="shop-card" />
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
