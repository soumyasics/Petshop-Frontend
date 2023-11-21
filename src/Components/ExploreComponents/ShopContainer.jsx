import { Container } from "react-bootstrap";
import ShopCard from "./ShopCard";
import "./ShopContainer.css";

const ShopContainer = ({ shopsData }) => {
  const reversedShopData = shopsData?.reverse();
  return (
    <>
      <Container className="explore-shop-container">
        {reversedShopData?.map((shopData) => {
          return (
            <>
              <ShopCard shopData={shopData}/>
            </>
          );
        })}
      </Container>
    </>
  );
};
export default ShopContainer;
