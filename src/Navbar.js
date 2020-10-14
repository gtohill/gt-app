import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

const nav_wrapper = {
  backgroundColor: "#25003a",
};

const navlink = {
  color: "#EAE6DA",
  fontSize: "1.75em",
};

const nav_padding = {
  paddingRight: "20px",
  paddingTop: "20px",
};

function Navbar() {
  function dropDownNav() {
    console.log("WORKING?");
    document.getElementById("nav-drop-down").style.display = "inline";
  }
  function upNav() {
    console.log("WORKING?");
    document.getElementById("nav-drop-down").style.display = "none";
  }

  return (
    <div style={nav_wrapper}>
      <nav className="navbar navbar-expand-lg navbar bg">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample08"
          aria-controls="navbarsExample08"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="fas fa-bars" />
          </span>
        </button>
        <NavLink to="/">
          <div className="link-logo gary-logo">GARY TOHILL</div>
        </NavLink>
        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample08"
        >
          <ul className="navbar-nav">
            <li style={nav_padding}>
              <NavLink exact to="/">
                <div className="hover-link navbar-font-style" style={navlink}>
                  About
                </div>
              </NavLink>
            </li>
            <li style={nav_padding}>
              <NavLink to="/portfolio">
                <p className="hover-link navbar-font-style" style={navlink}>
                  Portfolio
                </p>
              </NavLink>
            </li>
            <li style={nav_padding}>
              <NavLink to="/contact">
                <p className="hover-link navbar-font-style" style={navlink}>
                  Contact
                </p>
              </NavLink>
            </li>
            <li style={nav_padding}>
              <NavLink to="/insight">
                <p className="hover-link navbar-font-style" style={navlink}>
                  Insight
                </p>
              </NavLink>
            </li>
            <li className="dropdown" style={nav_padding}>
              <NavLink to="/widget">
                <p className="hover-link navbar-font-style" style={navlink}>
                  Widgets
                </p>
              </NavLink>
              <div className="dropdown-content">
                <NavLink to="/todoapp">
                  <div>To Do App</div>
                </NavLink>
                <NavLink to="/apiapp">
                  <div>API Call App</div>
                </NavLink>
                <NavLink to="/usecontext">
                  <div>Use Context</div>
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
