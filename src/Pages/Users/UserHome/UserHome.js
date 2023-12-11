import img from "../../../Assets/medium-shot-woman-with-cute-chihuahua-dog.jpg";
import img1 from "../../../Assets/pic2-removebg-preview.png";
import img2 from "../../../Assets/karsten-winegeart-BVqQNu5J7qI-unsplash.jpg";
import img3 from "../../../Assets/petfood123.jpeg";
import img4 from "../../../Assets/Concept of pet care and training on green background_ Wide banner with pet toys.jpeg";
import img5 from "../../../Assets/closeup-shot-one-ginger-cat-hugging-licking-other-isolated-white-wall.jpg";
import img6 from "../../../Assets/Sprightly Surgeon_ Jack Russel's Medical Jaunt.jpeg";
import img7 from "../../../Assets/running-cute-sweet-puppy-king-charles-spaniel-cute-dog-pet-posing-with-ball-white.jpg";
import img8 from "../../../Assets/closeup-shot-beautiful-ginger-domestic-kitten-sitting-white-surface.jpg";
import img9 from "../../../Assets/couple-kissing-dog.jpg";
import img10 from "../../../Assets/closeup-shot-beautiful-ginger-domestic-kitten-sitting-white-surface.jpg";
import img11 from "../../../Assets/running-cute-sweet-puppy-king-charles-spaniel-cute-dog-pet-posing-with-ball-white.jpg";
import img12 from "../../../Assets/cat-white-background.jpg";
import img13 from "../../../Assets/running-cute-sweet-puppy-king-charles-spaniel-cute-dog-pet-posing-with-ball-white.jpg";
import img14 from "../../../Assets/chubby-domestic-cat-leaning-brown-puppy-lying-white-surface.jpg";
import img15 from "../../../Assets/pexels-ron-lach-10117273.jpg";
import img16 from "../../../Assets/close-up-woman-hugging-her-pet-dog.jpg";
import img17 from "../../../Assets/pexels-shvets-production-7533347.jpg";
import img18 from "../../../Assets/Trust Me I'm A Dogtor - Gift Mug.jpeg";
import img19 from "../../../Assets/cat-hand-transparent.png";
import img20 from "../../../Assets/img1-removebg-preview.png";
import CommonNavbar from "../../Common/CommonNavbar";
import UserNavbar from "../UserNavbar/UserNavbar";
import Footer from "../../Common/Footer/Footer.jsx";
import "./UserHome.css";
import NewsLetter from "../../Common/NewsLetter/NewsLetter.jsx";
import { useState } from "react";
import axiosInstance from "../../../BaseURL.js";
import NavbarUpdated from "../../Common/NavbarUpdated/NavbarUpdated.jsx";

