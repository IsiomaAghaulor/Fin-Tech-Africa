import React from "react";
import Button from "../Button/Button";
import FintechGuy from "../../images/fintechimgguy.png";
import "./Hero1.css";

const Hero1 = () => {
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
            <img src={FintechGuy} alt="heroImg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero1;
