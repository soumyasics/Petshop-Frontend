import zookeperLogo from "../../../Assets/zookeper-logo.png";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

import "./Footer.css";
const Footer = () => {
  return (
    <div className="common-footer-container">
      <div className="footer-logo-container">
        <div>
          <img src={zookeperLogo} alt="zookeper-logo" />
          <p>ZOOKEPER</p>
        </div>
      
      </div>

      <div>
        <h1>About Us</h1>
      </div>
      <div>Contact us</div>
      <div>Working Hours</div>
    </div>
  );
};
export default Footer;
