import React from "react";
import Logo3 from "./images/cardtocash.png";
import "./Hero3.css";

const Hero3 = () => {
  return (
    <>
      <div className="hero3Section">

      <div>
          <div className="hero3ImgContainer">
            <img src={Logo3} alt="heroImg" />
          </div>
        </div>

     <div className="hero3Section-right">
          <p className="hero3Section-right-header-text">
           Choose how you want to make transfers
          </p>
          <p className="hero3Section-right-secondary-text">
           make your transfers to various account with ease and first hand security
          </p>
        </div>

       
      </div>
    </>
  );
};

export default Hero3;