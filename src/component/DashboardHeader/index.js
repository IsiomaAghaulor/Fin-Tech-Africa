import React, { useState } from "react";
import "./index.css";
import { ReactComponent as Pic } from "./images/pic.svg";
import { ReactComponent as Bell } from "./images/bell.svg";
import { ReactComponent as Red } from "./images/red.svg";
import { FiSettings } from "react-icons/fi";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const DashboardHeader = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <nav className="navbar_b ">
      <div className="container navbar-wrapper">
        <div className="navbar__logo">
          <span>
            <h1>Fintech.africa</h1>
          </span>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes className="icons" /> : <FaBars className="icons" />}
        </div>
        <div className={click ? "navbar__right active" : "navbar__right"}>
          <ul className="nav-links">
            {/* {menuItems.map((item) => ( */}
            <li>
              <NavLink exact={true} className="li sett" to="/">
                <FiSettings />
              </NavLink>
            </li>
            <li>
              <NavLink exact={true} className="li atBell" to="#">
                <Bell />
                <span className="sideBadge">
                  <Red />
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink exact={true} className="li" to="#">
                <Pic />
              </NavLink>
            </li>
            <li>
              <NavLink exact={true} className="li" to="/">
                <span>Adetula</span>
              </NavLink>
            </li>
            {/* ))} */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DashboardHeader;
