import zookeperLogo from "../../../Assets/zookeper-logo.png";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { LiaInstagram } from "react-icons/lia";
import { AiTwotonePhone } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { FiMail } from "react-icons/fi";

import "./Footer.css";
const Footer = () => {
  return (
    <div className="common-footer-container">
      <div className="footer-logo-container">
        <div>
          <img src={zookeperLogo} alt="zookeper-logo" />
          <p>ZOOKEPER</p>
        </div>
        <div className="footer-social-logo-container">
          <BiLogoFacebook />
          <BiLogoTwitter />
          <LiaInstagram />
        </div>
      </div>

      <div className="footer-about-us">
        <h3>About Us</h3>
        <p>
          {" "}
          In addition to our public Low-Cost Vet Clinic, our veterinary medical
          team provides specialized and compassionate.
        </p>
      </div>
      <div className="footer-contact-us">
        <h3>Contact Us</h3>
        <div>
          <AiTwotonePhone />
          <span>(91)123-456-789</span>
        </div>
        <div>
          <FiMail />
          <span>zookeeper@yoursite.com</span>
        </div>
        <div>
          <GrLocation />
          <span>zoo Street 123 - Trivandrum</span>
        </div>
      </div>
      <div className="footer-working-hours">
        <h3> Working Hours</h3>
        <div>
          <span>Open from 9AM - 6PM</span>
        </div>
        <div>
          <span>Holiday-Closed</span>
        </div>
        <div>
          <span>Weekends-Closed</span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
