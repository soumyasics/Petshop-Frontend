import "./AdminViewAllPet.css";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../../BaseURL";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { Link } from "react-router-dom";
import Footer from "../../Common/Footer/Footer";
function AdminViewAllPet({ imgUrl }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosInstance
      .post(`/pet/viewAllPets`)
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
        if (err.response.status === 404 || err.response.status === 401) {
          alert("Please verify your email and password");
        }
      });
  }, []);

  return (
    <>
      <AdminNavbar />
      <div className="container container-box">
        <div className="row">
          {data.length ? (
            data.map(function (user) {
              return (
                <div className="col-6 box">
                  <div className="card admin-view-pets-card1 bg-secondary-subtle">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <img
                          src={
                            user?.img?.filename
                              ? `${imgUrl}/${user?.img?.filename}`
                              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ7Wfp5KR65bo4L3k-qrEVIpN4aV2teFdI2hGmg90&s"
                          }
                          className="card-img-left user-img admin-view-pets-name"
                        ></img>
                      </div>
                      <div className="col-6">
                        <h3 className="card-title name">
                          <b> {user.petname}</b>
                        </h3>
                        <h6 className="card-title name">
                          <b> {user.breed} </b>
                        </h6>
                      </div>
                    </div>
                    <Link to={`/admin/admin-pet-more-info/` + user._id}>
                      {" "}
                      <button className="btn btn-primary btn-sm rounded-start-pill rounded-end-pill admin-view-pets-btn1 align-items-center ">
                        MORE INFO
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col">
              <div class="card" style={{ width: "18rem;" }}>
                <div class="card-body">
                  <h5 class="card-title">No Shops are Available</h5>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default AdminViewAllPet;
