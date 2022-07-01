import React from "react";
import "./Hero4.css";
import frame from "../../images/her4frame.png";
import Fintechimg from "../../images/fintechimggirl3.png";

const Hero4 = () => {
  return (
    <>
      <div className="hero4Container">
        <div div className="hero4-text-container">
          <div className="hero4-title-left">
            <h2>How it works</h2>
            <p>
              Lorum ipsum dolor sit amet consectetur adipiscing elit. Feugiat
              eget ipsum sed praesent{" "}
            </p>
          </div>

          <div className="hero4-instructionsContainer-left">
            <div className="step_card">
              <div className="stepCard_imgContainer">
                <div>
                  <img src={frame} alt="frame_img" />
                </div>
                
              </div>

              <div className="step_content">
                <small>STEP ONE</small>
                <h4>Sign in or Sign up your account</h4>
                <p>
                  Lorum ipsum dolor sit amet consectetur adipsiscing elit.
                  Feugiat eget ipsum sed praesent
                </p>
              </div>
            </div>

            <div className="step_card">
              <div className="stepCard_imgContainer">
                <div>
                  <img src={frame} alt="frame_img" />
                </div>
                
              </div>

              <div className="step_content">
                <small>STEP TWO</small>
                <h4>Click transfer on your dashboard</h4>
                <p>
                  Lorum ipsum dolor sit amet consectetur adipsiscing elit.
                  Feugiat eget ipsum sed praesent
                </p>
              </div>
            </div>

            <div className="step_card">
              <div className="stepCard_imgContainer">
                <div>
                  <img src={frame} alt="frame_img" />
                </div>
                
              </div>

              <div className="step_content">
                <small>STEP THREE</small>
                <h4>Select your desire bank and send</h4>
                <p>
                  Lorum ipsum dolor sit amet consectetur adipsiscing elit.
                  Feugiat eget ipsum sed praesent
                </p>
              </div>
            </div>

           
          </div>
        </div>

        <div className="hero4imgContainer-right">
          <div>
            <img src={Fintechimg} alt="fintechimggirl3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero4;
