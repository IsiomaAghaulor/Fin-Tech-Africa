import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Button from "../Button/Button";
import CustomNav from "../CustomNav/CustomNav";

const Header = () => {
  return (
    <>
      <header>
        <div className="container container-flex">

          <div className="titleText">
            <h3>Fintech.africa</h3>
          </div>

          <nav className="headerListItems">
            <CustomNav color="black" path='/'>Home</CustomNav>
            <CustomNav color="black" path='/features'>Features</CustomNav>
            <CustomNav color="black" path='/about'>About</CustomNav>
            <CustomNav color="black" path='/contactUs'>Contact Us</CustomNav>
  
          </nav>

          <div className="login-link">
            <NavLink to="/" className='login'>Login</NavLink>
            <Button title={"Create an account"} color="inherit"></Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
