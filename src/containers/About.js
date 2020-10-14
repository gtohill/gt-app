import React from "react";
import Hero from "../components/Hero";
import Video from "../components/Video";
import Skills from "../components/Skills";
import Location from "../components/Location";
import Footer from "../components/Footer";

class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Hero
          heroImage={require("../images/gt_hero_cut.png")}
          heroHeadline="Let's Build!"
		  heroText="" //'Passionate about helping businesses achieve their goals.'
		  // styles //
		  heroContainer = 'hero-container'
		  heroImageStyle = 'hero-image-format'
		  heroTextContainer = 'hero-text'
		  alt="Logos for PHP, React, Laravel and others positioned around the globe"
        />

        <Video />

        <Skills />

        <Location />
      </React.Fragment>
    );
  }
}

export default About;
