import "./AdminViewAllShops.css";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../../BaseURL";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import Footer from "../../Common/Footer/Footer";
import { useNavigate } from "react-router-dom";

function AdminViewAllShops({ imgUrl }) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .post(`/shop/shopViewAll`)
      .then((res) => {
        if (res.status === 200) {
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

  const redirectShopMoreInfo = (id) => {
    navigate("/admin/admin-shop-more-info/" + id);
  };

  return (
    <>
      <AdminNavbar />
      <div className="container container-box">
        <div className="row">
          {data.length ? (
            data.map(function (user) {
              return (
                <div className="col-6 box">
                  <div className="card admin-view-shops-card1 bg-secondary-subtle">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <img
                          src={
                            user?.img?.filename
                              ? `${imgUrl}/${user?.img?.filename}`
                              : "https://cwdaust.com.au/wpress/wp-content/uploads/2015/04/placeholder-store.png"
                          }
                          className="card-img-left user-img admin-view-shops-name"
                        ></img>
                      </div>
                      <div className="col-6">
                        <h5 className="card-title name">
                          <b> {user.shopname}</b>
                        </h5>
                        <h6 className="card-title name">
                          <b>
                            Open till : {user.opentime} - {user.closingtime}
                          </b>
                        </h6>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        redirectShopMoreInfo(user._id);
                      }}
                      className="btn btn-primary btn-sm rounded-start-pill rounded-end-pill admin-view-shops-btn1 align-items-center "
                    >
                      MORE INFO
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col">
              <div className="card" style={{ width: "18rem;" }}>
                <div className="card-body">
                  <h5 className="card-title">No Shops are Available</h5>
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
export default AdminViewAllShops;
