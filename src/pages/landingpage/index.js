import React from "react";
import "../../App.css";
import Header from "../../component/Header/Header";
import Hero1 from "../../component/Hero1/Hero1";
import Hero2 from "../../component/Hero2/Hero2";
import Hero3 from "../../component/Hero3/Hero3";
import Hero4 from "../../component/Hero4/Hero4";
import Footer from "../../component/Footer/Footer";

function index() {
  return (
    <div className="App">
      <>
        <Header />
        <Hero1 />
        <Hero2 />
        <Hero3 />
        <Hero4 />
        <Footer />
      </>
    </div>
  );
}
export default index;
