import React, { Component } from "react";
import { Link } from "react-router-dom";
// assets
// components
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

class Rides extends Component {
  render() {
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