const UserHome = () => {
  const [data, setData] = useState({
    name:"",
    email:"",
    subject:"",
    msg:""
  });
const submitFunction=(e)=>{
e.preventDefault()
axiosInstance
      .post("/addEnquiries", data)
      .then(result => {
        console.log("data entered", result);
        if (result.status == 200) {
          alert("Added Sucessfully");
        } else {
          alert("Sorry! your Request cannot be proccessed right now !!");
        }
}).catch((error) => {
  console.log("err", error);
});
};
const changehandleSubmit = (a) => {
  setData({ ...data, [a.target.name]: a.target.value });
console.log(data);
}
  return (
    <div>
      {/* <CommonNavbar /> */}
      <NavbarUpdated/>
      {/* <div class="homepagecontain"> */}
      <div class="homepagediv2">
        <div class="homepagediv1">
          <p class="homepagep1">
            <b>WELCOME TO ZOOKEEPER</b>
          </p>
          <p>Take the perfect step to make a perfect home</p>
          <img class="homepageimg6" src={img1} width="600px" height="363px" />
        </div>
      </div>
      <br />

      <p class="homepagep2">
        <b>The Tail Wags To keep you happy</b>
      </p>

      <br />

      <div class="card-group">
        <div class="card">
          <img src={img2} class="card-img-top" alt="..." height="350px" />
          <div class="card-img-overlay homepagecar">
            <p class="homepagep80">
              <b>-MORE INFO-</b>
              <br />
              <b class="homepageb80">Adoption</b>
            </p>
          </div>
          <div class="card-body"></div>
        </div>
        <div class="card">
          <img src={img3} class="card-img-top" alt="..." height="350px" />
          <div class="card-img-overlay homepagecar">
            <p class="homepagep80">
              <b>-MORE INFO-</b>
              <br />
              <b class="homepageb80">About us</b>
            </p>
          </div>
          <div class="card-body"></div>
        </div>
        <div class="card">
          <img src={img4} class="card-img-top" alt="..." height="350px" />
          <div class="card-img-overlay homepagecar">
            <p class="homepagep80">
              <b>-MORE INFO-</b>
              <br />
              <b class="homepageb80">Accessories</b>
            </p>
          </div>
          <div class="card-body"></div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      <div class="homepagediv3">
        <p class="homepagep3">-WHAT WE OFFER-</p>
        <p class="homepagep4">
          <b>OUR SERVICES</b>
        </p>
      </div>
      <div class="homepagediv6">
        <div class="homepagediv4">
          <p class="homepagep90">
            <b>Quality Services</b>
          </p>
          <p class="homepagep91">
            We offer quick and easy services for cats and dogs.
          </p>
          <p class="homepagep92">
            Simply enter your city above to start your search. Once you find a
            pet, click 'show number' to get contact info for their pet parent or
            rescue. Contact them to learn
            <br />
            <br />
            more about how to meet and adopt the pet.
          </p>
          <span class="badge rounded-pill text-bg-primary homepageabc">
            CONTACT US
          </span>
        </div>
        <div class="homepagediv5">
          <img class="homepageimg2" src={img5} height="300px" width="500px" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      <div class="homepagediv53">
        <div class="homepagediv50">
          <div class="homepagediv51">
            <img
              class="homepageimg50"
              src={img6}
              width="200px"
              height="150px"
            />
            <div class="homepagediv52">
              <p class="homepagep11">
                <b>VETERINARIAN</b>
              </p>
              <p>
                Many pet adoption centres rely on donations to provide
                food,shelter,and medical care for their animals.
              </p>
            </div>
          </div>
        </div>

        <div class="homepagediv50">
          <div class="homepagediv51">
            <img
              class="homepageimg50"
              src={img7}
              width="200px"
              height="150px"
            />
            <div class="homepagediv52">
              <p class="homepagep11">
                <b>GROOMING</b>
              </p>
              <p>
                With proper pet grooming, you will get rid of shedding, fleas,
                ticks and various health conditions.
              </p>
            </div>
          </div>
        </div>

        <div class="homepagediv50">
          <div class="homepagediv51">
            <img
              class="homepageimg50"
              src={img8}
              width="200px"
              height="150px"
            />
            <div class="homepagediv52">
              <p class="homepagep11">
                <b>ADOPTION</b>
              </p>
              <p>
                You can surrender your dog by taking him to an animal shelter or
                rescue organization
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div class="homepagediv10">
        <div class="homepagediv9">
          <img class="homepageimg3" src={img9} width="280px" height="230px" />
        </div>
        <div class="homepagediv8">
          <p class="homepagep5">
            <b>"Together, we can move the world for animals"</b>
          </p>
          <p>
            Pets, whether dogs, cats or any farm animals- make great friends for
            everyone in the family because they are a great source of love and
            friendship. Pets are <br />
            playful beings in the house as they keep everyone, young and old,
            happy in the house.
          </p>
          <span class="badge rounded-pill text-bg-primary homepagemore">
            MORE ABOUT US
          </span>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />

      <div class="homepagediv11">
        <h2>
          Sloppy Kisses Are <b class="homepageb1">NECCESARY</b>
        </h2>
        <p>
          Pets are amazing features that show unconditional love to us on a
          daily baisis.They are pure and loving and we can <br />
          learn a lot from them to strengthen our own relationships in life.
        </p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div class="homepagediv15">
        <div class="homepagediv16">
          <div class="homepagediv12">
            <div class="homepagediv13">
              <img
                class="homepageimg4"
                src={img10}
                height="180px"
                width="200px"
              />
              <p class="homepagep8">
                <b>SPECIAL NEEDS FRIENDLY TO OTHER PETS</b>
              </p>
              <p className="user-home-more-info-btn">
                <span class="badge rounded-pill text-bg-primary homepageabc">
                  MORE INFO
                </span>
              </p>
            </div>
            <div class="homepagediv14">
              <p>
                <b class="homepageb2">Charlie</b>
              </p>
              <p>
                <b>Gender:</b> &nbsp; Female
              </p>
              <p>
                <b>Age:</b> &nbsp; 2years
              </p>
              <p>
                <b>Breed:</b> &nbsp; Husky
              </p>
            </div>
          </div>
          {/* </div> */}
        </div>
        <div class="homepagediv16">
          <div class="homepagediv12">
            <div class="homepagediv13">
              <img
                class="homepageimg4"
                src={img11}
                height="180px"
                width="200px"
              />
              <p class="homepagep8">
                <b>SPECIAL NEEDS FRIENDLY TO OTHER PETS</b>
              </p>
              <p className="user-home-more-info-btn">
                <span class="badge rounded-pill text-bg-primary homepageabc">
                  MORE INFO
                </span>
              </p>
            </div>
            <div class="homepagediv14">
              <p>
                <b class="homepageb2">Max</b>
              </p>
              <p>
                <b>Gender:</b> &nbsp; Male
              </p>
              <p>
                <b>Age:</b> &nbsp; 7 Years
              </p>
              <p>
                <b>Breed:</b> &nbsp; Mixed
              </p>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>

      <div className="user-home-adoption-div">
        <span class="homepagedef">SEE ADOPTION GALLERY</span>
      </div>

      <div class="homepagediv18">
        <p class="homepageP9">
          -IMAGE TOUR-
          <br />
          <br />
          <b CLASS="homepageb3">GALLERY</b>
        </p>
      </div>

      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide homepagenew"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={img12}
              class="d-block w-100 homepagehe"
              alt="..."
              height="500px"
            />
          </div>
          <div class="carousel-item">
            <img
              src={img13}
              class="d-block w-100 homepagehe"
              alt="..."
              height="500px"
            />
          </div>
          <div class="carousel-item">
            <img
              src={img14}
              class="d-block w-100 homepagehe"
              alt="..."
              height="500px"
            />
          </div>
          <div class="carousel-item">
            <img
              src={img15}
              class="d-block w-100 homepagehe"
              alt="..."
              height="500px"
            />
          </div>
          {/* </div> */}
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <p class="homepagep20">
          <b>OUR TEAM</b>
        </p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div class="homepagediv70">
          <div class="homepagediv20">
            <p>
              <b class="homepageb90">
                Meet Our <br />
                professionals
              </b>
            </p>
            <p>
              We have an experienced <br />
              qualified team to take
              <br />
              care of your best friend
            </p>
            <span class="homepagedef">VIEW ALL TEAM</span>
          </div>

          <div class="homepagediv60">
            <img src={img16} width="280px" height="250px" />
            <p class="homepagep60">Laura Smith</p>
            <b class="homepageb10">Veterinarian</b>
            <br />
            <p className="user-home-team-desc">
              'She is an awesome vet...one <br />
              thing i like in her that she <br />
              explains everything point to point"
            </p>

            <br />
          </div>

          <div class="homepagediv60">
            <img src={img17} width="280px" height="250px" />
            <p class="homepagep60">John Doe</p>
            <b class="homepageb10">Pet Trainer</b>
            <br />

            <p className="user-home-team-desc">
              'Best Veterinarian! She is gentle and treats pets with love and
              care
            </p>
          </div>

          <div class="homepagediv60">
            <img src={img18} width="280px" height="250px" />
            <p class="homepagep60">Meghan Smith</p>
            <b class="homepageb10">Cat Specialist</b>
            <br />
            <p className="user-home-team-desc">
              "She's been a very strong support to the animal rescuers
              community, who often seeks help at any time"
            </p>
          </div>
        </div>
      </div>

      <div className="home-page-cat-div">
        <img class="homepageimg5" src={img19} width="1000px" height="550px" />
      </div>
      <div class="homepagediv26">
        <div class="homepagediv23">
          <p>
            GET IN TOUCH
            <br />
            <br />
            <b class="b6">CONTACT US</b>
          </p>
        </div>

        <div class="homepagediv24">
          <p class="homepagep30">Send us a message</p>
          <form onSubmit={submitFunction}>
            Name:
            <br />
            <input class="homepagei3" required type="text" name="name" onChange={changehandleSubmit}/>
            <hr />
            Email address:
            
            <br />
            <input class="homepagei3" required type="email" name="email" onChange={changehandleSubmit} />
          
            <hr />
            Subject:
          
            <br />
            <input class="homepagei3" required name="subject" type="text" onChange={changehandleSubmit} />
         
            <hr />
            Message:
        
            <br />
            <textarea class="t1" name="msg" required onChange={changehandleSubmit}></textarea>
          
            <br />
            <hr />
            <span class="homepagedef home-page-snd-msg"><button type="submit" className="homepage-send-msg">SEND MESSAGE</button></span>
          </form>
        </div>

        <div class="homepagediv25">
          <h2>
            <b>Get in Touch</b>
          </h2>
          <p>
            Want to adopt a pet or rescue an abandoned pet?Explore one of these
            best dog rescue shelters near you and get in touch with animal
            rescue.
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-envelope-fill"
              viewBox="0 0 16 16"
              color="#D61C62"
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
            </svg>
            <b class="b5">zookeeper@yoursite.com</b>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-telephone-fill"
              viewBox="0 0 16 16"
              color="#D61C62"
            >
              <path
                fill-rule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              />
            </svg>
            (91)2345678
            <br />
            <br />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
              color="#D61C62"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
            Zoo Street 123-Trivandrum
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />

      <NewsLetter />
      <Footer />
    </div>
  );
};
export default UserHome;
