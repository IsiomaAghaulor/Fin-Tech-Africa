import React from "react";
import Button from "../Button";
import HeroImg from "../images/heroImg.png";
import "../Hero.css";

const Hero = () => {
  return (
    <>
      <div className="heroSection">
        <div className="heroSection-left">
          <p className="heroSection-left-header-text">
            Quick and easy payment platform for all you transactions
          </p>
          <p className="heroSection-left-secondary-text">
            Save and manage all your transaction in one place, easy payment
            anytime & anyday.
          </p>
          <Button title={"Create an account"} color="inherit"></Button>
        </div>
        <div>
          <div className="heroImgContainer">
            <img src={HeroImg} alt="heroImg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
