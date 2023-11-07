import React, { Component } from "react";
import catDog from "../../Assets/dog-cat-look.jpg";
import kiss from "../../Assets/couple-kissing-dog.jpg";
import hugDog from "../../Assets/black-man-and-dog.jpg";
import hi5 from "../../Assets/pexels-blue-bird-7210698.jpg";
import dogsWalk from "../../Assets/pexels-blue-bird-7210754.jpg";
import huskyKiss from "../../Assets/pexels-maksim-goncharenok-9956250.jpg";
import couchDog from "../../Assets/pexels-ron-lach-10117273.jpg";
import airCat from "../../Assets/pexels-sam-lion-6001183.jpg";
import UserNavbar from "../Users/UserNavbar/UserNavbar";
import "./About.css";
function About() {
  return (
    <div>
      <UserNavbar />
      <div className="card about-global">
        <img src={catDog} className=" card-img cat-dog" />
        <div className="card-img-overlay">
          <h1 className="card-title  heading">About Us</h1>
        </div>
      </div>
      <div className="clearfix">
        <img
          src={kiss}
          className="kiss-img col-md-6 float-md-end mb-3 ms-md-3"
        />
        <h2 className="subheading">Our Mission</h2>
        <div className="">
          <h6 className="content">
            {" "}
            Since 1995 helping to find loving homes for Dogs and cats
          </h6>
          <p className="para-content">
            Whether you need in-home pet grooming, pet training, dog walking,
            pet insurance, pet relocation, or vet on call, The Pet Nest connects
            pet parents with pet care heroes who’ll treat their pet like family.
            But it’s not just about pet love. The zookeepers also committed to
            making pet care safe, easy, and affordable so that everyone can
            experience the unconditional love of a pet. Whatever you and your
            furr babies are into, we’re into it too. And we’ve got your back.
            Anytime. Anywhere. The Zookeeper donates a portion of every service
            to Pet NGO’s & Rescue shelters through this program. We also provide
            meals to shelter dogs in India.
          </p>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-4 ">
              <div className="card border-0 ">
                <img src={airCat} className="img1 object-fit-cover card-img" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0">
                <img src={hugDog} className="img1 object-fit-cover card-img" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0">
                <img
                  src={couchDog}
                  className=" img1 object-fit-cover card-img"
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="row">
              <div className="col-md-4 ">
                <div className="card border-0">
                  <img src={hi5} className="img1 object-fit-cover card-img" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0">
                  <img
                    src={dogsWalk}
                    className="img1 object-fit-cover card-img"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0">
                  <img
                    src={huskyKiss}
                    className="img1 object-fit-cover card-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
