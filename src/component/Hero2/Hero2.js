import React from "react";
import Logo1 from "../images/free.png";
import Logo2 from "../images/secrecy.png";
import Logo3 from "../images/security.png";
import Logo4 from "../images/transaction.png";
import "../Hero2.css";

const Hero2 = () => {
  return (
    <>
      <div className="hero2Section">
        <div className="hero2Section-left">
          <p className="hero2Section-left-header-text">
            Get the convenience of transacting with our services
          </p>
          <p className="hero2Section-left-secondary-text">
            Save and manage all your transaction in one place, easy payment
            anytime & anyday.
          </p>
        </div>

        <div className="icon_container">
          <div className="sub_container">
            <div className="item">
              <img src={Logo1} alt="heroImg" />
              <p> keeping <br/>secr ecy</p>
            </div> 
          </div>         
          
          <div className="sub_container">
            <div className="item">
              <img src={Logo2} alt="heroImg" />
              <p> convenient <br/>transaction</p>
            </div>
          </div>
          

          <div className="sub_container">
            <div className="item item-footer">
              <img src={Logo3} alt="heroImg" />
              <p>Free <br/>transaction</p>
            </div>
          </div>
          

          <div className="sub_container">
            <div className="item item-footer">
              <img src={Logo4} alt="heroImg" />
              <p>Security <br/>guaranteed</p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Hero2;

