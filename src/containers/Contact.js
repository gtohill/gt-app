import React, { Component } from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import SubmitInput from "../components/SubmitInput";

const textarea = {
  width: "100%",
};

const space = {
  marginTop: "1em",
};

const contact_h4 = {
  fontWeight: "bold",
  textAlign: "center",
};

const contact_input_width = {
  width: "100%",
};

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      comment: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert("Thank you, " + this.state.name + " for contacting us.");
  }

  render() {
    return (
      <div>
        <Hero
          heroImage={require("../images/contact.jpg")}
          heroHeadline="Contact"
          heroText="" //'Passionate about helping businesses achieve their goals.'          
          // styles //
          heroContainer="hero-container"
          heroImageStyle="hero-image-format"
          heroTextContainer="hero-contact-text"
          alt="Cell Phone being held in a persons hand"          
        />
        <div className="row contact_wrapper">
          <div className="col-md-2" />
          <div className="col-md-3">
            <div className="contact_list">
              <div>
                <b>Reason To Contact:</b>
              </div>
              <div style={space}>
                Looking for a high quality web developer to produce high quality
                websites.
              </div>
              <div style={space}>
                Have an existing site and want to improve it's functionality,
                security, efficiency or ease of use.
              </div>
            </div>
          </div>
          <div className="col-md-1" />
          <div className="col-md-3">
            <h4 style={contact_h4}>Contact Form</h4>
            <form className="contact_form" onSubmit={this.handleSubmit}>
              <input
                style={contact_input_width}
                type="text"
                onChange={this.handleChange}
                name="name"
                placeholder="Name..."
              />
              <br />
              <input
                style={contact_input_width}
                type="text"
                onChange={this.handleChange}
                name="email"
                placeholder="email.."
              />
              <br />
              <input
                style={contact_input_width}
                type="text"
                onChange={this.handleChange}
                name="phone"
                placeholder="phone #"
              />
              <br />
              <textarea
                className="text_area"
                onChange={this.handleChange}
                name="comment"
                placeholder="Question/Comment"
              />
              <br />
              <SubmitInput
                data={{
                  type: "submit",
                  value: "Submit",
                  style: "contact_button",
                }}
              />

              <br />
            </form>
          </div>
          <div className="col-md-1" />
        </div>   
      </div>
    );
  }
}

export default Contact;
