import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// assets
import car from "../assets/img/car.png";
// actions
import getRides, { getSingleRide } from "../actions/rides";
import logOutUser from "../actions/auth";
// components
import Footer from "../components/Footer";
import ViewRides from "../components/ViewRides";
import Ride from "../components/Ride";

class Rides extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  componentDidMount() {
    const { fetchRides } = this.props;
    fetchRides();
  }

  handleLogOut() {
    const { logOutEvent } = this.props;
    logOutEvent();
  }

  render() {
    const { rides } = this.props;

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
                  <Link to="/logout" onClick={this.handleLogOut} id="logout">
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
                      <Link to="./myRides">My Rides</Link>
                    </li>
                    <li>
                      <Link to="./rides">Available Rides</Link>
                    </li>
                    <li>
                      <Link to="./offerRides">Create Ride Offer</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="rides-list">
                <table id="rides">
                  <tbody>
                    <tr className="row">
                      <th>Location</th>
                      <th>Destination</th>
                      <th>Departure Date</th>
                      <th>Seats Available</th>
                      <th>Request Ride</th>
                    </tr>
                    {rides.map(ride => {
                      const {
                        id,
                        location,
                        destination,
                        departure,
                        seats
                      } = ride;
                      const details = {
                        location,
                        destination,
                        departure,
                        seats
                      };
                      return <ViewRides key={id} ride={details} />;
                    })}
                  </tbody>
                </table>
                {/* modal */}
                <Ride />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

Rides.propTypes = {
  rides: PropTypes.array.isRequired,
  ride: PropTypes.object.isRequired,
  dispatch: PropTypes.func,
  fetchRides: PropTypes.func.isRequired,
  logOutEvent: PropTypes.func
};

const mapStateToProps = state => ({
  ride: state.ride.data,
  rides: state.rides.data
});

const mapDispatchToProps = dispatch => ({
  fetchRides() {
    return dispatch(getRides());
  },
  dispatchRide(rideId) {
    return dispatch(getSingleRide(rideId));
  },
  logOutEvent() {
    return dispatch(logOutUser());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rides);
