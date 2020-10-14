import React from "react";

import { Route, NavLink, HashRouter } from "react-router-dom";
import Navbar from "./Navbar.js";
import About from "./containers/About";
import Portfolio from "./containers/Portfolio";
import Contact from "./containers/Contact";
import Insight from "./containers/Insight";
import Widget from "./containers/Widget";
import ToDoContainer from "./containers/ToDoContainer";
import Footer from "./components/Footer";
import UseContextApp from './widgets/usecontext/UseContextApp';
import ApiApp from './widgets/apicall/ApiApp';

require("./css/style.css");
require('./css/todostyle.css');

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

const gary = {
  color: "white",
  paddingTop: "20px",
  fontSize: "1.75em",
};

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HashRouter>
          <div>
            <Navbar />
            <div className="content">
              <Route exact path="/" component={About} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
              <Route path="/insight" component={Insight} />
              <Route path="/todoapp" component={ToDoContainer} />
              <Route path="/usecontext" component={UseContextApp} />
              <Route path="/apiapp" component={ApiApp} />
            </div>
          </div>
        </HashRouter>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;
