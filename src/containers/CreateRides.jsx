import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";
// components
import Footer from "../components/Footer";
// actions
import rideRequest from "../actions/CreateRides";
import NavBar from "../components/NavBar";

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
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value.trim() });
  };

  handleSubmit = event => {
    const { handleRideRequest } = this.props;
    const { location, destination, departure, seats } = this.state;
    handleRideRequest(location, destination, departure, seats);
    this.input.value = "";
    event.preventDefault();
  };

  handleLogOut() {
    const { logOutEvent } = this.props;
    logOutEvent();
  }

  notify = () => {
    toast("Ride created");
  };

  render() {
    const { location, departure, destination, seats } = this.state;
    return (
      <>
        <header>
          <NavBar />
        </header>
        <section className="ride">
          <div className="container">
            <h1 className="text-center">Dashboard</h1>
            <div className="card">
              <div className="card-header">
                <ul className="menu-ride">
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
  error: PropTypes.string,
  history: PropTypes.object,
  auth: PropTypes.object
};

const mapStateToProps = state => ({
  auth: state.auth,
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
