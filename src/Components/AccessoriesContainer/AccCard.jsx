import "./acc.css";
import { useNavigate } from "react-router-dom";
const AccCard = ({ accData }) => {
  console.log("acc", accData);
  const {
    brand,
    breadth,
    description,
    img,
    length,
    material,
    price,
    type,
    _id,
  } = accData;

  console.log("adc2", accData);
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
              alt="pet-card"
            />
          </div>
          <div className="explore-shop-card-right">
            <h3>{brand}</h3>
            <p>{`Gender:  ${brand}`}</p>
            <p>{`Type:  ${type}`}</p>
            <p>{`Breed:  ${material}`}</p>
            <p>{`description:  ${description} years`}</p>
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
export default AccCard;
