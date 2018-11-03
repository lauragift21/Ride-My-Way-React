import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// assets
import car from "../assets/img/car.png";
import img from "../assets/img/guy.gif";

const Profile = props => {
  const { user } = props;
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
                <Link to="./rides">Rides</Link>
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
          <div className="profile">
            <div className="portfolio-card">
              <img src={img} alt="potrait" className="img" />
              <div className="user">
                <h1 className="username"> {user.firstname} </h1>
                <h1 className="lastname">{user.lastname} </h1>
              </div>
              <h3 className="location">{user.location}</h3>
            </div>
            <div className="portfolio">
              <div className="ride-count">Total Rides Taken</div>
              <div className="ride-count">Total Rides Given</div>
              <br />
              <div className="num" id="taken">
                4{" "}
              </div>
              <div className="num" id="given">
                5{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  ride: state.auth.ride
});

export default connect(mapStateToProps)(Profile);
