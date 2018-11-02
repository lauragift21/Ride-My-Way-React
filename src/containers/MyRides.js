import React, { Component } from "react";
import { Link } from "react-router-dom";
// assets
import car from "../assets/img/car.png";
// components
import Footer from "../components/Footer";

class Rides extends Component {
  render() {
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
                {/* <div className="error" id="alert" /> */}
                <table id="rides">
                  <tbody>
                    <tr className="row">
                      <th>Location</th>
                      <th>Destination</th>
                      <th>Departure Date</th>
                      <th>Seats Available</th>
                      <th>Request Ride</th>
                    </tr>
                    <tr className="row">
                      <td> Yaba Left </td>
                      <td> Agege </td>
                      <td> 3-07-2018 4PM</td>
                      <td>3</td>
                      <td>
                        <button className="button">Ride Details</button>
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
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default Rides;
