import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AuthMenu from "./AuthMenu";
import Menu from "./Menu";
import car from "../assets/img/car.png";
import logOutUser from "../actions/auth";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut() {
    const { logOutEvent } = this.props;
    logOutEvent();
  }

  render() {
    const { auth } = this.props;
    const Nav = auth.isAuthenticated ? (
      <AuthMenu handleLogOut={this.handleLogOut} />
    ) : (
      <Menu />
    );
    return (
      <header>
        <div className="container">
          <div id="brand">
            <Link to="/">
              <img src={car} alt="brand" height="40px" />
            </Link>
          </div>
          {Nav}
        </div>
      </header>
    );
  }
}

Menu.propTypes = {
  handleLogOut: PropTypes.func,
  logOutEvent: PropTypes.func
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  logOutEvent() {
    return dispatch(logOutUser());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
