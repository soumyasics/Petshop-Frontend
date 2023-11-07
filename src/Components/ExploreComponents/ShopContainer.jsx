import { Container } from "react-bootstrap";
import ShopCard from "./ShopCard";
import "./ShopContainer.css";

const ShopContainer = () => {
  return (
    <>
      <Container className="explore-shop-container">
        <ShopCard />
      </Container>
    </>
  );
};
export default ShopContainer;
