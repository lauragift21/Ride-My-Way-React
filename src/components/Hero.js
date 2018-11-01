import React from "react";
import { Link } from "react-router-dom";

const Hero = () => (
  <section className="hero">
    <div className="container">
      <h1>Share a Ride.</h1>
      <p>
        Ride-My-Way is a carpooling application that provides drivers <br />
        with the ability to create ride offers and passengers to join available
        ride offers.
      </p>
      <div>
        <Link to="#">
          <button>Find a Ride</button>
        </Link>
      </div>
    </div>
  </section>
);
export default Hero;
