import React from "react";
import { Link } from "react-router-dom";

const Menu = () => (
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
);

export default Menu;
