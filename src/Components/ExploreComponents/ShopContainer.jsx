import { Container } from "react-bootstrap";
import ShopCard from "./ShopCard";
import "./ShopContainer.css";

const ShopContainer = ({ shopsData }) => {
  return (
    <>
      <Container className="explore-shop-container">
        {shopsData?.map((shopData) => {
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
