import React from 'react'
import { RiStarSLine } from "react-icons/ri";
import { RiStarSFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import PetShoNav from '../PetShopNav/PetShopNav';
import { useState, useEffect } from "react";
import '../../../Components/ExploreComponents/ShopContainer.css'
import axiosInstance from '../../../BaseURL';
function PetShopViewAllPet({imgUrl}) {

const[data,setData]=useState([])
const id=JSON.parse(localStorage.getItem("petshop-info"))


useEffect(() => {
   console.log(id);
    axiosInstance.post(`/shop/viewPetByShopId/${id._id}`).then((res) => {
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
    <PetShoNav/>
    <div className="container container-box">
        <button className='shop-add-new'>Add New Pet</button>
        <div className="row">
        {data.length ?(
    data.map(function(user){
      return (
            <div className="col-6 box">
                    <div className="card admin-view-pets-card1 bg-secondary-subtle">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <img src={`${imgUrl}/${user.img.filename}`} className="card-img-left user-img admin-view-pets-name"></img>
                            </div>
                            <div className="col-6">
                                <h3 className="card-title name"><b>Name : {user.petname}</b></h3>
                                <h6 className="card-title name"><b>Breed :  {user.breed} </b></h6>
                                <h6 className="card-title name"><b>Age : {user.age} </b></h6>
                                <h6 className="card-title name"><b>Cost : {user.price} </b></h6>

                            </div>
                        </div>
                        <Link to={`/
                        /${user._id}`}> <button className="btn btn-primary btn-sm rounded-start-pill rounded-end-pill admin-view-pets-btn1 align-items-center ">Edit</button></Link> 

                      <Link to={`/pet/removePetById/${user._id}`}> <button className="btn btn-primary btn-sm rounded-start-pill rounded-end-pill admin-view-pets-btn1 align-items-center ">Remove</button></Link> 
                    </div>
                </div>
      )
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
    </div></>
  )
}

export default PetShopViewAllPet