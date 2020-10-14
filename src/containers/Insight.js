import React, { Component } from "react";

import HeroBanner from "../components/HeroBanner";
import InsightCard from "../components/InsightCard";


export class Insight extends Component {
  render() {
    return (
      <React.Fragment>
        <main style={{ backgroundColor: "#d6d6f5" }}>
          <HeroBanner headline="INSIGHT" />
          <section className="container pt-5">
            <div className="row pb-5">
              <div className="col-md-4">
                <InsightCard
                  cardTitle="Transfer data from Excel to Database"
                  cardImage={require("../images/excel-to-mysql.png")}
                  cardShort="Transfer data from Excel to Database using Python and Flask"
                  cardAlt=""
                />
              </div>
              <div className="col-md-4">
                <InsightCard
                  cardTitle="Improve user experience with ReactJS"
                  cardImage={require("../images/user-friendly-data.png")}
                  cardShort="A React implimentation that allows user to evaluate ROI with a simple user interface"
                  cardAlt=""
                />
              </div>
              <div className="col-md-4">
                <InsightCard
                  cardTitle="Exploring React Hooks"
                  cardImage={require("../images/react_hooks.png")}
                  cardShort="Take A Quick Look At The Benefits to React Hooks and State Management"
                  cardAlt=""
                />
              </div>
            </div>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default Insight;
