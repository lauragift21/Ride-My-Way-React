import React, { Component } from "react";
import { Link } from "react-router-dom";
// assets
import car from "../assets/img/car.png";
// components
import Footer from "../components/Footer";

class CreateRide extends Component {
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
                      <input
                        type="search"
                        name="search"
                        placeholder="search rides.."
                        className="search-ride"
                      />
                    </li>
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
                  <form className="form">
                    <div id="serverError" />
                    <div className="form-group">
                      <input
                        type="text"
                        className="text-email"
                        name="location"
                        id="location"
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
                        placeholder="Seat Available"
                      />
                      <p className="error" id="seatsError" />
                    </div>
                    <div className="form-group button">
                      <button type="submit" className="btn" id="submit">
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

export default CreateRide;
