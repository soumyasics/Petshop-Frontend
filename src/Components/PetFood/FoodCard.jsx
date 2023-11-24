import { useNavigate } from "react-router-dom";
import "./Food.css";
const FoodCard = ({ foodData }) => {
  console.log("fd", foodData);
  const {
    brand,
    description,
    agerange,
    img,
    _id,
    flavour,
    price,
    quantity,
    targetpet,
  } = foodData;

  const BASE_URL = "http://localhost:4000/";
  const placeholderImg = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzSc0E_-ezcw1juku7x_q9rIVtGDEFGDsZnA&usqp=CAU`;
  const navigate = useNavigate();
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
                img?.filename ? `${BASE_URL}${img.filename}` : placeholderImg
              }
              alt="food-card"
            />
          </div>
          <div className="explore-shop-card-right">
            <h3>{brand}</h3>
            <p>{`Brand:  ${brand}`}</p>
            <p>{`Flavor:  ${flavour}`}</p>
            <p>{`Quantity:  ${quantity}`}</p>
            <p>{`Price:  ${price}`}</p>
            <div className="shop-rating-container"></div>
          </div>
        </div>
        <div className="explore-card-footer">
          {/* <button
              onClick={() => {
                redirectToPetMoreInfo(_id);
              }}
            >
              MORE INFO
            </button> */}
        </div>
      </div>
    </>
  );
};

export default FoodCard;
