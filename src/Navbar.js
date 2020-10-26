import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import About from "./containers/About";
import Portfolio from "./containers/Portfolio";
import Contact from "./containers/Contact";
import Insight from "./containers/Insight";
import Widget from "./containers/Widget";
import ToDoContainer from "./containers/ToDoContainer";
import UserContextApp from "./widgets/usecontext/UserContextApp";
import ApiApp from "./widgets/apicall/ApiApp";
import RateShopper from "./widgets/rateshopper/RateShopper";

require("./css/style.css");
require("./css/todostyle.css");

const nav_wrapper = {
  backgroundColor: "#25003a",
};

const link = {
  color: "#EAE6DA",
  fontSize: "1.75em",
};

const nav_padding = {
  paddingRight: "20px",
  paddingTop: "20px",
};

const gary = {
  color: "white",
  paddingTop: "20px",
  fontSize: "1.75em",
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
    <Router>
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
          <Link to="/">
            <div className="link-logo gary-logo">GARY TOHILL</div>
          </Link>
          <div
            className="collapse navbar-collapse justify-content-md-center"
            id="navbarsExample08"
          >
            <ul className="navbar-nav">
              <li style={nav_padding}>
                <Link exact to="/">
                  <div className="hover-link navbar-font-style" style={link}>
                    About
                  </div>
                </Link>
              </li>
              <li style={nav_padding}>
                <Link to="/portfolio">
                  <p className="hover-link navbar-font-style" style={link}>
                    Portfolio
                  </p>
                </Link>
              </li>
              <li style={nav_padding}>
                <Link to="/contact">
                  <p className="hover-link navbar-font-style" style={link}>
                    Contact
                  </p>
                </Link>
              </li>
              <li style={nav_padding}>
                <Link to="/insight">
                  <p className="hover-link navbar-font-style" style={link}>
                    Insight
                  </p>
                </Link>
              </li>
              <li className="dropdown" style={nav_padding}>
                <Link to="/widget">
                  <p className="hover-link navbar-font-style" style={link}>
                    Widgets
                  </p>
                </Link>
                <div className="dropdown-content">
                  <Link to="/todoapp">
                    <div>To Do App</div>
                  </Link>
                  <Link to="/apiapp">
                    <div>API Call App</div>
                  </Link>
                  <Link to="/usecontext">
                    <div>Use Context</div>
                  </Link>
                  <Link to="/rateshopper">
                    <div>Rate Shopper</div>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <div className="bg-light">
            <Route exact path="/" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="/insight" component={Insight} />
            <Route path="/todoapp" component={ToDoContainer} />
            <Route path="/usecontext" component={UserContextApp} />
            <Route path="/apiapp" component={ApiApp} />
            <Route path="/rateshopper" component={RateShopper} />
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default Navbar;
