import React from 'react'
import { NavLink } from 'react-router-dom'
import './CustomNav.css'

const CustomNav = ({path, children}) => {
  return (
    <NavLink
    to={path}
    className="listItem"
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
    {children}
    </NavLink>
  )
}

export default CustomNav