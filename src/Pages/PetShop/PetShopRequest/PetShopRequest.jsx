import PetShoNav from "../PetShopNav/PetShopNav";
import NewsLetter from "../../Common/NewsLetter/NewsLetter";
import Footer from "../../Common/Footer/Footer";
import PendingOrders from "./PendingRequets";
import ConfirmedOrders from "./ConfirmdRequest";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../BaseURL";
import "./PetShopRequest.css";
import AllPetOrders from "./AllOrders";

const PetShopRequest = () => {
  const [pendingRequestPage, setPendingRequestPage] = useState(false);
  const [toggleState, setToggleState] = useState(false);
  const [confirmedRequestPage, setConfirmedRequestPage] = useState(false);
  const [pageHeading, setPageHeading] = useState("All Orders");
  const [allPetOrdersList, setAllPetOrdersList] = useState([]);
  const [confimedOrdersList, setConfirmedOrdersList] = useState([]);
  const [pendingOrdersList, setPendingOrdersList] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("shop-info")) || null;
    if (!userInfo) {
      navigate("/petshop/login");
      return;
    }
  }, []);

  const getDataFromLs = () => {
    const petshopInfo = JSON.parse(localStorage.getItem("shop-info")) || null;
    if (!petshopInfo?._id) {
      return null;
    }
    return petshopInfo._id;
  };

  const getAllOrders = (id) => {
    axiosInstance
      .post("user/viewAllOrdersByPetShopId/" + id)
      .then((res) => {
        if (res.status === 200) {
          if (res.data.data !== undefined) {
            setAllPetOrdersList(res.data.data);
          } else {
            setAllPetOrdersList([]);
          }
        } else {
          console.log("different response than 200");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 404) {
          console.log("404 error");
          setAllPetOrdersList([]);
        }
      });
  };

  const getPendingOrders = (id) => {
    axiosInstance
      .post("shop/viewAllPendingOrdersByPetShopId/" + id)
      .then((res) => {
        if (res.status === 200) {
          if (res.data.data !== undefined) {
            setPendingOrdersList(res.data.data);
          } else {
            setPendingOrdersList([]);
          }
        } else {
          console.log("different response than 200");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 404) {
          console.log("404 error");
          setPendingOrdersList([]);
        }
      });
  };
  const getConfirmedOrders = (id) => {
    axiosInstance
      .post("shop/viewAllAcceptedOrdersByPetShopId/" + id)
      .then((res) => {
        if (res.status === 200) {
          if (res.data.data !== undefined) {
            setConfirmedOrdersList(res.data.data);
          } else {
            setConfirmedOrdersList([]);
          }
        } else {
          console.log("different response than 200");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 404) {
          console.log("404 error");
          setConfirmedOrdersList([]);
        }
      });
  };

  useEffect(() => {
    let getPetshopId = getDataFromLs();
    if (getPetshopId) {
      getAllOrders(getPetshopId);
      getPendingOrders(getPetshopId);
      getConfirmedOrders(getPetshopId);
    } else {
      console.log("no petshop id found, login petshop first");
    }
  }, [toggleState]);
  const handleAllOrders = () => {
    setPendingRequestPage(false);
    setConfirmedRequestPage(false);
    setPageHeading("All Orders");
  };
  const handleConfirmedOrders = () => {
    setPendingRequestPage(false);
    setConfirmedRequestPage(true);
    setPageHeading("Confirmed Orders");
  };
  const handlePendingOrders = () => {
    setPendingRequestPage(true);
    setConfirmedRequestPage(false);
    setPageHeading("Pending Orders");
  };

  return (
    <>
      <PetShoNav />
      <div className="petshop-request-container">
        <div className="toggle-btn-container">
          <button
            className={`order-toggle-btn ${
              !pendingRequestPage &&
              !confirmedRequestPage &&
              "order-toggle-btn-active"
            }`}
            onClick={handleAllOrders}
          >
            {" "}
            All Orders
          </button>
          <button
            className={`order-toggle-btn ${
              pendingRequestPage && "order-toggle-btn-active"
            }`}
            onClick={handlePendingOrders}
          >
            {" "}
            Pending Orders
          </button>
          <button
            className={`order-toggle-btn ${
              confirmedRequestPage && "order-toggle-btn-active"
            }`}
            onClick={handleConfirmedOrders}
          >
            {" "}
            Confirmed Orders
          </button>
        </div>

        <h4 className="pet-order-page-heading"> {pageHeading} </h4>
        <div className="pet-order-card-container">
          {!pendingRequestPage && !confirmedRequestPage
            ? allPetOrdersList.map((item) => {
                return <AllPetOrders key={item?._id} petData={item?.petid} />;
              })
            : confirmedRequestPage
            ? confimedOrdersList.map((item) => {
                return (
                  <ConfirmedOrders key={item?._id} petData={item?.petid} />
                );
              })
            : pendingOrdersList.map((item) => {
                return (
                  <PendingOrders
                    key={item?._id}
                    petData={item?.petid}
                    orderId={item._id}
                    toggleState={toggleState}
                    setToggleState={setToggleState}
                  />
                );
              })}
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};
export default PetShopRequest;
