import "./AdminUsers.css"
import React, { useEffect, useState } from 'react'
import demo from "../../../Assets/full-shot-woman-working-floor.jpg"
import axiosInstance from "../../../BaseURL";
function AdminUsers({imgUrl}) {

    const[data,setData]=useState([])



    useEffect(() => {
       
        axiosInstance.post(`/user/viewAllUsers`).then((res) => {
            if (res.status === 200) {
           console.log("data",res.data.data);
             if (res.data.data != undefined) {
                setData(res.data.data);
              } else {
                setData([]);
              }
            }else{
                console.log(res.err);

            }
          }).catch((err) => {
            console.log(err);
            if (err.response.status === 404 || err.response.status === 401) {
              alert("Please verify your email and password");
            }
          })
     
      },[]);
    
  return (
    <>
    <div className="container container-box">
        <div className="row">
    {data.map(function(user){
      return (
            <div className="col-6 box">
                    <div className="card card1 bg-secondary-subtle">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <img src={`${imgUrl}/${user.img.filename}`}className="card-img-left user-img name"></img>
                            </div>
                            <div className="col-6">
                                <h5 className="card-title name"> {user.firstname} {user.lastname}</h5>
                            </div>
                        </div>
                        <button className="btn btn-primary btn-sm rounded-start-pill rounded-end-pill btn1 align-items-center ">MORE INFO</button>
                    </div>
                </div>
          
      )
    })}
    </div>
    </div></>
  )
}
export default AdminUsers;