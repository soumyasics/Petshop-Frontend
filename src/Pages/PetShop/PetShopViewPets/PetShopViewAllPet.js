import React from "react";
import { RiStarSLine } from "react-icons/ri";
import { RiStarSFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import PetShoNav from "../PetShopNav/PetShopNav";
import { useState, useEffect } from "react";
import "../../../Components/ExploreComponents/ShopContainer.css";
import axiosInstance from "../../../BaseURL";
import { CgAdd } from "react-icons/cg";

function PetShopViewAllPet({ imgUrl }) {
  const [data, setData] = useState([]);
  const id = JSON.parse(localStorage.getItem("shop-info"));

  useEffect(() => {
    console.log("id", id._id);
    axiosInstance
      .post(`/pet/viewPetByShopId/${id._id}`)
      .then((res) => {
        if (res.status === 200) {
          console.log("data", res.data.data);
          if (res.data.data != undefined) {
            setData(res.data.data);
          } else {
            setData([]);
          }
        } else {
          console.log(res.err);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const removePet = (id) => {
    // alert("removed")
    axiosInstance
      .post(`/pet/removePetById/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          alert("removed");
          window.location.reload(true);
        } else {
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <PetShoNav imgUrl={imgUrl} />
      <div className="container container-box">
        <div className="row">
          <div className="mt-4 mb-4 view_my_pet_addbutton">
            <Link to={`/petshop/add-pet`} id="shop-add-button">
              <h1>+</h1>
            </Link>
          </div>
          {data.length ? (
            data.map(function (user) {
              return (
                <div className="col-6 box">
                  <div className="card admin-view-pets-card1 bg-secondary-subtle">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <img
                          src={`${imgUrl}/${user.img.filename}`}
                          className="card-img-left user-img admin-view-pets-name"
                        ></img>
                      </div>
                      <div className="col-6">
                        <h3 className="card-title name">
                          <b>Name : {user.petname}</b>
                        </h3>
                        <h6 className="card-title name">
                          <b>Breed : {user.breed} </b>
                        </h6>
                        <h6 className="card-title name">
                          <b>Age : {user.age} </b>
                        </h6>
                        <h6 className="card-title name">
                          <b>Cost : {user.price} </b>
                        </h6>
                      </div>
                    </div>
                    <div className="d-flex view_my_pet_button">
                      <Link to={`/petshop/editpet/${user._id}`}>
                        {" "}
                        <button className="btn btn-primary btn-sm rounded-start-pill rounded-end-pill  align-items-center ">
                          Edit
                        </button>
                      </Link>

                      {/* <Link to={`/pet/removePetById/${user._id}`}> */}
                      <button
                        type="button"
                        className="btn btn-primary btn-sm rounded-start-pill rounded-end-pill  align-items-center "
                        onClick={() => removePet(user._id)}
                      >
                        Remove
                      </button>
                      {/* </Link> */}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col">
              <div class="card" style={{ width: "18rem;" }}>
                <div class="card-body">
                  <h5 class="card-title">No Pets are Available</h5>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default PetShopViewAllPet;
