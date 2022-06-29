import React from "react";
import { NavLink } from "react-router-dom";
import "./Css/ListStyle.css";
import Button from "./Button";
import CustomNav from "./CustomNav/CustomNav";

const Header = () => {
  return (
    <>
      <header>
        <div className="container container-flex">
          <div>
            <h3 className="titleText">Fintech.africa</h3>
          </div>
          <nav>
            <div className="list">
              {/* <NavLink
                to="/"
                exact
                className="listItem"
                activeClassName="activeItem"
              >
                Home
              </NavLink> */}
              {/* <NavLink
                to="/"
                style={({ isActive }) => (
                    { color: isActive ? "#4361EE" : 'black',
                        border: isActive ? 'none' : 'none',
                        textDecoration: isActive ? "none" : "none",
                        fontSize: isActive ? "0.5em" : "0.5em",
                        fontWeight: isActive ? "700" : "700",
                        fontFamily: isActive ? 'Poppins' : 'Poppins',
                    }
                    )
                }
                >
                Home
                </NavLink> */}
                <CustomNav path='/'>Home</CustomNav>
                <CustomNav path='/features'>Features</CustomNav>
                <CustomNav path='/about'>About</CustomNav>
                <CustomNav path='/contactUs'>Contact Us</CustomNav>
                
              {/* <NavLink
                to="/features"
                className="listItem"
                activeClassName="activeItem"
              >
                Features
              </NavLink> */}
              {/* <NavLink
                to="/about"
                className="listItem"
                activeClassName="activeItem"
              >
                About
              </NavLink> */}
              {/* <NavLink
                to="/contactUs"
                className="listItem"
                activeClassName="activeItem"
              >
                ContactUs
              </NavLink> */}
            </div>
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
