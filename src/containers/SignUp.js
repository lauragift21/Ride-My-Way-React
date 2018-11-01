import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect, Link } from "react-router-dom";
// components
import Footer from "../components/Footer";
// assets
import car from "../assets/img/car.png";
// actions
import signUp, { clearError } from "../actions/SignUp";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      location: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  handleInputChange = event => {
    this.setState({ [event.target.id]: event.target.value.trim() });
  };

  handleSubmit(event) {
    const { handleSignUp } = this.props;
    const { firstname, lastname, email, password, location } = this.state;
    handleSignUp(firstname, lastname, email, password, location);
    event.preventDefault();
  }

  handleError() {
    const { error, clearFormError } = this.props;
    if (!error) return;
    clearFormError();
  }

  render() {
    const { firstname, lastname, email, password, location } = this.state;
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      this.props.history.push("/rides");
    }
    const submitBtn = (
      <button type="submit" className="btn" id="submit">
        Signup
      </button>
    );

    return (
      <>
        <header className="head">
          <div className="container">
            <div className="brand-center">
              <h2>
                <Link to="/">
                  <img src={car} alt="brand" height="60px" />
                </Link>
              </h2>
            </div>
          </div>
        </header>
        <section className="signup">
          <div className="container">
            <div className="tabarea">
              <div id="signin">
                <div className="form-header">
                  Create your account to join Ride My Way
                </div>
                <div className="form">
                  <form
                    onKeyDown={this.handleError}
                    onSubmit={this.handleSubmit}
                    id="form"
                  >
                    <div className="form-group">
                      <input
                        type="text"
                        className="text-email"
                        id="firstname"
                        placeholder="John"
                        value={firstname}
                        onChange={this.handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="text-email"
                        id="lastname"
                        placeholder="Doe"
                        value={lastname}
                        onChange={this.handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="text-email"
                        id="email"
                        placeholder="Email*"
                        value={email}
                        onChange={this.handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="text-email"
                        id="location"
                        placeholder="location*"
                        required
                        onChange={this.handleInputChange}
                        value={location}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="text-email"
                        id="password"
                        placeholder="Password*"
                        onChange={this.handleInputChange}
                        value={password}
                        required
                      />
                    </div>
                    <div className="form-group button">
                      {submitBtn}
                      <br />
                      <br />
                      <b className="btn-text">
                        Already a member? &nbsp;
                        <Link to="/login">Sign in instead</Link>
                      </b>
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

SignUp.propTypes = {
  handleSignUp: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  history: PropTypes.object,
  clearFormError: PropTypes.func.isRequired
};

const mapStateToProps = auth => {
  const { isAuthenticated, loading } = auth;
  return {
    isAuthenticated,
    loading
  };
};

const mapDispatchToProps = dispatch => ({
  handleSignUp(firstname, lastname, email, password, location) {
    dispatch(signUp(firstname, lastname, email, password, location));
  },
  clearFormError() {
    dispatch(clearError());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
