import React from "react";
import Free from "../../images/free.png";
import Secrecy from "../../images/secrecy.png";
import Security from "../../images/security.png";
import Transaction from "../../images/transaction.png";
import "./Hero2.css";

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
              <img src={Free} alt="heroImg" />
              <p> keeping <br/>secrecy</p>
            </div> 
          </div>         
          
          <div className="sub_container">
            <div className="item item-footer">
              <img src={Secrecy} alt="heroImg" />
              <p> convenient <br/>transaction</p>
            </div>
          </div>
          

          <div className="sub_container">
            <div className="item item-footer">
              <img src={Security} alt="heroImg" />
              <p>Free <br/>transaction</p>
            </div>
          </div>
          

          <div className="sub_container">
            <div className="item item-footer">
              <img src={Transaction} alt="heroImg" />
              <p>Security <br/>guaranteed</p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Hero2;

