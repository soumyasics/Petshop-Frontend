import "./AdminUsers.css";
import React, { useEffect, useState } from "react";
import demo from "../../../Assets/full-shot-woman-working-floor.jpg";
import axiosInstance from "../../../BaseURL";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import Footer from "../../Common/Footer/Footer";
import { useNavigate } from "react-router-dom";

function AdminUsers({ imgUrl }) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem('adminlog')==null){
        navigate('/admin-login')
    }
})
  
  useEffect(() => {
    axiosInstance
      .post(`/user/viewAllUsers`)
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


  const handleRemove=(id)=>{
    axiosInstance.post(`/user/userRemoveAccountById/${id}`)
    .then((res)=>{
        console.log(res);
      if(res.data.status==200){
        alert('Data Removed Successfully')
        setData(prevArray => prevArray.filter(item => item._id !== id));
      }
      else
      alert('Data not  Removed')
  })
    .catch((err)=>{
      alert('Data not  Removed')
        })
  }

  return (
    <>
      <AdminNavbar />
      <div className="container container-box">
        <div className="row">
          {data.length ? (
            data.map(function (user) {
              return (
                <div className="col-6 box">
                  <div className="card card1 bg-secondary-subtle">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <img
                          // src={`${imgUrl}/${user.img.filename}`}
                          src={
                            user?.img?.filename
                              ? `${imgUrl}/${user?.img?.filename}`
                              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8CuvDV_pxtfMfefTL7SU9qVxtgJsi3keuPKqoaxg&s"
                          }
                          alt="user"
                          className="card-img-left user-img name"
                        ></img>
                      </div>
                      <div className="col-6">
                        <h5 className="card-title name">
                          {" "}
                          {user.firstname} {user.lastname}
                        </h5>
                        <h5 className="card-title name">
                          {" "}
                          {user.email}
                        </h5>
                        <h5 className="card-title name">
                          {" "}
                          {user.mobile}
                        </h5>
                        <h5 className="card-title name">
                          {" "}
                          {user.city}
                        </h5>
                      </div>
                    </div>
                    <button className="btn btn-primary btn-sm rounded-start-pill rounded-end-pill btn1 align-items-center " onClick={()=>handleRemove(user._id)}>
                     Remove {user.firstname} {user.lastname}
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
export default AdminUsers;
