import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
  <div className="nav">
    <NavLink id="nav1" style={{ textDecoration: 'none' }} exact to="/">
      Home
    </NavLink>
    <NavLink id="nav2" style={{ textDecoration: 'none' }} to="/quiz">
      Quiz
    </NavLink>
  </div>
  )
}

export default NavBar
