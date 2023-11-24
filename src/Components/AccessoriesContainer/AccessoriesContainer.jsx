import { Container } from "react-bootstrap";
import AccCard from "./AccCard";
import "./acc.css";

const AccessoiresContainer = ({ accData }) => {
  console.log("acc", accData);
  return (
    <>
      <Container className="explore-shop-container">
        {accData?.map((accData, index) => (
          <AccCard key={index} accData={accData} />
        ))}
      </Container>
    </>
  );
};

export default AccessoiresContainer;
