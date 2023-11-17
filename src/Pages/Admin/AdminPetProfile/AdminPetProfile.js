import './AdminPetProfile.css';
import dp from "../../../Assets/wallpaperflare.com_wallpaper.jpg";
import React, { useEffect, useState } from 'react';
import Footer from '../../Common/Footer/Footer.jsx';
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import axiosInstance from '../../../BaseURL.js';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function AdminPetProfile() {
    const navigate=useNavigate()
       const[PetProfile,setPetProfile]=useState({
        ownerid: "",
        shopid: "",
        petname: "",
        type: "",
        age: "",
        breed: "",
        gender: "",
        insurancenumber: "",
        description: "",
        price: "",
        img: null,
       })
const {id}=useParams()
console.log(id);


    useEffect(() => {

        console.log("in use");
       
        axiosInstance.post(`/pet/viewPetById/${id}`).then((res) => {
            if (res.status === 200) {
           console.log("data",res.data.data);
                setPetProfile(res.data.data);
                console.log(res.data.data.shopid.shopname);
              }
            
            
          }).catch((err) => {
            console.log(err);
           alert(" Server Issues")
          })
     
      },[]);

      const submitt = (e)=>{
        e.preventDefault();
       
        axiosInstance
          .post(`/pet/removePetById/${id}`)
          .then((response) => {
            console.log(response);
            if (response.data.status == 200) {
              alert("Pet Removed");
               navigate("/admin/admin-all-pets")
            } else {
              alert("Deletion Failed");
            }
          })
          .catch((err) => {
            console.log(err, ' axios error');
          });
      }
    


  return (
    <div>
        <AdminNavbar/>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-4'>
                    <div className='card admin-pet-card'>
                        <img className='card-img object-fit-fill border rounded' src={dp}/>
                    </div>
                </div>
                <div className='col-8'>
                    <h1 className='admin-pet-name'>{PetProfile.petname}</h1>
                </div>
            </div>
            <form className='m-4' onSubmit={submitt}>
            <div className='row'>
                    <div className='col-6'>
                        <div className='mb-3'>
                            <label for='pet-name' className='form-label'>
                                Pet Name
                            </label>
                            <input type='text' className='form-control' id='pet-name' placeholder={PetProfile.petname}/>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='mb-3'>
                            <label for='shopowner-name' className='form-label'>
                                ShopOwner Name
                            </label>
                            <input type='text' className='form-control' id='shopowner-name' placeholder={(PetProfile.shopid.shopname)}/>
                        </div>
                    </div>    
            </div>
            <div className='row'>
                <div className='col-12'>
                    <div className='mb-3'>
                        <label for='pet-type' className='form-label'>
                                Pet Type
                        </label>
                        <input type='text' className='form-control' id='pet-type' placeholder={PetProfile.type}/>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <div className='mb-3'>
                        <label for='pet-age' className='form-label'>
                                Pet Age
                        </label>
                        <input type='text' className='form-control' id='pet-age' placeholder={PetProfile.age+' years'}/>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <div className='mb-3'>
                        <label for='pet-more-info' className='form-label'>
                                Pet More Info
                        </label>
                        <input type='text' className='form-control' id='pet-more-info' placeholder={PetProfile.description}/>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <div className='mb-3'>
                        <label for='address' className='form-label'>
                                Breed
                        </label>
                        <input type='text' className='form-control' id='address' placeholder={PetProfile.breed}/>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <div className='mb-3'>
                        <label for='address' className='form-label'>
                                Gender
                        </label>
                        <input type='text' className='form-control' id='gender' placeholder={PetProfile.gender}/>
                    </div>
                </div>
            </div>
            <div className='row'>
               
               <div className='col-6 p-5'>
                   <button type="submit" className='btn btn-primary btn-lg'>Delete</button>
               </div>
           </div>
            </form>
         
        </div> 
        <Footer/>
    </div>

  )
}
