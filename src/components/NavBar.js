import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <header className="top-nav">
    <div className="container">
      <div id="brand">
        <a href="/">
          <div className="brand" />
        </a>
      </div>
      <nav>
        <Link to="/" className="menu-icon" />
        <ul>
          <li>
            <Link to="/login">Sign In</Link>
          </li>
          <li>
            <Link to="/register">
              <button>Get Started</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default NavBar;
