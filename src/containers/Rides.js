import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// actions
import getRides from "../actions/rides";
import logOutUser from "../actions/auth";
// components
import Footer from "../components/Footer";
import ViewRides from "../components/ViewRides";
import NavBar from "../components/NavBar";

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
        <NavBar />
        <section className="ride">
          <div className="container">
            <h1 className="text-center">Dashboard</h1>
            <div className="card">
              <div className="card-header">
                <div className="">
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
                        id,
                        location,
                        destination,
                        departure,
                        seats
                      };
                      return <ViewRides key={id} ride={details} />;
                    })}
                  </tbody>
                </table>
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
  dispatch: PropTypes.func,
  fetchRides: PropTypes.func.isRequired,
  logOutEvent: PropTypes.func
};

const mapStateToProps = state => ({
  rides: state.rides.data
});

const mapDispatchToProps = dispatch => ({
  fetchRides() {
    return dispatch(getRides());
  },
  logOutEvent() {
    return dispatch(logOutUser());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rides);
