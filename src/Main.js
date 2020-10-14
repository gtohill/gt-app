import React from "react";

import Navbar from "./Navbar.js";
import Footer from "./components/Footer";

require("./css/style.css");
require("./css/todostyle.css");


class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="gt-page">        
          <Navbar />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;
