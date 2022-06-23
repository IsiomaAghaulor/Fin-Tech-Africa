import React from "react";
import { NavLink } from "react-router-dom";
import "./Css/ListStyle.css";
import Button from "./Button";

const List = () => {
  return (
    <>
      <header>
        <div className="container container-flex">
          <div>
            <h3 className="titleText">Fintech.africa</h3>
          </div>
          <nav>
            <div className="list">
              <NavLink
                to="/"
                exact
                className="listItem"
                activeClassName="activeItem"
              >
                Home
              </NavLink>
              <NavLink
                to="/features"
                className="listItem"
                activeClassName="activeItem"
              >
                Features
              </NavLink>
              <NavLink
                to="/about"
                className="listItem"
                activeClassName="activeItem"
              >
                About
              </NavLink>
              <NavLink
                to="/contactUs"
                className="listItem"
                activeClassName="activeItem"
              >
                ContactUs
              </NavLink>
            </div>
          </nav>
          <div className="login-link">
            <NavLink to="/" className='listItem'>Login</NavLink>
            <Button title={"Create an account"} color="inherit"></Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default List;
