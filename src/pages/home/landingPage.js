import React from "react";
import "./landingPage.css";
import NavBar from "./navBar/navBar"
import Section1 from "./section1/section1";
import Section2 from "./section2/section2";
import Section3 from "./section3/section3";
import Section4 from "./section4/section4";

const LandingPage = () => {
  return (
    <div>
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          <Section1 />
        </div>
        <div>
          <Section2 />
        </div>
        <div>
          <Section3 />
        </div>
        <div>
          <Section4 />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;