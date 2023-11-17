import PetCard from "./PetCard";
import { Container } from "react-bootstrap";
import "./PetContainer.css";
const PetContainer = ({ petsData }) => {
  return (
    <>
      <Container className="explore-shop-container">
        {petsData?.map((petData, index) => (
          <PetCard key={index} petData={petData} />
        ))}
      </Container>
    </>
  );
};
export default PetContainer;
