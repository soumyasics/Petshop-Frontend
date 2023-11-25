import { Container } from "react-bootstrap";
import FoodCard from "./UserFoodCard";
import "./UserFood.css";

const FoodContainer = ({ foodData }) => {
  console.log("food dt", foodData);
  return (
    <>
      <Container className="explore-shop-container">
        {foodData?.map((foodData, index) => (
          <FoodCard key={index} foodData={foodData} />
        ))}
      </Container>
    </>
  );
};

export default FoodContainer;
