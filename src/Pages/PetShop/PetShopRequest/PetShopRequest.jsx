import PetShoNav from "../PetShopNav/PetShopNav";
import NewsLetter from "../../Common/NewsLetter/NewsLetter";
import Footer from "../../Common/Footer/Footer";
import "./PetShopRequest.css";
const PetShopRequest = () => {
  return (
    <>
      <PetShoNav />
      <div className="petshop-request-container">
        <h1> Petshop requet</h1>
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};
export default PetShopRequest;
