import React, { Component } from "react";
import GoogleMap from "./GoogleMap";
import ContactForm from "./Form";
import Footer from "./Footer";

export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="img/contact.jpg"
                alt="aboutus"
                style={{ width: "1024px", height: "720px" }}
              />
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <GoogleMap />

                <ContactForm />
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
