import React from "react";
import "./navBar.css";

const NavBar = () => {
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
                <a>
                  {" "}
                  <span>Home</span>{" "}
                </a>
              </li>
              <li className="header-li">
                <a> Feature </a>
              </li>
              <li className="header-li">
                <a> About </a>
              </li>
              <li className="header-li">
                <a> Contact Us </a>
              </li>
            </ul>
            <div className="header-end">
              <ul>
                <li className="header-end-li">
                  <a> Login </a>
                </li>
              </ul>
              <button>Create an account</button>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default NavBar;