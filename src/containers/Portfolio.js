import React, { Component } from "react";
import Footer from "../components/Footer";
import PortfolioCard from "../components/PortfolioCard";
import HeroBanner from "../components/HeroBanner";

require("../css/portfolio.css");

class Portfolio extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "" }}>
        <HeroBanner
          headline="Helping Others Turn Their Ideas Into Reality"
          subline=""
        />

        <div className="container">
          <div className="row pt-5">
            <div className="col-md-2" />
            <div className="col-md-3">
              <PortfolioCard
                data={{
                  company: "Haymach Canada",
                  url: "https://haymach.ca",
                  image_logo: require("../images/haymach_logo.png"),
                  image_hero: require("../images/haymach_hero.png"),
                }}
              />
            </div>
            <div className="col-md-1" />
            <div className="col-md-3">
              <PortfolioCard
                data={{
                  company: "DX Dance Boutique",
                  url: "https://dxdanceboutique.com",
                  image_logo: require("../images/dxdance_logo.png"),
                  image_hero: require("../images/dx_dance_hero.png"),
                }}
              />
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-md-2" />
            <div className="col-md-3">
              <PortfolioCard
                data={{
                  company: "Cooey Outdoors",
                  url: "https://pivotaldev.xyz",
                  image_logo: require("../images/cooey_flower_logo.png"),
                  image_hero: require("../images/cooey_hero.png"),
                }}
              />
            </div>
            <div className="col-md-1" />
            <div className="col-md-3">
              <PortfolioCard
                data={{
                  company: "Billable Hours",
                  url: "https://www.billablehours.ca/",
                  image_logo: require("../images/billablehours_logo.png"),
                  image_hero: require("../images/billablehours_hero.png"),
                }}
              />
            </div>
          </div>

          <div className="row pt-5">
            <div className="col-md-2" />
            <div className="col-md-3">
              <PortfolioCard
                data={{
                  company: "Pivotal Design",
                  url: "https://pivotaldesign.ca",
                  image_logo: require("../images/pivotal_logo_purple.png"),
                  image_hero: require("../images/pivotal_hero.png"),
                }}
              />
            </div>
            <div className="col-md-1" />
            <div className="col-md-3">
              <PortfolioCard
                data={{
                  company: "Integrity Logistics",
                  url: "http://integritytl.ca/",
                  image_logo: require("../images/integrity_logo.png"),
                  image_hero: require("../images/integrity_hero.png"),
                }}
              />
            </div>
          </div>

          <div className="row pt-5">
            <div className="col-md-2" />
            <div className="col-md-3">
              <PortfolioCard
                data={{
                  company: "Eternal Directory",
                  url: "http://pivotaldesign.ca/eternal-directory",
                  image_logo: require("../images/eternal_logo.png"),
                  image_hero: require("../images/eternal_main_amanad.png"),
                }}
              />
            </div>
            <div className="col-md-1" />
            <div className="col-md-3">
              <PortfolioCard
                data={{
                  company: "Sales Banner",
                  url: "http://pivotaldesign.ca/sales-banner",
                  image_logo: require("../images/sb_logo.png"),
                  image_hero: require("../images/sb_hero.png"),
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
