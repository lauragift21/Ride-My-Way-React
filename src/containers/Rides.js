import React, { Component } from "react";

class Rides extends Component {
  render() {
    return (
      <>
        <header>
          <div className="container">
            <div id="brand">
              <a href="./index.html">
                <img src="./assets/img/car.png" alt="brand" height="40px" />
              </a>
            </div>
            <nav>
              <a href="#" className="menu-icon" />
              <ul>
                <li>
                  <a href="./profile.html">Profile</a>
                </li>
                <li>
                  <a href="./index.html" id="logout">
                    Logout
                  </a>
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
                  <a href="#" className="menu-icon" />
                  <ul>
                    <li>
                      <input
                        type="search"
                        name="search"
                        id="search="
                        placeholder="search rides.."
                        className="search-ride"
                      />
                    </li>
                    <li>
                      <a href="./Myrides.html">My Rides</a>
                    </li>
                    <li>
                      <a href="./rides.html">Available Rides</a>
                    </li>
                    <li>
                      <a href="./offerrides.html">Create Ride Offer</a>
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
      </>
    );
  }
}

export default Rides;
