import React from "react";

import { useNavigate } from "react-router-dom";
import "./PetShopRequest.css";

const AllPetOrders = ({ petData, orderStatus }) => {
  const navigate = useNavigate();
  if (!petData) {
    return "";
  }
  const {
    petname,
    type,
    breed,
    price,
    description,
    gender,
    img,
    age,
    shopid,
    _id,
  } = petData;

  const BASE_URL = "http://localhost:4000/";
  const dogPlaceholderImg = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9L2cU1Xxu_XDcW-C0DueoXMgQ4W6qQO7xJ7K6gVw-IA&s`;
  const catPlaceholderImg = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQednHyOH85OzO39f2ofViDcrVrF0U1JAWL0lN4KGPbyiO89GJgEy2oERXSIJ9M6cEDVuY&usqp=CAU`;

  const redirectToPetMoreInfo = (id) => {
    navigate(`/pet/more-info/${id}`);
  };
  return (
    <>
      <div className="explore-shop-card">
        <div className="shop-top-container">
          <div className="explore-shop-card-left">
            <img
              src={
                img?.filename
                  ? `${BASE_URL}${img.filename}`
                  : type === "cat"
                  ? catPlaceholderImg
                  : dogPlaceholderImg
              }
              alt="pet-card"
            />
          </div>
          <div className="explore-shop-card-right">
            <h3>{petname}</h3>
            <p>{`Type:  ${type}`}</p>
            <p>{`Gender:  ${gender}`}</p>
            <p>{`Breed:  ${breed}`}</p>
            <p>{`Age:  ${age} years`}</p>
            <div className="shop-rating-container"></div>
          </div>
        </div>
        <div className="explore-card-footer">
          <p>
            Order Status:{" "}
            <span
              className={`${
                orderStatus === "accepted"
                  ? "green-color-text"
                  : orderStatus === "rejected"
                  ? "red-color-text"
                  : "blue-color-text"
              }`}
            >
              {orderStatus}.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};
export default AllPetOrders;
