/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./navBar.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const navigateToHome = () =>{
    navigate("/");
  }
  const navigateToFeature = () =>{
    navigate("/feature");
  }
  const navigateToAbout = () =>{
    navigate("/about");
  }
  const navigateToContact = () =>{
    navigate("/contact-us");
  }
  const navigateToLogin = () =>{
    navigate("/login");
  }
  const navigateToSignup = () =>{
    navigate("/signup");
  }

  return (
    <div>
      <div className="header">
        <header className="header-header">
          <div className="header-logo">
            <h2 className="logo">Fintech.africa</h2>
          </div>
          <nav className="header-nav">
            <ul className="header-ul">
              <li className="header-li">
                <a onClick={navigateToHome}>
                  <span>Home</span>
                </a>
              </li>
              <li className="header-li">
                <a onClick={navigateToFeature}> Feature </a>
              </li>
              <li className="header-li">
                <a onClick={navigateToAbout}> About </a>
              </li>
              <li className="header-li">
                <a onClick={navigateToContact}> Contact Us </a>
              </li>
            </ul>
            <div className="header-end">
              <ul>
                <li className="header-end-li">
                  <a onClick={navigateToLogin}> Login </a>
                </li>
              </ul>
              <button onClick={navigateToSignup}>Create an account</button>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default NavBar;