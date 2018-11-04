import React from "react";
import { Link } from "react-router-dom";

const AuthMenu = ({ handleLogOut }) => (
  <nav>
    <Link to="#" className="menu-icon" />
    <ul>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/logout" onClick={handleLogOut} id="logout">
          Logout
        </Link>
      </li>
    </ul>
  </nav>
);

export default AuthMenu;
