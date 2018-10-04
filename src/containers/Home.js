import React from 'react';

const Home = () => (
    <React.Fragment>
      <header className="top-nav">
      <div className="container">
        <div id="brand">
          <a href="./index.html">
            <div className="brand"></div>
          </a>
        </div>
        <nav>
          <a href="#" className="menu-icon"></a>
          <ul>
            <li>
              <a href="./signin.html">Sign In</a>
            </li>
            <li>
              <a href="./signup.html">
                <button>
                  Get Started
                </button>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <section className="hero">
      <div className="container">
        <h1>Share a Ride.</h1>
        <p>
          Ride-My-Way is a carpooling application that provides drivers <br/>
          with the ability to create ride offers and passengers to join
          available ride offers.
        </p>
        <div>
          <a href="./rides.html">
            <button>Find a Ride</button>
          </a>
        </div>
      </div>
    </section>
    <section className="callout">
      <h1 className="title">
        How it works?
      </h1>
      <div className="container" id="feature">
        <div className="box">
          <div className="box-1"></div>
          <h1 className="title"> Create Ride Offer </h1>
          <p>
          A driver creates a ride offer on the application for a particular destination.
          </p>
        </div>
        <div className="box">
          <div className="box-2"></div>
          <h1 className="title"> Request Ride </h1>
          <p>
            A passenger request for a available ride offers to a destination,
            and waits for the driver to either accept or reject the offer.
          </p>
        </div>
        <div className="box">
          <div className="box-3"></div>
          <h1 className="title"> Take Ride </h1>
          <p>
            After successful request has been accepted. You can
            enjoy the ride with a new company and save money.
          </p>
        </div>
      </div>
    </section>
    <footer className="copyright">
      <div className="container">
        <h4> © 2018 RideMyWay inc.</h4>
      </div>
    </footer>
  </React.Fragment>
);

export default Home;
