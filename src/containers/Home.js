import React, { Fragment } from "react";

// components
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import CallOut from "../components/CallOut";

const Home = () => (
  <Fragment>
    <NavBar />
    <Hero />
    <CallOut />
    <Footer />
  </Fragment>
);

export default Home;
