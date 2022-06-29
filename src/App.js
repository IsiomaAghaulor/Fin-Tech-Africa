import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Features from "./component/Features";
import About from "./component/About";
import ContactUs from "./component/ContactUs";
import Error from "./component/Error";
import Header from "./component/Header";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import Hero1 from "./component/Hero1/Hero1";
import Hero2 from "./component/Hero2/Hero2";
import Hero3 from "./component/Hero3";
import Hero4 from "./component/Hero4/Hero4";
import Footer from "./component/Footer";


function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Hero1 />
        <Hero2 />
        <Hero3 />
        <Hero4 />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="Features" element={<Features />} />
          <Route path="About" element={<About />} />
          <Route path="ContactUs" element={<ContactUs />} />
          <Route path="Error" element={<Error />} />
        </Routes>
        <Footer />
      </>
    </div>
  );
}

export default App;
