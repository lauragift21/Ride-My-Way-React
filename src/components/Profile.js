import React from "react";
import { Link } from "react-router-dom";
// assets
import car from "../assets/img/car.png";
import img from "../assets/img/guy.gif";

const Profile = () => (
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
              <Link to="./Myrides">My Rides</Link>
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
              <h1 className="username" />
              <h1 className="lastname" />
            </div>
            <h3 className="location">Lagos, Nigeria</h3>
          </div>
          <div className="portfolio">
            <div className="ride-count">Total Rides Taken</div>
            <div className="ride-count">Total Rides Given</div>
            <br />
            <div className="num" id="taken" />
            <div className="num" id="given" />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Profile;
