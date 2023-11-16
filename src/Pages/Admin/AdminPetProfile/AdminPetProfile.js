import './AdminPetProfile.css';
import dp from "../../../Assets/wallpaperflare.com_wallpaper.jpg";
import React from 'react';
import Footer from '../../Common/Footer/Footer.jsx';

export default function AdminPetProfile() {
    const PetProfile={
        id:1,
        PetName:"LEELO",
        ShopOwnerName:"Mike B",
        PetType:"Labrador Retriever",
        PetAge:3,
        PetMoreInfo:"say some things about your pet",
        Address:"Suite 383 865 Darwin Pass, Eliafort, CT 47808-2386"
    };
  return (
    <div>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-4'>
                    <div className='card admin-pet-card'>
                        <img className='card-img object-fit-fill border rounded' src={dp}/>
                    </div>
                </div>
                <div className='col-8'>
                    <h1 className='admin-pet-name'>{PetProfile.PetName}</h1>
                </div>
            </div>
            <form className='m-4'>
            <div className='row'>
                    <div className='col-6'>
                        <div className='mb-3'>
                            <label for='pet-name' className='form-label'>
                                Pet Name
                            </label>
                            <input type='text' className='form-control' id='pet-name' placeholder={PetProfile.PetName}/>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='mb-3'>
                            <label for='shopowner-name' className='form-label'>
                                ShopOwner Name
                            </label>
                            <input type='text' className='form-control' id='shopowner-name' placeholder={PetProfile.ShopOwnerName}/>
                        </div>
                    </div>    
            </div>
            <div className='row'>
                <div className='col-12'>
                    <div className='mb-3'>
                        <label for='pet-type' className='form-label'>
                                Pet Type
                        </label>
                        <input type='text' className='form-control' id='pet-type' placeholder={PetProfile.PetType}/>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <div className='mb-3'>
                        <label for='pet-age' className='form-label'>
                                Pet Age
                        </label>
                        <input type='text' className='form-control' id='pet-age' placeholder={PetProfile.PetAge+' years'}/>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <div className='mb-3'>
                        <label for='pet-more-info' className='form-label'>
                                Pet More Info
                        </label>
                        <input type='text' className='form-control' id='pet-more-info' placeholder={PetProfile.PetMoreInfo}/>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <div className='mb-3'>
                        <label for='address' className='form-label'>
                                Address
                        </label>
                        <input type='text' className='form-control' id='address' placeholder={PetProfile.Address}/>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 d-inline'>
                    <div className="form-check w-25 ">
                        <label className="form-check-label" for="genderM">
                            Male
                        </label>
                        <input className="form-check-input" type="radio" name="gender" id="genderM" checked/>
                    </div>
                    <div className='form-check w-25'>
                        <label className="form-check-label" for="genderF">
                            Female
                        </label>
                        <input className="form-check-input" type="radio" name="gender" id="genderF"/>
                    </div>
                </div>
            </div>
            </form>
            <div className='row'>
                <div className='col-6 p-5'>
                    <button className='btn btn-primary btn-lg float-end'>Edit</button>
                </div>
                <div className='col-6 p-5'>
                    <button className='btn btn-primary btn-lg'>Delete</button>
                </div>
            </div>
        </div>
        <Footer/>
    </div>

  )
}
