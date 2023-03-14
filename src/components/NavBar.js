import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
  <div className="nav">
    <NavLink className="nav" exact to="/">
      Home
    </NavLink>
    <NavLink className="nav" to="/quiz">
      Quiz
    </NavLink>
  </div>
  )
}

export default NavBar
