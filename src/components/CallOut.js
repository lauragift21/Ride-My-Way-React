import React from "react";

const CallOut = () => (
  <section className="callout">
    <h1 className="title">How it works?</h1>
    <div className="container" id="feature">
      <div className="box">
        <div className="box-1" />
        <h1 className="title"> Create Ride Offer </h1>
        <p>
          A driver creates a ride offer on the application for a particular
          destination.
        </p>
      </div>
      <div className="box">
        <div className="box-2" />
        <h1 className="title"> Request Ride </h1>
        <p>
          A passenger request for a available ride offers to a destination, and
          waits for the driver to either accept or reject the offer.
        </p>
      </div>
      <div className="box">
        <div className="box-3" />
        <h1 className="title"> Take Ride </h1>
        <p>
          After successful request has been accepted. You can enjoy the ride
          with a new company and save money.
        </p>
      </div>
    </div>
  </section>
);
export default CallOut;
