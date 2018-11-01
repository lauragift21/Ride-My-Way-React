import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";
// assets
import car from "../assets/img/car.png";
// components
import Footer from "../components/Footer";

import rideRequest from "../actions/CreateRides";

class CreateRides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      destination: "",
      departure: "",
      seats: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.notify = this.notify.bind(this);
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value.trim() });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { handleRideRequest } = this.props;
    const { location, destination, departure, seats } = this.state;
    handleRideRequest(location, destination, departure, seats);
  };

  notify = () => {
    toast("Ride created");
  };

  render() {
    const { location, departure, destination, seats } = this.state;
    return (
      <>
        <header>
          <div className="container">
            <div id="brand">
              <Link to="/">
                <img src={car} alt="brand" height="40px" />
              </Link>
            </div>
            <nav>
              <Link to="#" className="menu-icon" />
              <ul>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/logout" id="logout">
                    Logout
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <section className="ride">
          <div className="container">
            <h1 className="text-center">Dashboard</h1>
            <div className="card">
              <div className="card-header">
                <nav>
                  <Link to="#" className="menu-icon" />
                  <ul>
                    <li>
                      <Link to="./Myrides">My Rides</Link>
                    </li>
                    <li>
                      <Link to="./rides">Available Rides</Link>
                    </li>
                    <li>
                      <Link to="./offerrides">Create Ride Offer</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="card-content">
                <div className="form">
                  <form className="form" onSubmit={this.handleSubmit}>
                    <div id="serverError" />
                    <div className="form-group">
                      <input
                        type="text"
                        className="text-email"
                        name="location"
                        id="location"
                        value={location}
                        onChange={this.handleChange}
                        placeholder="Location"
                      />
                      <p className="error" id="locationError" />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="text-email"
                        name="destination"
                        id="destination"
                        value={destination}
                        onChange={this.handleChange}
                        placeholder="Destination"
                      />
                      <p className="error" id="destinationError" />
                    </div>
                    <div className="form-group">
                      <input
                        type="date"
                        className="text-email"
                        name="departure"
                        id="departure"
                        value={departure}
                        onChange={this.handleChange}
                        placeholder="Departure"
                      />
                      <p className="error" id="departureError" />
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        className="text-email"
                        name="seats"
                        id="seats"
                        value={seats}
                        onChange={this.handleChange}
                        placeholder="Seat Available"
                      />
                    </div>
                    <div className="form-group button">
                      <button
                        type="submit"
                        onClick={this.notify}
                        className="btn"
                        id="submit"
                      >
                        <ToastContainer closeOnClick={false} />
                        Create Ride
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

CreateRides.propTypes = {
  handleRideRequest: PropTypes.func.isRequired,
  rides: PropTypes.object,
  error: PropTypes.string
};

const mapStateToProps = state => ({
  rides: state.rideRequest.data,
  error: state.rideRequest.error
});

const mapDispatchToProps = dispatch => ({
  handleRideRequest(location, destination, departure, seats) {
    dispatch(rideRequest(location, destination, departure, seats));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateRides);
