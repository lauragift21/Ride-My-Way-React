import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// assets
import car from "../assets/img/car.png";
// actions
import getRides from "../actions/rides";
import logOutUser from "../actions/auth";
// components
import Footer from "../components/Footer";

class Rides extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getRides());
  }

  handleLogOut() {
    const { dispatch } = this.props;
    dispatch(logOutUser());
  }

  render() {
    // const { rides } = this.props;
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
                <div className="error" id="alert" />
                <table id="rides">
                  <tbody>
                    <tr className="row">
                      <th>Location</th>
                      <th>Destination</th>
                      <th>Departure time</th>
                      <th>Seats Available</th>
                      <th>Request Ride</th>
                    </tr>
                    <tr className="row">
                      <td>Ade Bamiro</td>
                      <td> Yaba Left </td>
                      <td> Agege </td>
                      <td> 3-07-2018 4PM</td>
                      <td>3</td>
                      <td>
                        <button className="ride-success">Request</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="lds-ring" id="spinner">
                  <div />
                  <div />
                  <div />
                  <div />
                </div>
                {/* The Modal */}
                <div id="myModal" className="modal">
                  {/* Modal content */}
                  <div className="modal-content">
                    <span className="close" id="close">
                      ×
                    </span>
                    <div className="modal-title">
                      <h1 className="text-center" style={{ color: "#333" }}>
                        Ride Information
                      </h1>
                    </div>
                    <div id="errMessage" />
                    <div className="modal-table" id="details" />
                  </div>
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

Rides.propTypes = {
  rides: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  rides: state.rides
});

export default connect(mapStateToProps)(Rides);
