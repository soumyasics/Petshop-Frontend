import React from 'react';
import "./PetShopHome.css";
import NavbarUpdated from '../../Common/NavbarUpdated/NavbarUpdated';
import hero_img from '../../../Assets/Slice 1 (1).png';
import parrot from '../../../Assets/div.call-box.png';
import accessories from '../../../Assets/Link → box3.jpg.png';
import pet from '../../../Assets/Pets image.png';
import call from '../../../Assets/image 2 (1).png';
import petshop_img from "../../../Assets/Rectangle 1.png";
import doggy from "../../../Assets/image 3.png";
import card_logo1 from "../../../Assets/service1.jpg.png";
import card_logo2 from "../../../Assets/service2.jpg.png";
import card_logo3 from "../../../Assets/service3.jpg.png";
import Footer from '../../Common/Footer/Footer';
import NewsLetter from '../../Common/NewsLetter/NewsLetter';
function PetShopHome() {
  return (
    <>
    <NavbarUpdated />
    <div>
      <div className='container-fluid m-0 p-0'>
        <img src={hero_img} alt='Petshop Hero Image' className=' img-fluid object-fit-cover vw-100'/>
      </div>
      <div className='container-fluid m-4 mb-0 p-2 d-flex flex-column align-items-center'>
        <p className='m-3 text-secondary'>WHAT <s>WE</s> OFFER</p>
        <h1><b>SHOPS CAN DO</b></h1>
      </div>
      <div className='container-fluid row z-2'>
      <div className='col-4'>
        <img src={parrot} alt='parrot and dog' className='img-fluid'/>
      </div>
      <div className='col-4'>
        <img src={pet} alt='pet image' className='img-fluid'/>
      </div>
      <div className='col-4'>
         <img src={accessories} alt='pet accessories' className='img-fluid'/>
      </div>
      </div>
      <div className='row d-flex align-items-center mx-auto bg-light  border-primary border-bottom border-4 z-3 position-relative top-100 start-50 translate-middle opacity-75'>
        <div className='col-4 text-primary  d-flex flex-column justify-content-center'>
          <p className='mx-auto'>MORE INFO</p>
          <h1 className='mx-auto'>Pets Listing</h1>
        </div>
        <div className='col-4 text-primary  d-flex flex-column justify-content-center'>
          <p className='mx-auto'>MORE INFO</p>
          <h1 className='mx-auto'>Pets Adoption Service</h1>
        </div>
        <div className='col-4 text-primary  d-flex flex-column justify-content-center'>
          <p className='mx-auto'>MORE INFO</p>
          <h1 className='mx-auto'>Accessories</h1>
        </div>
      </div>
      <div className='container-fluid m-4 mb-0 p-2 d-flex flex-column align-items-center'>
        <p className='m-3 text-secondary'>--WHAT WE OFFER--</p>
        <h1><b>HOW IT WORKS</b></h1>
      </div>
      <div className='container-fluid row'>
        <div className='col-6'>
          <img src={call} alt='call' className='img-fluid object-fit-cover vw-100'/>
        </div>
        <div className='col-6'>
          <h1>We are Ready to help</h1>
          <p className='text-secondary'>
            We offer quick & easy services for cats and dogs.
          </p>
          <p className='fw-light'>
            Simply enter your city above to start the search.Once you find a pet,click "show number" to get contact info for their pet parent or rescue. Contact them to learn more about how to meet and adopt the pet.
          </p>
          <button className='btn btn-primary btn-lg rounded-4 m-2'>Contact Us</button>
        </div>
      </div>
      <div className='container-fluid m-5 mb-0 p-2 d-flex flex-column align-items-center position-relative'>
        <p className='m-3 text-secondary'>--WHAT WE OFFER--</p>
        <h1 className='position-absolute top-100 end-0 translate-middle m-0'><b className='p-3'>WE JUST JOINED</b></h1>
      </div>
      <div className="homepagediv53 m-5 petshop-home-box">
        <div className="homepagediv50">
          <div className="homepagediv51">
            <img
              className="homepageimg50"
              src={card_logo1}
              width="200px"
              height="150px"
            />
            <div className="homepagediv52">
              <p className="homepagep11 px-5">
                <b>PAWS AND CLAWS HAVEN</b>
              </p>
              <p>
                Many pet adoption centres rely on donations to provide
                food,shelter,and medical care for their animals.
              </p>
            </div>
            <button className='btn btn-primary btn-lg rounded-4 m-5 mx-0 position-absolute top-100 start-50 translate-middle'>READ MORE</button>
          </div>
          <div>
            
          </div>
        </div>

        <div className="homepagediv50">
          <div className="homepagediv51">
            <img
              className="homepageimg50"
              src={card_logo2}
              width="200px"
              height="150px"
            />
            <div className="homepagediv52">
              <p className="homepagep11 px-5">
                <b>THE PET PALETTE</b>
              </p>
              <p>
                With proper pet grooming, you will get rid of shedding, fleas,
                ticks and various health conditions.
              </p>
            </div>
            <button className='btn btn-primary btn-lg rounded-4 m-5 mx-0 position-absolute top-100 start-50 translate-middle'>READ MORE</button>
          </div>
        </div>

        <div className="homepagediv50">
          <div className="homepagediv51">
            <img
              className="homepageimg50"
              src={card_logo3}
              width="200px"
              height="150px"
            />
            <div className="homepagediv52">
              <p className="homepagep11 px-5">
                <b>ADOPTION</b>
              </p>
              <p>
                You can surrender your dog by taking him to an animal shelter or
                rescue organization and they will do the rest.
              </p>
            </div>
            <button className='btn btn-primary btn-lg rounded-4 m-5 mx-0 position-absolute top-100 start-50 translate-middle'>READ MORE</button>
          </div>
        </div>
      </div>
      <div className='container-fluid row mt-5'>
        <div className='col-4'>
          <img src={petshop_img} alt='Petshop image' className='img-fluid object-fit-cover vw-100'/>
        </div>
        <div className='col-8 p-4'>
          <h1 className='text-primary fs-1'>
            We know how much you care them
          </h1>
          <p className='fw-medium fs-5'>
            Pets, whether dogs,cats or any farm animals - make great friends for everyone in the family because they are a great source of love and friendship. Pets are playful beings in the house as they keep everyone,young and old, happy in the house.
          </p>
          <button className='btn btn-primary btn-lg rounded-4 m-5 mx-0'>MORE ABOUT US</button>
        </div>
      </div>
      <div className='container-fluid m-4 mb-0 p-2 d-flex flex-column align-items-center'>
        <p className='m-3 text-secondary'>--IMAGE TOUR--</p>
        <h1><b>PET SHOP GALLERY</b></h1>
      </div>
      <div className='container-fluid row'>
        <div className='col-12 position-relative'>
          <img src={doggy} alt='doggy' className='img-fluid object-fit-cover vw-100'/>
          <button className='btn btn-primary btn-lg rounded-5 m-5 mx-0 position-absolute top-50 start-50 translate-middle petshop-home-custom-btn'>VIEW GALLERY</button> 
        </div>
      </div>
      <NewsLetter/>
      <Footer/>
    </div></>

  )
}

export default PetShopHome